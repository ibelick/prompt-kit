"use client"

import { TextShimmerLoader } from "@/components/prompt-kit/loader"
import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/prompt-kit/steps"

export function StepsWithLoader() {
  return (
    <div className="space-y-4">
      <Steps defaultOpen>
        <StepsTrigger>
          <TextShimmerLoader text="Ensuring all files are included" size="md" />
        </StepsTrigger>
        <StepsContent>
          <StepsItem>Planning next actions…</StepsItem>
          <StepsItem>Searching repository files…</StepsItem>
          <StepsItem>Parsing and extracting key sections…</StepsItem>
          <StepsItem>Ready to respond</StepsItem>
        </StepsContent>
      </Steps>
    </div>
  )
}
