"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function getOpenAIApiKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("OPENAI_API_KEY")
  }
  return null
}

export function InputByok() {
  const [apiKey, setApiKey] = useState(getOpenAIApiKey() || "")
  const [hasApiKey, setHasApiKey] = useState(!!getOpenAIApiKey())

  const handleSave = () => {
    localStorage.setItem("OPENAI_API_KEY", apiKey)
    setHasApiKey(true)
  }

  const handleDelete = () => {
    localStorage.removeItem("OPENAI_API_KEY")
    setApiKey("")
    setHasApiKey(false)
  }

  return (
    <div className="relative flex items-center gap-2">
      <div className="relative w-full max-w-xs">
        <Input
          placeholder="OPENAI_API_KEY"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
        />
        {apiKey && (
          <div className="absolute top-[2px] right-0.5">
            <Button
              size="sm"
              onClick={handleSave}
              className="h-8 rounded-[6px]"
              variant="ghost"
            >
              Save
            </Button>
          </div>
        )}
      </div>
      {hasApiKey && (
        <div className="">
          <Button
            size="sm"
            onClick={handleDelete}
            className="h-8 rounded-[6px]"
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  )
}
