"use client"

import { Markdown } from "@/components/prompt-kit/markdown"

export function MarkdownBasic() {
  const markdownContent = `
# Markdown Example

This is a **bold text** and this is an *italic text*.

## Lists

### Unordered List
- Item 1
- Item 2
- Item 3

### Ordered List
1. First item
2. Second item
3. Third item

## Links and Images

[Visit Prompt Kit](https://prompt-kit.com)

## Code

Inline \`code\` example.

\`\`\`javascript
// Code block example
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`

  return (
    <div className="w-full max-w-3xl">
      <Markdown>
        {markdownContent}
      </Markdown>
    </div>
  )
}
