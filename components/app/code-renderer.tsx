"use client"

import { codeToHtml } from "@/lib/shiki"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

type CodeRendererProps = {
  code: string
  lang: string
}

export function CodeRenderer({ code, lang }: CodeRendererProps) {
  const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null)
  const { theme } = useTheme()

  const themeName: Record<string, string> = {
    light: "github-light",
    dark: "github-dark",
    system: "github-dark",
  }

  useEffect(() => {
    async function highlight() {
      if (!code) {
        setHighlightedHtml("<pre><code></code></pre>")
        return
      }

      const html = await codeToHtml({
        code,
        lang,
        theme: themeName[theme as keyof typeof themeName],
      })
      setHighlightedHtml(html)
    }
    highlight()
  }, [code, lang, theme])

  // SSR fallback: render plain code if not hydrated yet
  return (
    <div className="not-prose border-border [&_pre]:!bg-background max-h-[650px] overflow-auto overflow-x-auto rounded-md border p-4 text-[13px]">
      {highlightedHtml ? (
        <div dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      ) : (
        <pre>
          <code>{code}</code>
        </pre>
      )}
    </div>
  )
}
