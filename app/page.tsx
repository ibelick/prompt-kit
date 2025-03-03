"use client"

import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/prompt-kit/code-block"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { TextMorph } from "@/components/ui/text-morph"
import { cn } from "@/lib/utils"
import { Github } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
import { PromptInputChatGPT } from "./examples/chatgpt"
import { PromptInputDeepSeek } from "./examples/deepseek"
import { PromptInputMistralAI } from "./examples/mistralai"

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

const CODE_SAMPLE = `import {
  PromptInput,
  PromptInputTextarea,
  PromptInputAction,
} from '@/components/ui/prompt-input';

function PromptInputBasic() {
  return (
    <PromptInput>
      <PromptInputTextarea placeholder='Ask prompt-kit' />
      <PromptInputActions>
        <PromptInputAction tooltip='Upload File'>
          <Button>Upload File</Button>
        </PromptInputAction>
        <PromptInputAction tooltip='Send'>
          <Button>Send</Button>
        </PromptInputAction>
      </PromptInputActions>
    </PromptInput>
  );
}`

const MOTION_TRANSITION = {
  duration: 0.25,
  type: "spring",
  bounce: 0,
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [hasCopyLabel, setHasCopyLabel] = useState(false)

  const onCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLE)
    setHasCopyLabel(true)

    setTimeout(() => {
      setHasCopyLabel(false)
    }, 1000)
  }

  return (
    <>
      <div className="mb-12 flex flex-col items-start">
        <div className="mb-5 flex flex-col gap-1 text-pretty">
          <p className="text-3xl font-[450] tracking-tight text-black">
            Core building blocks for AI apps.
          </p>
          <p className="text-3xl font-[450] tracking-tight text-zinc-500">
            High-quality, accessible, and customizable components for AI
            interfaces.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            href="/docs/introduction"
            className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-base text-white transition-colors hover:bg-zinc-800"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/ibelick/prompt-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-200 bg-white px-4 text-base text-black transition-colors hover:bg-zinc-50"
          >
            <Github className="mr-2 size-4" /> Star on GitHub
          </Link>
        </div>
      </div>
      <div className="-mx-6 mb-40 flex flex-col gap-10 sm:mx-0">
        <div className="flex min-h-[350px] w-full items-end rounded border border-zinc-200 p-4 sm:p-8">
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
              "rounded-lg bg-zinc-100 transition-colors group-hover:bg-zinc-200/60 group-active:bg-zinc-200"
            )}
            transition={MOTION_TRANSITION}
            onValueChange={(newActiveId) => {
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
                  "rounded-md px-2 py-1 text-sm text-zinc-500 transition-all hover:text-black active:scale-[0.98]",
                  "group",
                  activeTab.label === tab.label && "text-black"
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
      <CodeBlock className="relative mb-20 rounded">
        <CodeBlockGroup className="absolute top-4 right-4">
          <button
            onClick={onCopy}
            className="rounded-[2px] border px-2 py-1 text-xs hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <TextMorph>{hasCopyLabel ? "Copied" : "Copy"}</TextMorph>
          </button>
        </CodeBlockGroup>
        <CodeBlockCode code={CODE_SAMPLE} language="tsx" />
      </CodeBlock>
    </>
  )
}
