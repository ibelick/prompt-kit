import ComponentCodePreview from "@/components/app/component-code-preview"
import { LayoutProse } from "@/components/app/layout-prose"
import { Button } from "@/components/ui/button"
import { getBaseUrl } from "@/lib/utils"
import { generateMetadata } from "../docs/utils/metadata"

export const metadata = generateMetadata(
  "Blocks",
  "Building blocks for AI apps. Clean, composable blocks built with shadcn/ui and prompt-kit. Use them to ship faster, works with any React framework."
)

export default function BlocksPage() {
  const baseUrl = getBaseUrl()

  return (
    <div className="mb-12 flex flex-col items-start">
      <div className="mb-10 flex flex-col gap-1 text-pretty">
        <p className="text-primary text-3xl font-[450] tracking-tight">
          Building blocks for AI apps.
        </p>
        <p className="text-muted-foreground max-w-2xl text-lg font-normal">
          Clean, composable blocks built with shadcn/ui and prompt-kit. <br />
          Use them to ship faster, works with any React framework.
        </p>
      </div>
      <LayoutProse className="flex w-full flex-col gap-12">
        <div>
          <h4>Prompt input with actions</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/prompt-input-actions`}
            filePath="components/blocks/prompt-input-actions.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Prompt input with suggestions</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/prompt-input-suggestions`}
            filePath="components/blocks/prompt-input-suggestions.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Prompt input with autocomplete</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/prompt-autocomplete-highlight`}
            filePath="components/blocks/prompt-autocomplete-highlight.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Basic full conversation</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/full-conversation`}
            filePath="components/blocks/full-conversation.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Conversation with avatars</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/conversation-avatars`}
            filePath="components/blocks/conversation-avatars.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Conversation with actions</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/conversation-actions`}
            filePath="components/blocks/conversation-actions.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Conversation with scroll to bottom</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/conversation-scroll-bottom`}
            filePath="components/blocks/conversation-scroll-bottom.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Conversation with prompt input</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/conversation-prompt-input`}
            filePath="components/blocks/conversation-prompt-input.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Sidebar with chat history</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/sidebar-chat-history`}
            filePath="components/blocks/sidebar-chat-history.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Full chat app</h4>
          <ComponentCodePreview
            url={`${baseUrl}/c/full-chat-app`}
            filePath="components/blocks/full-chat-app.tsx"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
      </LayoutProse>
      <div className="border-border mt-12 flex w-full flex-col items-center justify-center gap-2 rounded-md border border-dashed p-6">
        <p className="text-muted-foreground mb-0.5 text-sm">
          Something missing?
        </p>
        <Button variant="outline" asChild size="sm">
          <a
            href="https://github.com/ibelick/prompt-kit/issues/new?title=%5BBlock+Request%5D+&labels=block&template=block_request.yml"
            target="_blank"
            rel="noreferrer"
          >
            Suggest a new block
          </a>
        </Button>
      </div>
    </div>
  )
}
