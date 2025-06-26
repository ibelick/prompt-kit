import { ToolGroup } from "@/components/prompt-kit/tool"

export function ToolGroupExample() {
  return (
    <ToolGroup
      className="w-full max-w-md"
      title="Data Processing Tools"
      tools={[
        {
          toolName: "fetch_data",
          state: "completed",
          args: {
            source: "api.example.com",
            endpoint: "/data",
          },
          result: {
            records: 150,
            status: "success",
          },
        },
        {
          toolName: "transform_data",
          state: "completed",
          args: {
            format: "json",
            schema: "v2",
          },
          result: "Data transformed successfully",
        },
        {
          toolName: "validate_data",
          state: "running",
          args: {
            rules: ["required_fields", "data_types"],
          },
        },
      ]}
    />
  )
}
