import { LayoutProse } from "@/components/app/layout-prose"

export const dynamic = "force-static"

export default function LayoutDocs({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutProse>{children}</LayoutProse>
}
