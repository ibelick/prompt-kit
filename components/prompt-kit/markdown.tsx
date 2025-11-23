import { ComponentPropsWithoutRef } from "react"
import { Streamdown } from "streamdown"

export type MarkdownProps = ComponentPropsWithoutRef<typeof Streamdown>;

export const Markdown = (props: MarkdownProps) => (
  <Streamdown {...props} />
);