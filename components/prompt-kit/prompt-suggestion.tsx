"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { VariantProps } from "class-variance-authority"
import React from "react"

export type PromptSuggestionProps = {
  children?: React.ReactNode
  value: string
  onSelect: (value: string) => void
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
  className?: string
  highlight?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function PromptSuggestion({
  children,
  value,
  onSelect,
  variant,
  size,
  className,
  highlight,
  ...props
}: PromptSuggestionProps) {
  const isHighlightMode = highlight !== undefined && highlight.trim() !== ""

  if (!isHighlightMode) {
    return (
      <Button
        variant={variant || "outline"}
        size={size || "lg"}
        onClick={() => onSelect(value)}
        className={cn("rounded-full", className)}
        {...props}
      >
        {children || value}
      </Button>
    )
  }

  const trimmedHighlight = highlight.trim()
  const valueLower = value.toLowerCase()
  const highlightLower = trimmedHighlight.toLowerCase()
  const shouldHighlight = valueLower.includes(highlightLower)

  return (
    <Button
      variant={variant || "ghost"}
      size={size || "sm"}
      onClick={() => onSelect(value)}
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
            const index = valueLower.indexOf(highlightLower)
            if (index === -1)
              return <span className="text-muted-foreground">{value}</span>

            const before = value.substring(0, index)
            const highlighted = value.substring(
              index,
              index + trimmedHighlight.length
            )
            const after = value.substring(index + trimmedHighlight.length)

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
        <span className="text-muted-foreground">{value}</span>
      )}
    </Button>
  )
}

export { PromptSuggestion }
