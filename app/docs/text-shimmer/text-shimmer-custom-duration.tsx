import { TextShimmer } from "@/components/prompt-kit/text-shimmer"

export function TextShimmerCustomDuration() {
  return (
    <div className="flex flex-col gap-4">
      <TextShimmer duration={2} className="text-sm">
        Processing data
      </TextShimmer>
      <TextShimmer duration={6} className="text-sm">
        Analyzing patterns
      </TextShimmer>
    </div>
  )
}
