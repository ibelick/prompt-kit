import ComponentCodePreview from "@/components/app/component-code-preview"
import { FullConversation } from "@/components/blocks/full-conversation"
import LayoutDocs from "../docs/layout"

export default function BlocksPage() {
  return (
    <div className="mb-12 flex flex-col items-start">
      <div className="mb-10 flex flex-col gap-1 text-pretty">
        <p className="text-primary text-3xl font-[450] tracking-tight">
          Blocks for AI apps.
        </p>
        <p className="text-muted-foreground max-w-2xl text-lg font-normal">
          Reusable UI blocks to build high-quality AI apps faster.
          <br />
          React components built with shadcn/ui and prompt-kit components.
        </p>
      </div>
      <LayoutDocs className="w-full">
        <h4>Basic full conversation</h4>
        <ComponentCodePreview
          url="http://localhost:3000/c/full-conversation"
          filePath="components/blocks/full-conversation.tsx"
          classNameComponentContainer="p-0 aspect-[16/9] h-[650px] w-full overflow-y-auto"
        />
        <h4>Sidebar with chat history</h4>
        <ComponentCodePreview
          url="http://localhost:3000/c/sidebar-chat-history"
          filePath="components/blocks/sidebar-chat-history.tsx"
          classNameComponentContainer="p-0 aspect-[16/9] h-[650px] w-full overflow-y-auto"
        />
      </LayoutDocs>
    </div>
  )
}
