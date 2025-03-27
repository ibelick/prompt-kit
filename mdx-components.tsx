import { ClientCodeWrapper } from "@/components/app/client-code-wrapper"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { codeToHtml } from "@/lib/shiki"
import { cn } from "@/lib/utils"
import type { MDXComponents } from "mdx/types"
import Link from "next/link"
import { extractCodeFromFilePath } from "./lib/code"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    code: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <code {...props} className="not-prose bg-secondary p-1 font-mono">
        {children}
      </code>
    ),
    // @ts-ignore
    a: (props: React.ComponentProps<typeof Link>) => (
      <Link {...props} href={props.href || ""}>
        {props.children}
      </Link>
    ),
    Link: ({ children, ...props }: React.ComponentProps<"a">) => (
      <Link {...props} href={props.href as string}>
        {children}
      </Link>
    ),
    // @ts-ignore
    CodeBlock: async ({
      language,
      code,
      filePath,
      ...props
    }: {
      language: string
      code: string
      filePath?: string
    } & React.HTMLAttributes<HTMLDivElement>) => {
      const fileContent = filePath
        ? extractCodeFromFilePath(filePath)
        : code || ""
      const html = await codeToHtml({ code: fileContent, lang: language })

      return (
        <ClientCodeWrapper code={fileContent}>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            className="not-prose bg-background overflow-auto rounded-md border border-zinc-200 p-2 text-[13px]"
            {...props}
          />
        </ClientCodeWrapper>
      )
    },
    Step: ({ className, children, ...props }: React.ComponentProps<"h3">) => (
      <h3 className={cn("step", className)} data-heading="3" {...props}>
        {children}
      </h3>
    ),
    Steps: ({ ...props }) => (
      <div
        className="steps mb-12 ml-4 border-l pl-8 [counter-reset:step]"
        {...props}
      />
    ),
    Tabs: ({ className, ...props }: React.ComponentProps<typeof Tabs>) => (
      <Tabs className={cn("relative mt-6 w-full", className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList className={cn(className)} {...props} />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger className={cn(className)} {...props} />
    ),
    TabsContent: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsContent>) => (
      <TabsContent className={cn(className)} {...props} />
    ),
    table: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableElement>) => (
      <div className="not-prose relative w-full table-auto overflow-auto rounded-lg border border-zinc-200 text-sm dark:border-zinc-800">
        <table className={cn("w-full", className)} {...props} />
      </div>
    ),
    thead: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <thead
        className={cn(
          "bg-zinc-100 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100",
          className
        )}
        {...props}
      />
    ),
    tbody: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableSectionElement>) => (
      <tbody
        className={cn(
          "divide-y divide-zinc-200 dark:divide-y dark:divide-zinc-600",
          className
        )}
        {...props}
      />
    ),
    tr: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableRowElement>) => (
      <tr className={cn("h-10", className)} {...props} />
    ),
    th: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableHeaderCellElement>) => (
      <th
        className={cn("px-4 pb-0 text-left align-middle font-[450]", className)}
        {...props}
      />
    ),
    td: ({
      className,
      ...props
    }: React.HTMLAttributes<HTMLTableDataCellElement>) => (
      <td
        className={cn("px-4 py-2 text-left align-middle", className)}
        {...props}
      />
    ),
  }
}
