"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { useStickToBottom, useStickToBottomContext } from "use-stick-to-bottom"

export type ScrollButtonProps = {
  containerRef?: React.RefObject<HTMLElement | null>
  className?: string
  threshold?: number
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function useIsStickToBottomContextAvailable() {
  try {
    useStickToBottomContext()
    return true
  } catch (e) {
    return false
  }
}

function ScrollButton({
  containerRef,
  className,
  threshold = 100,
  variant = "outline",
  size = "sm",
  ...props
}: ScrollButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const contextAvailable = useIsStickToBottomContextAvailable()
  const context = contextAvailable ? useStickToBottomContext() : null

  const shouldShow = context ? !context.isAtBottom : isVisible

  useEffect(() => {
    if (context || !containerRef?.current) return

    const container = containerRef.current

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      setIsVisible(scrollTop + clientHeight < scrollHeight - threshold)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [containerRef, threshold, context])

  const handleScroll = () => {
    if (context) {
      context.scrollToBottom()
    } else if (containerRef?.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={cn(
        "h-8 w-8 rounded-full transition-all duration-150 ease-out",
        shouldShow
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0",
        className
      )}
      onClick={handleScroll}
      {...props}
    >
      <ChevronDown className="h-4 w-4" />
    </Button>
  )
}

export function useScrollContainer() {
  const stickToBottom = useStickToBottom()

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const container = stickToBottom.scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      setIsVisible(scrollHeight - scrollTop - clientHeight > 10)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [stickToBottom.scrollRef])

  const scrollToBottom = () => {
    return stickToBottom.scrollToBottom()
  }

  return {
    ...stickToBottom,
    isVisible,
    scrollToBottom,
  }
}

export { ScrollButton }
