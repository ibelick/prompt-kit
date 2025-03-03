"use client"

import { Loader } from "@/components/prompt-kit/loader"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function LoaderWithText() {
  const [text, setText] = useState("Loading...")

  // Only include variants that support text
  const textVariants = ["text-blink", "text-shimmer", "loading-dots"] as const

  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-center border-b py-2">
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter custom text"
          className="max-w-xs"
        />
      </div>

      <div className="grid flex-1 grid-cols-1 gap-8 p-4 sm:grid-cols-2 md:grid-cols-3">
        {textVariants.map((variant) => (
          <div
            key={variant}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Loader variant={variant} text={text} />
            <span className="text-muted-foreground text-sm">{variant}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
