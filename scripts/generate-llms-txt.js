#!/usr/bin/env node

/**
 * This script generates llms-full.txt by aggregating content from the docs directory
 * Run with: node scripts/generate-llms-txt.js
 */

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
const OUTPUT_FILE = path.join(process.cwd(), "llms-full.txt")
const BASIC_INFO_FILE = path.join(process.cwd(), "llms.txt")

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
function generateTableOfContents() {
  let toc = `## Table of Contents\n\n`

  // Add main sections
  toc += `- [Installation](#installation)\n`
  toc += `- [Introduction](#introduction)\n`
  toc += `- [Components](#components)\n`
  toc += `- [Blocks](#blocks)\n` // Added blocks section to TOC

  // Add component subsections
  const componentSections = COMPONENT_ORDER.filter(
    (section) => !["introduction", "installation", "showcase"].includes(section)
  )

  componentSections.forEach((component) => {
    const formattedName =
      component.charAt(0).toUpperCase() + component.slice(1).replace(/-/g, " ")
    toc += `  - [${formattedName}](#${component})\n`
  })

  toc += `- [Showcase](#showcase)\n\n`

  return toc
}

/**
 * Generate main header section including title and description
 */
async function generateHeaderSection() {
  try {
    const basicInfo = await readFile(BASIC_INFO_FILE, "utf8")
    const titleMatch = basicInfo.match(/# (.+?)(\r?\n|\r)/)
    const descriptionMatch = basicInfo.match(/> (.+?)(\r?\n|\r)/)

    let header = ""

    if (titleMatch) {
      header += `${titleMatch[0]}\n`
    } else {
      header += `# prompt-kit\n\n`
    }

    if (descriptionMatch) {
      header += `${descriptionMatch[0]}\n`
    }

    // Extract additional intro paragraph
    const introParagraphMatch = basicInfo.match(
      /> .+?(\r?\n|\r)(.*?)(\r?\n|\r)/
    )
    if (introParagraphMatch && introParagraphMatch[2]) {
      header += `${introParagraphMatch[2]}\n\n`
    }

    return header
  } catch (error) {
    console.error("Error generating header section:", error)
    return `# prompt-kit\n\n> A library of customizable, high-quality UI components for AI applications.\n\n`
  }
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
 * Generate resources section
 */
function generateResourcesSection() {
  return `## Resources

- [GitHub Repository](https://github.com/ibelick/prompt-kit): Source code and issues
- [Installation Guide](https://www.prompt-kit.com/docs/installation): Detailed installation instructions
- [Component Documentation](https://www.prompt-kit.com/docs): Complete component API documentation
- [Blocks](https://www.prompt-kit.com/blocks): Building blocks for AI apps
- [shadcn/ui Documentation](https://ui.shadcn.com): Documentation for the underlying UI component system
- [Next.js Documentation](https://nextjs.org/docs): Documentation for the Next.js framework
- [Tailwind CSS Documentation](https://tailwindcss.com/docs): Documentation for the Tailwind CSS framework
`
}

/**
 * Main function to generate llms-full.txt
 */
async function generateLlmsTxt() {
  try {
    console.log("Starting llms-full.txt generation...")

    // Generate header
    const header = await generateHeaderSection()
    console.log("Header section generated")

    // Generate table of contents
    const tableOfContents = generateTableOfContents()
    console.log("Table of contents generated")

    // Generate blocks section
    const blocksSection = await generateBlocksSection()
    console.log("Blocks section generated")

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
    const fullContent = `${header}${tableOfContents}${componentsContent}${blocksSection}${resources}`

    // Write to file
    await writeFile(OUTPUT_FILE, fullContent)

    console.log(`llms-full.txt generated successfully at ${OUTPUT_FILE}`)
  } catch (error) {
    console.error("Error generating llms-full.txt:", error)
    process.exit(1)
  }
}

// Run the script
generateLlmsTxt()
