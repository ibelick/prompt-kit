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
          className="hover:bg-primary-foreground inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm text-zinc-500 transition-colors duration-200"
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
          className="hover:bg-primary-foreground inline-flex items-center gap-1 rounded-md border px-2 py-1 text-sm text-zinc-500 transition-colors duration-200"
        >
          {navigation.next.label} <ChevronRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  )
}
