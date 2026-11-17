import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { experimental_createMCPClient, tool } from "ai"
import { z } from "zod"

const searchInput = z.object({
  objective: z.string().min(1).describe("What to find on the public web"),
  search_queries: z.array(z.string().min(1)).min(1),
})

const searchResponse = z.object({
  results: z.array(
    z.object({
      url: z
        .string()
        .url()
        .refine((url) => ["https:", "http:"].includes(new URL(url).protocol)),
      title: z.string().nullish(),
      excerpts: z.array(z.string()).default([]),
    })
  ),
})

export type WebSearchOutput = {
  sources: { url: string; title: string; excerpts: string[] }[]
}

// MCP returns search data as JSON in a text content block.
export function readSearchResult(result: unknown): WebSearchOutput {
  const envelope = z
    .object({
      isError: z.boolean().optional(),
      content: z.array(
        z.object({ type: z.string(), text: z.string().optional() })
      ),
    })
    .parse(result)

  if (envelope.isError) throw new Error("Web search failed")

  for (const block of envelope.content) {
    if (block.type !== "text" || !block.text) continue
    let value: unknown
    try {
      value = JSON.parse(block.text)
    } catch {
      continue
    }
    const parsed = searchResponse.safeParse(value)
    if (parsed.success) {
      return {
        sources: parsed.data.results.map(({ url, title, excerpts }) => ({
          url,
          title: title || url,
          excerpts,
        })),
      }
    }
  }

  throw new Error("Invalid web search response")
}

export function createWebSearchTool() {
  return tool({
    description:
      "Search public web documentation and return original source URLs and excerpts. Cite the returned URLs when answering. An empty sources list means no results were found.",
    inputSchema: searchInput,
    execute: async (input, { abortSignal }) => {
      const signal = AbortSignal.any([
        AbortSignal.timeout(15_000),
        ...(abortSignal ? [abortSignal] : []),
      ])
      const transport = new StreamableHTTPClientTransport(
        new URL("https://mcp.parallel.ai/mcp?tools=web_search"),
        {
          // Apply the deadline and User-Agent to every MCP HTTP request.
          fetch: (url, init) => {
            const headers = new Headers(init?.headers)
            headers.set("User-Agent", "prompt-kit/0.1.0")
            return fetch(url, {
              ...init,
              headers,
              signal: AbortSignal.any([
                signal,
                ...(init?.signal ? [init.signal] : []),
              ]),
            })
          },
        }
      )
      // Also bound RPC waits if a server accepts a request without answering it.
      const closeOnAbort = () => void transport.close()
      signal.addEventListener("abort", closeOnAbort, { once: true })

      try {
        signal.throwIfAborted()
        const client = await experimental_createMCPClient({
          name: "prompt-kit",
          transport,
        })
        const tools = await client.tools({
          schemas: { web_search: { inputSchema: searchInput } },
        })
        if (!tools.web_search) throw new Error("Search tool unavailable")
        const result = await tools.web_search.execute(input, {
          toolCallId: "web-search",
          messages: [],
          abortSignal: signal,
        })
        return readSearchResult(result)
      } catch {
        throw new Error("Web search is unavailable. Please try again.")
      } finally {
        signal.removeEventListener("abort", closeOnAbort)
        await transport.close()
      }
    },
  })
}
