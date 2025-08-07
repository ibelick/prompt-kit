"use client"

import { cn } from "@/lib/utils"
import type { Experimental_GeneratedImage } from "ai"

export type ImageProps = Experimental_GeneratedImage & {
  className?: string
  alt: string // always required for accessibility
}

function getImageSrc({
  base64,
  uint8Array,
  mediaType,
}: Experimental_GeneratedImage) {
  if (base64 && mediaType) {
    return `data:${mediaType};base64,${base64}`
  }
  if (uint8Array && mediaType) {
    const blob = new Blob([uint8Array as BlobPart], { type: mediaType })
    return URL.createObjectURL(blob)
  }
  return undefined
}

export const Image = ({
  base64,
  uint8Array,
  mediaType = "image/png",
  className,
  alt,
  ...props
}: ImageProps) => (
  <img
    src={getImageSrc({ base64, uint8Array, mediaType })}
    alt={alt}
    className={cn("h-auto max-w-full overflow-hidden rounded-md", className)}
    role="img"
    {...props}
  />
)
