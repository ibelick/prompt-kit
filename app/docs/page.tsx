import IntroductionPage from "./introduction/page.mdx"
import { generateMetadata } from "./utils/metadata"

export const metadata = generateMetadata(
  "Documentation",
  "Documentation for prompt-kit"
)

export default function Docs() {
  return <IntroductionPage />
}
