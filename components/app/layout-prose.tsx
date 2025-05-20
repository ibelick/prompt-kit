import { cn } from "@/lib/utils"

type LayoutProseProps = {
  children: React.ReactNode
  className?: string
}

export function LayoutProse({ children, className }: LayoutProseProps) {
  return (
    <div
      className={cn(
        "prose prose-zinc dark:prose-invert prose-h1:scroll-m-20",
        "prose-h1:text-2xl prose-h1:font-semibold prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-xl prose-h2:font-medium prose-h3:scroll-m-20 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-20 prose-h4:text-base prose-h4:font-medium prose-h5:scroll-m-20 prose-h5:text-sm prose-h6:scroll-m-20 prose-h6:text-xs prose-strong:font-medium",
        "prose-code:block prose-code:rounded-md prose-code:bg-gray-100 prose-code:p-1 prose-code:text-gray-800 prose-table:block prose-table:overflow-y-auto prose-img:m-0 mr-0 max-w-full min-w-0 flex-1",
        "[&_.ch-code_code]:bg-primary-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
