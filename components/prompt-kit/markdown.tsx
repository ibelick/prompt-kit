import ReactMarkdown, { Components } from "react-markdown"
import remarkGfm from "remark-gfm"
import { CodeBlock, CodeBlockCode } from "./code-block"

export type MarkdownProps = {
  children: string
  className?: string
  components?: Components
} & React.ComponentProps<typeof ReactMarkdown>

const extractLanguage = (className?: string) => {
  if (!className) return "plaintext"
  const match = className.match(/language-(\w+)/)
  return match ? match[1] : "plaintext"
}

const INITIAL_COMPONENTS: Partial<Components> = {
  code: ({ ...props }) => {
    const language = extractLanguage(props.className)
    return (
      <CodeBlock className={props.className}>
        <CodeBlockCode code={props.children as string} language={language} />
      </CodeBlock>
    )
  },
  pre: ({ children }) => <>{children}</>,
}

export function Markdown({
  children,
  className,
  components = INITIAL_COMPONENTS,
  ...props
}: MarkdownProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
      className={className}
    >
      {children}
    </ReactMarkdown>
  )
}
