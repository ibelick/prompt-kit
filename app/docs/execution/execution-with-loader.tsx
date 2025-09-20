"use client"

import {
  Execution,
  ExecutionContent,
  ExecutionItem,
  ExecutionTrigger,
} from "@/components/prompt-kit/execution"
import { TextShimmerLoader } from "@/components/prompt-kit/loader"

export function ExecutionWithLoader() {
  return (
    <div className="space-y-4">
      <Execution defaultOpen>
        <ExecutionTrigger>
          <TextShimmerLoader text="Ensuring all files are included" size="md" />
        </ExecutionTrigger>
        <ExecutionContent>
          <ExecutionItem>Planning next actions…</ExecutionItem>
          <ExecutionItem>Searching repository files…</ExecutionItem>
          <ExecutionItem>Parsing and extracting key sections…</ExecutionItem>
          <ExecutionItem>Ready to respond</ExecutionItem>
        </ExecutionContent>
      </Execution>
    </div>
  )
}
