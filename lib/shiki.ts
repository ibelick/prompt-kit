import {
  bundledLanguages,
  createHighlighter,
  Highlighter,
} from "shiki/bundle/web"

// This variable will hold the cached highlighter instance
let highlighter: Highlighter | null = null

const getHighlighter = async (): Promise<Highlighter> => {
  if (!highlighter) {
    // Create it only once
    highlighter = await createHighlighter({
      themes: ["github-light", "github-dark"],
      langs: [...Object.keys(bundledLanguages)],
    })
  }
  return highlighter
}

export const codeToHtml = async ({
  code,
  lang,
}: {
  code: string
  lang: string
}): Promise<string> => {
  const highlighterInstance = await getHighlighter()

  // Ensure highlighterInstance is not null
  if (!highlighterInstance) {
    throw new Error("Highlighter instance is null")
  }

  if (!code) {
    return "<pre><code></code></pre>"
  }

  const html = highlighterInstance.codeToHtml(code, {
    lang: lang,
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  })

  return html
    .replace(/tabindex="0"/g, "")
    .replace(/style="[^"]*background-color:[^;"]*;?[^"]*"/g, (match) =>
      match.replace(/background-color:[^;"]*;?/g, "")
    )
}

// Function to dispose of the highlighter when done (e.g., server-side cleanup)
export const disposeHighlighter = async (): Promise<void> => {
  if (highlighter) {
    highlighter.dispose()
    highlighter = null // Reset the cached instance
  }
}
