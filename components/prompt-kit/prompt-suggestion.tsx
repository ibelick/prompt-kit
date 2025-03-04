"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import React from "react"

export type PromptSuggestionProps = {
  children: React.ReactNode
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  className?: string
  highlight?: string
  data?: string // Optional data that can be accessed in onClick
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function PromptSuggestion({
  children,
  variant,
  size,
  className,
  highlight,
  data,
  ...props
}: PromptSuggestionProps) {
  const isHighlightMode = highlight !== undefined && highlight.trim() !== ""
  const content = typeof children === "string" ? children : ""

  if (!isHighlightMode) {
    return (
      <Button
        variant={variant || "outline"}
        size={size || "lg"}
        className={cn("rounded-full", className)}
        {...props}
      >
        {children}
      </Button>
    )
  }

  // Only process highlighting if children is a string
  if (!content) {
    return (
      <Button
        variant={variant || "ghost"}
        size={size || "sm"}
        className={cn(
          "w-full cursor-pointer justify-start rounded-xl py-2",
          "hover:bg-accent",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    )
  }

  const trimmedHighlight = highlight.trim()
  const contentLower = content.toLowerCase()
  const highlightLower = trimmedHighlight.toLowerCase()
  const shouldHighlight = contentLower.includes(highlightLower)

  return (
    <Button
      variant={variant || "ghost"}
      size={size || "sm"}
      className={cn(
        "w-full cursor-pointer justify-start rounded-xl py-2",
        "hover:bg-accent",
        className
      )}
      {...props}
    >
      {shouldHighlight ? (
        <>
          {(() => {
            const index = contentLower.indexOf(highlightLower)
            if (index === -1)
              return <span className="text-muted-foreground">{content}</span>

            const before = content.substring(0, index)
            const highlighted = content.substring(
              index,
              index + trimmedHighlight.length
            )
            const after = content.substring(index + trimmedHighlight.length)

            return (
              <>
                {before && (
                  <span className="text-muted-foreground">{before}</span>
                )}
                <span className="text-primary font-medium">{highlighted}</span>
                {after && (
                  <span className="text-muted-foreground">{after}</span>
                )}
              </>
            )
          })()}
        </>
      ) : (
        <span className="text-muted-foreground">{content}</span>
      )}
    </Button>
  )
}

export { PromptSuggestion }
