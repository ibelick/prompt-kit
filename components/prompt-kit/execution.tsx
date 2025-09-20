"use client"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import type React from "react"

export type ExecutionItemProps = React.ComponentProps<"div">

export const ExecutionItem = ({
  children,
  className,
  ...props
}: ExecutionItemProps) => (
  <div className={cn("text-muted-foreground text-sm", className)} {...props}>
    {children}
  </div>
)

export type ExecutionRootProps = React.ComponentProps<typeof Collapsible>

export const ExecutionRoot = ({
  defaultOpen = true,
  className,
  ...props
}: ExecutionRootProps) => (
  <Collapsible className={cn(className)} defaultOpen={defaultOpen} {...props} />
)

export type ExecutionTriggerProps = React.ComponentProps<
  typeof CollapsibleTrigger
>

export const ExecutionTrigger = ({
  children,
  className,
  ...props
}: ExecutionTriggerProps) => (
  <CollapsibleTrigger
    className={cn(
      "group text-muted-foreground hover:text-foreground flex w-full cursor-pointer items-center justify-between text-sm transition-colors",
      className
    )}
    {...props}
  >
    <div className="flex items-center gap-2">{children}</div>
    <ChevronDown className="size-4 transition-transform group-data-[state=open]:rotate-180" />
  </CollapsibleTrigger>
)

export type ExecutionContentProps = React.ComponentProps<
  typeof CollapsibleContent
>

export const ExecutionContent = ({
  children,
  className,
  ...props
}: ExecutionContentProps) => (
  <CollapsibleContent
    className={cn(
      "text-popover-foreground data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down overflow-hidden",
      className
    )}
    {...props}
  >
    <div className="border-muted mt-3 space-y-2 border-l-2 pl-4">
      {children}
    </div>
  </CollapsibleContent>
)

export type ExecutionProps = React.ComponentProps<typeof Collapsible>

export function Execution({
  defaultOpen = true,
  className,
  ...props
}: ExecutionProps) {
  return (
    <Collapsible
      className={cn(className)}
      defaultOpen={defaultOpen}
      {...props}
    />
  )
}

export { Collapsible as ExecutionGroup }
