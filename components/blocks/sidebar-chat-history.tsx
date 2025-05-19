"use client"

import { Input } from "@/components/ui/input"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { MessageCircleIcon, PlusIcon } from "lucide-react"

function SidebarWithChatHistory() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageCircleIcon className="h-5 w-5" />
          <span className="font-semibold">Chat History</span>
        </div>
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Recent Conversations</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuButton>
              <MessageCircleIcon className="h-4 w-4" />
              <span>Project Planning</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <MessageCircleIcon className="h-4 w-4" />
              <span>Code Review</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <MessageCircleIcon className="h-4 w-4" />
              <span>Bug Discussion</span>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Archived</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuButton>
              <MessageCircleIcon className="h-4 w-4" />
              <span>Old Project</span>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <MessageCircleIcon className="h-4 w-4" />
              <span>Previous Sprint</span>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
        <div className="mt-auto p-2">
          <SidebarMenuButton className="w-full justify-center">
            <PlusIcon className="h-4 w-4" />
            <span>New Chat</span>
          </SidebarMenuButton>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}

function AppContent() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
      </header>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
          <div className="bg-muted/50 aspect-video rounded-xl" />
        </div>
        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
      </div>
    </main>
  )
}

function SidebarChatHistory() {
  return (
    <SidebarProvider>
      <SidebarWithChatHistory />
      <SidebarInset>
        <AppContent />
      </SidebarInset>
    </SidebarProvider>
  )
}

export { SidebarChatHistory }
