"use client"

import { Loader } from "@/components/prompt-kit/loader"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function LoaderSizes() {
  const [size, setSize] = useState<"sm" | "md" | "lg">("md")
  const variants = [
    "circular",
    "classic",
    "pulse",
    "pulse-dot",
    "dots",
    "typing",
    "wave",
    "bars",
    "terminal",
    "text-blink",
    "text-shimmer",
    "loading-dots",
  ] as const

  return (
    <div className="flex w-full flex-col space-y-8 p-4">
      <div className="flex items-center justify-center gap-2 border-b pb-4">
        <Button
          size="sm"
          variant={size === "sm" ? "default" : "outline"}
          onClick={() => setSize("sm")}
        >
          Small
        </Button>
        <Button
          size="sm"
          variant={size === "md" ? "default" : "outline"}
          onClick={() => setSize("md")}
        >
          Medium
        </Button>
        <Button
          size="sm"
          variant={size === "lg" ? "default" : "outline"}
          onClick={() => setSize("lg")}
        >
          Large
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {variants.map((variant) => (
          <div
            key={variant}
            className="flex flex-col items-center justify-center gap-2 rounded-lg border p-4"
          >
            <Loader variant={variant} size={size} />
            <span className="text-muted-foreground text-sm">{variant}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
