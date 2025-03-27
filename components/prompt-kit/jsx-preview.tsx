import * as React from "react"
import JsxParser from "react-jsx-parser"
import type { TProps as JsxParserProps } from "react-jsx-parser"

function matchJsxTag(code: string) {
  if (code.trim() === "") {
    return null
  }

  const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\s*([^>]*?)(\/)?>/
  const match = code.match(tagRegex)

  if (!match || typeof match.index === "undefined") {
    return null
  }

  const [fullMatch, tagName, attributes, selfClosing] = match

  const type = selfClosing
    ? "self-closing"
    : fullMatch.startsWith("</")
      ? "closing"
      : "opening"

  return {
    tag: fullMatch,
    tagName,
    type,
    attributes: attributes.trim(),
    startIndex: match.index,
    endIndex: match.index + fullMatch.length,
  }
}

function completeJsxTag(code: string) {
  const stack: string[] = []
  let result = ""
  let currentPosition = 0

  while (currentPosition < code.length) {
    const match = matchJsxTag(code.slice(currentPosition))
    if (!match) break
    const { tagName, type, endIndex } = match

    if (type === "opening") {
      stack.push(tagName)
    } else if (type === "closing") {
      stack.pop()
    }

    result += code.slice(currentPosition, currentPosition + endIndex)
    currentPosition += endIndex
  }

  return (
    result +
    stack
      .reverse()
      .map((tag) => `</${tag}>`)
      .join("")
  )
}

export type JSXPreviewProps = {
  jsx: string
  isStreaming?: boolean
} & JsxParserProps

function JSXPreview({ jsx, isStreaming = false, ...props }: JSXPreviewProps) {
  const processedJsx = React.useMemo(
    () => (isStreaming ? completeJsxTag(jsx) : jsx),
    [jsx, isStreaming]
  )

  // Cast JsxParser to any to work around the type incompatibility
  const Parser = JsxParser as unknown as React.ComponentType<JsxParserProps>

  return <Parser jsx={processedJsx} {...props} />
}

export { JSXPreview }
