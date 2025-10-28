export type Route = {
  path: string
  label: string
  order: number
  type: "component" | "core" | "block" | "primitive"
  isNew?: boolean
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
    order: 0,
    type: "core",
  },
  {
    path: "/docs/introduction",
    label: "Introduction",
    order: 1,
    type: "core",
  },
  {
    path: "/docs/installation",
    label: "Installation",
    order: 2,
    type: "core",
  },
  {
    path: "/docs/mcp",
    label: "Model Context Protocol",
    order: 3,
    type: "core",
  },
  // Components
  {
    path: "/docs/chain-of-thought",
    label: "Chain of Thought",
    order: 4,
    type: "component",
    isNew: true,
  },
  {
    path: "/docs/chat-container",
    label: "Chat Container",
    order: 5,
    type: "component",
  },
  {
    path: "/docs/code-block",
    label: "Code Block",
    order: 6,
    type: "component",
  },
  {
    path: "/docs/file-upload",
    label: "File Upload",
    order: 7,
    type: "component",
  },
  {
    path: "/docs/image",
    label: "Image",
    order: 8,
    type: "component",
  },
  {
    path: "/docs/loader",
    label: "Loader",
    order: 9,
    type: "component",
  },
  {
    path: "/docs/markdown",
    label: "Markdown",
    order: 10,
    type: "component",
  },
  {
    path: "/docs/message",
    label: "Message",
    order: 11,
    type: "component",
  },
  {
    path: "/docs/prompt-input",
    label: "Prompt Input",
    order: 12,
    type: "component",
  },
  {
    path: "/docs/prompt-suggestion",
    label: "Prompt Suggestion",
    order: 13,
    type: "component",
  },
  {
    path: "/docs/reasoning",
    label: "Reasoning",
    order: 14,
    type: "component",
  },
  {
    path: "/docs/scroll-button",
    label: "Scroll Button",
    order: 15,
    type: "component",
  },
  {
    path: "/docs/source",
    label: "Source",
    order: 16,
    type: "component",
  },
  {
    path: "/docs/steps",
    label: "Steps",
    order: 17,
    type: "component",
  },
  {
    path: "/docs/system-message",
    label: "System Message",
    order: 18,
    type: "component",
  },
  {
    path: "/docs/tool",
    label: "Tool",
    order: 19,
    type: "component",
  },
  // Blocks
  {
    path: "/blocks",
    label: "Blocks",
    order: 20,
    type: "block",
  },
  // Primitives
  {
    path: "/primitives",
    label: "Primitives",
    order: 21,
    type: "primitive",
  },
]

export function getNavigation(currentPath: string) {
  const currentIndex = routes.findIndex((route) => route.path === currentPath)

  if (currentIndex === -1) return null

  return {
    prev: currentIndex > 0 ? routes[currentIndex - 1] : null,
    current: routes[currentIndex],
    next: currentIndex < routes.length - 1 ? routes[currentIndex + 1] : null,
  }
}
