"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"

export function ReasoningBasic() {
  const reasoningText = `I arrived at this answer through the following steps:

1. First, I considered that the universe is vast and complex
2. Then, I calculated the probability of various outcomes
3. Finally, I determined that 42 is indeed the answer to life, the universe, and everything`

  return (
    <Reasoning>
      <div className="flex w-full flex-col gap-3">
        <p className="text-base">
          I believe the answer is 42, based on my calculations.
        </p>
        <ReasoningTrigger>Show reasoning</ReasoningTrigger>
        <ReasoningContent className="ml-2 border-l-2 border-l-slate-200 px-2 pb-1 dark:border-l-slate-700">
          <ReasoningResponse text={reasoningText} />
        </ReasoningContent>
      </div>
    </Reasoning>
  )
}
