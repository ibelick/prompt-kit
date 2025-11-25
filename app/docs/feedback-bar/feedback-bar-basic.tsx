"use client"

import { FeedbackBar } from "@/components/prompt-kit/feedback-bar"
import { Info } from "lucide-react"
import { useState } from "react"

export function FeedbackBarBasic() {
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(
    null
  )
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="flex w-full max-w-sm flex-col gap-4">
      <FeedbackBar
        title="Was this response helpful?"
        icon={<Info className="text-primary size-4" />}
        onHelpful={() => setFeedback("helpful")}
        onNotHelpful={() => setFeedback("not-helpful")}
        onClose={() => setIsVisible(false)}
      />
      {feedback && (
        <p className="text-muted-foreground absolute right-0 bottom-2 left-0 text-center text-sm">
          Feedback recorded: {feedback}
        </p>
      )}
    </div>
  )
}
