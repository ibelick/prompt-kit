import createMDX from "@next/mdx"
import * as v1 from "codehike/mdx"
import { remarkCodeHike } from "codehike/mdx"
import remarkGfm from "remark-gfm"

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
  syntaxHighlighting: { theme: "github-light" },
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/docs/:path*",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      remarkGfm,
      [v1.remarkCodeHike, chConfig],
      [remarkCodeHike, { theme: "github-light", lineNumbers: false }],
    ],
    recmaPlugins: [[v1.recmaCodeHike, chConfig]],
  },
})

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
