import { InputByok } from "@/app/primitives/demo/input-byok"
import FullStackPreview from "@/components/app/fullstack-preview"
import { LayoutProse } from "@/components/app/layout-prose"
import { Button } from "@/components/ui/button"
import { getBaseUrl } from "@/lib/utils"
import { generateMetadata } from "../docs/utils/metadata"

export const metadata = generateMetadata(
  "Primitives",
  "Building blocks for AI apps. Clean, composable blocks built with shadcn/ui and prompt-kit. Use them to ship faster, works with any React framework."
)

export default function PrimitivesPage() {
  const baseUrl = getBaseUrl()

  return (
    <div className="mb-12 flex flex-col items-start">
      <div className="flex flex-col gap-1 text-pretty">
        <p className="text-primary text-3xl font-[450] tracking-tight">
          Primitives
        </p>
        <p className="mt-5 max-w-2xl text-base font-normal text-[var(--tw-prose-body)]">
          Fullstack building blocks for AI apps. Each one includes a UI
          component and an API route using the{" "}
          <a
            href="https://v5.ai-sdk.dev"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline"
          >
            Vercel AI SDK (v5)
          </a>
          . Easy to install with the shadcn registry.
        </p>
      </div>
      <div className="mt-8 mb-10 flex flex-col gap-2">
        <p className="max-w-2xl text-base font-normal text-[var(--tw-prose-body)]">
          To test the blocks, set your <code>OPENAI_API_KEY</code> below. It’s
          stored in localStorage.
        </p>
        <InputByok />
      </div>
      <LayoutProse className="flex w-full flex-col gap-12">
        <div>
          <h4>Full chatbot</h4>
          <FullStackPreview
            url={`${baseUrl}/demo/chatbot`}
            uiFilePath="components/demo/chatbot.tsx"
            apiFilePath="app/api/demo/chatbot/route.ts"
            classNameComponentContainer="p-0 aspect-video h-[650px] w-full overflow-y-auto"
          />
        </div>
        <div>
          <h4>Tool calling</h4>
          <FullStackPreview
            url={`${baseUrl}/demo/tool-calling`}
            uiFilePath="components/demo/tool-calling.tsx"
            apiFilePath="app/api/demo/tool-calling/route.ts"
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
