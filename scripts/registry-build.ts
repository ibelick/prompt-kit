import fs from "fs"
import path from "path"
import { components } from "./registry-components"
import { primitives } from "./registry-primitives"
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

// Process primitives
for (const primitive of primitives) {
  const files = []

  // Process each file in the primitive
  for (const file of primitive.files) {
    const filePath = path.join(__dirname, `../${file.path}`)

    if (!fs.existsSync(filePath)) {
      console.warn(
        `Warning: File not found for primitive ${primitive.name}: ${filePath}`
      )
      continue
    }

    const content = fs.readFileSync(filePath, "utf8")

    // Create the file object according to shadcn spec
    const fileObj: any = {
      path: file.path,
      content,
      type: file.type as "registry:component" | "registry:file",
    }

    // Add target for registry:file types (required by shadcn spec)
    if (file.type === "registry:file") {
      fileObj.target = file.path
    }

    files.push(fileObj)
  }

  const schema = {
    name: primitive.name,
    type: "registry:item",
    title: primitive.title,
    description: primitive.description,
    dependencies: primitive.dependencies || [],
    devDependencies: (primitive as any).devDependencies || [],
    registryDependencies: (primitive as any).registryDependencies || [],
    files,
    envVars: primitive.envVars || {},
  } satisfies Schema

  fs.writeFileSync(
    path.join(registryComponents, `${primitive.name}.json`),
    JSON.stringify(schema, null, 2)
  )
}

// Generate consolidated registry.json file in shadcn/ui format
const componentItems = components.map((component) => {
  // Get file content for each component
  const content = fs.readFileSync(component.path, "utf8")

  const componentFiles = [
    {
      path: `components/prompt-kit/${path.basename(component.path)}`,
      type: "registry:component",
      content,
    },
  ]

  // Add additional files if specified
  if (component.files && component.files.length > 0) {
    for (const file of component.files) {
      const fileContent = fs.readFileSync(file.path, "utf8")
      componentFiles.push({
        path: `components/prompt-kit/${file.name}`,
        type: "registry:component",
        content: fileContent,
      })
    }
  }

  return {
    name: component.name,
    type: "registry:ui",
    title: component.name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: component.description,
    dependencies: component.dependencies || [],
    devDependencies: component.devDependencies || [],
    registryDependencies: component.registryDependencies || [],
    files: componentFiles,
    categories: ["ai", "prompt-kit"],
  }
})

// Generate primitive items for registry
const primitiveItems = primitives.map((primitive) => {
  const primitiveFiles = []

  // Process each file in the primitive
  for (const file of primitive.files) {
    const filePath = path.join(__dirname, `../${file.path}`)

    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf8")

      // Create the file object according to shadcn spec
      const fileObj: any = {
        path: file.path,
        type: file.type as "registry:component" | "registry:file",
        content,
      }

      // Add target for registry:file types (required by shadcn spec)
      if (file.type === "registry:file") {
        fileObj.target = file.path
      }

      primitiveFiles.push(fileObj)
    }
  }

  return {
    name: primitive.name,
    type: "registry:item",
    title: primitive.title,
    description: primitive.description,
    dependencies: primitive.dependencies || [],
    devDependencies: (primitive as any).devDependencies || [],
    registryDependencies: (primitive as any).registryDependencies || [],
    files: primitiveFiles,
    envVars: primitive.envVars || {},
    categories: ["ai", "prompt-kit"],
  }
})

const registryItems = [...componentItems, ...primitiveItems]

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "prompt-kit",
  homepage: "https://prompt-kit.com",
  items: registryItems,
}

fs.writeFileSync(
  path.join(registryComponents, "registry.json"),
  JSON.stringify(registry, null, 2)
)

console.log(`Registry files generated in ${registryComponents}`)
console.log(
  `Generated ${components.length} components and ${primitives.length} primitives`
)
