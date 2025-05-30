"use client"

import {
  ChatContainerContent,
  ChatContainerRoot,
  ChatContainerScrollAnchor,
} from "@/components/prompt-kit/chat-container"
import { Message, MessageContent } from "@/components/prompt-kit/message"
import { ScrollButton } from "@/components/prompt-kit/scroll-button"
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
  {
    id: 7,
    role: "user",
    content: "Can you tell me more about CSS Grid?",
  },
  {
    id: 8,
    role: "assistant",
    content:
      "Sure! CSS Grid is a powerful two-dimensional layout system designed for the browser. Unlike Flexbox which is primarily designed for either a row or a column, Grid can work with both rows and columns together.\n\nHere are some key features of CSS Grid:\n\n1. **Two-dimensional layout**: Control both rows and columns simultaneously\n2. **Grid lines**: Position items by referencing grid lines\n3. **Grid tracks**: Rows and columns can be explicitly sized or can adjust automatically\n4. **Grid cells**: Intersections of rows and columns\n5. **Grid areas**: Named regions spanning multiple grid cells\n\nBasic syntax example:\n```css\n.container {\n  display: grid;\n  grid-template-columns: 1fr 2fr 1fr;\n  grid-template-rows: auto 200px auto;\n  gap: 20px;\n}\n\n.item {\n  grid-column: 1 / 3; /* Start at line 1, end at line 3 */\n  grid-row: 2 / 3; /* Start at line 2, end at line 3 */\n}\n```\n\nThis creates a layout with three columns (the middle one being twice as wide) and three rows (middle one fixed at 200px), with 20px gaps between all cells.",
  },
  {
    id: 9,
    role: "user",
    content: "What about Flexbox vs Grid?",
  },
  {
    id: 10,
    role: "assistant",
    content:
      "**Flexbox vs. Grid: When to Use Each**\n\n**Flexbox (one-dimensional):**\n- Best for arranging items in a single row or column\n- Great for distributing space among items within a container\n- Perfect for:\n  - Navigation menus\n  - Card layouts with variable content length\n  - Centering items vertically and horizontally\n  - Simple layouts that need to be flexible in one direction\n\n**Grid (two-dimensional):**\n- Best for complex layouts with both rows and columns\n- Excellent for precisely positioning items in a grid system\n- Perfect for:\n  - Full-page layouts\n  - Dashboard interfaces\n  - Image galleries with consistent spacing\n  - Any design that requires alignment across both rows and columns\n\n**When to use both:**\nIt's common to use Grid for the main page layout and Flexbox for individual components within that layout. They complement each other well!",
  },
  {
    id: 11,
    role: "user",
    content: "Thanks for all this information about CSS layouts!",
  },
  {
    id: 12,
    role: "assistant",
    content:
      "You're welcome! CSS layout systems like Flexbox and Grid have revolutionized web design, making it much easier to create responsive and complex layouts without relying on hacks or workarounds.\n\nIf you ever have more questions about CSS or web development in general, feel free to ask. Happy coding! 😊",
  },
]

function ConversationWithScrollBottom() {
  return (
    <div className="relative flex h-screen flex-1 flex-col overflow-hidden">
      <ChatContainerRoot className="h-full overflow-y-auto">
        <ChatContainerContent className="space-y-12 px-4 py-12">
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
          <ChatContainerScrollAnchor />
        </ChatContainerContent>

        <div className="absolute right-7 bottom-4 z-10">
          <ScrollButton
            className="bg-primary hover:bg-primary/90 shadow-sm"
            variant="default"
            size="icon"
          />
        </div>
      </ChatContainerRoot>
    </div>
  )
}

export { ConversationWithScrollBottom }
