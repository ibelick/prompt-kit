import { extractCodeFromFilePath } from "@/lib/code"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { ClientCodeWrapper } from "./client-code-wrapper"
import { CodeRenderer } from "./code-renderer"
import ComponentPreview from "./component-preview"

type PrimitivePreviewProps = {
  component?: React.ReactElement
  uiFilePath: string
  apiFilePath: string
  hasReTrigger?: boolean
  classNameComponentContainer?: string
  classNameContainer?: string
  disableNotProse?: boolean
  url?: string
}

export default function PrimitivePreview({
  component,
  uiFilePath,
  apiFilePath,
  hasReTrigger,
  classNameComponentContainer,
  classNameContainer,
  disableNotProse = false,
  url,
}: PrimitivePreviewProps) {
  const uiCode = extractCodeFromFilePath(uiFilePath)
  const apiCode = extractCodeFromFilePath(apiFilePath)

  return (
    <div
      className={cn(
        !disableNotProse && "not-prose",
        "relative z-0 -mx-4 flex items-center justify-between pb-3 sm:mx-0",
        classNameContainer
      )}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList className="relative">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="ui">UI (page.tsx)</TabsTrigger>
          <TabsTrigger value="api">API (route.ts)</TabsTrigger>
          {url && (
            <div className="absolute right-2 bottom-2">
              <Link
                href={url}
                target="_blank"
                className="border-border hover:bg-muted flex size-[22px] items-center justify-center rounded-sm border p-1 transition-colors duration-150"
              >
                <ExternalLink className="size-4" />
              </Link>
            </div>
          )}
        </TabsList>

        <TabsContent value="preview">
          <ComponentPreview
            component={component}
            hasReTrigger={hasReTrigger}
            className={classNameComponentContainer}
            url={url}
          />
        </TabsContent>

        <TabsContent value="ui">
          <ClientCodeWrapper code={uiCode}>
            <CodeRenderer code={uiCode} lang="tsx" />
          </ClientCodeWrapper>
        </TabsContent>

        <TabsContent value="api">
          <ClientCodeWrapper code={apiCode}>
            <CodeRenderer code={apiCode} lang="ts" />
          </ClientCodeWrapper>
        </TabsContent>
      </Tabs>
    </div>
  )
}
