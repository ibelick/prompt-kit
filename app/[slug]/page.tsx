import { generateMetadata as generateSiteMetadata } from "@/app/docs/utils/metadata"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  codeSections,
  componentsSections,
  faq,
  featuresComponents,
  featuresSections,
  heroSections,
  metadataBySlug,
  slugs,
} from "./data"
import Landing from "./landing"

export async function generateStaticParams() {
  return slugs.map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const meta = metadataBySlug[slug as keyof typeof metadataBySlug]

  const title = meta?.title ?? "prompt-kit components for AI apps"
  const description =
    meta?.description ??
    "Composable UI and fullstack primitives for AI apps. Build chat UIs, tool calling, streaming responses, and more with React, Tailwind CSS, and shadcn/ui."

  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://prompt-kit.com"
  const canonical = `${base}/${slug}`
  const keywords = meta?.keywords ?? [
    "AI UI components",
    "chat UI",
    "tool calling",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "prompt-kit",
  ]

  const ogImage = `${base}/opengraph-image.jpg`

  const baseMetadata = generateSiteMetadata(title, description)

  return {
    ...baseMetadata,
    alternates: {
      canonical,
    },
    keywords,
    openGraph: {
      title: `${title} – prompt-kit`,
      description,
      url: canonical,
      siteName: "prompt-kit",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} – prompt-kit`,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    category: "technology",
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (!heroSections[slug as keyof typeof heroSections]) {
    return notFound()
  }

  return (
    <Landing
      content={{
        hero: heroSections[slug as keyof typeof heroSections],
        code: codeSections,
        features_core: featuresSections,
        components: componentsSections,
        features_components: featuresComponents,
        faq: faq,
      }}
    />
  )
}
