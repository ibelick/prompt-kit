import { ShieldCheck } from "lucide-react"

import { SystemMessage } from "@/components/prompt-kit/system-message"

export function SystemMessageWithCta() {
  return (
    <SystemMessage
      variant="action"
      fill
      icon={<ShieldCheck className="size-4 h-[1lh]" />}
      cta={{
        label: "Review policy",
        variant: "outline",
      }}
    >
      This workspace enforces human review. Make sure a teammate signs off on
      the final response before sending it to the customer.
    </SystemMessage>
  )
}
