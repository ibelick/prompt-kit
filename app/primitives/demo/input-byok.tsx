"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useApiKey } from "@/hooks/use-api-key"
import { useState } from "react"

export function getOpenAIApiKey(): string | null {
  if (typeof window !== "undefined") {
    return localStorage.getItem("OPENAI_API_KEY")
  }
  return null
}

function maskApiKey(apiKey: string | null) {
  if (!apiKey) return ""
  return apiKey.replace(/./g, "*")
}

export function InputByok() {
  const { apiKey, hasApiKey, saveApiKey, deleteApiKey } = useApiKey()
  const [inputValue, setInputValue] = useState(
    maskApiKey(getOpenAIApiKey()) || ""
  )

  const handleSave = () => {
    if (inputValue.trim()) {
      saveApiKey(inputValue.trim())
      setInputValue(maskApiKey(getOpenAIApiKey()))
    }
  }

  const handleDelete = () => {
    deleteApiKey()
    setInputValue("")
  }

  return (
    <div className="relative flex items-center gap-2">
      <div className="relative w-full max-w-xs">
        <Input
          placeholder="OPENAI_API_KEY"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue && (
          <div className="absolute top-[2px] right-0.5">
            <Button
              size="sm"
              onClick={handleSave}
              className="bg-primary text-primary-foreground h-8 rounded-[6px]"
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
