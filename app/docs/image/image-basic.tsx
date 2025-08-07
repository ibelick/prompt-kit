import { Image } from "@/components/prompt-kit/image"

// Example base64 (compact SVG chat typing icon)
const base64 =
  "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij48cmVjdCB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHJ4PSIxMCIgZmlsbD0iIzdjM2FlZCIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMjQiIHI9IjQiIGZpbGw9IiNmZmYiLz48Y2lyY2xlIGN4PSIyNCIgY3k9IjI0IiByPSI0IiBmaWxsPSIjZmZmIi8+PGNpcmNsZSBjeD0iMzIiIGN5PSIyNCIgcj0iNCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=="

export default function ImageBasic() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Image
        base64={base64}
        uint8Array={new Uint8Array()} // Provide empty Uint8Array
        mediaType="image/svg+xml"
        alt="Compact gradient chat icon"
        className="h-24 w-24 border"
      />
      <span className="text-muted-foreground text-xs">
        Compact SVG chat icon
      </span>
    </div>
  )
}
