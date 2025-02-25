import { extractCodeFromFilePath } from "@/lib/code"
import { cn } from "@/lib/utils"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import CodePreview from "./code-preview"
import { CodeRenderer } from "./code-renderer"
import ComponentPreview from "./component-preview"

type ComponentCodePreview = {
  component: React.ReactElement
  filePath: string
  hasReTrigger?: boolean
  classNameComponentContainer?: string
  classNameContainer?: string
  disableNotProse?: boolean
}

export default function ComponentCodePreview({
  component,
  filePath,
  hasReTrigger,
  classNameComponentContainer,
  classNameContainer,
  disableNotProse = false,
}: ComponentCodePreview) {
  const fileContent = extractCodeFromFilePath(filePath)

  return (
    <div
      className={cn(
        !disableNotProse && "not-prose",
        "relative z-0 flex items-center justify-between pb-3",
        classNameContainer
      )}
    >
      <Tabs defaultValue="preview" className="relative mr-auto w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <ComponentPreview
            component={component}
            hasReTrigger={hasReTrigger}
            className={classNameComponentContainer}
          />
        </TabsContent>
        <TabsContent value="code">
          <CodePreview code={fileContent}>
            <CodeRenderer code={fileContent} lang="tsx" />
          </CodePreview>
        </TabsContent>
      </Tabs>
    </div>
  )
}
