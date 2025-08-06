import { InputByok } from "@/app/primitives/demo/input-byok"
import { ContributeCta } from "@/components/app/contribute-cta"
import { DocCodeBlock } from "@/components/app/doc-code-block"
import FullStackPreview from "@/components/app/fullstack-preview"
import { LayoutProse } from "@/components/app/layout-prose"
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
          To test the demos, set your <code>OPENAI_API_KEY</code> below.{" "}
          <span>It’s stored in localStorage.</span>
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
          <DocCodeBlock
            language="bash"
            code={`npx shadcn@latest add "https://prompt-kit.com/c/chatbot.json"`}
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
          <DocCodeBlock
            language="bash"
            code={`npx shadcn@latest add "https://prompt-kit.com/c/tool-calling.json"`}
          />
        </div>
      </LayoutProse>
      <ContributeCta type="primitive" />
    </div>
  )
}
