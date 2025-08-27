"use client"

import { cn } from "@/lib/utils"
import { RotateCw } from "lucide-react"
import { cloneElement, useEffect, useRef, useState } from "react"

type ComponentPreviewProps = {
  component?: React.ReactElement
  hasReTrigger?: boolean
  className?: string
  url?: string
}

export default function ComponentPreview({
  component,
  hasReTrigger = false,
  className,
  url,
}: ComponentPreviewProps) {
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now())
  const [isLoading, setIsLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    if (!url || !iframeRef.current) return

    setIsLoading(true)

    const iframe = iframeRef.current

    const updateIframeHeight = () => {
      try {
        const scrollHeight =
          iframe.contentWindow?.document.documentElement.scrollHeight || 650
        const bodyHeight =
          iframe.contentWindow?.document.body.offsetHeight || 650
        const newHeight = Math.max(scrollHeight, bodyHeight)

        iframe.style.height = `${Math.max(newHeight, 100)}px`
      } catch {
        console.warn(
          "Could not access iframe content height due to CORS policy"
        )
        iframe.style.height = "650px"
      }
      setIsLoading(false)
    }

    iframe.onload = updateIframeHeight

    return () => {
      iframe.onload = null
    }
  }, [url, reTriggerKey])

  const reTrigger = () => {
    setReTriggerKey(Date.now())
  }

  const renderComponent = () => {
    if (!url) return component!

    return (
      <iframe
        ref={iframeRef}
        src={url}
        className="bg-background relative h-full w-full"
        title={url}
      />
    )
  }

  return (
    <div
      className={cn(
        "border-border flex min-h-[350px] w-full items-center justify-center rounded-md border",
        className
      )}
    >
      {hasReTrigger && (
        <div
          className="absolute top-3 right-4 cursor-pointer"
          onClick={reTrigger}
        >
          <RotateCw className="text-muted-foreground h-4 w-4" />
        </div>
      )}
      {url && isLoading && <div className="absolute inset-0 w-full" />}
      {hasReTrigger
        ? cloneElement(renderComponent(), { key: reTriggerKey })
        : renderComponent()}
    </div>
  )
}
