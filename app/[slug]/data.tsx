import { CodeBlockPython } from "@/app/docs/code-block/code-block-python"
import { PromptInputWithActions } from "@/app/docs/prompt-input/prompt-input-with-actions"
import { SourceBasic } from "@/app/docs/source/source-basic"

export const slugs = ["openai-sdk", "vercel-ai-sdk", "chat-ui", "ai-sdk"]

export const titles = [
  "Build faster with the OpenAI SDK and ready-to-use UI",
  "Ship faster using Vercel AI SDK + beautiful components",
  "Drop-in Chat UI for modern AI apps",
  "Composable UI + API primitives for any AI SDK",
]

export const heroSections = {
  "openai-sdk": {
    badge: "openai sdk",
    title: "The UI for your OpenAI SDK apps",
    description:
      "Build better interfaces for OpenAI-powered apps. Drop-in components for chats, prompts, tool use, and more.",
  },
  "vercel-ai-sdk": {
    badge: "vercel ai sdk",
    title: "The UI layer for the Vercel AI SDK",
    description:
      "Build chat UIs, tool calling, and more using ready-made components for the Vercel AI SDK.",
  },
  "chat-ui": {
    badge: "chat ui",
    title: "Build world-class Chat UIs in minutes",
    description:
      "Components and primitives for fast, beautiful, and flexible chat interfaces — works with any AI model.",
  },
  "ai-sdk": {
    badge: "ai sdk",
    title: "Build interfaces on top of any AI SDK",
    description:
      "Drop-in UI and fullstack components built to work with the AI SDK ecosystem — OpenAI, Mistral, DeepSeek, and more.",
  },
}

export const metadataBySlug: Record<
  (typeof slugs)[number],
  {
    title: string
    description: string
    keywords: string[]
  }
> = {
  "openai-sdk": {
    title: "OpenAI SDK UI components & chat templates",
    description:
      "Build OpenAI SDK apps faster with ready‑made UI components, chat interfaces, tool calling patterns, and primitives. Built with React, Tailwind CSS, and shadcn/ui.",
    keywords: [
      "OpenAI SDK UI",
      "OpenAI components",
      "OpenAI chat UI",
      "tool calling UI",
      "LLM UI",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "vercel-ai-sdk": {
    title: "Vercel AI SDK UI components & examples",
    description:
      "Production‑ready UI for the Vercel AI SDK: chat UIs, prompt inputs, streaming responses, tool calling, and fullstack primitives to ship faster.",
    keywords: [
      "Vercel AI SDK UI",
      "Vercel AI components",
      "AI SDK UI",
      "chat components",
      "tool calling",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "chat-ui": {
    title: "Chat UI components for AI apps",
    description:
      "Drop‑in chat components for modern AI apps: message list, avatars, prompt input, markdown rendering, streaming response UI, sources, and more.",
    keywords: [
      "chat UI",
      "AI chat components",
      "message list",
      "prompt input",
      "markdown",
      "streaming UI",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "ai-sdk": {
    title: "AI SDK compatible UI components",
    description:
      "Composable UI and API primitives that work with OpenAI, Mistral, DeepSeek, and the broader AI SDK ecosystem. Build faster with ready‑to‑use blocks.",
    keywords: [
      "AI SDK UI",
      "LLM UI components",
      "OpenAI UI",
      "Mistral UI",
      "DeepSeek UI",
      "tool calling",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
}

export const codeSections = {
  title: "easy to install",
  code: `
      npm install @prompt-kit/sdk
      `,
}

export const componentsSections = {
  title: "differents components",
  components: [
    {
      component: "prompt-input",
    },
    {
      component: "prompt-output",
    },
    {
      component: "prompt-button",
    },
    {
      component: "prompt-chat",
    },
    {
      component: "prompt-list",
    },
  ],
}

export const featuresSections = {
  title: "The foundation for your AI application",
  content: [
    {
      title: "Components",
      href: "/docs/prompt-input",
      content: [
        "Everything to build your own UI",
        "UI for AI elements",
        "Headless logic",
        "React, shadcn/ui and Tailwind CSS",
      ],
    },
    {
      title: "Blocks",
      href: "/blocks",
      content: [
        "Ready-to-use UI pieces",
        "Pure frontend",
        "React, shadcn/ui and Tailwind CSS",
        "Composable",
      ],
    },
    {
      title: "Primitives",
      href: "/primitives",
      content: [
        "Fullstack blocks",
        "UI components",
        "API logic",
        "Vercel AI SDK",
      ],
    },
  ],
}

export const featuresComponents = {
  title: "Prebuilt, composable AI components",
  content: [
    {
      id: "prompt-input",
      title: "Prompt Input",
      content:
        "An input field that allows users to enter and submit text to an AI model.",
      component: <PromptInputWithActions />,
    },
    {
      id: "source",
      title: "Source",
      content:
        "Displays website sources used by AI-generated content, showing URL details, titles, and descriptions on hover.",
      component: <SourceBasic />,
    },
    {
      id: "code-block",
      title: "Code Block",
      content:
        "A component for displaying code snippets with syntax highlighting and customizable styling..",
      component: <CodeBlockPython />,
    },
  ],
}

export const faq = {
  title: "Frequently asked questions",
  content: [
    {
      id: "what-is-prompt-kit",
      title: "What is prompt-kit?",
      content:
        "A library of high-quality UI components and fullstack building blocks for modern AI applications. Built with shadcn/ui.",
    },
    {
      id: "whats-included",
      title: "What's included?",
      content:
        "Prompt inputs, chat UIs, message containers, tool calling examples, and more. UI-only components, fullstack primitives, and ready-to-use blocks.",
    },
    {
      id: "how-to-install",
      title: "How to install prompt-kit?",
      content:
        "Use the shadcn CLI to install any block or primitive with one command.",
    },
    {
      id: "which-sdks-are-supported",
      title: "Which SDKs are supported?",
      content:
        "OpenAI, Vercel AI SDK v5, and anything compatible with the AI SDK ecosystem. More to come.",
    },
    {
      id: "react-framework",
      title: "Can I use it with my React framework?",
      content:
        "Yes. Works with Next.js, Vite, Remix, and more. Built with Tailwind + shadcn/ui.",
    },
    {
      id: "is-it-open-source",
      title: "Is it open source?",
      content:
        "Yes, under the MIT license. You can use it freely in personal or commercial projects.",
    },
    {
      id: "how-to-contribute",
      title: "How can I contribute?",
      content:
        "Open a PR or check out the contributing guide. We welcome components, blocks, and fullstack primitives.",
    },
  ],
}

export type LandingContent = {
  hero: {
    badge: string
    title: string
    description: string
  }
  code: {
    title: string
    code: string
  }
  components: {
    title: string
    components: {
      component: string
    }[]
  }
  features_core: {
    title: string
    content: {
      title: string
      href: string
      content: string[]
    }[]
  }
  features_components: {
    title: string
    content: {
      id: string
      title: string
      content: string
      component: React.ReactNode
    }[]
  }
  faq: {
    title: string
    content: {
      id: string
      title: string
      content: string
    }[]
  }
}
