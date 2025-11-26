import { TextShimmer } from "@/components/prompt-kit/text-shimmer"

export function TextShimmerCustomSpread() {
  return (
    <div className="flex flex-col gap-4">
      <TextShimmer spread={5} className="text-sm">
        Loading components
      </TextShimmer>
      <TextShimmer spread={40} className="text-sm">
        Establishing connection
      </TextShimmer>
    </div>
  )
}
