"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "./app-sidebar"
import { Footer } from "./footer"
import { Header } from "./header"
import { routes } from "./routes"

const coreMenuItems = routes
  .filter((route) => route.type === "core")
  .map((route) => ({
    title: route.label,
    url: route.path,
  }))

const componentsMenuItems = routes
  .filter((route) => route.type === "component")
  .map((route) => ({
    title: route.label,
    url: route.path,
  }))

const blocksMenuItems = routes
  .filter((route) => route.type === "block")
  .map((route) => ({
    title: route.label,
    url: route.path,
  }))

const socialMenuItems = [
  {
    title: "GitHub",
    url: "https://github.com/ibelick/prompt-kit",
  },
  {
    title: "X (Twitter)",
    url: "https://twitter.com/ibelick",
  },
]

const llms = [
  {
    title: "llms.txt",
    url: "/llms.txt",
  },
  {
    title: "llms-full.txt",
    url: "/llms-full.txt",
  },
]

function AppSidebar() {
  const currentPath = usePathname()
  const { setOpenMobile } = useSidebar()
  const pathname = usePathname()

  useEffect(() => {
    setOpenMobile(false)
  }, [pathname, setOpenMobile])

  return (
    <Sidebar className="h-full border-none shadow-none">
      <SidebarContent className="bg-muted/30 border-none">
        <ScrollArea className="h-full p-0">
          <div className="flex h-full flex-col pb-20 pl-0">
            <SidebarHeader className="hidden px-5 pt-8 md:block">
              <Link
                href="/"
                className="flex items-center text-xl font-medium tracking-tighter"
              >
                <h1 className="pl-2">prompt-kit</h1>
              </Link>
            </SidebarHeader>
            <SidebarGroup className="border-none pr-0 pl-2 md:px-5 md:pt-[3.6rem]">
              <SidebarGroupLabel className="text-lg md:text-sm">
                Core
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {coreMenuItems.map((item) => {
                    const isActive = currentPath === item.url

                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            isActive &&
                              "text-sidebar-accent-foreground font-semibold",
                            "text-lg hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm",
                            "transition-all duration-200"
                          )}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupLabel className={cn("mt-8 text-lg md:text-sm")}>
                Components
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {componentsMenuItems.map((item) => {
                    const isActive = currentPath === item.url

                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            isActive &&
                              "text-sidebar-accent-foreground font-semibold",
                            "text-lg hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm",
                            "transition-all duration-200"
                          )}
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
                <SidebarMenuButton
                  asChild
                  className="bg-transparent text-lg transition-all duration-200 hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm"
                >
                  <Link href="/blocks" className="-m-2">
                    Blocks
                  </Link>
                </SidebarMenuButton>
              </SidebarGroupLabel>
              <SidebarGroupLabel className={cn("mt-8 text-lg md:text-sm")}>
                LLMs
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {llms.map((item) => {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className="bg-transparent text-lg transition-all duration-200 hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm"
                        >
                          <Link href={item.url}>{item.title}</Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
              <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
                <SidebarMenuButton
                  asChild
                  className="bg-transparent text-lg transition-all duration-200 hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm"
                >
                  <Link href="/docs/showcase" className="-m-2">
                    Showcase
                  </Link>
                </SidebarMenuButton>
              </SidebarGroupLabel>
              <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
                Social
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {socialMenuItems.map((item) => {
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          className="bg-transparent text-lg transition-all duration-200 hover:bg-transparent hover:font-semibold active:bg-transparent md:text-sm"
                        >
                          <Link
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.title}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
        </ScrollArea>
      </SidebarContent>
    </Sidebar>
  )
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const MOBILE_SIDEBAR_VIEWPORT_THRESHOLD = 768
  const MD_SIDEBAR_VIEWPORT_THRESHOLD = 1024

  const isBlocksPage = usePathname() === "/blocks"
  const isComponentPage = usePathname().includes("/c/")

  if (isComponentPage) {
    return <>{children}</>
  }

  return (
    <SidebarProvider
      defaultOpen={true}
      viewportWidth={MOBILE_SIDEBAR_VIEWPORT_THRESHOLD}
      mdViewportWidth={MD_SIDEBAR_VIEWPORT_THRESHOLD}
    >
      <div className="w-full">
        <Header triggerViewportWidth={MOBILE_SIDEBAR_VIEWPORT_THRESHOLD} />
        <div className="flex h-full px-4 pt-32">
          <div className="relative mx-auto grid w-full max-w-screen-2xl grid-cols-6 md:grid-cols-12">
            <div
              className={cn(
                "col-start-1 col-end-7 flex h-full flex-1 flex-col md:col-start-4 md:col-end-12 lg:col-end-10",
                isBlocksPage && "lg:col-end-12"
              )}
            >
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
        <AppSidebar />
      </div>
    </SidebarProvider>
  )
}
