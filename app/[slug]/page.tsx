import {
  codeSections,
  componentsSections,
  faq,
  featuresComponents,
  featuresSections,
  heroSections,
  slugs,
} from "./data"
import Landing from "./landing"

export async function generateStaticParams() {
  return slugs.map((slug) => ({
    slug,
  }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

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
