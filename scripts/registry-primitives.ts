export const primitives = [
  {
    name: "chatbot",
    type: "registry:item",
    title: "Chatbot",
    description:
      "A chatbot component that allows users to chat with an AI model. It uses prompt-kit, shadcn/ui, and AI SDK V5.",
    dependencies: [
      "ai",
      "@ai-sdk/openai",
      "zod",
      "@ai-sdk/react",
      "use-stick-to-bottom",
      "react-markdown",
      "remark-gfm",
      "shiki",
      "marked",
      "remark-breaks",
    ],
    registryDependencies: ["avatar", "tooltip", "textarea"],
    files: [
      {
        path: "components/primitives/chatbot.tsx",
        type: "registry:component",
      },
      {
        path: "app/api/primitives/chatbot/route.ts",
        type: "registry:file",
      },
      {
        path: "components/prompt-kit/chat-container.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/loader.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/message.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/prompt-input.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/markdown.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/code-block.tsx",
        type: "registry:component",
      },
    ],
    envVars: {
      OPENAI_API_KEY: "",
    },
  },
  {
    name: "tool-calling",
    type: "registry:item",
    title: "Tool calling",
    description:
      "A chatbot with tool calling feature. It uses prompt-kit, shadcn/ui, and AI SDK V5.",
    dependencies: [
      "ai",
      "@ai-sdk/openai",
      "zod",
      "@ai-sdk/react",
      "use-stick-to-bottom",
      "react-markdown",
      "remark-gfm",
      "shiki",
      "marked",
      "remark-breaks",
    ],
    registryDependencies: ["avatar", "tooltip", "textarea"],
    files: [
      {
        path: "components/primitives/tool-calling.tsx",
        type: "registry:component",
      },
      {
        path: "app/api/primitives/tool-calling/route.ts",
        type: "registry:file",
      },
      {
        path: "components/prompt-kit/chat-container.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/loader.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/message.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/prompt-input.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/markdown.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/code-block.tsx",
        type: "registry:component",
      },
      {
        path: "components/prompt-kit/tool.tsx",
        type: "registry:component",
      },
    ],
    envVars: {
      OPENAI_API_KEY: "",
    },
  },
]
