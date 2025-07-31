import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import React from "react"

async function importComponent(componentName: string) {
  try {
    const module = await import(`@/components/primitives/${componentName}`)
    return module.default || Object.values(module)[0]
  } catch (error) {
    console.error(
      `Failed to import primitive component ${componentName}:`,
      error
    )
    return null
  }
}

type Params = Promise<{ componentSlug: string }>

export default async function PrimitiveComponentPage(props: {
  params: Params
}) {
  const params = await props.params
  const componentSlug = params.componentSlug

  if (!componentSlug) {
    console.error("No component slug provided")
    notFound()
  }

  const Component = await importComponent(componentSlug)

  if (!Component) {
    console.error(`Primitive component not found: ${componentSlug}`)
    notFound()
  }

  return (
    <div className="bg-background relative isolate min-h-svh">
      <Component />
    </div>
  )
}

export async function generateStaticParams() {
  try {
    const componentsDir = path.join(process.cwd(), "components", "primitives")

    if (!fs.existsSync(componentsDir)) {
      console.warn("Primitives directory not found")
      return []
    }

    const files = fs.readdirSync(componentsDir)
    const params = files
      .filter((file: string) => file.endsWith(".tsx") || file.endsWith(".jsx"))
      .map((file: string) => {
        const component = file.replace(/\.(tsx|jsx)$/, "")
        console.log("Generated param for primitive component:", component)
        return {
          componentSlug: component,
        }
      })

    console.log("Generated primitive params:", params)
    return params
  } catch (error) {
    console.error("Error generating primitive static params:", error)
    return []
  }
}
