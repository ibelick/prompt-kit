"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

// Simulated AI reasoning stream
const simulateStream = async function* () {
  const reasoning = `I need to find the square root of 144.

Step 1: Break down the problem. 
- I need to find a number that, when multiplied by itself, equals 144.

Step 2: Try some values.
- 10² = 100 (too small)
- 13² = 169 (too large)
- 12² = 144 (perfect!)

Step 3: Verify the answer.
- 12 × 12 = 144 ✓

Therefore, the square root of 144 is 12.`

  // Yield character by character for smoother animation
  for (let i = 0; i < reasoning.length; i++) {
    yield reasoning[i]
    await new Promise((resolve) => setTimeout(resolve, 10))
  }
}

export function ReasoningWithAIResponse() {
  const [streamText, setStreamText] = useState<AsyncIterable<string> | null>(
    null
  )

  useEffect(() => {
    const stream = simulateStream()
    setStreamText(stream)
  }, [])

  const handleRegenerate = () => {
    const stream = simulateStream()
    setStreamText(stream)
  }

  return (
    <div className="flex w-full flex-col items-start gap-4">
      <p className="text-base">The square root of 144 is 12.</p>

      <Button variant="outline" size="sm" onClick={handleRegenerate}>
        Generate Reasoning
      </Button>
      <Reasoning>
        <ReasoningTrigger>Show AI reasoning</ReasoningTrigger>
        <ReasoningContent>
          {streamText ? (
            <ReasoningResponse text={streamText} speed={40} />
          ) : null}
        </ReasoningContent>
      </Reasoning>
    </div>
  )
}
