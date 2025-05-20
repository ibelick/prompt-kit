import { LayoutProse } from "@/components/app/layout-prose"

export default function LayoutDocs({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutProse>{children}</LayoutProse>
}
