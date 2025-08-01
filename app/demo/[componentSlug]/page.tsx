import fs from "fs"
import path from "path"
import { notFound } from "next/navigation"
import React from "react"

async function importComponent(componentName: string) {
  try {
    const module = await import(`@/components/demo/${componentName}`)
    return module.default || Object.values(module)[0]
  } catch (error) {
    console.error(`Failed to import demo component ${componentName}:`, error)
    return null
  }
}

type Params = Promise<{ componentSlug: string }>

export default async function DemoComponentPage(props: { params: Params }) {
  const params = await props.params
  const componentSlug = params.componentSlug

  if (!componentSlug) {
    console.error("No component slug provided")
    notFound()
  }

  const Component = await importComponent(componentSlug)

  if (!Component) {
    console.error(`Demo component not found: ${componentSlug}`)
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
    const componentsDir = path.join(process.cwd(), "components", "demo")

    if (!fs.existsSync(componentsDir)) {
      console.warn("Demo directory not found")
      return []
    }

    const files = fs.readdirSync(componentsDir)
    const params = files
      .filter((file: string) => file.endsWith(".tsx") || file.endsWith(".jsx"))
      .map((file: string) => {
        const component = file.replace(/\.(tsx|jsx)$/, "")
        console.log("Generated param for demo component:", component)
        return {
          componentSlug: component,
        }
      })

    console.log("Generated demo params:", params)
    return params
  } catch (error) {
    console.error("Error generating demo static params:", error)
    return []
  }
}
