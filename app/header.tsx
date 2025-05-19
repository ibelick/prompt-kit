import { SidebarTrigger } from "@/app/app-sidebar"
import { useBreakpoint } from "@/hooks/use-breakpoint"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export type HeaderProps = {
  triggerViewportWidth: number
}

export function Header({ triggerViewportWidth }: HeaderProps) {
  const isMobileView = useBreakpoint(triggerViewportWidth)

  if (!isMobileView) {
    return null
  }

  return (
    <nav className="absolute top-0 left-0 z-60 w-full px-4 py-4 text-white">
      <div className="mx-auto flex max-w-2xl items-center justify-between text-zinc-900">
        <Link href="/" className="">
          <span className="font-[450] lowercase">prompt-kit</span>
        </Link>
        <div className="flex items-center gap-2">
          {isMobileView ? (
            <SidebarTrigger />
          ) : (
            <a
              className="inline-flex items-center gap-1 rounded-md border border-zinc-200 bg-transparent px-2 py-1 text-sm text-black transition-colors hover:bg-zinc-100"
              href="https://github.com/ibelick/prompt-kit"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}
