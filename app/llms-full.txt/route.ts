import { readFileSync } from "fs"
import path from "path"
import { NextResponse } from "next/server"

export const revalidate = 3600 // Revalidate at most once per hour

export async function GET() {
  try {
    // Read the llms-full.txt file from the root of the project
    const filePath = path.join(process.cwd(), "llms-full.txt")
    const content = readFileSync(filePath, "utf8")

    // Return the content with the appropriate content type and caching headers
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'inline; filename="llms-full.txt"',
        // Cache for 1 hour in browser, 1 day in CDN, allow stale content for up to a week while revalidating
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    })
  } catch (error) {
    return new NextResponse("Error loading llms-full.txt file", {
      status: 500,
    })
  }
}
