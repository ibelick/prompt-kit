"use client"

import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react"
import { Streamdown } from "streamdown"

export type MarkdownProps = ComponentPropsWithoutRef<typeof Streamdown>;

export const Markdown = ({ className, ...props }: MarkdownProps) => (
  <div className="not-prose">
    <Streamdown className={cn("[&>*:first-child]:mt-0 [&>*:last-child]:mb-0", className)} {...props} />
  </div>
);