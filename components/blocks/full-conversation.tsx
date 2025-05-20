"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/prompt-kit/chat-container"
import { Message, MessageContent } from "@/components/prompt-kit/message"
import { cn } from "@/lib/utils"

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

function FullConversation() {
  return (
    <ChatContainerRoot className="w-full">
      <ChatContainerContent className="space-y-12 overflow-y-auto px-4 py-12">
        {messages.map((message) => {
          const isAssistant = message.role === "assistant"

          return (
            <Message
              key={message.id}
              className={cn(
                "mx-auto flex w-full max-w-3xl flex-col gap-2 px-0 md:px-6",
                isAssistant ? "items-start" : "items-end"
              )}
            >
              {isAssistant ? (
                <MessageContent
                  className="text-foreground prose w-full flex-1 rounded-lg bg-transparent p-2"
                  markdown
                >
                  {message.content}
                </MessageContent>
              ) : (
                <MessageContent className="bg-primary text-primary-foreground max-w-[85%] sm:max-w-[75%]">
                  {message.content}
                </MessageContent>
              )}
            </Message>
          )
        })}
      </ChatContainerContent>
    </ChatContainerRoot>
  )
}

export { FullConversation }
