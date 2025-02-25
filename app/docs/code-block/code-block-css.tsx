"use client"

import { CodeBlock, CodeBlockCode } from "@/components/prompt-kit/code-block"

export function CodeBlockCSS() {
  const code = `.button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.button:hover {
  background-color: #45a049;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}`

  return (
    <div className="w-full max-w-3xl">
      <CodeBlock>
        <CodeBlockCode code={code} language="css" />
      </CodeBlock>
    </div>
  )
}
