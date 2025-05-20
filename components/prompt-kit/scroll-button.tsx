"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { useStickToBottomContext } from "use-stick-to-bottom"

// Type for the context
type StickToBottomContextValue = {
  isAtBottom: boolean
  scrollToBottom: () => boolean | Promise<boolean>
}

export type ScrollButtonProps = {
  containerRef?: React.RefObject<HTMLElement | null>
  className?: string
  threshold?: number
  variant?: VariantProps<typeof buttonVariants>["variant"]
  size?: VariantProps<typeof buttonVariants>["size"]
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function ScrollButton({
  containerRef,
  className,
  threshold = 100,
  variant = "outline",
  size = "sm",
  ...props
}: ScrollButtonProps) {
  // For standalone use with containerRef
  const [isVisible, setIsVisible] = useState(false)

  // Check if we're in a StickToBottom context
  const contextAvailable = useIsStickToBottomContextAvailable()
  let context: StickToBottomContextValue | undefined = undefined

  // Only try to use context if we know it's available
  if (contextAvailable) {
    try {
      context = useStickToBottomContext()
    } catch (e) {
      // This shouldn't happen since we checked first
    }
  }

  // Show button based on context or ref visibility
  const shouldShow = context ? !context.isAtBottom : isVisible

  // Handle scroll detection when not using context
  useEffect(() => {
    if (context || !containerRef?.current) return

    const container = containerRef.current

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      setIsVisible(scrollTop + clientHeight < scrollHeight - threshold)
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }
  }, [containerRef, threshold, context])

  // Handle scroll to bottom action
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

// Check if we're inside a StickToBottom component without throwing
function useIsStickToBottomContextAvailable() {
  try {
    // Access the context once as a test - this will throw if not available
    useStickToBottomContext()
    return true
  } catch (e) {
    return false
  }
}

export { ScrollButton }
