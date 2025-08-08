"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { SidebarProvider } from "./app-sidebar"
import { Footer } from "./footer"
import { Header } from "./header"
import { AppSidebar, integrationsMenuItems } from "./sidebar"

export function LayoutClient({ children }: { children: React.ReactNode }) {
  const MOBILE_SIDEBAR_VIEWPORT_THRESHOLD = 768
  const MD_SIDEBAR_VIEWPORT_THRESHOLD = 1024

  const isBlocksPage = usePathname() === "/blocks"
  const isPrimitivesPage = usePathname() === "/primitives"
  const isComponentPage = usePathname().includes("/c/")
  const isFullStackPreview = usePathname().includes("/p/")
  const isDemoPage = usePathname().includes("/demo/")
  const isLanding = integrationsMenuItems
    ?.map((item) => item.url)
    .includes(usePathname())

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
                Boolean(isBlocksPage || isPrimitivesPage || isLanding) &&
                  "lg:col-end-12"
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
