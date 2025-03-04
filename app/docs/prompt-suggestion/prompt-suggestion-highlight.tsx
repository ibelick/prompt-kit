"use client"

import { PromptSuggestion } from "@/components/prompt-kit/prompt-suggestion"

/**
 * Example showing the highlight functionality of PromptSuggestion
 * with a focus on highlighting matching terms in "how to" queries
 */
export function PromptSuggestionHighlight() {
  // This example shows how to highlight specific text within prompts
  const searchTerm = "how to"

  return (
    <div className="w-full space-y-2">
      <div className="text-muted-foreground mb-2 text-sm">
        Showing results for "<span className="font-medium">{searchTerm}</span>"
      </div>

      <div className="w-full space-y-1">
        {howToPrompts.map((prompt) => (
          <PromptSuggestion
            key={prompt}
            highlight={searchTerm}
            onClick={() => console.log("Selected:", prompt)}
          >
            {prompt}
          </PromptSuggestion>
        ))}
      </div>
    </div>
  )
}

// List of "how to" prompts for demonstration
const howToPrompts = [
  "How to create a React component",
  "How to optimize website performance",
  "How to implement dark mode in a web app",
  "How to use CSS Grid effectively",
  "How to fetch data from an API in JavaScript",
  "How to build a REST API with Node.js",
  "How to deploy a Next.js application",
  "How to implement authentication in a web app",
]
