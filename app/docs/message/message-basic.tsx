import {
  Message,
  MessageAvatar,
  MessageContent,
} from "@/components/prompt-kit/message"

export function MessageBasic() {
  return (
    <div className="flex flex-col gap-8">
      <Message className="justify-end">
        <MessageContent>Hello! How can I help you today?</MessageContent>
      </Message>

      <Message className="justify-start">
        <MessageAvatar src="/avatars/ai.png" alt="AI" fallback="AI" />
        <MessageContent markdown className="bg-transparent p-0">
          I can help with a variety of tasks: answering questions, providing
          information, assisting with coding, generating creative content. What
          would you like help with today?
        </MessageContent>
      </Message>
    </div>
  )
}
