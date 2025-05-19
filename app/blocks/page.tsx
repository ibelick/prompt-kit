import ComponentCodePreview from "@/components/app/component-code-preview"
import { ScrollButtonWithChat } from "../docs/scroll-button/scroll-button-with-chat"

export default function BlocksPage() {
  return (
    <div className="mb-12 flex flex-col items-start">
      <div className="mb-5 flex flex-col gap-1 text-pretty">
        <p className="text-3xl font-[450] tracking-tight text-black">
          Building blocks for AI apps.
        </p>
        <p className="text-lg font-normal text-zinc-500"></p>
      </div>
      <div className="flex w-full flex-col gap-4">
        <ComponentCodePreview
          component={<ScrollButtonWithChat />}
          filePath="app/docs/scroll-button/scroll-button-with-chat.tsx"
          classNameComponentContainer="p-0 aspect-[16/9] min-h-[900px]"
        />
      </div>
    </div>
  )
}
