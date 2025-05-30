"use client"

import { cn } from "@/lib/utils"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

type ClientCodeWrapperProps = {
  code: string
  children: React.ReactNode
}

export function ClientCodeWrapper({ code, children }: ClientCodeWrapperProps) {
  const [hasCheckIcon, setHasCheckIcon] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(code)
    setHasCheckIcon(true)

    setTimeout(() => {
      setHasCheckIcon(false)
    }, 1000)
  }

  return (
    <div className="group relative">
      <button
        className="bg-background absolute top-3 right-3 p-2 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onCopy}
        type="button"
        aria-label="Copy code"
      >
        <div
          className={cn(
            "absolute inset-0 transform transition-all duration-300",
            hasCheckIcon ? "scale-0 opacity-0" : "scale-100 opacity-100"
          )}
        >
          <Copy className="h-4 w-4 text-zinc-400" />
        </div>
        <div
          className={cn(
            "absolute inset-0 transform transition-all duration-300",
            hasCheckIcon ? "scale-100 opacity-100" : "scale-0 opacity-0"
          )}
        >
          <Check className="h-4 w-4 text-zinc-400" />
        </div>
      </button>
      {children}
    </div>
  )
}
