"use client"

import {
  Execution,
  ExecutionBar,
  ExecutionContent,
  ExecutionItem,
  ExecutionTrigger,
} from "@/components/prompt-kit/execution"
import { Hammer } from "lucide-react"

export function ExecutionIconSwap() {
  return (
    <div className="space-y-4">
      <Execution defaultOpen>
        <ExecutionTrigger leftIcon={<Hammer className="size-4" />}>
          Tool run: build index
        </ExecutionTrigger>
        <ExecutionContent bar={<ExecutionBar className="mr-2 ml-1.5" />}>
          <div className="space-y-1">
            <ExecutionItem>Initializing build context</ExecutionItem>
            <ExecutionItem>Scanning 25 markdown files</ExecutionItem>
            <ExecutionItem>
              Generating embeddings (chunk size: 1,024)
            </ExecutionItem>
            <ExecutionItem>Index created</ExecutionItem>
          </div>
        </ExecutionContent>
      </Execution>
    </div>
  )
}
