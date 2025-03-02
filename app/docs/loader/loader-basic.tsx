"use client"

import { Loader } from "@/components/prompt-kit/loader"

export function LoaderBasic() {
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
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
        {variants.map((variant) => (
          <div
            key={variant}
            className="flex flex-col items-center justify-center gap-2 p-4"
          >
            <Loader variant={variant} />
            <span className="text-muted-foreground text-sm">{variant}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
