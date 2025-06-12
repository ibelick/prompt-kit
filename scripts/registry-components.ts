import path from "path"
import { Schema } from "./registry-schema"

type ComponentDefinition = Partial<
  Pick<
    Schema,
    | "dependencies"
    | "devDependencies"
    | "registryDependencies"
    | "cssVars"
    | "tailwind"
  >
> & {
  name: string
  description: string
  path: string
  files?: Array<{
    name: string
    path: string
  }>
}

export const components: ComponentDefinition[] = [
  {
    name: "prompt-input",
    description:
      "An input field designed for chat interfaces, allowing users to enter and submit text prompts to an AI model",
    path: path.join(__dirname, "../components/prompt-kit/prompt-input.tsx"),
    registryDependencies: ["textarea", "tooltip"],
  },
  {
    name: "code-block",
    description:
      "A component for displaying code snippets with syntax highlighting and customizable styling",
    path: path.join(__dirname, "../components/prompt-kit/code-block.tsx"),
    dependencies: ["shiki"],
  },
  {
    name: "markdown",
    description:
      "A component for rendering Markdown content with support for code blocks, GFM, and custom styling",
    path: path.join(__dirname, "../components/prompt-kit/markdown.tsx"),
    dependencies: ["react-markdown", "remark-gfm", "shiki", "marked"],
    files: [
      {
        name: "code-block.tsx",
        path: path.join(__dirname, "../components/prompt-kit/code-block.tsx"),
      },
    ],
  },
  {
    name: "message",
    description:
      "A component for displaying chat messages with support for avatars, markdown content, and interactive actions",
    path: path.join(__dirname, "../components/prompt-kit/message.tsx"),
    dependencies: [
      "react-markdown",
      "remark-gfm",
      "shiki",
      "marked",
      "remark-breaks",
    ],
    registryDependencies: ["avatar", "tooltip"],
    files: [
      {
        name: "markdown.tsx",
        path: path.join(__dirname, "../components/prompt-kit/markdown.tsx"),
      },
      {
        name: "code-block.tsx",
        path: path.join(__dirname, "../components/prompt-kit/code-block.tsx"),
      },
    ],
  },
  {
    name: "chat-container",
    description:
      "A component for creating chat interfaces with intelligent auto-scrolling behavior, designed to provide a smooth and responsive user experience",
    path: path.join(__dirname, "../components/prompt-kit/chat-container.tsx"),
    dependencies: ["use-stick-to-bottom"],
  },
  {
    name: "scroll-button",
    description:
      "A floating button component that appears when users scroll up in a container, allowing them to quickly return to the bottom of the content",
    path: path.join(__dirname, "../components/prompt-kit/scroll-button.tsx"),
    registryDependencies: ["button"],
    dependencies: ["class-variance-authority", "lucide-react"],
  },
  {
    name: "loader",
    description:
      "A component for displaying a loading indicator with multiple variants and customizable styling",
    path: path.join(__dirname, "../components/prompt-kit/loader.tsx"),
    registryDependencies: ["button"],
    tailwind: {
      config: {
        theme: {
          keyframes: {
            typing: {
              "0%, 100%": {
                transform: "translateY(0)",
                opacity: "0.5",
              },
              "50%": {
                transform: "translateY(-2px)",
                opacity: "1",
              },
            },
            ["loading-dots"]: {
              "0%, 100%": {
                opacity: "0",
              },
              "50%": {
                opacity: "1",
              },
            },
            wave: {
              "0%, 100%": {
                transform: "scaleY(1)",
              },
              "50%": {
                transform: "scaleY(0.6)",
              },
            },
            blink: {
              "0%, 100%": {
                opacity: "1",
              },
              "50%": {
                opacity: "0",
              },
            },
          },
          ["text-blink"]: {
            "0%, 100%": {
              color: "var(--primary)",
            },
            "50%": {
              color: "var(--muted-foreground)",
            },
          },
          ["bounce-dots"]: {
            "0%, 100%": {
              transform: "scale(0.8)",
              opacity: "0.5",
            },
            "50%": {
              transform: "scale(1.2)",
              opacity: "1",
            },
          },
          ["thin-pulse"]: {
            "0%, 100%": {
              transform: "scale(0.95)",
              opacity: "0.8",
            },
            "50%": {
              transform: "scale(1.05)",
              opacity: "0.4",
            },
          },
          ["pulse-dot"]: {
            "0%, 100%": {
              transform: "scale(1)",
              opacity: "0.8",
            },
            "50%": {
              transform: "scale(1.5)",
              opacity: "1",
            },
          },
          ["shimmer-text"]: {
            "0%": {
              backgroundPosition: "150% center",
            },
            "100%": {
              backgroundPosition: "-150% center",
            },
          },
          ["wave-bars"]: {
            "0%, 100%": {
              transform: "scaleY(1)",
              opacity: "0.5",
            },
            "50%": {
              transform: "scaleY(0.6)",
              opacity: "1",
            },
          },
          ["shimmer"]: {
            "0%": {
              backgroundPosition: "200% 50%",
            },
            "100%": {
              backgroundPosition: "-200% 50%",
            },
          },
          ["spinner-fade"]: {
            "0%": {
              opacity: "0",
            },
            "100%": {
              opacity: "1",
            },
          },
        },
      },
    },
  },
  {
    name: "prompt-suggestion",
    description:
      "A component for implementing interactive prompt suggestions in AI interfaces. The PromptSuggestion component offers two distinct modes: Normal Mode and Highlight Mode.",
    path: path.join(
      __dirname,
      "../components/prompt-kit/prompt-suggestion.tsx"
    ),
    registryDependencies: ["button"],
    dependencies: ["class-variance-authority", "lucide-react"],
  },
  {
    name: "response-stream",
    description:
      "A component to simulate streaming text on the client side, perfect for fake responses, or any controlled progressive text display.",
    path: path.join(__dirname, "../components/prompt-kit/response-stream.tsx"),
  },
  {
    name: "reasoning",
    description: `A collapsible component for showing AI reasoning, explanations, or logic. You can control it manually or let it auto-close when the stream ends. Markdown is supported.`,
    path: path.join(__dirname, "../components/prompt-kit/reasoning.tsx"),
    dependencies: ["lucide-react"],
    files: [
      {
        name: "markdown.tsx",
        path: path.join(__dirname, "../components/prompt-kit/markdown.tsx"),
      },
      {
        name: "response-stream.tsx",
        path: path.join(
          __dirname,
          "../components/prompt-kit/response-stream.tsx"
        ),
      },
    ],
  },
  {
    name: "file-upload",
    description:
      "A component for creating drag-and-drop file upload interfaces with support for single or multiple files, custom triggers, and visual feedback during file dragging operations.",
    path: path.join(__dirname, "../components/prompt-kit/file-upload.tsx"),
  },
  {
    name: "jsx-preview",
    description:
      "A component for rendering JSX strings as React components, with support for streaming content and automatic tag completion.",
    path: path.join(__dirname, "../components/prompt-kit/jsx-preview.tsx"),
    dependencies: ["react-jsx-parser"],
  },
]
