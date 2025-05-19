import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { getNavigation } from "./routes"

export function Footer() {
  const pathname = usePathname()
  const navigation = getNavigation(pathname)

  return (
    <div className="flex justify-between pt-12 pb-20">
      {navigation && navigation.prev ? (
        <Link
          href={navigation.prev.path}
          className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          <ChevronLeft className="h-4 w-4" />
          {navigation.prev.label}
        </Link>
      ) : (
        <div className="w-full" />
      )}

      {navigation && navigation.next && (
        <Link
          href={navigation.next.path}
          className="inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-900"
        >
          {navigation.next.label} <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
