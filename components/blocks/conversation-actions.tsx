"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/prompt-kit/chat-container"
import {
  Message,
  MessageAction,
  MessageActions,
  MessageContent,
} from "@/components/prompt-kit/message"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Copy, Pencil, ThumbsDown, ThumbsUp, Trash } from "lucide-react"

const messages = [
  {
    id: 1,
    role: "user",
    content: "Hello! Can you help me with a coding question?",
  },
  {
    id: 2,
    role: "assistant",
    content:
      "Of course! I'd be happy to help with your coding question. What would you like to know?",
  },
  {
    id: 3,
    role: "user",
    content: "How do I create a responsive layout with CSS Grid?",
  },
  {
    id: 4,
    role: "assistant",
    content:
      "Creating a responsive layout with CSS Grid is straightforward. Here's a basic example:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a grid where:\n- Columns automatically fit as many as possible\n- Each column is at least 250px wide\n- Columns expand to fill available space\n- There's a 1rem gap between items\n\nWould you like me to explain more about how this works?",
  },
  {
    id: 5,
    role: "user",
    content: "What is the capital of France?",
  },
  {
    id: 6,
    role: "assistant",
    content: "The capital of France is Paris.",
  },
]

function ConversationWithActions() {
  return (
    <ChatContainerRoot className="px-4 py-12">
      <ChatContainerContent>
        {messages.map((message, index) => {
          const isAssistant = message.role === "assistant"
          const isLastMessage = index === messages.length - 1

          return (
            <Message
              key={message.id}
              className={cn(
                "mx-auto flex w-full max-w-3xl flex-col gap-2 px-0 md:px-6",
                isAssistant ? "items-start" : "items-end"
              )}
            >
              {isAssistant ? (
                <div className="group flex w-full flex-col gap-0">
                  <MessageContent
                    className="text-foreground prose w-full flex-1 rounded-lg bg-transparent p-0"
                    markdown
                  >
                    {message.content}
                  </MessageContent>
                  <MessageActions
                    className={cn(
                      "-ml-2.5 flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100",
                      isLastMessage && "opacity-100"
                    )}
                  >
                    <MessageAction tooltip="Copy" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Copy />
                      </Button>
                    </MessageAction>
                    <MessageAction tooltip="Upvote" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <ThumbsUp />
                      </Button>
                    </MessageAction>
                    <MessageAction tooltip="Downvote" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <ThumbsDown />
                      </Button>
                    </MessageAction>
                  </MessageActions>
                </div>
              ) : (
                <div className="group flex flex-col items-end gap-1">
                  <MessageContent className="bg-muted text-primary max-w-[85%] rounded-3xl px-5 py-2.5 sm:max-w-[75%]">
                    {message.content}
                  </MessageContent>
                  <MessageActions
                    className={cn(
                      "flex gap-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                    )}
                  >
                    <MessageAction tooltip="Edit" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Pencil />
                      </Button>
                    </MessageAction>
                    <MessageAction tooltip="Delete" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Trash />
                      </Button>
                    </MessageAction>
                    <MessageAction tooltip="Copy" delayDuration={100}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                      >
                        <Copy />
                      </Button>
                    </MessageAction>
                  </MessageActions>
                </div>
              )}
            </Message>
          )
        })}
      </ChatContainerContent>
    </ChatContainerRoot>
  )
}

export { ConversationWithActions }
