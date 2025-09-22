"use client"

import {
  Steps,
  StepsContent,
  StepsItem,
  StepsTrigger,
} from "@/components/prompt-kit/steps"

export function StepsBasic() {
  return (
    <div className="space-y-4">
      <Steps defaultOpen>
        <StepsTrigger>Agent run: Summarize repository</StepsTrigger>
        <StepsContent>
          <div className="space-y-1">
            <StepsItem>Searching files in repo...</StepsItem>
            <StepsItem>Found 12 files (src, docs)</StepsItem>
            <StepsItem>Parsing markdown and code blocks</StepsItem>
            <StepsItem>Selecting tool: summarize</StepsItem>
            <StepsItem>Running summarize(tool) with top 5 files</StepsItem>
            <StepsItem className="text-foreground">Summary generated</StepsItem>
          </div>
        </StepsContent>
      </Steps>
    </div>
  )
}
