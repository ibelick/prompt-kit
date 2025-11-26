"use client"

import { ThinkingBar } from "@/components/prompt-kit/thinking-bar"

export function ThinkingBarInteractive() {
  return (
    <ThinkingBar
      text="Deep reasoning in progress"
      stopLabel="Skip thinking"
      onStop={() => console.log("Skip thinking")}
      onClick={() => console.log("Expand reasoning details")}
    />
  )
}
