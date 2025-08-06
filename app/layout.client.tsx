"use client"

import { PromptKitLogo } from "@/components/app/icon/prompt-kit-logo"
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
  }, [setOpenMobile])

  return (
    <Sidebar className="h-full border-none shadow-none">
      <SidebarContent
        className="bg-background border-border border-r border-dashed"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex h-full flex-col pb-20 pl-0">
          <SidebarHeader className="hidden items-start px-5 pt-8 md:flex">
            <Link
              href="/"
              className="flex items-center gap-2 pl-2 text-xl font-medium tracking-tighter"
            >
              <PromptKitLogo className="h-6 w-6" />
              <h1 className="leading-none">prompt-kit</h1>
            </Link>
          </SidebarHeader>
          <SidebarGroup className="border-none pr-0 pl-2 md:px-5 md:pt-[3.6rem]">
            <SidebarGroupLabel className="text-lg md:text-sm">
              Get Started
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm",
                          isActive &&
                            "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm",
                          isActive &&
                            "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
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
                className={cn(
                  "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm",
                  pathname.includes("/blocks") &&
                    "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                )}
              >
                <Link href="/blocks" className="-m-2">
                  Blocks
                </Link>
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
              <SidebarMenuButton
                asChild
                className={cn(
                  "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm",
                  pathname.includes("/primitives") &&
                    "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                )}
              >
                <Link href="/primitives" className="relative -m-2">
                  Primitives
                  <div className="text-primary absolute top-[10px] right-[10px] text-xs leading-none">
                    new
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
              LLMs
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {llms.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm"
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
                className={cn(
                  "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm",
                  pathname.includes("/docs/showcase") &&
                    "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                )}
              >
                <Link href="/docs/showcase" className="-m-2">
                  Showcase
                </Link>
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
              Social
            </SidebarGroupLabel>
            <SidebarGroupContent className="pb-12">
              <SidebarMenu>
                {socialMenuItems.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary text-lg transition-all duration-150 md:text-sm"
                        )}
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
      </SidebarContent>
    </Sidebar>
  )
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const MOBILE_SIDEBAR_VIEWPORT_THRESHOLD = 768
  const MD_SIDEBAR_VIEWPORT_THRESHOLD = 1024

  const isBlocksPage = usePathname() === "/blocks"
  const isPrimitivesPage = usePathname() === "/primitives"
  const isComponentPage = usePathname().includes("/c/")
  const isFullStackPreview = usePathname().includes("/p/")
  const isDemoPage = usePathname().includes("/demo/")

  if (isComponentPage || isFullStackPreview || isDemoPage) {
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
          <div className="relative mx-auto grid w-full max-w-(--breakpoint-2xl) grid-cols-6 md:grid-cols-12">
            <div
              className={cn(
                "col-start-1 col-end-7 flex h-full flex-1 flex-col md:col-start-4 md:col-end-12 lg:col-end-10",
                Boolean(isBlocksPage || isPrimitivesPage) && "lg:col-end-12"
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
