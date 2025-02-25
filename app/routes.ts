export type Route = {
  path: string
  label: string
  order: number
}

export const routes: Route[] = [
  {
    path: "/",
    label: "Home",
    order: 0,
  },
  {
    path: "/docs/introduction",
    label: "Documentation",
    order: 1,
  },
  {
    path: "/docs/installation",
    label: "Installation",
    order: 2,
  },
  {
    path: "/docs/prompt-input",
    label: "Prompt Input",
    order: 3,
  },
  {
    path: "/docs/message",
    label: "Message",
    order: 4,
  },
  {
    path: "/docs/markdown",
    label: "Markdown",
    order: 5,
  },
  {
    path: "/docs/code-block",
    label: "Code Block",
    order: 6,
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
