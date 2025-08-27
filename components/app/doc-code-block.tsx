"use client"

import { readFileContent } from "@/lib/actions"
import { codeToHtml } from "@/lib/shiki"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ClientCodeWrapper } from "./client-code-wrapper"

type DocCodeBlockProps = {
  language: string
  code: string
  filePath?: string
} & React.HTMLAttributes<HTMLDivElement>

const themeName: Record<string, string> = {
  light: "github-light",
  dark: "github-dark",
  system: "github-dark",
}

export function DocCodeBlock({
  language,
  code,
  filePath,
  ...props
}: DocCodeBlockProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null)
  const [fileContent, setFileContent] = useState<string>(code || "")
  const { theme } = useTheme()

  useEffect(() => {
    async function highlight() {
      const content = filePath ? await readFileContent(filePath) : code || ""

      setFileContent(content)

      if (!content) {
        setHighlightedHtml("<pre><code></code></pre>")
        return
      }

      const html = await codeToHtml({
        code: content,
        lang: language,
        theme: themeName[theme as keyof typeof themeName],
      })
      setHighlightedHtml(html)
    }
    highlight()
  }, [code, language, theme, filePath])

  // SSR fallback: render plain code if not hydrated yet
  return (
    <ClientCodeWrapper code={fileContent}>
      {highlightedHtml ? (
        <div
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
          className="not-prose bg-background border-border [&_pre]:!bg-background overflow-auto rounded-md border p-2 text-[13px]"
          {...props}
        />
      ) : (
        <div
          className="not-prose bg-background border-border overflow-auto rounded-md border p-2 text-[13px]"
          {...props}
        >
          <pre>
            <code>{fileContent}</code>
          </pre>
        </div>
      )}
    </ClientCodeWrapper>
  )
}
