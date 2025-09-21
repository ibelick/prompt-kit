"use client"

import {
  Source,
  SourceContent,
  SourceTrigger,
} from "@/components/prompt-kit/source"
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/prompt-kit/steps"

export function StepsWithSource() {
  return (
    <div className="space-y-4">
      <Steps defaultOpen>
        <StepsTrigger>Web search: modern LLM UI patterns</StepsTrigger>
        <StepsContent>
          <div className="space-y-2">
            <StepsItem>Searching across curated sources...</StepsItem>
            <StepsItem>Top matches</StepsItem>
            <div className="flex flex-wrap gap-1.5">
              <Source href="https://prompt-kit.com/docs">
                <SourceTrigger label="prompt-kit.com/docs" showFavicon />
                <SourceContent
                  title="Prompt Kit Docs"
                  description="High-quality, accessible, and customizable components for AI interfaces."
                />
              </Source>
              <Source href="https://github.com/ibelick/prompt-kit">
                <SourceTrigger
                  label="github.com/ibelick/prompt-kit"
                  showFavicon
                />
                <SourceContent
                  title="prompt-kit on GitHub"
                  description="Source code and issues for Prompt Kit."
                />
              </Source>
            </div>
            <StepsItem>Extracting key sections and summarizing…</StepsItem>
          </div>
        </StepsContent>
      </Steps>
    </div>
  )
}
