"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, AlertTriangle, Info } from "lucide-react"
import React from "react"

const systemMessageVariants = cva(
  "flex flex-row items-center gap-3 rounded-[12px] border py-2 pr-2 pl-3",
  {
    variants: {
      variant: {
        action: "text-zinc-700 dark:text-zinc-300",
        error: "text-red-700 dark:text-red-800",
        warning: "text-amber-700 dark:text-amber-700",
      },
      fill: {
        true: "bg-background",
        false: "",
      },
    },
    compoundVariants: [
      {
        variant: "action",
        fill: true,
        class: "bg-zinc-100 dark:bg-zinc-900 border-transparent",
      },
      {
        variant: "error",
        fill: true,
        class: "bg-red-100 dark:bg-red-900/20 border-transparent",
      },
      {
        variant: "warning",
        fill: true,
        class: "bg-amber-100 dark:bg-amber-900/20 border-transparent",
      },
      {
        variant: "action",
        fill: false,
        class: "border-zinc-200 dark:border-zinc-800",
      },
      {
        variant: "error",
        fill: false,
        class: "border-red-600 dark:border-red-900",
      },
      {
        variant: "warning",
        fill: false,
        class: "border-amber-600 dark:border-amber-900",
      },
    ],
    defaultVariants: {
      variant: "action",
      fill: false,
    },
  }
)

export type SystemMessageProps = React.ComponentProps<"div"> &
  VariantProps<typeof systemMessageVariants> & {
    icon?: React.ReactNode
    isIconHidden?: boolean
    cta?: {
      label: string
      onClick?: () => void
      variant?: "solid" | "outline" | "ghost"
    }
  }

export function SystemMessage({
  children,
  variant = "action",
  fill = false,
  icon,
  isIconHidden = false,
  cta,
  className,
  ...props
}: SystemMessageProps) {
  const getDefaultIcon = () => {
    if (isIconHidden) return null

    switch (variant) {
      case "error":
        return <AlertCircle className="size-4" />
      case "warning":
        return <AlertTriangle className="size-4" />
      default:
        return <Info className="size-4" />
    }
  }

  const getIconToShow = () => {
    if (isIconHidden) return null
    if (icon) return icon
    return getDefaultIcon()
  }

  const shouldShowIcon = getIconToShow() !== null

  return (
    <div
      className={cn(systemMessageVariants({ variant, fill }), className)}
      {...props}
    >
      <div className="flex flex-1 flex-row items-center gap-3 leading-normal">
        {shouldShowIcon && (
          <div className="flex h-[1lh] shrink-0 items-center justify-center self-start">
            {getIconToShow()}
          </div>
        )}

        <div
          className={cn(
            "flex min-w-0 flex-1 items-center",
            shouldShowIcon ? "gap-3" : "gap-0"
          )}
        >
          <div className="text-sm">{children}</div>
        </div>
      </div>

      {cta && (
        <Button variant="default" size="sm" onClick={cta.onClick}>
          {cta.label}
        </Button>
      )}
    </div>
  )
}
