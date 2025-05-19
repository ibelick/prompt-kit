"use client"

import { Button } from "@/components/ui/button"
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
import { PlusIcon, Search } from "lucide-react"

const conversationHistory = [
  {
    period: "Today",
    conversations: [
      {
        id: "t1",
        title: "Project Roadmap Discussion",
        lastMessage:
          "Let's prioritize the authentication features for the next sprint.",
        timestamp: new Date().setHours(new Date().getHours() - 2),
      },
      {
        id: "t2",
        title: "API Documentation Review",
        lastMessage:
          "The endpoint descriptions need more detail about rate limiting.",
        timestamp: new Date().setHours(new Date().getHours() - 5),
      },
      {
        id: "t3",
        title: "Frontend Bug Analysis",
        lastMessage:
          "I found the issue - we need to handle the null state in the user profile component.",
        timestamp: new Date().setHours(new Date().getHours() - 8),
      },
    ],
  },
  {
    period: "Yesterday",
    conversations: [
      {
        id: "y1",
        title: "Database Schema Design",
        lastMessage:
          "Let's add indexes to improve query performance on these tables.",
        timestamp: new Date().setDate(new Date().getDate() - 1),
      },
      {
        id: "y2",
        title: "Performance Optimization",
        lastMessage:
          "The lazy loading implementation reduced initial load time by 40%.",
        timestamp: new Date().setDate(new Date().getDate() - 1),
      },
    ],
  },
  {
    period: "Last 7 days",
    conversations: [
      {
        id: "w1",
        title: "Authentication Flow",
        lastMessage: "We should implement the OAuth2 flow with refresh tokens.",
        timestamp: new Date().setDate(new Date().getDate() - 3),
      },
      {
        id: "w2",
        title: "Component Library",
        lastMessage:
          "These new UI components follow the design system guidelines perfectly.",
        timestamp: new Date().setDate(new Date().getDate() - 5),
      },
      {
        id: "w3",
        title: "UI/UX Feedback",
        lastMessage:
          "The navigation redesign received positive feedback from the test group.",
        timestamp: new Date().setDate(new Date().getDate() - 6),
      },
    ],
  },
  {
    period: "Last month",
    conversations: [
      {
        id: "m1",
        title: "Initial Project Setup",
        lastMessage:
          "All the development environments are now configured consistently.",
        timestamp: new Date().setDate(new Date().getDate() - 15),
      },
      {
        id: "m2",
        title: "Requirements Gathering",
        lastMessage:
          "The stakeholders approved the feature specifications document.",
        timestamp: new Date().setDate(new Date().getDate() - 22),
      },
      {
        id: "m3",
        title: "Tech Stack Selection",
        lastMessage:
          "We decided on Next.js, Tailwind, and a serverless backend architecture.",
        timestamp: new Date().setDate(new Date().getDate() - 28),
      },
      {
        id: "m4",
        title: "Project Planning",
        lastMessage: "We need to create a project plan for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 30),
      },
      {
        id: "m5",
        title: "Code Review",
        lastMessage: "We need to review the code for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 35),
      },
      {
        id: "m6",
        title: "Bug Discussion",
        lastMessage: "We need to discuss the bugs for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 37),
      },
      {
        id: "m7",
        title: "Project Planning",
        lastMessage: "We need to create a project plan for the next sprint.",
        timestamp: new Date().setDate(new Date().getDate() - 30),
      },
    ],
  },
]

function SidebarWithChatHistory() {
  return (
    <Sidebar>
      <SidebarHeader className="flex flex-row items-center justify-between gap-2 px-2 py-4">
        <div className="flex flex-row items-center gap-2 px-2">
          <div className="bg-primary/10 size-8 rounded-md"></div>
          <div className="text-md font-base text-primary tracking-tight">
            zola.chat
          </div>
        </div>
        <Button variant="ghost" className="size-8">
          <Search className="size-4" />
        </Button>
      </SidebarHeader>
      <SidebarContent className="pt-4">
        {conversationHistory.map((conversation) => (
          <SidebarGroup key={conversation.period}>
            <SidebarGroupLabel>{conversation.period}</SidebarGroupLabel>
            <SidebarMenu>
              {conversation.conversations.map((conversation) => (
                <SidebarMenuButton key={conversation.id}>
                  <span>{conversation.title}</span>
                </SidebarMenuButton>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}

function AppContent() {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <header className="bg-background z-10 flex h-16 w-full shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="bg-muted/50 h-10 w-48 rounded-md" />
      </header>

      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="flex w-full">
            <div className="bg-muted/50 h-12 w-[65%] rounded-xl" />
          </div>

          <div className="flex justify-end">
            <div className="bg-muted/50 h-10 w-[45%] rounded-xl" />
          </div>

          <div className="flex">
            <div className="bg-muted/50 h-10 w-[70%] rounded-xl" />
          </div>

          <div className="flex justify-end">
            <div className="bg-muted/50 h-10 w-[55%] rounded-xl" />
          </div>

          <div className="flex">
            <div className="bg-muted/50 h-16 w-[75%] rounded-xl" />
          </div>

          <div className="flex justify-end">
            <div className="bg-muted/50 h-10 w-[50%] rounded-xl" />
          </div>

          <div className="flex">
            <div className="bg-muted/50 h-16 w-[70%] rounded-xl" />
          </div>
          <div className="flex justify-end">
            <div className="bg-muted/50 h-10 w-[60%] rounded-xl" />
          </div>
          <div className="flex">
            <div className="bg-muted/50 h-20 w-[75%] rounded-xl" />
          </div>
          <div className="flex justify-end">
            <div className="bg-muted/50 h-10 w-[50%] rounded-xl" />
          </div>
        </div>
      </div>

      <div className="bg-background z-10 shrink-0 border-t p-4">
        <div className="mx-auto max-w-3xl">
          <div className="bg-muted/50 h-12 w-full rounded-xl" />
        </div>
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
