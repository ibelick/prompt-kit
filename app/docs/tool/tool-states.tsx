import { Tool } from "@/components/prompt-kit/tool"

export function ToolStates() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-4">
      <Tool
        className="w-full max-w-md"
        toolInvocation={{
          toolName: "file_search",
          state: "pending",
          args: {
            pattern: "*.tsx",
            directory: "/components",
          },
        }}
      />

      <Tool
        className="w-full max-w-md"
        toolInvocation={{
          toolName: "api_call",
          state: "running",
          args: {
            endpoint: "/api/users",
            method: "GET",
          },
        }}
      />

      <Tool
        className="w-full max-w-md"
        toolInvocation={{
          toolName: "database_query",
          state: "completed",
          args: {
            table: "users",
            limit: 10,
          },
          result: {
            count: 42,
            data: [
              { id: 1, name: "John Doe" },
              { id: 2, name: "Jane Smith" },
            ],
          },
        }}
      />

      <Tool
        className="w-full max-w-md"
        toolInvocation={{
          toolName: "email_send",
          state: "error",
          args: {
            to: "user@example.com",
            subject: "Welcome!",
          },
          error: "Failed to connect to SMTP server",
        }}
      />
    </div>
  )
}
