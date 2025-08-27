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
          <p className="text-foreground text-3xl font-[450] tracking-tight">
            Core building blocks for AI apps.
          </p>
          <p className="text-muted-foreground text-3xl font-[450] tracking-tight">
            High-quality, accessible, and customizable components for AI
            interfaces.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            href="/docs/introduction"
            className="bg-foreground text-background hover:bg-foreground/90 inline-flex h-10 items-center justify-center rounded-full px-4 text-base transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/ibelick/prompt-kit"
            target="_blank"
            rel="noopener noreferrer"
            className="border-border bg-background text-foreground hover:bg-background/90 inline-flex h-10 items-center justify-center rounded-full border px-4 text-base transition-colors"
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
        <CodeBlockCode
          code={CODE_SAMPLE}
          language="tsx"
          className="dark:[&_pre]:!bg-background"
        />
      </CodeBlock>
    </>
  )
}
