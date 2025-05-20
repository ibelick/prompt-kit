"use client"

import { ScrollButton } from "@/components/prompt-kit/scroll-button"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"

export function ScrollButtonCustom() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const [variant, setVariant] = useState<"default" | "outline" | "secondary">(
    "secondary"
  )
  const [threshold, setThreshold] = useState(50)

  // Sample content to enable scrolling
  const [content] = useState(
    Array(20)
      .fill(0)
      .map((_, i) => (
        <div key={i} className="border-b p-3">
          <h3 className="font-medium">Item {i + 1}</h3>
          <p className="text-muted-foreground">
            This is a sample item to demonstrate scrolling behavior.
          </p>
        </div>
      ))
  )

  return (
    <div className="flex h-[500px] w-full flex-col overflow-hidden">
      <div className="flex w-full items-center justify-between gap-2 overflow-x-scroll border-b p-3">
        <div />
        <div className="flex gap-2">
          <Button
            size="sm"
            variant={variant === "default" ? "default" : "outline"}
            onClick={() => setVariant("default")}
          >
            Default
          </Button>
          <Button
            size="sm"
            variant={variant === "outline" ? "default" : "outline"}
            onClick={() => setVariant("outline")}
          >
            Outline
          </Button>
          <Button
            size="sm"
            variant={variant === "secondary" ? "default" : "outline"}
            onClick={() => setVariant("secondary")}
          >
            Secondary
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">Threshold:</span>
          <input
            type="range"
            min="10"
            max="500"
            step="1"
            value={threshold}
            onChange={(e) => setThreshold(Number(e.target.value))}
            className="w-24"
          />
          <span className="w-8 text-sm">{threshold}px</span>
        </div>
      </div>

      <div className="relative flex-1 overflow-y-auto">
        <div
          ref={containerRef}
          className="flex h-full w-full flex-col items-center justify-center overflow-y-auto"
        >
          {content}
          <div ref={bottomRef} />
        </div>

        <div className="absolute right-4 bottom-4">
          <ScrollButton
            containerRef={containerRef}
            variant={variant}
            threshold={threshold}
          />
        </div>
      </div>
    </div>
  )
}
