"use client"

import {
  PromptInput,
  PromptInputAction,
  PromptInputTextarea,
} from "@/components/prompt-kit/prompt-input"
import { Button } from "@/components/ui/button"
import { Arrow } from "@radix-ui/react-tooltip"
import {
  ArrowRight,
  FileText,
  Globe,
  Image,
  Paperclip,
  Square,
} from "lucide-react"
import { useState } from "react"

export function PromptInputMistralAI() {
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
      className="bg-background relative w-full max-w-(--breakpoint-md) rounded border border-[#e4e4e7] p-1.5 shadow-lg"
    >
      <PromptInputTextarea
        disableAutosize
        placeholder="Ask le Chat or @mention an agent"
        className="text-[16px] placeholder:text-[16px] md:text-[16px]"
      />
      <div className="flex h-10 items-center justify-between gap-2">
        <div className="flex gap-1 px-0.5 text-xs">
          <Button
            variant="ghost"
            aria-label="Attach files"
            className="ring-offset-background hover:bg-muted hover:text-muted-foreground flex h-8 w-auto items-center justify-center gap-1.5 rounded bg-transparent px-2 py-0 text-[12px] font-normal text-[hsl(240_5%_65%)] transition-colors [&_svg]:size-4"
          >
            <FileText />
            Canvas
          </Button>

          <Button
            variant="ghost"
            aria-label="Web search"
            className="ring-offset-background hover:bg-muted hover:text-muted-foreground flex h-8 w-auto items-center justify-center gap-1.5 rounded bg-transparent px-2 py-0 text-[12px] font-normal text-[hsl(240_5%_65%)] transition-colors [&_svg]:size-4"
          >
            <Globe />
            Web search
          </Button>

          <Button
            variant="ghost"
            aria-label="Image generation"
            className="ring-offset-background hover:bg-muted hover:text-muted-foreground hidden h-8 w-auto items-center justify-center gap-1.5 rounded bg-transparent px-2 py-0 text-[12px] font-normal text-[hsl(240_5%_65%)] transition-colors sm:flex [&_svg]:size-4"
          >
            <Image />
            Image generation
          </Button>
        </div>
        <div className="flex items-center gap-x-1">
          <PromptInputAction
            delayDuration={0}
            className="duration-0 data-[state=closed]:duration-0"
            tooltip={
              <div className="bg-black">
                <Arrow className="fill-black" />
                <span className="text-xs leading-none font-normal text-white">
                  Drop PDFs or images here
                </span>
              </div>
            }
          >
            <Button
              variant="ghost"
              size="icon"
              aria-label="Attach files"
              className="h-10 w-10 rounded-lg rounded-bl-xl p-1 text-xs font-semibold text-[hsl(240_4%_46%)] hover:bg-transparent hover:text-[hsl(240_6%_10%)] focus-visible:outline-black dark:focus-visible:outline-white [&_svg]:size-5"
            >
              <Paperclip />
            </Button>
          </PromptInputAction>
          <Button
            variant="ghost"
            size="icon"
            aria-label={isLoading ? "Stop generation" : "Send message"}
            className="h-10 w-10 rounded-none bg-[hsl(26_100%_92%)] p-1 text-[hsl(25_95%_53%)] hover:bg-[hsl(26_100%_92%)] hover:text-[hsl(25_95%_53%)] [&_svg]:size-5 [&_svg]:text-[hsl(25_95%_53%)] [&_svg]:hover:text-[hsl(25_95%_53%)]"
            onClick={handleSubmit}
            disabled={!input}
          >
            {isLoading ? (
              <Square className="fill-[hsl(25_95%_53%)]" />
            ) : (
              <ArrowRight />
            )}
          </Button>
        </div>
      </div>
    </PromptInput>
  )
}
