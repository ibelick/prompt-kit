"use client"

import { JSXPreview } from "@/components/prompt-kit/jsx-preview"
import { useEffect, useState } from "react"

export function JSXPreviewStreaming() {
  const [jsx, setJsx] = useState("")
  const [isStreaming, setIsStreaming] = useState(true)

  useEffect(() => {
    const jsxContent = `
    <div className="w-full max-w-md overflow-hidden rounded-3xl bg-[#1d1d1d] shadow-sm">
      <div className="px-8 pb-8 pt-5 text-center">
        <h2 className="mb-2 text-lg font-medium text-white">Video creation now in jul.chat</h2>
        <p className="mb-6 text-sm text-[#ffffff99]">
          Create beautiful videos using just a prompt.
          <br />
          Powered by gpt-4o video generation.
          <br />
          <a href="#" className="text-white no-underline">
            Learn more
          </a>
        </p>
        <div className="flex gap-4">
          <button className="flex-1 rounded-full bg-[#242424] py-2 text-sm font-normal text-white hover:bg-[#ffffff33] transition-all duration-200">
            Not now
          </button>
          <button className="flex-1 rounded-full bg-white py-2 text-sm font-normal text-black hover:bg-gray-100 transition-all duration-200">
            Explore
          </button>
        </div>
      </div>
    </div>
    `

    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < jsxContent.length) {
        setJsx(jsxContent.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsStreaming(false)
        clearInterval(interval)
      }
    }, 1)

    return () => clearInterval(interval)
  }, [])

  return <JSXPreview jsx={jsx} isStreaming={isStreaming} />
}
