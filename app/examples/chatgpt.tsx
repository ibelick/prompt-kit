"use client"

import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/prompt-kit/prompt-input"
import { Button } from "@/components/ui/button"
import { Arrow } from "@radix-ui/react-tooltip"
import { ArrowUp, Ellipsis, Globe, Plus, Square } from "lucide-react"
import { useState } from "react"

export function PromptInputChatGPT() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  const handleValueChange = (value: string) => {
    setInput(value)
  }

  return (
    <PromptInput
      value={input}
      onValueChange={handleValueChange}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      className="border-input bg-background w-full max-w-(--breakpoint-md) border px-3 py-1 shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),0_2px_5px_0px_rgba(0,0,0,0.06)]"
    >
      <PromptInputTextarea
        placeholder="Message ChatGPT"
        className="text-[18px] placeholder:text-[18px] md:text-[18px]"
      />
      <PromptInputActions className="mt-0 mb-2 flex h-auto items-center justify-between gap-2 sm:mt-5">
        <div className="flex items-center gap-x-1.5">
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-semibold text-white">
                  Attach files
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Attach files"
              className="border-input bg-background text-secondary-foreground hover:bg-secondary h-9 w-9 rounded-full border p-1 text-xs font-semibold focus-visible:outline-black [&_svg]:size-[18px]"
            >
              <Plus />
            </Button>
          </PromptInputAction>
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-semibold text-white">
                  Search the web
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search the web"
              className="border-input bg-background text-secondary-foreground hover:bg-secondary h-9 w-auto rounded-full border p-2 text-xs font-semibold focus-visible:outline-black [&_svg]:size-[18px]"
            >
              <Globe />
              Search
            </Button>
          </PromptInputAction>
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-semibold text-white">
                  View tools
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="View tools"
              className="border-input bg-background text-secondary-foreground hover:bg-secondary h-9 w-9 rounded-full border p-1 text-xs font-semibold focus-visible:outline-black [&_svg]:size-[18px]"
            >
              <Ellipsis />
            </Button>
          </PromptInputAction>
        </div>
        <PromptInputAction
          delayDuration={0}
          className="duration-0 data-[state=closed]:duration-0"
          tooltip={
            <div className="bg-black">
              <Arrow className="fill-black duration-0" />
              <span className="text-xs leading-none font-semibold text-white">
                {isLoading ? "Stop generation" : "Send message"}
              </span>
            </div>
          }
        >
          <Button
            variant="default"
            size="icon"
            aria-label={isLoading ? "Stop generation" : "Send message"}
            className="h-9 w-9 rounded-full p-1 [&_svg]:size-6"
            onClick={handleSubmit}
          >
            {isLoading ? <Square /> : <ArrowUp />}
          </Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  )
}
