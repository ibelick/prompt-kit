import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "CCBot",
          "ClaudeBot",
          "Claude-Web",
          "GPTBot",
          "Google-Extended",
          "PerplexityBot",
          "Bytespider",
          "Amazonbot",
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "MJ12bot",
        ],
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.prompt-kit.com/sitemap.xml",
  }
}
