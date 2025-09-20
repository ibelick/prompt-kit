"use client"

import { Execution, ExecutionContent, ExecutionTrigger } from "@/components/prompt-kit/execution"
import { Source, SourceContent, SourceTrigger } from "@/components/prompt-kit/source"

export function ExecutionWithSource() {
  return (
    <div className="space-y-4">
      <Execution defaultOpen>
        <ExecutionTrigger>Cited sources</ExecutionTrigger>
        <ExecutionContent>
          <div className="space-y-2">
          <Source href="https://prompt-kit.com/docs">
            <SourceTrigger label="prompt-kit.com/docs" showFavicon />
            <SourceContent
              title="Prompt Kit Docs"
              description="High-quality, accessible, and customizable components for AI interfaces."
            />
          </Source>
          <Source href="https://github.com/ibelick/prompt-kit">
            <SourceTrigger label="github.com/ibelick/prompt-kit" showFavicon />
            <SourceContent
              title="prompt-kit on GitHub"
              description="Source code and issues for Prompt Kit."
            />
          </Source>
          </div>
        </ExecutionContent>
      </Execution>
    </div>
  )
}
