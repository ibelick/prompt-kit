import { extractCodeFromFilePath } from "@/lib/code"
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
  filePath,
  ...props
}: DocCodeBlockProps) {
  const fileContent = filePath ? extractCodeFromFilePath(filePath) : code || ""
  const html = await codeToHtml({ code: fileContent, lang: language })

  return (
    <ClientCodeWrapper code={fileContent}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="not-prose bg-background border-border overflow-auto rounded-md border p-2 text-[13px]"
        {...props}
      />
    </ClientCodeWrapper>
  )
}
