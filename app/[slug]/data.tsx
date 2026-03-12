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
    title: "Chat UI components for React AI apps",
    description:
      "Build a modern AI chat UI with drop-in React components, streaming-ready layouts, and composable chat UI primitives that work with any model.",
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
    title: "Chat UI components for React AI apps",
    description:
      "Drop‑in chat UI components for AI apps: prompt input, prompt output, message list, markdown rendering, code blocks, and streaming response UI.",
    keywords: [
      "chat ui",
      "ai chat ui",
      "chat ui components",
      "react chat ui",
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
  title: "Different components",
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
        "A component for displaying code snippets with syntax highlighting and customizable styling.",
      component: <CodeBlockPython />,
    },
  ],
}

export const chatUiContentBySlug = {
  "chat-ui": {
    overview: {
      title: "What is a chat UI?",
      content: `A chat UI is the interface layer that lets people exchange messages with an AI system in a clear, conversational flow. It typically includes a message list with roles, an input for prompts, and response rendering for markdown, code blocks, links, and citations.

For AI apps, a strong chat UI handles streaming responses, tool call previews, sources, retries, and error states without breaking the conversation. It should support keyboard-first input, accessible focus states, and message grouping so long threads stay readable.

A complete chat UI also exposes controls like stop, regenerate, and prompt templates, plus affordances for long messages, file uploads, and code copying. In practice, a good chat UI makes model output feel reliable, interactive, and structured so developers can build assistants, copilots, and support agents quickly. Prompt-kit focuses on composable React chat UI components that plug into any SDK, while keeping layout, typography, and behavior predictable for production apps.`,
    },
    components: {
      title: "Chat UI components included",
      content: [
        {
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Prompt input with suggestions",
          href: "/c/prompt-input-suggestions",
        },
        {
          title: "Prompt input with autocomplete",
          href: "/c/prompt-autocomplete-highlight",
        },
        {
          title: "Conversation with avatars",
          href: "/c/conversation-avatars",
        },
        {
          title: "Conversation with actions",
          href: "/c/conversation-actions",
        },
        {
          title: "Conversation with scroll to bottom",
          href: "/c/conversation-scroll-bottom",
        },
        {
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Sidebar with chat history",
          href: "/c/sidebar-chat-history",
        },
        {
          title: "Full chat app",
          href: "/c/full-chat-app",
        },
        {
          title: "Full chatbot (primitive)",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          href: "/demo/tool-calling",
        },
      ],
    },
    examples: {
      title: "Chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "Streaming responses with markdown and code blocks for production chat UIs.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "Tool-call UI patterns with structured outputs and code-friendly responses.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with prompt input (block)",
          description:
            "Prompt input, send actions, and input UX optimized for long prompts.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Full chat app (block)",
          description:
            "End-to-end chat UI layout with history, streaming, and message states.",
          href: "/c/full-chat-app",
        },
      ],
    },
    links: {
      title: "Related SDK pages",
      content: [
        {
          href: "/vercel-ai-sdk",
          label: "Vercel AI SDK UI",
        },
        {
          href: "/openai-sdk",
          label: "OpenAI SDK UI",
        },
        {
          href: "/ai-sdk",
          label: "AI SDK UI",
        },
      ],
    },
  },
}

export const faqBySlug: Record<
  (typeof slugs)[number],
  {
    title: string
    content: {
      id: string
      title: string
      content: string
    }[]
  }
> = {
  "openai-sdk": {
    title: "Frequently asked questions",
    content: [
      {
        id: "what-is-prompt-kit",
        title: "What is prompt-kit?",
        content:
          "A library of UI components and fullstack building blocks for modern AI applications. Built with shadcn/ui.",
      },
      {
        id: "whats-included",
        title: "What's included?",
        content:
          "Prompt inputs, chat UIs, message containers, tool calling examples, and more. UI-only components, fullstack primitives, and ready-to-use blocks.",
      },
      {
        id: "how-to-install",
        title: "How do I install components?",
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
    ],
  },
  "vercel-ai-sdk": {
    title: "Frequently asked questions",
    content: [
      {
        id: "what-is-prompt-kit",
        title: "What is prompt-kit?",
        content:
          "A library of UI components and fullstack building blocks for modern AI applications. Built with shadcn/ui.",
      },
      {
        id: "whats-included",
        title: "What's included?",
        content:
          "Prompt inputs, chat UIs, message containers, tool calling examples, and more. UI-only components, fullstack primitives, and ready-to-use blocks.",
      },
      {
        id: "how-to-install",
        title: "How do I install components?",
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
    ],
  },
  "chat-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "what-is-chat-ui",
        title: "What is a chat UI?",
        content:
          "A chat UI is the interface layer for conversational AI: message list, prompt input, and response rendering for markdown and code blocks.",
      },
      {
        id: "react-chat-ui",
        title: "How do I build a React chat UI?",
        content:
          "Use prompt-kit components for input, message layout, and rendering, then wire them to your SDK of choice.",
      },
      {
        id: "streaming-support",
        title: "Does it support streaming responses?",
        content:
          "Yes. Components are built to handle incremental updates and keep layout stable during streaming.",
      },
      {
        id: "markdown-code",
        title: "Can I render markdown and code blocks?",
        content:
          "Yes. Markdown rendering and syntax-highlighted code blocks are supported out of the box.",
      },
      {
        id: "prompt-input-actions",
        title: "How do I add a prompt input with actions?",
        content:
          "Use the Prompt Input component and add custom actions for upload, presets, or tool calls.",
      },
      {
        id: "sdk-compatibility",
        title: "Which SDKs can I use with this chat UI?",
        content:
          "OpenAI, Vercel AI SDK v5, and any SDK that returns chat messages or streaming tokens.",
      },
    ],
  },
  "ai-sdk": {
    title: "Frequently asked questions",
    content: [
      {
        id: "what-is-prompt-kit",
        title: "What is prompt-kit?",
        content:
          "A library of UI components and fullstack building blocks for modern AI applications. Built with shadcn/ui.",
      },
      {
        id: "whats-included",
        title: "What's included?",
        content:
          "Prompt inputs, chat UIs, message containers, tool calling examples, and more. UI-only components, fullstack primitives, and ready-to-use blocks.",
      },
      {
        id: "how-to-install",
        title: "How do I install components?",
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
    ],
  },
}

export type LandingContent = {
  hero: {
    badge: string
    title: string
    description: string
  }
  chat_ui?: {
    overview: {
      title: string
      content: string
    }
    components: {
      title: string
      content: {
        title: string
        href: string
      }[]
    }
    examples: {
      title: string
      content: {
        title: string
        description: string
        href: string
      }[]
    }
    links: {
      title: string
      content: {
        href: string
        label: string
      }[]
    }
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
