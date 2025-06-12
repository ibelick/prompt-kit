"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"
import { Button } from "@/components/ui/button"
import { useState } from "react"

// Simulated streaming function
const simulateReasoningStream = async (
  setText: (text: string) => void,
  setIsStreaming: (streaming: boolean) => void
) => {
  const reasoning = `I calculated the best color balance for the image:

1. First, I analyzed the color of the car - a deep blue metallic finish
2. Then, I examined the color of the sky - overcast with neutral tones  
3. Next, I considered the color of the grass - vibrant green in the foreground
4. I calculated the optimal white balance to enhance all elements
5. Applied selective color adjustments to maintain natural appearance
6. Final result: improved contrast and color harmony`

  setIsStreaming(true)
  setText("")

  // Simulate character-by-character streaming
  for (let i = 0; i <= reasoning.length; i++) {
    setText(reasoning.slice(0, i))
    await new Promise((resolve) => setTimeout(resolve, 30))
  }

  setIsStreaming(false)
}

export function ReasoningBasic() {
  const [reasoningText, setReasoningText] = useState("")
  const [isStreaming, setIsStreaming] = useState(false)

  const handleGenerateReasoning = () => {
    simulateReasoningStream(setReasoningText, setIsStreaming)
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={handleGenerateReasoning}
        disabled={isStreaming}
      >
        {isStreaming ? "Generating..." : "Generate Reasoning"}
      </Button>

      <Reasoning isStreaming={isStreaming}>
        <ReasoningTrigger>Show reasoning</ReasoningTrigger>
        <ReasoningContent className="ml-2 border-l-2 border-l-slate-200 px-2 pb-1 dark:border-l-slate-700">
          {reasoningText}
        </ReasoningContent>
      </Reasoning>
    </div>
  )
}
