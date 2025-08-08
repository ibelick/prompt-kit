"use client"

import { DemoPromptInput } from "@/components/app/demo-prompt-input"
import {
  CodeBlock,
  CodeBlockCode,
  CodeBlockGroup,
} from "@/components/prompt-kit/code-block"
import { TextMorph } from "@/components/ui/text-morph"
import { Github } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

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

export default function Home() {
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
      <div className="-mx-6 mb-40 sm:mx-0">
        <DemoPromptInput />
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
