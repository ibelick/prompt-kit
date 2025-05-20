"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { type VariantProps } from "class-variance-authority"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import { useStickToBottomContext } from "use-stick-to-bottom"

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

  // Use context if available, otherwise fallback to containerRef logic
  const shouldShow = context ? !context.isAtBottom : isVisible

  useEffect(() => {
    if (context || !containerRef?.current) return

    const container = containerRef.current

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container
      const shouldBeVisible =
        scrollTop + clientHeight < scrollHeight - threshold
      setIsVisible(shouldBeVisible)
    }

    // Initial check
    handleScroll()

    // Event listener for scroll
    container.addEventListener("scroll", handleScroll, { passive: true })

    // Also check on resize
    window.addEventListener("resize", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
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
        "h-10 w-10 rounded-full transition-all duration-150 ease-out",
        shouldShow
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0",
        className
      )}
      onClick={handleScroll}
      {...props}
    >
      <ChevronDown className="h-5 w-5" />
    </Button>
  )
}

export { ScrollButton }
