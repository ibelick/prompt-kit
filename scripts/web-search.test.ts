import assert from "node:assert/strict"
import { afterEach, test } from "node:test"
import { POST as demoPost } from "../app/api/demo/tool-calling/route"
import { createWebSearchTool, readSearchResult } from "../lib/web-search"

const originalFetch = globalThis.fetch
afterEach(() => {
  globalThis.fetch = originalFetch
})

const source = {
  url: "https://prompt-kit.com/docs/source?example=search#api",
  title: "Source - prompt-kit",
  excerpts: ["Displays website sources used by AI-generated content."],
}
const searchInput = {
  objective: "Find official prompt-kit Source documentation",
  search_queries: ["prompt-kit Source documentation"],
}
const options = { toolCallId: "test-search", messages: [] }
const content = (results: unknown[]) => ({
  content: [{ type: "text", text: JSON.stringify({ results }) }],
})

function mockMcp(result: unknown = content([source]), status = 200) {
  const requests: {
    method: string
    headers: Headers
    body?: { method: string; params?: { arguments?: unknown } }
  }[] = []
  globalThis.fetch = async (url, init) => {
    assert.equal(new URL(String(url)).origin, "https://mcp.parallel.ai")
    assert.equal(new URL(String(url)).searchParams.get("tools"), "web_search")
    const body = init?.body ? JSON.parse(String(init.body)) : undefined
    const headers = new Headers(init?.headers)
    requests.push({ method: init?.method || "GET", headers, body })
    assert.equal(headers.get("user-agent"), "prompt-kit/0.1.0")
    assert.equal(headers.has("authorization"), false)
    assert.equal(headers.has("x-api-key"), false)
    assert.ok(init?.signal)
    if (!body) return new Response(null, { status: 405 })
    if (body.method === "notifications/initialized") {
      return new Response(null, { status: 202 })
    }
    let response: unknown
    if (body.method === "initialize") {
      response = {
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "test-search", version: "1.0.0" },
      }
    } else if (body.method === "tools/list") {
      response = {
        tools: [
          {
            name: "web_search",
            description: "Search public documentation",
            inputSchema: { type: "object", properties: {} },
          },
        ],
      }
    } else {
      assert.equal(body.method, "tools/call")
      assert.deepEqual(body.params.arguments, searchInput)
      if (status !== 200) return new Response("Unavailable", { status })
      response = result
    }
    return Response.json({ jsonrpc: "2.0", id: body.id, result: response })
  }
  return requests
}

test("search preserves the returned URL, title and excerpts", async () => {
  const requests = mockMcp()
  const output = await createWebSearchTool().execute!(searchInput, options)
  assert.deepEqual(output, { sources: [source] })
  assert.ok(requests.some(({ body }) => body?.method === "tools/call"))
})

test("empty search results stay empty", async () => {
  mockMcp(content([]))
  assert.deepEqual(await createWebSearchTool().execute!(searchInput, options), {
    sources: [],
  })
})

test("tool errors, malformed output, unsafe URLs and HTTP errors fail clearly", async () => {
  for (const result of [
    { ...content([]), isError: true },
    { content: [{ type: "text", text: "not JSON" }] },
    content([{ ...source, url: "javascript:alert(1)" }]),
  ]) {
    mockMcp(result)
    await assert.rejects(
      async () => createWebSearchTool().execute!(searchInput, options),
      /Web search is unavailable/
    )
  }
  mockMcp(undefined, 429)
  await assert.rejects(
    async () => createWebSearchTool().execute!(searchInput, options),
    /Web search is unavailable/
  )
})

test("an aborted search sends no HTTP request", async () => {
  const requests = mockMcp()
  await assert.rejects(async () =>
    createWebSearchTool().execute!(searchInput, {
      ...options,
      abortSignal: AbortSignal.abort(),
    })
  )
  assert.equal(requests.length, 0)
})

test("cancellation interrupts an in-flight MCP connection", async () => {
  const controller = new AbortController()
  globalThis.fetch = async (_url, init) => {
    const signal = init?.signal
    assert.ok(signal)
    return new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => reject(signal.reason), {
        once: true,
      })
      controller.abort()
    })
  }
  await assert.rejects(
    async () =>
      createWebSearchTool().execute!(searchInput, {
        ...options,
        abortSignal: controller.signal,
      }),
    /Web search is unavailable/
  )
})

test("cancellation closes an RPC accepted without a response", async () => {
  const controller = new AbortController()
  globalThis.fetch = async () => {
    queueMicrotask(() => controller.abort())
    return new Response(null, { status: 202 })
  }
  await assert.rejects(
    async () =>
      createWebSearchTool().execute!(searchInput, {
        ...options,
        abortSignal: controller.signal,
      }),
    /Web search is unavailable/
  )
})

test("a missing title falls back to the original URL", () => {
  assert.deepEqual(readSearchResult(content([{ url: source.url }])), {
    sources: [{ url: source.url, title: source.url, excerpts: [] }],
  })
})

// Exercise the real route, AI SDK stream and MCP adapter with unrelated services
// replaced by deterministic responses. No credentials or network are needed.
test("the demo streams search sources only after explicit opt-in", async () => {
  for (const webSearch of [undefined, false, "true", true]) {
    const enabled = webSearch === true
    const requests = mockMcp()
    const mcpFetch = globalThis.fetch
    let modelCalls = 0
    globalThis.fetch = async (url, init) => {
      if (new URL(String(url)).origin === "https://mcp.parallel.ai") {
        return mcpFetch(url, init)
      }
      assert.equal(String(url), "https://api.openai.com/v1/responses")
      const body = JSON.parse(String(init?.body))
      assert.equal(
        body.tools.some((item: { name: string }) => item.name === "web_search"),
        enabled
      )
      const callTool = enabled && modelCalls++ === 0
      if (enabled && !callTool) {
        assert.ok(JSON.stringify(body.input).includes(source.url))
      }
      const item = callTool
        ? {
            type: "function_call",
            id: "fc-test",
            call_id: "call-test",
            name: "web_search",
            arguments: JSON.stringify(searchInput),
            status: "completed",
          }
        : { type: "message", id: "message-test" }
      const events = [
        { type: "response.output_item.added", output_index: 0, item },
        ...(!callTool
          ? [
              {
                type: "response.output_text.delta",
                item_id: "message-test",
                delta: enabled
                  ? `Read the [Source documentation](${source.url}).`
                  : "The date tool is available.",
              },
            ]
          : []),
        { type: "response.output_item.done", output_index: 0, item },
        {
          type: "response.completed",
          response: { usage: { input_tokens: 10, output_tokens: 10 } },
        },
      ]
      return new Response(
        events.map((event) => `data: ${JSON.stringify(event)}\n\n`).join(""),
        { headers: { "Content-Type": "text/event-stream" } }
      )
    }
    const response = await demoPost(
      new Request("http://localhost/api/demo/tool-calling", {
        method: "POST",
        body: JSON.stringify({
          messages: [
            {
              id: "test",
              role: "user",
              parts: [{ type: "text", text: "Find public docs" }],
            },
          ],
          apiKey: "test-placeholder",
          webSearch,
        }),
      })
    )
    const stream = await response.text()
    assert.equal(response.status, 200)
    assert.equal(stream.includes('"type":"error"'), false, stream)
    assert.equal(stream.includes(source.url), enabled, stream)
    assert.equal(
      requests.some(({ body }) => body?.method === "tools/call"),
      enabled
    )
  }
})

test("the demo still requires its chat API key before any outbound request", async () => {
  const requests = mockMcp()
  const response = await demoPost(
    new Request("http://localhost/api/demo/tool-calling", {
      method: "POST",
      body: JSON.stringify({ messages: [], webSearch: true }),
    })
  )
  assert.equal(response.status, 400)
  assert.equal(await response.text(), "OpenAI API key is required")
  assert.equal(requests.length, 0)
})
