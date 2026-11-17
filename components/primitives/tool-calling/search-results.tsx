"use client"

import {
  Source,
  SourceContent,
  SourceTrigger,
} from "@/components/prompt-kit/source"
import type { WebSearchOutput } from "@/lib/web-search"

export function SearchResults({
  state,
  output,
}: {
  state: string
  output?: WebSearchOutput
}) {
  if (state === "output-error") {
    return <p role="alert">Web search failed. Please try again.</p>
  }

  if (state !== "output-available") {
    return <p role="status">Searching the web…</p>
  }

  if (!output?.sources.length) {
    return <p role="status">No web sources found. Try a different search.</p>
  }

  return (
    <div aria-label="Web sources" className="flex flex-wrap gap-2">
      {output.sources.map((source, index) => (
        <Source key={`${source.url}-${index}`} href={source.url}>
          <SourceTrigger label={index + 1} />
          <SourceContent
            title={source.title}
            description={
              source.excerpts.join("\n\n") || "No excerpt available."
            }
          />
        </Source>
      ))}
    </div>
  )
}
