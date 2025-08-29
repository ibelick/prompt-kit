import { codeToHtml } from "@/lib/shiki"
import { ClientCodeWrapper } from "./client-code-wrapper"

type DocCodeBlockProps = {
  language: string
  code: string
  filePath?: string
} & React.HTMLAttributes<HTMLDivElement>

export async function DocCodeBlock({
  language,
  code,
  ...props
}: DocCodeBlockProps) {
  const html = await codeToHtml({ code, lang: language })

  return (
    <ClientCodeWrapper code={code}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="not-prose bg-background border-border overflow-auto rounded-md border p-2 text-[13px] dark:[&_pre]:!bg-transparent dark:[&_span]:!text-white"
        {...props}
      />
    </ClientCodeWrapper>
  )
}
