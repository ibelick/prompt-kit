"use client"

import { Markdown } from "@/components/prompt-kit/markdown"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Components } from "react-markdown"

export function MarkdownCustomComponents() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  const markdownContent = `
# Custom Components Example

## Styled Headings

### This is a custom styled H3

## Custom Links

[Click me to toggle theme](#)

## Custom Blockquotes

> This is a custom styled blockquote
> with multiple lines of text.

## Custom Lists

- First item with custom styling
- Second item with custom styling
- Third item with custom styling
`

  const customComponents: Partial<Components> = {
    h3: ({ children }) => (
      <h3 className="my-4 text-xl font-bold text-blue-500">{children}</h3>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        className="text-purple-500 underline hover:text-purple-700"
        onClick={(e) => {
          e.preventDefault()
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }}
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-4 border-l-4 border-green-500 pl-4 italic">
        {children}
      </blockquote>
    ),
    li: ({ children }) => (
      <li className="my-1 flex items-center">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-orange-500"></span>
        <span>{children}</span>
      </li>
    ),
  }

  return (
    <div
      className={cn(
        "w-full max-w-3xl rounded-lg p-6 transition-colors",
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      )}
    >
      <div className="mb-4 flex justify-end">
        <button
          onClick={() =>
            setTheme((prev) => (prev === "light" ? "dark" : "light"))
          }
          className={cn(
            "rounded px-3 py-1 text-sm",
            theme === "light" ? "bg-gray-200" : "bg-gray-900"
          )}
        >
          Toggle {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <Markdown components={customComponents}>{markdownContent}</Markdown>
    </div>
  )
}
