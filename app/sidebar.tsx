"use client"

import { PromptKitLogo } from "@/components/app/icon/prompt-kit-logo"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { Laptop, Moon, Sun } from "lucide-react"
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
    isNew: route.isNew ?? false,
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

function ButtonThemeCycleToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const current = theme ?? "light"
  const next =
    current === "light" ? "dark" : current === "dark" ? "system" : "light"

  const handleClick = () => {
    setTheme(next)
  }

  const label =
    current === "system" ? "System" : current === "dark" ? "Dark" : "Light"

  return (
    <SidebarMenuButton
      type="button"
      onClick={handleClick}
      className={cn(
        "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm flex items-center gap-2"
      )}
      aria-label={`Theme: ${label}. Click to switch to ${next}`}
    >
      {current === "light" && <Sun className="h-4 w-4 text-amber-500 shrink-0" />}
      {current === "dark" && <Moon className="h-4 w-4 text-blue-400 shrink-0" />}
      {current === "system" && <Laptop className="h-4 w-4 text-zinc-500 dark:text-zinc-400 shrink-0" />}
      <span className="capitalize">{label}</span>
    </SidebarMenuButton>
  )
}

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
        className="bg-sidebar border-border relative border-r border-dashed"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex h-full flex-col pb-20 pl-0">
          <SidebarHeader className="hidden items-start px-5 pt-8 md:flex">
            <Link
              href="/"
              className="flex items-center gap-2.5 pl-1 text-xl font-semibold tracking-tight transition-opacity hover:opacity-90"
            >
              <PromptKitLogo className="size-5.5 text-zinc-950 dark:text-zinc-50" />
              <h1 className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-zinc-100 dark:to-zinc-400 bg-clip-text text-transparent font-semibold leading-none">
                prompt-kit
              </h1>
            </Link>
          </SidebarHeader>
          <SidebarGroup className="border-none pr-0 pl-2 md:px-5 md:pt-[3.6rem]">
            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-4 mb-1">
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                          isActive &&
                          "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                        )}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              Components
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {componentsMenuItems.map((item) => {
                  const isActive = currentPath === item.url
                  const showNewBadge = item.isNew

                  return (
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                          isActive &&
                          "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                        )}
                      >
                        <Link
                          href={item.url}
                          className={cn(
                            "flex items-center gap-2",
                            showNewBadge && "text-inherit"
                          )}
                        >
                          <span>{item.title}</span>
                          {showNewBadge && (
                            <span className="bg-primary/10 dark:bg-primary/20 text-primary text-[10px] font-medium px-1.5 py-0.5 rounded-full scale-90 leading-none">
                              new
                            </span>
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              Advanced
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="flex">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                      pathname.includes("/blocks") &&
                      "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                    )}
                  >
                    <Link href="/blocks">
                      Blocks
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="flex">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                      pathname.includes("/primitives") &&
                      "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                    )}
                  >
                    <Link href="/primitives" className="flex items-center gap-2">
                      <span>Primitives</span>
                      <span className="bg-primary/10 dark:bg-primary/20 text-primary text-[10px] font-medium px-1.5 py-0.5 rounded-full scale-90 leading-none">
                        new
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
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
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                          isActive &&
                          "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                        )}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              LLMs
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {llms.map((item) => {
                  const isActive = currentPath === item.url
                  return (
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                          isActive &&
                          "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                        )}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              Gallery
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="flex">
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm",
                      pathname.includes("/docs/showcase") &&
                      "text-primary bg-primary/[0.04] dark:bg-primary/[0.06] border-l-2 border-primary pl-2.5 rounded-r-md font-medium rounded-l-none"
                    )}
                  >
                    <Link href="/docs/showcase">
                      Showcase
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              Social
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {socialMenuItems.map((item) => {
                  return (
                    <SidebarMenuItem key={item.title} className="flex">
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "hover:bg-sidebar-accent/50 active:bg-sidebar-accent/50 hover:text-primary w-full text-lg transition-all duration-200 ease-in-out md:text-sm"
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

            <SidebarGroupLabel className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60 px-2 mt-6 mb-1">
              Theme
            </SidebarGroupLabel>
            <SidebarGroupContent className="pb-12">
              <ButtonThemeCycleToggle />
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}
