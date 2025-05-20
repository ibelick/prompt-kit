"use client"

import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/prompt-kit/prompt-input"
import { Button } from "@/components/ui/button"
import { Arrow } from "@radix-ui/react-tooltip"
import { ArrowUp, Atom, Globe, Paperclip, Square } from "lucide-react"
import { useState } from "react"

export function PromptInputDeepSeek() {
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
      className="w-full max-w-(--breakpoint-md) rounded-3xl bg-[rgb(243,244,246)] p-2.5 shadow-[0_0_0_0.5px_#dce0e9]"
    >
      <PromptInputTextarea
        placeholder="Message DeepSeek"
        className="text-[16px] placeholder:text-[16px] md:text-[16px]"
        rows={2}
      />
      <PromptInputActions className="flex h-[32px] items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-x-2.5">
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-normal text-white">
                  Use DeepThink (R1) to solve reasoning problems
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              aria-label="Use DeepThink (R1) to solve reasoning problems"
              className="h-7 w-auto gap-1 rounded-[14px] border border-[#0000001f] bg-white p-1 px-1.5 py-0 text-xs font-normal text-[#4c4c4c] hover:bg-[#E0E4ED] focus-visible:outline-black dark:focus-visible:outline-white [&_svg]:size-5"
            >
              <Atom />
              DeepThink (R1)
            </Button>
          </PromptInputAction>
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-normal text-white">
                  Search the web when necessary
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              aria-label="Search the web when necessary"
              className="h-7 w-auto gap-1 rounded-[14px] border border-[#0000001f] bg-white p-1 px-1.5 py-0 text-xs font-normal text-[#4c4c4c] hover:bg-[#E0E4ED] focus-visible:outline-black dark:focus-visible:outline-white [&_svg]:size-5"
            >
              <Globe />
              Search
            </Button>
          </PromptInputAction>
        </div>
        <div className="flex items-center gap-x-2.5">
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-normal text-white">
                  Attach files
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Attach files"
              className="h-8 w-8 rounded-lg p-1 text-xs font-semibold hover:bg-black/10 focus-visible:outline-black dark:focus-visible:outline-white [&_svg]:size-6"
            >
              <Paperclip className="[transform:rotateZ(45deg)_rotateY(180deg)]" />
            </Button>
          </PromptInputAction>
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black duration-0" />
                <span className="text-xs leading-none font-normal text-white">
                  {isLoading ? "Stop generation" : "Send message"}
                </span>
              </div>
            }
          >
            <Button
              variant="default"
              size="icon"
              aria-label={isLoading ? "Stop generation" : "Send message"}
              className="h-8 w-8 rounded-full bg-[#4d6bfe] p-1 text-white hover:bg-[#2563eb] [&_svg]:size-6"
              onClick={handleSubmit}
              disabled={!input}
            >
              {isLoading ? <Square /> : <ArrowUp />}
            </Button>
          </PromptInputAction>
        </div>
      </PromptInputActions>
    </PromptInput>
  )
}
