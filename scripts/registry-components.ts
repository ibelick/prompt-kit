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
    dependencies: ["react-markdown", "remark-gfm", "shiki"],
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
    dependencies: ["react-markdown", "remark-gfm", "shiki"],
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
]
