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
    title: "OpenAI SDK UI components for chat apps",
    description:
      "OpenAI SDK UI for chat apps with React components for prompt input, message rendering, tool calls, and streaming responses.",
  },
  "vercel-ai-sdk": {
    badge: "vercel ai sdk",
    title: "Vercel AI SDK UI components for chat apps",
    description:
      "Vercel AI SDK UI for chat apps with React components for prompt input, message rendering, streaming, and tool calls.",
  },
  "chat-ui": {
    badge: "chat ui",
    title: "Chat UI components for React AI apps",
    description:
      "Build a modern AI chat UI with drop-in React components, streaming-ready layouts, and composable chat UI primitives that work with any model.",
  },
  "ai-sdk": {
    badge: "ai sdk",
    title: "AI SDK UI components for LLM apps",
    description:
      "AI SDK UI components for LLM apps with React chat UI primitives, streaming-ready layouts, and tool call UX.",
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
    title: "OpenAI SDK UI components for React chat apps",
    description:
      "OpenAI SDK UI components for React chat apps, including prompt input, chat UI rendering, tool calls, and streaming responses. Built with Tailwind CSS and shadcn/ui.",
    keywords: [
      "openai sdk ui",
      "openai chat ui",
      "openai components",
      "ai sdk chat ui",
      "tool calling UI",
      "LLM UI",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "vercel-ai-sdk": {
    title: "Vercel AI SDK UI components for React chat apps",
    description:
      "Vercel AI SDK UI components for React chat apps, including chat UI layout, prompt input, streaming responses, and tool call UX.",
    keywords: [
      "vercel ai sdk ui",
      "vercel ai components",
      "ai sdk chat ui",
      "chat ui components",
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
    title: "AI SDK UI components for LLM apps",
    description:
      "AI SDK UI components for LLM apps with React chat UI primitives, streaming layouts, and tool call examples. Compatible with OpenAI, Mistral, and more.",
    keywords: [
      "ai sdk ui",
      "ai sdk components",
      "llm ui components",
      "ai chat ui",
      "openai ui",
      "mistral ui",
      "deepseek ui",
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

export const pageContentBySlug = {
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
          href: "/chat-ui",
          label: "Chat UI",
        },
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
  "openai-sdk": {
    overview: {
      title: "OpenAI SDK UI overview",
      content: `OpenAI SDK UI components provide the chat UI layer for apps built on the OpenAI SDK. You typically need a prompt input, a message list with roles, and rendering for markdown, code blocks, links, and citations. A production OpenAI chat UI also needs streaming response handling, tool call previews, retries, and error states so the conversation stays consistent while the model is generating.

Prompt-kit focuses on composable React UI primitives that match these needs without hard-coding a transport layer. That means you can plug the components into your OpenAI SDK request flow, wire them to streaming tokens, and keep layout and interaction predictable. Use the blocks below as starting points, then customize the prompt input, message rendering, and tool call UI to fit your product.

This page links to OpenAI SDK UI examples that cover common requirements like prompt input UX, conversation history, and full chat app layout. Each example is a working React component you can adapt to your OpenAI SDK integration.`,
    },
    components: {
      title: "OpenAI SDK UI components",
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
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Conversation with actions",
          href: "/c/conversation-actions",
        },
        {
          title: "Conversation with avatars",
          href: "/c/conversation-avatars",
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
      title: "OpenAI chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "OpenAI SDK chat UI with streaming, markdown rendering, and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "Tool call UI patterns with structured outputs and model responses.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with prompt input",
          description:
            "Prompt input UX wired to a message list and response rendering.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Full chat app",
          description:
            "End-to-end OpenAI chat UI layout with history and streaming states.",
          href: "/c/full-chat-app",
        },
      ],
    },
    links: {
      title: "Related SDK pages",
      content: [
        {
          href: "/chat-ui",
          label: "Chat UI",
        },
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
  "vercel-ai-sdk": {
    overview: {
      title: "Vercel AI SDK UI overview",
      content: `Vercel AI SDK UI components cover the chat UI layer you need when building on AI SDK v5. That includes a prompt input, message list, and message rendering for markdown, code blocks, and links. For production usage, you also need streaming-friendly UI, tool call previews, retries, and source citations while the model is generating.

Prompt-kit provides React chat UI components that are compatible with the AI SDK response patterns. You can connect the input and message list to the AI SDK stream, render partial tokens safely, and keep layout stable. The blocks below are tuned for the AI SDK request flow while staying composable for custom UX.

Use these Vercel AI SDK UI examples to bootstrap your chat UI, then extend prompt input actions, message grouping, and tool call rendering to match your product requirements.`,
    },
    components: {
      title: "Vercel AI SDK UI components",
      content: [
        {
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Prompt input with autocomplete",
          href: "/c/prompt-autocomplete-highlight",
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
      title: "Vercel AI SDK chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "AI SDK streaming chat UI with markdown and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "Tool call UI patterns aligned with AI SDK response shapes.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with actions",
          description:
            "Chat UI actions for regenerate, stop, and tool call flows.",
          href: "/c/conversation-actions",
        },
        {
          title: "Sidebar with chat history",
          description:
            "Chat history layout suitable for AI SDK apps with long threads.",
          href: "/c/sidebar-chat-history",
        },
      ],
    },
    links: {
      title: "Related SDK pages",
      content: [
        {
          href: "/chat-ui",
          label: "Chat UI",
        },
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
  "ai-sdk": {
    overview: {
      title: "AI SDK UI overview",
      content: `AI SDK UI components provide a consistent chat UI layer across LLM providers. You need a prompt input, message list, and safe rendering for markdown, code blocks, and links. For LLM apps, the UI must also handle streaming responses, tool call previews, retries, and source citations while keeping layout stable.

Prompt-kit offers composable React chat UI components that work with AI SDK response patterns across providers like OpenAI, Mistral, and DeepSeek. You can wire the input and message list to streaming tokens, display partial outputs, and keep interaction predictable. The blocks below are designed to be SDK-agnostic while still mapping cleanly to AI SDK primitives.

Use the examples to bootstrap an AI SDK chat UI, then extend components for advanced flows like tool calls, long prompts, and multi-step conversations.`,
    },
    components: {
      title: "AI SDK UI components",
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
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Conversation with scroll to bottom",
          href: "/c/conversation-scroll-bottom",
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
      title: "AI SDK chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description: "LLM chat UI with streaming, markdown, and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "AI SDK tool call UI patterns with structured responses.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with prompt input",
          description:
            "Prompt input UX with message rendering and response streaming.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Full chat app",
          description:
            "AI SDK chat UI layout with history, states, and actions.",
          href: "/c/full-chat-app",
        },
      ],
    },
    links: {
      title: "Related SDK pages",
      content: [
        {
          href: "/chat-ui",
          label: "Chat UI",
        },
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
        id: "openai-sdk-ui",
        title: "What is OpenAI SDK UI?",
        content:
          "OpenAI SDK UI is the chat UI layer for OpenAI apps: prompt input, message list, markdown rendering, and streaming responses.",
      },
      {
        id: "openai-chat-ui-components",
        title: "Which OpenAI chat UI components are included?",
        content:
          "Prompt input, message rendering, conversation layouts, tool call UI patterns, and full chat UI examples.",
      },
      {
        id: "openai-streaming-ui",
        title: "Does it support streaming responses?",
        content:
          "Yes. The components handle incremental tokens and keep layout stable during streaming.",
      },
      {
        id: "openai-markdown-code",
        title: "Can I render markdown and code blocks?",
        content:
          "Yes. Markdown rendering and code block UI are included for model responses.",
      },
      {
        id: "openai-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
      {
        id: "openai-tool-calls",
        title: "How do I handle tool calls in the UI?",
        content:
          "Use the tool calling examples and primitives to render structured tool outputs alongside messages.",
      },
    ],
  },
  "vercel-ai-sdk": {
    title: "Frequently asked questions",
    content: [
      {
        id: "vercel-ai-sdk-ui",
        title: "What is Vercel AI SDK UI?",
        content:
          "Vercel AI SDK UI is a set of React chat UI components built to match AI SDK v5 response patterns.",
      },
      {
        id: "vercel-ai-components",
        title: "Which Vercel AI components are included?",
        content:
          "Prompt input, conversation layouts, message rendering, streaming UI, and tool call examples.",
      },
      {
        id: "ai-sdk-streaming",
        title: "Does it support AI SDK streaming?",
        content:
          "Yes. Components are built for incremental updates and stable layout during streaming.",
      },
      {
        id: "ai-sdk-chat-ui",
        title: "Can I use it for AI SDK chat UI?",
        content:
          "Yes. The blocks and primitives are aligned with Vercel AI SDK v5 usage.",
      },
      {
        id: "vercel-ai-react",
        title: "Does it work with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
      {
        id: "ai-sdk-tool-calls",
        title: "How do tool calls show up in the UI?",
        content:
          "Use the tool calling primitive to render structured tool outputs and responses.",
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
        id: "ai-sdk-ui",
        title: "What is AI SDK UI?",
        content:
          "AI SDK UI is a set of React chat UI components that work across LLM providers and SDKs.",
      },
      {
        id: "ai-sdk-components",
        title: "Which AI SDK components are included?",
        content:
          "Prompt input, message rendering, conversation layouts, streaming UI, and tool call examples.",
      },
      {
        id: "ai-sdk-llm-ui",
        title: "Is this suitable for LLM UI components?",
        content:
          "Yes. Components are designed for LLM chat UIs with streaming and tool calls.",
      },
      {
        id: "ai-sdk-compatibility",
        title: "Which providers are compatible?",
        content:
          "OpenAI, Mistral, DeepSeek, and any SDK that returns chat messages or streaming tokens.",
      },
      {
        id: "ai-sdk-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
      {
        id: "ai-sdk-tool-calls",
        title: "How do tool calls work in the UI?",
        content:
          "Use the tool calling primitive to render tool outputs and structured responses.",
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
  page_content?: {
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
