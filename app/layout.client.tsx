"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
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

function AppSidebar() {
  const currentPath = usePathname()
  const { setOpenMobile } = useSidebar()
  const pathname = usePathname()

  useEffect(() => {
    setOpenMobile(false)
  }, [pathname, setOpenMobile])

  return (
    <Sidebar className="h-full border-none bg-white shadow-none">
      <SidebarContent className="border-none bg-white pt-0 pl-0 min-[1184px]:pt-[7.4rem] min-[1184px]:pl-20">
        <SidebarGroup className="border-none bg-white">
          <SidebarGroupLabel className="text-lg min-[1184px]:text-sm">
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
                          "bg-sidebar-accent text-sidebar-accent-foreground",
                        "text-lg min-[1184px]:text-sm"
                      )}
                    >
                      <Link
                        href={item.url}
                        className="text-lg min-[1184px]:text-sm"
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className="mt-8 text-lg min-[1184px]:text-sm">
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
                          "bg-sidebar-accent text-sidebar-accent-foreground",
                        "text-lg min-[1184px]:text-sm"
                      )}
                    >
                      <Link
                        href={item.url}
                        className="text-lg min-[1184px]:text-sm"
                      >
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroupLabel className="mt-8 text-lg min-[1184px]:text-sm">
            Social
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {socialMenuItems.map((item) => {
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className="text-lg min-[1184px]:text-sm"
                    >
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg min-[1184px]:text-sm"
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
      </SidebarContent>
    </Sidebar>
  )
}

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const MOBILE_SIDEBAR_VIEWPORT_THRESHOLD = 1184

  return (
    <SidebarProvider
      defaultOpen={true}
      viewportWidth={MOBILE_SIDEBAR_VIEWPORT_THRESHOLD}
    >
      <div className="w-full">
        <Header triggerViewportWidth={MOBILE_SIDEBAR_VIEWPORT_THRESHOLD} />
        <div className="flex h-full px-4 pt-32">
          <div className="mx-auto flex w-full max-w-2xl flex-col">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
        <AppSidebar />
      </div>
    </SidebarProvider>
  )
}
