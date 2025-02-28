import fs from "fs"
import path from "path"
import { components } from "./registry-components"
import { Schema } from "./registry-schema"

const registryComponents = path.join(__dirname, "../public/c")
const registryHooks = path.join(__dirname, "../public/h")

if (!fs.existsSync(registryComponents)) {
  fs.mkdirSync(registryComponents)
}

if (!fs.existsSync(registryHooks)) {
  fs.mkdirSync(registryHooks)
}

for (const component of components) {
  const content = fs.readFileSync(component.path, "utf8")

  const files = [
    {
      path: `${component.name}.tsx`,
      content,
      type: "registry:ui" as const,
    },
  ]

  // Add additional files if specified in the component definition
  if (component.files && component.files.length > 0) {
    for (const file of component.files) {
      const fileContent = fs.readFileSync(file.path, "utf8")
      files.push({
        path: file.name,
        content: fileContent,
        type: "registry:ui" as const,
      })
    }
  }

  const schema = {
    name: component.name,
    type: "registry:ui",
    registryDependencies: component.registryDependencies || [],
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    tailwind: component.tailwind || {},
    cssVars: component.cssVars || {
      light: {},
      dark: {},
    },
    description: component.description,
    files,
  } satisfies Schema

  fs.writeFileSync(
    path.join(registryComponents, `${component.name}.json`),
    JSON.stringify(schema, null, 2)
  )
}

// Generate consolidated registry.json file in shadcn/ui format
const registryItems = components.map((component) => {
  const componentFiles = [
    {
      path: `components/prompt-kit/${path.basename(component.path)}`,
      type: "registry:component"
    }
  ]

  // Add additional files if specified
  if (component.files && component.files.length > 0) {
    for (const file of component.files) {
      componentFiles.push({
        path: `components/prompt-kit/${file.name}`,
        type: "registry:component"
      })
    }
  }

  return {
    name: component.name,
    type: "registry:block",
    title: component.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: component.description,
    files: componentFiles
  }
})

const registry = {
  "$schema": "https://ui.shadcn.com/schema/registry.json",
  "name": "prompt-kit",
  "homepage": "https://prompt-kit.com",
  "items": registryItems
}

fs.writeFileSync(
  path.join(registryComponents, "registry.json"),
  JSON.stringify(registry, null, 2)
)

console.log(`Registry files generated in ${registryComponents}`)
