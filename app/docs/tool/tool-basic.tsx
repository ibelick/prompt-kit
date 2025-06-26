import { Tool } from "@/components/prompt-kit/tool"

export function ToolBasic() {
  return (
    <Tool
      className="w-full max-w-md"
      toolInvocation={{
        toolName: "search_web",
        state: "completed",
        args: {
          query: "prompt-kit documentation",
          max_results: 5,
        },
        result: [
          {
            title: "Prompt Kit - Documentation",
            url: "https://prompt-kit.com/docs",
            snippet: "A comprehensive guide to using Prompt Kit components...",
          },
          {
            title: "Getting Started with Prompt Kit",
            url: "https://prompt-kit.com/docs/installation",
            snippet:
              "Learn how to install and use Prompt Kit in your project...",
          },
        ],
      }}
    />
  )
}
