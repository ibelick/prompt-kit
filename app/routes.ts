export type Route = {
  path: string
  label: string
  order: number
  type: "component" | "core"
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
    label: "Documentation",
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
    path: "/docs/prompt-input",
    label: "Prompt Input",
    order: 3,
    type: "component",
  },
  {
    path: "/docs/message",
    label: "Message",
    order: 4,
    type: "component",
  },
  {
    path: "/docs/markdown",
    label: "Markdown",
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
    path: "/docs/chat-container",
    label: "Chat Container",
    order: 7,
    type: "component",
  },
  {
    path: "/docs/scroll-button",
    label: "Scroll Button",
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
    path: "/docs/prompt-suggestion",
    label: "Prompt Suggestion",
    order: 10,
    type: "component",
  },
  {
    path: "/docs/response-stream",
    label: "Response Stream",
    order: 11,
    type: "component",
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
