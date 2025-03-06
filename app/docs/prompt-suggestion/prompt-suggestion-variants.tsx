"use client"

import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
} from "@/components/prompt-kit/prompt-input"
import { PromptSuggestion } from "@/components/prompt-kit/prompt-suggestion"
import { Button } from "@/components/ui/button"
import { ArrowUpIcon, BrainIcon } from "lucide-react"
import { useState } from "react"

export function PromptSuggestionVariants() {
  const [inputValue, setInputValue] = useState("")
  const [activeCategory, setActiveCategory] = useState("")

  const handleSend = () => {
    if (inputValue.trim()) {
      console.log("Sending:", inputValue)
      setInputValue("")
      setActiveCategory("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handlePromptInputValueChange = (value: string) => {
    setInputValue(value)
    // Clear active category when typing something different
    if (value.trim() === "") {
      setActiveCategory("")
    }
  }

  // Get suggestions based on active category
  const activeCategoryData = suggestionGroups.find(
    (group) => group.label === activeCategory
  )

  // Determine which suggestions to show
  const showCategorySuggestions = activeCategory !== ""

  return (
    <div className="flex w-full flex-col space-y-4">
      <PromptInput
        className="border-input bg-background border shadow-xs"
        value={inputValue}
        onValueChange={handlePromptInputValueChange}
        onSubmit={handleSend}
      >
        <PromptInputTextarea
          placeholder="Ask anything..."
          className="min-h-[44px]"
          onKeyDown={handleKeyDown}
        />
        <PromptInputActions className="justify-end">
          <Button
            size="sm"
            className="h-9 w-9 rounded-full"
            onClick={handleSend}
            disabled={!inputValue.trim()}
          >
            <ArrowUpIcon className="h-4 w-4" />
          </Button>
        </PromptInputActions>
      </PromptInput>

      <div className="relative flex w-full flex-col items-center justify-center space-y-2">
        <div className="absolute top-0 left-0 h-[70px] w-full">
          {showCategorySuggestions ? (
            <div className="flex w-full flex-col space-y-1">
              {activeCategoryData?.items.map((suggestion) => (
                <PromptSuggestion
                  key={suggestion}
                  highlight={activeCategoryData.highlight}
                  onClick={() => {
                    setInputValue(suggestion)
                    // Optional: auto-send
                    // handleSend()
                  }}
                >
                  {suggestion}
                </PromptSuggestion>
              ))}
            </div>
          ) : (
            <div className="relative flex w-full flex-wrap items-stretch justify-start gap-2">
              {suggestionGroups.map((suggestion) => (
                <PromptSuggestion
                  key={suggestion.label}
                  onClick={() => {
                    setActiveCategory(suggestion.label)
                    setInputValue("") // Clear input when selecting a category
                  }}
                  className="capitalize"
                >
                  <BrainIcon className="mr-2 h-4 w-4" />
                  {suggestion.label}
                </PromptSuggestion>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const suggestionGroups = [
  {
    label: "Summary",
    highlight: "Summarize",
    items: [
      "Summarize a document",
      "Summarize a video",
      "Summarize a podcast",
      "Summarize a book",
    ],
  },
  {
    label: "Code",
    highlight: "Help me",
    items: [
      "Help me write React components",
      "Help me debug code",
      "Help me learn Python",
      "Help me learn SQL",
    ],
  },
  {
    label: "Design",
    highlight: "Design",
    items: [
      "Design a small logo",
      "Design a hero section",
      "Design a landing page",
      "Design a social media post",
    ],
  },
  {
    label: "Research",
    highlight: "Research",
    items: [
      "Research the best practices for SEO",
      "Research the best running shoes",
      "Research the best restaurants in Paris",
      "Research the best AI tools",
    ],
  },
]
