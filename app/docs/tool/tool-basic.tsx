import { Tool } from "@/components/prompt-kit/tool"

export function ToolBasic() {
  return (
    <Tool
      className="w-full max-w-md"
      toolPart={{
        type: "search_web",
        state: "output-available",
        input: {
          query: "prompt-kit documentation",
          max_results: 5,
        },
        output: {
          results: [
            {
              title: "Prompt Kit - Documentation",
              url: "https://prompt-kit.com/docs",
              snippet:
                "A comprehensive guide to using Prompt Kit components...",
            },
            {
              title: "Getting Started with Prompt Kit",
              url: "https://prompt-kit.com/docs/installation",
              snippet:
                "Learn how to install and use Prompt Kit in your project...",
            },
          ],
        },
      }}
    />
  )
}
