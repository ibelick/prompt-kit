import { PromptSuggestion } from "@/components/prompt-kit/prompt-suggestion"

export function PromptSuggestionHighlight() {
  const searchTerm = "how to"

  return (
    <div className="w-full space-y-2">
      <div className="w-full space-y-1">
        {howToPrompts.map((prompt) => (
          <PromptSuggestion key={prompt} highlight={searchTerm}>
            {prompt}
          </PromptSuggestion>
        ))}
      </div>
    </div>
  )
}

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
