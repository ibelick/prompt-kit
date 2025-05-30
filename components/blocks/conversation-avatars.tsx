"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/prompt-kit/chat-container"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/prompt-kit/message"
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

function ConversationWithAvatars() {
  return (
    <ChatContainerRoot className="px-1 py-12 md:px-4">
      <ChatContainerContent className="space-y-12 px-1 py-12 md:px-4">
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
              <div
                className={cn(
                  "flex w-full items-end gap-3",
                  isAssistant ? "flex-row" : "flex-row-reverse"
                )}
              >
                {isAssistant ? (
                  <MessageAvatar
                    className="mb-0.5 h-6 w-6"
                    src="https://prompt-kit.com/logo.png"
                    alt={`Avatar of the assistant`}
                  />
                ) : (
                  <MessageAvatar
                    className="h-6 w-6"
                    src="https://github.com/ibelick.png"
                    alt={`Avatar of the user`}
                  />
                )}
                {isAssistant ? (
                  <MessageContent
                    className="prose text-primary w-full max-w-[85%] flex-1 overflow-x-auto rounded-lg bg-transparent p-0 py-0 sm:max-w-[75%]"
                    markdown
                  >
                    {message.content}
                  </MessageContent>
                ) : (
                  <MessageContent className="bg-secondary text-primary max-w-[85%] sm:max-w-[75%]">
                    {message.content}
                  </MessageContent>
                )}
              </div>
            </Message>
          )
        })}
      </ChatContainerContent>
    </ChatContainerRoot>
  )
}

export { ConversationWithAvatars }
