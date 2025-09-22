"use client"

import {
  Steps,
  StepsBar,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/prompt-kit/steps"
import { Hammer } from "lucide-react"

export function StepsIconSwap() {
  return (
    <div className="space-y-4">
      <Steps defaultOpen>
        <StepsTrigger leftIcon={<Hammer className="size-4" />}>
          Tool run: build index
        </StepsTrigger>
        <StepsContent bar={<StepsBar className="mr-2 ml-1.5" />}>
          <div className="space-y-1">
            <StepsItem>Initializing build context</StepsItem>
            <StepsItem>Scanning 25 markdown files</StepsItem>
            <StepsItem>Generating embeddings (chunk size: 1,024)</StepsItem>
            <StepsItem>Index created</StepsItem>
          </div>
        </StepsContent>
      </Steps>
    </div>
  )
}
