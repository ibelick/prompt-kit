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
  useSidebar,
} from "./app-sidebar"
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

export const integrationsMenuItems = [
  {
    title: "OpenAI SDK",
    url: "/openai-sdk",
  },
  {
    title: "Vercel AI SDK",
    url: "/vercel-ai-sdk",
  },
  {
    title: "Chat UI",
    url: "/chat-ui",
  },
  {
    title: "AI SDK",
    url: "/ai-sdk",
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

export function AppSidebar() {
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
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
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
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
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
            <SidebarGroupContent>
              <SidebarGroupLabel className="mt-8 flex text-lg md:text-sm">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
                    pathname.includes("/blocks") &&
                      "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                  )}
                >
                  <Link href="/blocks" className="-m-2">
                    Blocks
                  </Link>
                </SidebarMenuButton>
              </SidebarGroupLabel>
              <SidebarGroupLabel className="mt-8 flex text-lg md:text-sm">
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
                    pathname.includes("/primitives") &&
                      "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                  )}
                >
                  <Link href="/primitives" className="relative -m-2 gap-2">
                    Primitives
                    <div className="text-primary text-xs leading-none">new</div>
                  </Link>
                </SidebarMenuButton>
              </SidebarGroupLabel>
            </SidebarGroupContent>
            <SidebarGroupLabel className="mt-8 text-lg md:text-sm">
              Integrations
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {integrationsMenuItems.map((item) => {
                  const isActive = currentPath === item.url

                  return (
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
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
            <SidebarGroupLabel className="mt-8 flex text-lg md:text-sm">
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm"
                        )}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
            <SidebarGroupLabel className="mt-8 flex text-lg md:text-sm">
              <SidebarMenuButton
                asChild
                className={cn(
                  "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm",
                  pathname.includes("/docs/showcase") &&
                    "text-primary bg-sidebar-accent hover:bg-sidebar-accent font-medium"
                )}
              >
                <Link href="/docs/showcase" className="-m-2">
                  Showcase
                </Link>
              </SidebarMenuButton>
            </SidebarGroupLabel>
            <SidebarGroupLabel className="mt-8 flex text-lg md:text-sm">
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-auto text-lg transition-all duration-150 md:text-sm"
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
