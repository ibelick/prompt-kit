"use client"

import { FeedbackBar } from "@/components/prompt-kit/feedback-bar"
import { Info } from "lucide-react"

export function FeedbackBarBasic() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <FeedbackBar
        title="Was this response helpful?"
        icon={<Info className="text-primary size-4" />}
        onHelpful={() => console.log("helpful")}
        onNotHelpful={() => console.log("not helpful")}
        onClose={() => console.log("close")}
      />
    </div>
  )
}
