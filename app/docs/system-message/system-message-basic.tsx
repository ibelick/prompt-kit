import { SystemMessage } from "@/components/prompt-kit/system-message"

export function SystemMessageBasic() {
  return (
    <div className="flex flex-col gap-3">
      <SystemMessage>
        This conversation is visible to your team. Avoid sharing sensitive
        personal data.
      </SystemMessage>

      <SystemMessage fill>
        You can switch to a private workspace at any time from the header.
      </SystemMessage>
    </div>
  )
}
