import { Tool } from "@/components/prompt-kit/tool"

export function ToolStates() {
  return (
    <div className="flex w-full flex-col items-center justify-center space-y-2">
      <Tool
        className="w-full max-w-md"
        toolPart={{
          type: "file_search",
          state: "input-streaming",
          input: {
            pattern: "*.tsx",
            directory: "/components",
          },
        }}
      />
      <Tool
        className="w-full max-w-md"
        toolPart={{
          type: "api_call",
          state: "input-available",
          input: {
            endpoint: "/api/users",
            method: "GET",
          },
        }}
      />
      <Tool
        className="w-full max-w-md"
        toolPart={{
          type: "database_query",
          state: "output-available",
          input: {
            table: "users",
            limit: 10,
          },
          output: {
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
        toolPart={{
          type: "email_send",
          state: "output-error",
          output: {
            to: "user@example.com",
            subject: "Welcome!",
          },
          errorText: "Failed to connect to SMTP server",
        }}
      />
    </div>
  )
}
