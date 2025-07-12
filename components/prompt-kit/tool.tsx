"use client"

import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { CheckCircle, ChevronDown, Loader2, Settings } from "lucide-react"
import { useState } from "react"

export type ToolInvocation = {
  toolName: string
  state: "pending" | "running" | "completed" | "error"
  args?: Record<string, unknown>
  result?: unknown
  error?: string
  toolCallId?: string
}

export type ToolProps = {
  toolInvocation: ToolInvocation
  defaultOpen?: boolean
  className?: string
}

const Tool = ({
  toolInvocation,
  defaultOpen = false,
  className,
}: ToolProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const { toolName, state, args, result, error, toolCallId } = toolInvocation

  const getStateIcon = () => {
    switch (state) {
      case "running":
        return <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "error":
        return <CheckCircle className="h-4 w-4 text-red-500" />
      default:
        return <Settings className="text-muted-foreground h-4 w-4" />
    }
  }

  const getStateBadge = () => {
    const baseClasses = "px-2 py-1 rounded-full text-xs font-medium"
    switch (state) {
      case "running":
        return (
          <span
            className={cn(
              baseClasses,
              "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
            )}
          >
            Running
          </span>
        )
      case "completed":
        return (
          <span
            className={cn(
              baseClasses,
              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            )}
          >
            Completed
          </span>
        )
      case "error":
        return (
          <span
            className={cn(
              baseClasses,
              "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
            )}
          >
            Error
          </span>
        )
      default:
        return (
          <span
            className={cn(
              baseClasses,
              "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400"
            )}
          >
            Pending
          </span>
        )
    }
  }

  const formatValue = (value: unknown): string => {
    if (value === null) return "null"
    if (value === undefined) return "undefined"
    if (typeof value === "string") return value
    if (typeof value === "object") {
      return JSON.stringify(value, null, 2)
    }
    return String(value)
  }

  return (
    <div className={cn("overflow-hidden rounded-lg border", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="h-auto w-full justify-between rounded-b-none p-3 font-normal"
          >
            <div className="flex items-center gap-2">
              {getStateIcon()}
              <span className="font-mono text-sm">{toolName}</span>
              {getStateBadge()}
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t">
          <div className="space-y-3 p-3">
            {args && Object.keys(args).length > 0 && (
              <div>
                <h4 className="text-muted-foreground mb-2 text-sm font-medium">
                  Arguments
                </h4>
                <div className="bg-muted rounded p-2 font-mono text-sm">
                  {Object.entries(args).map(([key, value]) => (
                    <div key={key} className="mb-1">
                      <span className="text-muted-foreground">{key}:</span>{" "}
                      <span>{formatValue(value)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {Boolean(result) && (
              <div>
                <h4 className="text-muted-foreground mb-2 text-sm font-medium">
                  Result
                </h4>
                <div className="bg-muted max-h-60 overflow-auto rounded p-2 font-mono text-sm">
                  <pre className="whitespace-pre-wrap">
                    {formatValue(result)}
                  </pre>
                </div>
              </div>
            )}

            {error && (
              <div>
                <h4 className="mb-2 text-sm font-medium text-red-500">Error</h4>
                <div className="rounded border border-red-200 bg-red-50 p-2 text-sm dark:border-red-800 dark:bg-red-900/20">
                  {error}
                </div>
              </div>
            )}

            {toolCallId && (
              <div className="text-muted-foreground border-t pt-2 text-xs">
                <span className="font-mono">ID: {toolCallId}</span>
              </div>
            )}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export type ToolGroupProps = {
  tools: ToolInvocation[]
  defaultOpen?: boolean
  className?: string
  title?: string
}

const ToolGroup = ({
  tools,
  defaultOpen = false,
  className,
  title = "Tools",
}: ToolGroupProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  if (tools.length === 0) return null

  if (tools.length === 1) {
    return (
      <Tool
        toolInvocation={tools[0]}
        defaultOpen={defaultOpen}
        className={className}
      />
    )
  }

  return (
    <div className={cn("rounded-lg border", className)}>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="h-auto w-full justify-between p-3 font-normal"
          >
            <div className="flex items-center gap-2">
              <Settings className="text-muted-foreground h-4 w-4" />
              <span className="text-sm">{title}</span>
              <span className="bg-muted text-muted-foreground rounded-full px-2 py-1 font-mono text-xs">
                {tools.length}
              </span>
            </div>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                isOpen && "rotate-180"
              )}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="border-t">
          <div className="space-y-2 p-3">
            {tools.map((tool, index) => (
              <Tool
                key={`${tool.toolName}-${index}`}
                toolInvocation={tool}
                defaultOpen={false}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export { Tool, ToolGroup }
