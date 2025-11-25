"use client"

import { ThinkingBar } from "@/components/prompt-kit/thinking-bar"
import { useState } from "react"

export function ThinkingBarInteractive() {
  const [isThinking, setIsThinking] = useState(true)

  return (
    <>
      {isThinking ? (
        <ThinkingBar
          text="Deep reasoning in progress"
          stopLabel="Skip thinking"
          onStop={() => setIsThinking(false)}
          onClick={() => console.log("Expand reasoning details")}
        />
      ) : (
        <span className="text-muted-foreground text-sm">
          Response generated (thinking skipped).
        </span>
      )}
    </>
  )
}
