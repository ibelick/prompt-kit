const fs = require("fs")
const path = require("path")
const { promisify } = require("util")

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)
const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

// Configuration
const DOCS_DIR = path.join(process.cwd(), "app", "docs")
const BLOCKS_FILE = path.join(process.cwd(), "app", "blocks", "page.tsx")
const PRIMITIVES_FILE = path.join(
  process.cwd(),
  "scripts",
  "registry-primitives.ts"
)
const OUTPUT_FILE_FULL = path.join(process.cwd(), "llms-full.txt")
const OUTPUT_FILE_SHORT = path.join(process.cwd(), "llms.txt")
const COMPONENTS_FILE = path.join(
  process.cwd(),
  "scripts",
  "registry-components.ts"
)

// Organized in the order they should appear in the documentation
const COMPONENT_ORDER = [
  "introduction",
  "installation",
  "prompt-input",
  "code-block",
  "markdown",
  "message",
  "chat-container",
  "scroll-button",
  "loader",
  "prompt-suggestion",
  "response-stream",
  "reasoning",
  "file-upload",
  "jsx-preview",
  "tool",
  "source",
  "showcase",
]

/**
 * Read the entire page.mdx or page.tsx file from a component directory
 */
async function readComponentMdx(componentDir) {
  try {
    const pageMdxPath = path.join(componentDir, "page.mdx")
    const pageTsxPath = path.join(componentDir, "page.tsx")

    if (fs.existsSync(pageMdxPath)) {
      return await readFile(pageMdxPath, "utf8")
    } else if (fs.existsSync(pageTsxPath)) {
      return await readFile(pageTsxPath, "utf8")
    }

    // If neither exists, look for any .mdx file
    const files = await readdir(componentDir)
    const mdxFiles = files.filter((file) => file.endsWith(".mdx"))

    if (mdxFiles.length > 0) {
      return await readFile(path.join(componentDir, mdxFiles[0]), "utf8")
    }

    return ""
  } catch (error) {
    console.error(
      `Error reading MDX for ${path.basename(componentDir)}:`,
      error
    )
    return ""
  }
}

/**
 * Process documentation for a component
 */
async function processComponentDocs(componentName) {
  console.log(`Processing documentation for ${componentName}...`)
  const componentDir = path.join(DOCS_DIR, componentName)

  try {
    const dirExists = fs.existsSync(componentDir)
    if (!dirExists) {
      console.warn(`Directory for ${componentName} does not exist.`)
      return ""
    }

    // Check if directory is a directory
    const dirStat = await stat(componentDir)
    if (!dirStat.isDirectory()) {
      return ""
    }

    // Read the full MDX content
    const fullMdxContent = await readComponentMdx(componentDir)

    if (!fullMdxContent.trim()) {
      console.warn(`No MDX content found for ${componentName}.`)
      return formatEmptyComponentSection(componentName)
    }

    return formatComponentSection(componentName, fullMdxContent)
  } catch (error) {
    console.error(`Error processing ${componentName}:`, error)
    return ""
  }
}

/**
 * Format the component section with the full MDX content
 */
function formatComponentSection(componentName, mdxContent) {
  // For showcase, provide a simpler format
  if (componentName === "showcase") {
    return `## Showcase

Check out these example implementations using prompt-kit components:

- [zola.chat](https://zola.chat/): Open-source AI chat app built with prompt-kit components

${mdxContent}

`
  }

  // For regular components, return the full MDX content
  return mdxContent + "\n\n"
}

/**
 * Format an empty component section when no MDX is found
 */
function formatEmptyComponentSection(componentName) {
  const formattedName =
    componentName.charAt(0).toUpperCase() +
    componentName.slice(1).replace(/-/g, " ")

  return `## ${formattedName}

**Path**: \`components/prompt-kit/${componentName}.tsx\`

**Features**:
- Customizable styling
- Type-safe props
- Accessibility support

`
}

/**
 * Generate table of contents
 */
async function generateTableOfContents() {
  let toc = `## Table of Contents\n\n`

  // Add main sections
  toc += `- [Installation](#installation)\n`
  toc += `- [Introduction](#introduction)\n`
  toc += `- [Components](#components)\n`

  // Add component subsections
  const componentSections = COMPONENT_ORDER.filter(
    (section) => !["introduction", "installation", "showcase"].includes(section)
  )

  componentSections.forEach((component) => {
    const formattedName =
      component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, " ")
    toc += `  - [${formattedName}](#${component})\n`
  })

  toc += `- [Blocks](#blocks)\n`
  toc += `- [Primitives](#primitives)\n`
  toc += `- [Showcase](#showcase)\n\n`

  return toc
}

/**
 * Generate main header section including title and description
 */
function generateHeaderSection() {
  return `# prompt-kit

> prompt-kit is a library of customizable, high-quality UI components for AI applications. It provides ready-to-use components for building chat experiences, AI agents, autonomous assistants, and more, with a focus on rapid development and beautiful design.

prompt-kit is built on top of shadcn/ui and extends it with specialized components for AI interfaces. It uses Next.js, React 19, and Tailwind CSS. The components are designed to be easily customizable and can be installed individually using the shadcn CLI.

`
}

/**
 * Generate blocks section
 */
async function generateBlocksSection() {
  console.log("Generating blocks section...")
  try {
    if (!fs.existsSync(BLOCKS_FILE)) {
      console.warn(`Blocks file not found at ${BLOCKS_FILE}`)
      return ""
    }

    const blocksContent = await readFile(BLOCKS_FILE, "utf8")

    // Extract block titles from h4 tags
    const blockTitlesRegex = /<h4>(.*?)<\/h4>/g
    let match
    const blockTitles = []

    while ((match = blockTitlesRegex.exec(blocksContent)) !== null) {
      blockTitles.push(match[1])
    }

    console.log(`Found ${blockTitles.length} blocks: ${blockTitles.join(", ")}`)

    // Generate blocks section
    let blocksSection = `## Blocks

Building blocks for AI apps. Clean, composable blocks built with shadcn/ui and prompt-kit. Use them to ship faster, works with any React framework.

Available blocks:

`

    blockTitles.forEach((title) => {
      const filename = title.toLowerCase().replace(/\s+/g, "-")
      blocksSection += `- **${title}**: \`components/blocks/${filename}.tsx\`\n`
    })

    blocksSection += `\nAll blocks are available at [prompt-kit.com/blocks](https://www.prompt-kit.com/blocks).\n\n`

    return blocksSection
  } catch (error) {
    console.error("Error generating blocks section:", error)
    return ""
  }
}

/**
 * Generate primitives section
 */
async function generatePrimitivesSection() {
  console.log("Generating primitives section...")
  try {
    if (!fs.existsSync(PRIMITIVES_FILE)) {
      console.warn(`Primitives file not found at ${PRIMITIVES_FILE}`)
      return ""
    }

    const primitivesContent = await readFile(PRIMITIVES_FILE, "utf8")

    // Parse the primitives array from the TypeScript file
    const primitivesMatch = primitivesContent.match(
      /export const primitives = \[(.*?)\]/s
    )
    if (!primitivesMatch) {
      console.warn("Could not find primitives array in registry-primitives.ts")
      return ""
    }

    // Extract primitive objects using regex
    const primitiveObjectsRegex =
      /{\s*name:\s*"([^"]+)",\s*type:\s*"[^"]+",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g
    const primitives = []
    let match

    while ((match = primitiveObjectsRegex.exec(primitivesContent)) !== null) {
      primitives.push({
        name: match[1],
        title: match[2],
        description: match[3],
      })
    }

    console.log(
      `Found ${primitives.length} primitives: ${primitives.map((p) => p.name).join(", ")}`
    )

    // Generate primitives section
    let primitivesSection = `## Primitives

Ready-to-use primitives for AI applications. These are complete, production-ready components that you can install and use immediately in your projects. They include both frontend components and backend API routes.

Available primitives:

`

    primitives.forEach((primitive) => {
      primitivesSection += `### ${primitive.title}

**Name**: \`${primitive.name}\`  
**Description**: ${primitive.description}

**Installation**:
\`\`\`bash
npx shadcn add "https://prompt-kit.com/c/${primitive.name}.json"
\`\`\`

**Features**:
- Complete frontend and backend implementation
- Built with prompt-kit components
- shadcn/ui compatible
- Type-safe with TypeScript
- Production ready

`
    })

    primitivesSection += `All primitives are available as registry items that can be installed via the shadcn CLI. Each primitive includes both the React component and any necessary API routes.\n\n`

    return primitivesSection
  } catch (error) {
    console.error("Error generating primitives section:", error)
    return ""
  }
}

/**
 * Generate resources section
 */
function generateResourcesSection() {
  return `## Resources

- [GitHub Repository](https://github.com/ibelick/prompt-kit): Source code and issues
- [Installation Guide](https://www.prompt-kit.com/docs/installation): Detailed installation instructions
- [Component Documentation](https://www.prompt-kit.com/docs): Complete component API documentation
- [Blocks](https://www.prompt-kit.com/blocks): Building blocks for AI apps
- [Primitives](https://www.prompt-kit.com/primitives): Ready-to-use AI primitives
- [shadcn/ui Documentation](https://ui.shadcn.com): Documentation for the underlying UI component system
- [Next.js Documentation](https://nextjs.org/docs): Documentation for the Next.js framework
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Documentation for the Tailwind CSS framework
`
}

/**
 * Generate short components list for llms.txt
 */
async function generateShortComponentsList() {
  console.log("Generating short components list...")
  try {
    if (!fs.existsSync(COMPONENTS_FILE)) {
      console.warn(`Components file not found at ${COMPONENTS_FILE}`)
      return ""
    }

    const componentsContent = await readFile(COMPONENTS_FILE, "utf8")

    // Extract component objects using regex - handle multiline descriptions
    const componentBlocks =
      componentsContent.match(/{[\s\S]*?},?(?=\s*{|\s*])/g) || []
    const components = []

    componentBlocks.forEach((block) => {
      const nameMatch = block.match(/name:\s*"([^"]+)"/)
      const descMatch = block.match(/description:\s*"([^"]+)"/)
      const pathMatch = block.match(/path:\s*path\.join\([^,]+,\s*"([^"]+)"\)/)

      if (nameMatch && descMatch && pathMatch) {
        components.push({
          name: nameMatch[1],
          description: descMatch[1],
          path: pathMatch[1],
        })
      }
    })

    let componentsList = `## Components\n\n`

    components.forEach((component) => {
      // Extract just the filename from the path
      const filename = component.path.split("/").pop() || component.path
      componentsList += `- [components/prompt-kit/${filename}](https://github.com/ibelick/prompt-kit/blob/main/components/prompt-kit/${filename}): ${component.description}\n`
    })

    return componentsList + "\n"
  } catch (error) {
    console.error("Error generating short components list:", error)
    return ""
  }
}

/**
 * Generate short primitives list for llms.txt
 */
async function generateShortPrimitivesList() {
  console.log("Generating short primitives list...")
  try {
    if (!fs.existsSync(PRIMITIVES_FILE)) {
      console.warn(`Primitives file not found at ${PRIMITIVES_FILE}`)
      return ""
    }

    const primitivesContent = await readFile(PRIMITIVES_FILE, "utf8")

    // Extract primitive objects using regex
    const primitiveObjectsRegex =
      /{\s*name:\s*"([^"]+)",\s*type:\s*"[^"]+",\s*title:\s*"([^"]+)",\s*description:\s*"([^"]+)"/g
    const primitives = []
    let match

    while ((match = primitiveObjectsRegex.exec(primitivesContent)) !== null) {
      primitives.push({
        name: match[1],
        title: match[2],
        description: match[3],
      })
    }

    if (primitives.length === 0) {
      return ""
    }

    let primitivesList = `## Primitives\n\n`

    primitives.forEach((primitive) => {
      primitivesList += `- [${primitive.title}](https://www.prompt-kit.com/primitives/${primitive.name}): ${primitive.description}\n`
    })

    return primitivesList + "\n"
  } catch (error) {
    console.error("Error generating short primitives list:", error)
    return ""
  }
}

/**
 * Generate short version llms.txt
 */
async function generateShortLlmsTxt() {
  try {
    console.log("Starting llms.txt generation...")

    // Generate header
    const header = generateHeaderSection()

    // Generate documentation section
    const documentation = `## Documentation

- [README](https://github.com/ibelick/prompt-kit/blob/main/README.md): Installation instructions and basic usage guide
- [Installation](https://www.prompt-kit.com/docs/installation): Detailed installation guide, how to install prompt-kit components

`

    // Generate components list
    const componentsList = await generateShortComponentsList()

    // Generate primitives list
    const primitivesList = await generateShortPrimitivesList()

    // Generate optional resources
    const optionalResources = `## Optional

- [zola.chat](https://zola.chat/): Open-source AI chat app built with prompt-kit components, providing a great example implementation
- [shadcn/ui Documentation](https://ui.shadcn.com): Documentation for the underlying UI component system
- [Next.js Documentation](https://nextjs.org/docs): Documentation for the Next.js framework
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Documentation for the Tailwind CSS framework 
`

    // Combine all sections
    const shortContent = `${header}${documentation}${componentsList}${primitivesList}${optionalResources}`

    // Write to file
    await writeFile(OUTPUT_FILE_SHORT, shortContent)

    console.log(`llms.txt generated successfully at ${OUTPUT_FILE_SHORT}`)
  } catch (error) {
    console.error("Error generating llms.txt:", error)
    process.exit(1)
  }
}

/**
 * Main function to generate llms-full.txt
 */
async function generateFullLlmsTxt() {
  try {
    console.log("Starting llms-full.txt generation...")

    // Generate header
    const header = generateHeaderSection()
    console.log("Header section generated")

    // Generate table of contents
    const tableOfContents = await generateTableOfContents()
    console.log("Table of contents generated")

    // Generate blocks section
    const blocksSection = await generateBlocksSection()
    console.log("Blocks section generated")

    // Generate primitives section
    const primitivesSection = await generatePrimitivesSection()
    console.log("Primitives section generated")

    // Generate component sections
    let componentsContent = "## Components\n\n"

    for (const componentName of COMPONENT_ORDER) {
      // Process component docs
      const sectionContent = await processComponentDocs(componentName)
      componentsContent += sectionContent
    }
    console.log("Components section generated")

    // Generate resources section
    const resources = generateResourcesSection()
    console.log("Resources section generated")

    // Combine all sections
    const fullContent = `${header}${tableOfContents}${componentsContent}${blocksSection}${primitivesSection}${resources}`

    // Write to file
    await writeFile(OUTPUT_FILE_FULL, fullContent)

    console.log(`llms-full.txt generated successfully at ${OUTPUT_FILE_FULL}`)
  } catch (error) {
    console.error("Error generating llms-full.txt:", error)
    process.exit(1)
  }
}

// Run both scripts
async function generateAllFiles() {
  try {
    await generateShortLlmsTxt()
    await generateFullLlmsTxt()
    console.log("All files generated successfully!")
  } catch (error) {
    console.error("Error generating files:", error)
    process.exit(1)
  }
}

generateAllFiles()
