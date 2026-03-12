import { CodeBlockPython } from "@/app/docs/code-block/code-block-python"
import { PromptInputWithActions } from "@/app/docs/prompt-input/prompt-input-with-actions"
import { SourceBasic } from "@/app/docs/source/source-basic"

export const slugs = [
  "openai-sdk",
  "vercel-ai-sdk",
  "chat-ui",
  "ai-sdk",
  "ai-chat-ui",
  "chat-ui-kit",
  "prompt-ui",
  "ai-sdk-components",
  "agent-ui",
  "ai-agent-ui",
  "agent-chat-ui",
  "agent-dashboard-ui",
]

export const titles = [
  "Build faster with the OpenAI SDK and ready-to-use UI",
  "Ship faster using Vercel AI SDK + beautiful components",
  "Drop-in Chat UI for modern AI apps",
  "Composable UI + API primitives for any AI SDK",
  "AI chat UI components for modern apps",
  "A complete chat UI kit for React",
  "Prompt UI components for AI apps",
  "AI SDK components for LLM apps",
  "Agent UI components for AI apps",
  "AI agent UI components for React",
  "Agent chat UI components",
  "Agent dashboard UI components",
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
    title: "Chat UI components for modern interfaces",
    description:
      "Model-agnostic chat UI components for layouts, message lists, avatars, history, and core conversation patterns.",
  },
  "ai-sdk": {
    badge: "ai sdk",
    title: "AI SDK UI components for any provider",
    description:
      "SDK-compatible UI for OpenAI, Vercel, Mistral, and more with provider-agnostic chat components.",
  },
  "ai-chat-ui": {
    badge: "ai chat ui",
    title: "AI chat UI components for model output",
    description:
      "AI-specific chat UI for streaming tokens, markdown rendering, tool calls, and rich model outputs.",
  },
  "chat-ui-kit": {
    badge: "chat ui kit",
    title: "Chat UI kit for React AI apps",
    description:
      "A chat UI kit for React apps with composable components, conversation layouts, and streaming-friendly UI.",
  },
  "prompt-ui": {
    badge: "prompt ui",
    title: "Prompt UI components for AI apps",
    description:
      "Prompt UI components for AI apps with input actions, suggestions, autocomplete, and prompt layouts.",
  },
  "ai-sdk-components": {
    badge: "ai sdk components",
    title: "AI SDK components inventory for chat UIs",
    description:
      "Concrete AI SDK UI components: prompt input, message renderer, tool call UI, and chat layouts.",
  },
  "agent-ui": {
    badge: "agent ui",
    title: "Agent UI components for workflows",
    description:
      "Agent interfaces for multi-step runs, tool execution, state changes, and reasoning UX.",
  },
  "ai-agent-ui": {
    badge: "ai agent ui",
    title: "AI agent chat UI components",
    description:
      "Chat-first agent UI for prompt → response loops, streamed outputs, and tool results.",
  },
  "agent-chat-ui": {
    badge: "agent chat ui",
    title: "Agent chat UI components for React apps",
    description:
      "Agent chat UI components for React apps with prompt input, message rendering, and tool call UX.",
  },
  "agent-dashboard-ui": {
    badge: "agent dashboard ui",
    title: "Agent dashboard UI components",
    description:
      "Agent dashboard UI components for routing, chat history, and multi-agent workflows in AI apps.",
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
  "ai-chat-ui": {
    title: "AI chat UI components for React apps",
    description:
      "AI chat UI components for React apps: prompt input, message rendering, streaming responses, markdown, and code blocks.",
    keywords: [
      "ai chat ui",
      "ai chat ui components",
      "chat ui components",
      "react chat ui",
      "streaming ui",
      "markdown",
      "code blocks",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "chat-ui-kit": {
    title: "Chat UI kit for React AI apps",
    description:
      "Chat UI kit for React AI apps with composable components, conversation layouts, and streaming-friendly UI blocks.",
    keywords: [
      "chat ui kit",
      "react chat ui kit",
      "chat ui components",
      "chat ui blocks",
      "ai chat ui",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "prompt-ui": {
    title: "Prompt UI components for AI apps",
    description:
      "Prompt UI components for AI apps, including prompt input, actions, suggestions, and autocomplete for structured prompting.",
    keywords: [
      "prompt ui",
      "prompt input ui",
      "ai prompt ui",
      "prompt components",
      "prompt input",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "ai-sdk-components": {
    title: "AI SDK components for LLM apps",
    description:
      "AI SDK components for LLM apps with chat UI primitives, tool call UI, and streaming-ready layouts.",
    keywords: [
      "ai sdk components",
      "ai sdk ui",
      "llm ui components",
      "ai chat ui",
      "tool calling",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "agent-ui": {
    title: "Agent UI components for AI apps",
    description:
      "Agent UI components for AI apps with chat UI layouts, tool call rendering, and streaming responses in React.",
    keywords: [
      "agent ui",
      "agent ui components",
      "ai agent ui",
      "agent chat ui",
      "tool calling",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "ai-agent-ui": {
    title: "AI agent UI components for React",
    description:
      "AI agent UI components for React with prompt input, chat layouts, tool calls, and streaming-friendly UI.",
    keywords: [
      "ai agent ui",
      "ai agent components",
      "agent ui",
      "agent chat ui",
      "tool calling",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "agent-chat-ui": {
    title: "Agent chat UI components for React apps",
    description:
      "Agent chat UI components for React apps with prompt input, message rendering, tool calls, and streaming.",
    keywords: [
      "agent chat ui",
      "agent ui components",
      "ai agent ui",
      "chat ui components",
      "streaming ui",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "prompt-kit",
    ],
  },
  "agent-dashboard-ui": {
    title: "Agent dashboard UI components",
    description:
      "Agent dashboard UI components for chat history, routing, and multi-agent workflows in AI apps.",
    keywords: [
      "agent dashboard ui",
      "agent ui components",
      "ai agent ui",
      "chat history ui",
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

const relatedPageClusters = {
  title: "Related pages",
  clusters: [
    {
      title: "Chat UI",
      links: [
        {
          href: "/chat-ui",
          label: "Chat UI",
        },
        {
          href: "/ai-chat-ui",
          label: "AI Chat UI",
        },
        {
          href: "/chat-ui-kit",
          label: "Chat UI Kit",
        },
      ],
    },
    {
      title: "Prompt UI",
      links: [
        {
          href: "/prompt-ui",
          label: "Prompt UI",
        },
        {
          href: "/ai-sdk-components",
          label: "AI SDK Components",
        },
      ],
    },
    {
      title: "SDK UI",
      links: [
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
    {
      title: "Agent UI",
      links: [
        {
          href: "/agent-ui",
          label: "Agent UI",
        },
        {
          href: "/ai-agent-ui",
          label: "AI Agent UI",
        },
        {
          href: "/agent-chat-ui",
          label: "Agent Chat UI",
        },
        {
          href: "/agent-dashboard-ui",
          label: "Agent Dashboard UI",
        },
      ],
    },
  ],
}

export const pageContentBySlug = {
  "chat-ui": {
    overview: {
      title: "What is a chat UI?",
      content: `A chat UI is the interface layer for conversations, regardless of model or provider. It includes a conversation layout, a message list with roles, and a message renderer that keeps long threads readable. Common building blocks are avatars, timestamps, message grouping, and a history panel for navigation.

The goal is clarity and continuity. A solid chat UI defines spacing, alignment, and affordances so users can scan messages quickly and understand context. It also includes input patterns that support multi-line prompts and consistent keyboard behavior.

This page focuses on chat UI layout patterns and components that are model-agnostic: message lists, avatars, chat history, and conversation shells. Use these building blocks to assemble a chat interface that can plug into any backend or SDK.`,
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
    links: relatedPageClusters,
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
    links: relatedPageClusters,
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
    links: relatedPageClusters,
  },
  "ai-sdk": {
    overview: {
      title: "AI SDK UI overview",
      content: `The AI SDK page is the ecosystem hub for SDK-compatible UI. It covers components that remain provider-agnostic while still mapping to SDK response shapes. That includes prompt input, message rendering, and chat layouts that work across OpenAI, Vercel AI SDK, Mistral, and other providers.

The goal is portability: use the same UI surface while swapping providers or SDKs. You wire the input and message list to the SDK stream, render partial tokens safely, and keep layout consistent across environments.

Use this page to understand how prompt-kit components align with AI SDK conventions and where they fit in a provider-agnostic UI stack.`,
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
    links: relatedPageClusters,
  },
  "ai-chat-ui": {
    overview: {
      title: "AI chat UI overview",
      content: `AI chat UI is optimized for model output. It focuses on streaming tokens, markdown rendering, code blocks, and tool call output within the conversation. The UI must handle partial responses without layout shifts and preserve readability as the model streams.

Beyond the basics, AI chat UI includes status states for “generating,” error handling, and UI affordances for retries or stop actions. It also needs a safe renderer for rich content produced by the model.

Use this page for AI-specific chat UI patterns that improve model output UX, including streaming response handling, markdown rendering, and tool call display.`,
    },
    components: {
      title: "AI chat UI components",
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
      title: "AI chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "Streaming AI chat UI with markdown rendering and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "Tool call UI patterns for structured outputs and model responses.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with prompt input",
          description: "Prompt input UX connected to the chat message list.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Full chat app",
          description:
            "Chat UI layout with history, streaming states, and actions.",
          href: "/c/full-chat-app",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "chat-ui-kit": {
    overview: {
      title: "Chat UI kit overview",
      content: `A chat UI kit is a curated set of components and layouts that cover the full chat experience. It includes a prompt input, conversation layout, message rendering, and supporting UI like history, avatars, and action menus. A good chat UI kit also handles streaming responses and long threads without layout jitter.

Prompt-kit ships a React chat UI kit built from composable blocks. You can combine prompt input variants with conversation layouts, then add chat history or full app shells. The blocks are designed to be UI-first so you can integrate your own state and data flow while keeping the structure consistent.

Use these chat UI kit examples as a base and refine the layout to match your product. Each example can be installed and customized without rewriting the underlying message UI.
`,
    },
    components: {
      title: "Chat UI kit components",
      content: [
        {
          title: "Full chat app",
          href: "/c/full-chat-app",
        },
        {
          title: "Sidebar with chat history",
          href: "/c/sidebar-chat-history",
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
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Prompt input with suggestions",
          href: "/c/prompt-input-suggestions",
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
      title: "Chat UI kit examples",
      content: [
        {
          title: "Full chat app",
          description:
            "Complete chat UI shell with history, input, and response states.",
          href: "/c/full-chat-app",
        },
        {
          title: "Sidebar with chat history",
          description:
            "Chat history layout with persistent conversation navigation.",
          href: "/c/sidebar-chat-history",
        },
        {
          title: "Conversation with prompt input",
          description: "Conversation layout with an integrated prompt input.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Conversation with actions",
          description: "Chat actions for regenerate, stop, and tool call UX.",
          href: "/c/conversation-actions",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "prompt-ui": {
    overview: {
      title: "Prompt UI overview",
      content: `Prompt UI components focus on how users write, edit, and send prompts. A strong prompt UI includes multi-line input, actions for presets or tools, suggestions, and autocomplete for structured prompting. It should also support keyboard-first workflows and predictable focus handling so users can iterate quickly.

Prompt-kit provides prompt UI blocks that are easy to wire into your app logic. You can add actions to the input, surface prompt suggestions, and highlight autocomplete without rebuilding the input surface. These components are designed to slot into chat layouts or standalone prompt tools.

Use the prompt UI examples below to implement prompt input patterns in minutes. Each block is a working React component you can customize for your own prompts, tools, and workflows.
`,
    },
    components: {
      title: "Prompt UI components",
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
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Conversation with actions",
          href: "/c/conversation-actions",
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
      ],
    },
    examples: {
      title: "Prompt UI examples",
      content: [
        {
          title: "Prompt input with actions",
          description:
            "Prompt input with primary actions and keyboard support.",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Prompt input with suggestions",
          description: "Suggestion chips for fast prompt composition.",
          href: "/c/prompt-input-suggestions",
        },
        {
          title: "Prompt input with autocomplete",
          description: "Autocomplete UI for structured prompt templates.",
          href: "/c/prompt-autocomplete-highlight",
        },
        {
          title: "Conversation with prompt input",
          description: "Prompt input embedded in a conversation layout.",
          href: "/c/conversation-prompt-input",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "ai-sdk-components": {
    overview: {
      title: "AI SDK components overview",
      content: `This page is a component inventory for AI SDK integrations. It lists the concrete UI pieces you need to wire a chat interface to an SDK response flow: prompt input, message renderer, tool call UI, and chat layouts.

Each component maps to a specific part of the response lifecycle. Prompt input captures user intent, the message renderer handles markdown and code blocks, and tool call UI displays structured outputs alongside the conversation. Layout components wrap the flow into a stable chat surface.

Use this inventory to pick the exact components you need and assemble a UI that stays compatible with your SDK integration.`,
    },
    components: {
      title: "AI SDK components",
      content: [
        {
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
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
        {
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
      ],
    },
    examples: {
      title: "AI SDK component examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "AI SDK chat UI with streaming, markdown, and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description:
            "Tool call UI patterns aligned with SDK response shapes.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with actions",
          description:
            "Chat actions for regenerate, stop, and tool call flows.",
          href: "/c/conversation-actions",
        },
        {
          title: "Sidebar with chat history",
          description: "Conversation history layout for long-running threads.",
          href: "/c/sidebar-chat-history",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "agent-ui": {
    overview: {
      title: "Agent UI overview",
      content: `Agent UI focuses on workflows rather than single-turn chats. It needs to show agent states, multi-step execution, and tool activity as the agent progresses through a task. That includes clear indicators for running, waiting, and retrying, plus UI for tool execution and intermediate outputs.

In addition to the message surface, agent UIs often expose reasoning summaries, step status, and action controls. The interface should make it easy to inspect what the agent is doing across a long run.

Use this page for agent workflow patterns: stateful runs, tool execution UI, and multi-step conversation surfaces that keep agent progress understandable.`,
    },
    components: {
      title: "Agent UI components",
      content: [
        {
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Conversation with actions",
          href: "/c/conversation-actions",
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
        {
          title: "Conversation with scroll to bottom",
          href: "/c/conversation-scroll-bottom",
        },
      ],
    },
    examples: {
      title: "Agent UI examples",
      content: [
        {
          title: "Tool calling (primitive)",
          description:
            "Agent tool call UI with structured outputs and response rendering.",
          href: "/demo/tool-calling",
        },
        {
          title: "Full chatbot (primitive)",
          description: "Streaming agent UI with markdown and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Conversation with actions",
          description:
            "Chat actions for stop, regenerate, and tool call flows.",
          href: "/c/conversation-actions",
        },
        {
          title: "Sidebar with chat history",
          description: "History layout for multi-step agent conversations.",
          href: "/c/sidebar-chat-history",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "ai-agent-ui": {
    overview: {
      title: "AI agent UI overview",
      content: `AI agent chat UI is the conversation layer for agents. It centers on the prompt → response loop while embedding tool results and streamed outputs directly in the chat. This keeps the agent interaction readable even when a run spans multiple steps.

The UI should handle partial responses, tool call output, and state changes without breaking the flow. Users need to see when the agent is thinking, executing tools, or returning a final response.

Use this page for agent chat patterns: prompt loops, streamed outputs, and tool results rendered inline with the conversation.`,
    },
    components: {
      title: "AI agent UI components",
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
      title: "AI agent UI examples",
      content: [
        {
          title: "Tool calling (primitive)",
          description: "Agent tool call UI patterns with structured outputs.",
          href: "/demo/tool-calling",
        },
        {
          title: "Full chatbot (primitive)",
          description: "Streaming agent chat UI with markdown and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Conversation with actions",
          description: "Chat actions for agent flows and tool call states.",
          href: "/c/conversation-actions",
        },
        {
          title: "Full chat app",
          description: "Agent UI layout with history and streaming states.",
          href: "/c/full-chat-app",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "agent-chat-ui": {
    overview: {
      title: "Agent chat UI overview",
      content: `Agent chat UI components provide the messaging surface for AI agents. You need a prompt input, message list with roles, and rendering for markdown and code. Agent chat UIs also need tool call output, streaming responses, and clear system or assistant states so users can follow the agent’s progress.

Prompt-kit offers React chat UI components that work well for agent workflows. You can attach the input to your agent runtime, stream partial responses, and keep the layout stable across multi-step actions. The blocks below give you production-ready layouts for agent chat with tool call UI and conversation history.

Use these examples to ship an agent chat UI quickly, then refine message rendering and action controls to match your product.
`,
    },
    components: {
      title: "Agent chat UI components",
      content: [
        {
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
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
          title: "Conversation with scroll to bottom",
          href: "/c/conversation-scroll-bottom",
        },
        {
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
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
      title: "Agent chat UI examples",
      content: [
        {
          title: "Full chatbot (primitive)",
          description:
            "Agent chat UI with streaming, markdown, and code blocks.",
          href: "/demo/chatbot",
        },
        {
          title: "Tool calling (primitive)",
          description: "Tool call output UI for agent workflows.",
          href: "/demo/tool-calling",
        },
        {
          title: "Conversation with prompt input",
          description: "Prompt input integrated into an agent chat layout.",
          href: "/c/conversation-prompt-input",
        },
        {
          title: "Conversation with actions",
          description: "Actions for stop, regenerate, and tool call states.",
          href: "/c/conversation-actions",
        },
      ],
    },
    links: relatedPageClusters,
  },
  "agent-dashboard-ui": {
    overview: {
      title: "Agent dashboard UI overview",
      content: `Agent dashboard UI components help teams manage multi-agent workflows, chat history, and routing in one place. A dashboard typically includes navigation, conversation lists, status views, and detailed chat panels with streaming responses. It should make it easy to inspect agent output, tool calls, and message history side by side.

Prompt-kit provides composable React layouts that fit this model. Use chat history sidebars, conversation layouts, and full chat shells to assemble a dashboard without rebuilding message UI. Pair these with tool calling primitives to expose structured outputs for each agent run.

Use the examples below to build a dashboard UI that supports long-running agent workflows while keeping the conversation readable and organized.
`,
    },
    components: {
      title: "Agent dashboard UI components",
      content: [
        {
          title: "Sidebar with chat history",
          href: "/c/sidebar-chat-history",
        },
        {
          title: "Full chat app",
          href: "/c/full-chat-app",
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
          title: "Prompt input with actions",
          href: "/c/prompt-input-actions",
        },
        {
          title: "Tool calling (primitive)",
          href: "/demo/tool-calling",
        },
        {
          title: "Full chatbot (primitive)",
          href: "/demo/chatbot",
        },
        {
          title: "Conversation with prompt input",
          href: "/c/conversation-prompt-input",
        },
      ],
    },
    examples: {
      title: "Agent dashboard UI examples",
      content: [
        {
          title: "Sidebar with chat history",
          description: "Dashboard layout with conversation history navigation.",
          href: "/c/sidebar-chat-history",
        },
        {
          title: "Full chat app",
          description:
            "Agent dashboard chat panel with history and streaming states.",
          href: "/c/full-chat-app",
        },
        {
          title: "Conversation with actions",
          description: "Action controls for agent runs and tool call flows.",
          href: "/c/conversation-actions",
        },
        {
          title: "Tool calling (primitive)",
          description: "Structured tool call output for dashboard inspection.",
          href: "/demo/tool-calling",
        },
      ],
    },
    links: relatedPageClusters,
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
  "ai-chat-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "ai-chat-ui-definition",
        title: "What is an AI chat UI?",
        content:
          "An AI chat UI is the interface layer for conversational apps: prompt input, message list, and response rendering for markdown and code.",
      },
      {
        id: "ai-chat-ui-components",
        title: "Which AI chat UI components are included?",
        content:
          "Prompt input variants, conversation layouts, message rendering, and tool call UI patterns.",
      },
      {
        id: "ai-chat-ui-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Components handle incremental token updates and keep layout stable during streaming.",
      },
      {
        id: "ai-chat-ui-markdown",
        title: "Can I render markdown and code blocks?",
        content:
          "Yes. Markdown rendering and syntax-highlighted code blocks are included.",
      },
      {
        id: "ai-chat-ui-actions",
        title: "How do I add prompt input actions?",
        content:
          "Use the Prompt Input component and add custom actions for presets, uploads, or tools.",
      },
      {
        id: "ai-chat-ui-sdk",
        title: "Which SDKs are compatible?",
        content:
          "OpenAI, Vercel AI SDK v5, and any SDK that returns chat messages or streaming tokens.",
      },
    ],
  },
  "chat-ui-kit": {
    title: "Frequently asked questions",
    content: [
      {
        id: "chat-ui-kit-definition",
        title: "What is a chat UI kit?",
        content:
          "A chat UI kit is a set of components and layouts that cover prompt input, message rendering, and conversation structure.",
      },
      {
        id: "chat-ui-kit-components",
        title: "What components are included in the kit?",
        content:
          "Prompt input variants, conversation layouts, chat history shells, and full chat app blocks.",
      },
      {
        id: "chat-ui-kit-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Layouts and message rendering are built for streaming updates.",
      },
      {
        id: "chat-ui-kit-customize",
        title: "Can I customize layouts and styles?",
        content:
          "Yes. Components are composable and designed to adapt to your design system.",
      },
      {
        id: "chat-ui-kit-react",
        title: "Does it work with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
      {
        id: "chat-ui-kit-install",
        title: "How do I install the blocks?",
        content:
          "Use the shadcn CLI to install any block or primitive with one command.",
      },
    ],
  },
  "prompt-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "prompt-ui-definition",
        title: "What is prompt UI?",
        content:
          "Prompt UI is the input layer for AI apps: multi-line input, actions, and structured prompt helpers.",
      },
      {
        id: "prompt-ui-components",
        title: "Which prompt UI components are included?",
        content:
          "Prompt input with actions, suggestions, autocomplete, and conversation-integrated input blocks.",
      },
      {
        id: "prompt-ui-autocomplete",
        title: "Does it support suggestions and autocomplete?",
        content:
          "Yes. Use prompt suggestions and autocomplete blocks for structured prompting.",
      },
      {
        id: "prompt-ui-chat",
        title: "Can I embed prompt UI in a chat layout?",
        content:
          "Yes. Use the conversation blocks that include a prompt input.",
      },
      {
        id: "prompt-ui-keyboard",
        title: "Is it optimized for keyboard-first input?",
        content:
          "Yes. Input components support predictable focus and keyboard submission.",
      },
      {
        id: "prompt-ui-install",
        title: "How do I install prompt UI blocks?",
        content:
          "Use the shadcn CLI to install any block or primitive with one command.",
      },
    ],
  },
  "ai-sdk-components": {
    title: "Frequently asked questions",
    content: [
      {
        id: "ai-sdk-components-definition",
        title: "What are AI SDK components?",
        content:
          "AI SDK components are UI building blocks that map to SDK response flows: input, messages, and streaming states.",
      },
      {
        id: "ai-sdk-components-included",
        title: "Which AI SDK components are included?",
        content:
          "Prompt input variants, conversation layouts, message rendering, and tool call UI patterns.",
      },
      {
        id: "ai-sdk-components-tool-calls",
        title: "Do they support tool calls?",
        content:
          "Yes. Use the tool calling primitive to render structured outputs and responses.",
      },
      {
        id: "ai-sdk-components-providers",
        title: "Can I use them across providers?",
        content:
          "Yes. Works with OpenAI, Mistral, DeepSeek, and any compatible SDK.",
      },
      {
        id: "ai-sdk-components-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Components are built for incremental token updates and stable layout.",
      },
      {
        id: "ai-sdk-components-react",
        title: "Can I use them with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
    ],
  },
  "agent-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "agent-ui-definition",
        title: "What is agent UI?",
        content:
          "Agent UI is the interface layer for AI agents: prompt input, message rendering, tool calls, and streaming states.",
      },
      {
        id: "agent-ui-components",
        title: "Which agent UI components are included?",
        content:
          "Prompt input variants, conversation layouts, chat history shells, and tool call UI patterns.",
      },
      {
        id: "agent-ui-tool-calls",
        title: "Does it support tool calls?",
        content:
          "Yes. Use the tool calling primitive to render structured outputs and responses.",
      },
      {
        id: "agent-ui-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Components are built for incremental tokens and stable layout.",
      },
      {
        id: "agent-ui-states",
        title: "How do I show agent states?",
        content:
          "Use conversation actions and layout states to expose running, waiting, and retrying.",
      },
      {
        id: "agent-ui-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
    ],
  },
  "ai-agent-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "ai-agent-ui-definition",
        title: "What is AI agent UI?",
        content:
          "AI agent UI is the chat UI and tool call surface for agent workflows and multi-step responses.",
      },
      {
        id: "ai-agent-ui-components",
        title: "Which AI agent UI components are included?",
        content:
          "Prompt input, conversation layouts, streaming UI, and tool call rendering.",
      },
      {
        id: "ai-agent-ui-tool-calls",
        title: "Does it support tool calls?",
        content: "Yes. Use the tool calling primitive for structured outputs.",
      },
      {
        id: "ai-agent-ui-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Components support incremental updates with stable layout.",
      },
      {
        id: "ai-agent-ui-sdk",
        title: "Which SDKs are compatible?",
        content:
          "OpenAI, Vercel AI SDK v5, and any SDK that returns chat messages or streaming tokens.",
      },
      {
        id: "ai-agent-ui-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
    ],
  },
  "agent-chat-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "agent-chat-ui-definition",
        title: "What is agent chat UI?",
        content:
          "Agent chat UI is the messaging interface for AI agents: prompt input, messages, and tool call output.",
      },
      {
        id: "agent-chat-ui-components",
        title: "Which agent chat UI components are included?",
        content:
          "Prompt input, conversation layouts, message rendering, and tool call UI patterns.",
      },
      {
        id: "agent-chat-ui-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Streaming-friendly layouts keep chat stable during generation.",
      },
      {
        id: "agent-chat-ui-tool-calls",
        title: "Can I render tool call output?",
        content: "Yes. Use the tool calling primitive for structured outputs.",
      },
      {
        id: "agent-chat-ui-history",
        title: "Does it include chat history UI?",
        content: "Yes. Use the sidebar chat history block for navigation.",
      },
      {
        id: "agent-chat-ui-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
      },
    ],
  },
  "agent-dashboard-ui": {
    title: "Frequently asked questions",
    content: [
      {
        id: "agent-dashboard-ui-definition",
        title: "What is agent dashboard UI?",
        content:
          "Agent dashboard UI is the layout for managing chat history, routing, and multi-agent workflows.",
      },
      {
        id: "agent-dashboard-ui-components",
        title: "Which dashboard components are included?",
        content:
          "Chat history sidebars, conversation layouts, and full chat app shells.",
      },
      {
        id: "agent-dashboard-ui-history",
        title: "Does it include chat history navigation?",
        content: "Yes. Use the sidebar chat history block for navigation.",
      },
      {
        id: "agent-dashboard-ui-tool-calls",
        title: "Can I show tool call output in the dashboard?",
        content: "Yes. The tool calling primitive renders structured outputs.",
      },
      {
        id: "agent-dashboard-ui-streaming",
        title: "Does it support streaming responses?",
        content:
          "Yes. Layouts are built for incremental updates and stable rendering.",
      },
      {
        id: "agent-dashboard-ui-react",
        title: "Can I use it with React and Next.js?",
        content:
          "Yes. Works with Next.js, Vite, Remix, and other React frameworks.",
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
      clusters: {
        title: string
        links: {
          href: string
          label: string
        }[]
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
