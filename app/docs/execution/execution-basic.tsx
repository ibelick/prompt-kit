"use client"

import {
  Execution,
  ExecutionContent,
  ExecutionItem,
  ExecutionTrigger,
} from "@/components/prompt-kit/execution"

export function ExecutionBasic() {
  return (
    <div className="space-y-4">
      <Execution defaultOpen>
        <ExecutionTrigger>Agent run: Summarize repository</ExecutionTrigger>
        <ExecutionContent>
          <div className="space-y-1">
            <ExecutionItem>Searching files in repo...</ExecutionItem>
            <ExecutionItem>Found 12 files (src, docs)</ExecutionItem>
            <ExecutionItem>Parsing markdown and code blocks</ExecutionItem>
            <ExecutionItem>Selecting tool: summarize</ExecutionItem>
            <ExecutionItem>
              Running summarize(tool) with top 5 files
            </ExecutionItem>
            <ExecutionItem className="text-foreground">
              Summary generated
            </ExecutionItem>
          </div>
        </ExecutionContent>
      </Execution>
    </div>
  )
}
