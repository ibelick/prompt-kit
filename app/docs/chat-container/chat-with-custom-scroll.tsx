"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
} from "@/components/prompt-kit/chat-container"
import { Markdown } from "@/components/prompt-kit/markdown"
import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/prompt-kit/message"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function ChatWithCustomScroll() {
  const [messages, setMessages] = useState([
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
  ])

  const addMessage = () => {
    // Add a new message
    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        role:
          messages[messages.length - 1].role === "user" ? "assistant" : "user",
        content:
          messages[messages.length - 1].role === "user"
            ? "That's a great question! Let me explain further. CSS Grid is a powerful layout system that allows for two-dimensional layouts. The `minmax()` function is particularly useful as it sets a minimum and maximum size for grid tracks."
            : "Thanks for the explanation! Could you tell me more about grid areas?",
      },
    ])
  }

  return (
    <div className="flex h-[400px] w-full flex-col overflow-hidden">
      <div className="flex items-center justify-between border-b p-3">
        <div />
        <div className="flex items-center gap-2">
          <Button size="sm" onClick={addMessage}>
            Add Message
          </Button>
        </div>
      </div>

      <ChatContainerRoot className="flex-1">
        <ChatContainerContent className="space-y-4 p-4">
          {messages.map((message) => {
            const isAssistant = message.role === "assistant"

            return (
              <Message
                key={message.id}
                className={
                  message.role === "user" ? "justify-end" : "justify-start"
                }
              >
                {isAssistant && (
                  <MessageAvatar
                    src="/avatars/ai.png"
                    alt="AI Assistant"
                    fallback="AI"
                  />
                )}
                <div className="max-w-[85%] flex-1 sm:max-w-[75%]">
                  {isAssistant ? (
                    <div className="bg-secondary text-foreground prose rounded-lg p-2">
                      <Markdown>{message.content}</Markdown>
                    </div>
                  ) : (
                    <MessageContent className="bg-primary text-primary-foreground">
                      {message.content}
                    </MessageContent>
                  )}
                </div>
              </Message>
            )
          })}
        </ChatContainerContent>
      </ChatContainerRoot>
    </div>
  )
}
