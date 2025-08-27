"use client"

import { PromptInputChatGPT } from "@/app/examples/chatgpt"
import { PromptInputDeepSeek } from "@/app/examples/deepseek"
import { PromptInputMistralAI } from "@/app/examples/mistralai"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "motion/react"
import React, { useState } from "react"

const TABS = [
  {
    label: "ChatGPT",
    component: PromptInputChatGPT,
    img: "/openai_logo.png",
  },
  {
    label: "Mistral AI",
    component: PromptInputMistralAI,
    img: "/mistral_logo.png",
  },
  {
    label: "DeepSeek",
    component: PromptInputDeepSeek,
    img: "/deepseek_logo.png",
  },
]

const MOTION_TRANSITION = {
  duration: 0.25,
  type: "spring",
  bounce: 0,
} as const

export function DemoPromptInput() {
  const [activeTab, setActiveTab] = useState(TABS[0])

  return (
    <div className="mx-auto flex w-full flex-col gap-10">
      <div className="border-border flex min-h-[350px] w-full items-end rounded border p-4 sm:p-8">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={activeTab.label}
            className="w-full"
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            transition={MOTION_TRANSITION}
          >
            {activeTab.component()}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex flex-row justify-center gap-8">
        <AnimatedBackground
          defaultValue={activeTab.label}
          className={cn(
            "bg-muted group-hover:bg-muted/60 group-active:bg-muted rounded-lg transition-colors"
          )}
          transition={MOTION_TRANSITION}
          onValueChange={(newActiveId: string | null) => {
            const newActiveTab = TABS.find((tab) => tab.label === newActiveId)

            if (newActiveTab) {
              setActiveTab(newActiveTab)
            }
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              className={cn(
                "text-muted-foreground hover:text-foreground rounded-md px-2 py-1 text-sm transition-all active:scale-[0.98]",
                "group",
                activeTab.label === tab.label && "text-foreground"
              )}
              type="button"
            >
              <span className="flex flex-row items-center gap-1">
                <img
                  src={tab.img}
                  alt={`${tab.label} logo`}
                  className="h-auto w-4"
                />
                {tab.label}
              </span>
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  )
}
