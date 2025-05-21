"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/prompt-kit/chat-container"
import { ScrollButton } from "@/components/prompt-kit/scroll-button"
import { useRef, useState } from "react"

export function ScrollButtonBasic() {
  const containerRef = useRef<HTMLDivElement>(null)

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
    <div className="relative flex h-[400px] w-full flex-col overflow-hidden">
      <div
        ref={containerRef}
        className="flex h-full w-full flex-col items-center justify-center overflow-y-auto"
      >
        <ChatContainerRoot className="h-full w-full">
          <ChatContainerContent className="w-full">
            {content}
          </ChatContainerContent>
          <div className="absolute right-12 bottom-4">
            <ScrollButton />
          </div>
        </ChatContainerRoot>
      </div>
    </div>
  )
}
