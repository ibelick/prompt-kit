"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

const useAutoScroll = (
  containerRef: React.RefObject<HTMLDivElement>,
  bottomRef: React.RefObject<HTMLDivElement>,
  enabled: boolean
) => {
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true)
  const lastScrollTopRef = useRef(0)
  const autoScrollingRef = useRef(false)

  const isAtBottom = (element: HTMLDivElement) => {
    const { scrollTop, scrollHeight, clientHeight } = element
    return scrollHeight - scrollTop - clientHeight <= 2
  }

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (bottomRef?.current) {
      autoScrollingRef.current = true
      bottomRef.current.scrollIntoView({ behavior })
      setTimeout(
        () => {
          autoScrollingRef.current = false
        },
        behavior === "smooth" ? 300 : 50
      )
    }
  }

  useEffect(() => {
    if (!enabled) return

    const container = containerRef?.current
    if (!container) return

    lastScrollTopRef.current = container.scrollTop

    const handleScroll = () => {
      if (autoScrollingRef.current) return

      const currentScrollTop = container.scrollTop

      if (currentScrollTop < lastScrollTopRef.current && autoScrollEnabled) {
        setAutoScrollEnabled(false)
      }

      if (isAtBottom(container) && !autoScrollEnabled) {
        setAutoScrollEnabled(true)
      }

      lastScrollTopRef.current = currentScrollTop
    }

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY < 0 && autoScrollEnabled) {
        setAutoScrollEnabled(false)
      }
    }

    const handleTouchStart = () => {
      lastScrollTopRef.current = container.scrollTop
    }

    const handleTouchMove = () => {
      if (container.scrollTop < lastScrollTopRef.current && autoScrollEnabled) {
        setAutoScrollEnabled(false)
      }

      lastScrollTopRef.current = container.scrollTop
    }

    const handleTouchEnd = () => {
      if (isAtBottom(container) && !autoScrollEnabled) {
        setAutoScrollEnabled(true)
      }
    }

    container.addEventListener("scroll", handleScroll, { passive: true })
    container.addEventListener("wheel", handleWheel, { passive: true })
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    })
    container.addEventListener("touchmove", handleTouchMove, { passive: true })
    container.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener("scroll", handleScroll)
      container.removeEventListener("wheel", handleWheel)
      container.removeEventListener("touchstart", handleTouchStart)
      container.removeEventListener("touchmove", handleTouchMove)
      container.removeEventListener("touchend", handleTouchEnd)
    }
  }, [containerRef, enabled, autoScrollEnabled])

  return {
    autoScrollEnabled,
    scrollToBottom,
    isScrolling: autoScrollingRef.current,
  }
}

export type ChatContainerProps = {
  children: React.ReactNode
  className?: string
  autoScroll?: boolean
  scrollToRef?: React.RefObject<HTMLDivElement>
  ref?: React.RefObject<HTMLDivElement>
} & React.HTMLAttributes<HTMLDivElement>

function ChatContainer({
  className,
  children,
  autoScroll = true,
  scrollToRef,
  ref,
  ...props
}: ChatContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null!)
  const localBottomRef = useRef<HTMLDivElement>(null!)
  const bottomRef = scrollToRef || localBottomRef

  const { autoScrollEnabled, scrollToBottom, isScrolling } = useAutoScroll(
    containerRef,
    bottomRef,
    autoScroll
  )

  useEffect(() => {
    if (autoScroll && autoScrollEnabled && !isScrolling) {
      requestAnimationFrame(() => {
        scrollToBottom("smooth")
      })
    }
  }, [children, autoScroll, autoScrollEnabled, isScrolling, scrollToBottom])

  return (
    <div
      className={cn("flex flex-col overflow-y-auto", className)}
      role="log"
      ref={containerRef}
      {...props}
    >
      {children}
      <div
        ref={bottomRef}
        className="h-[1px] w-full flex-shrink-0 scroll-mt-4"
        aria-hidden="true"
      />
    </div>
  )
}

export { ChatContainer }
