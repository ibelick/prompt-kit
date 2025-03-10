"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ReasoningControlled() {
  const [isOpen, setIsOpen] = useState(false)

  const reasoningText = `Here's how I calculated the result:

1. Take the base number 2
2. Calculate 2^8 = 2×2×2×2×2×2×2×2
3. Result is 256`

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <p className="text-base">The result of the calculation is 256.</p>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleOpenChange(!isOpen)}
        >
          {isOpen ? "Hide reasoning" : "Show reasoning"}
        </Button>
      </div>

      <div className="rounded-md border p-4">
        <Reasoning open={isOpen} onOpenChange={handleOpenChange}>
          <div className="flex items-center justify-between">
            <ReasoningTrigger>Toggle reasoning</ReasoningTrigger>
            <p className="text-muted-foreground text-xs">
              State: {isOpen ? "Open" : "Closed"}
            </p>
          </div>
          <ReasoningContent className="mt-3">
            <ReasoningResponse text={reasoningText} />
          </ReasoningContent>
        </Reasoning>
      </div>
    </div>
  )
}
