"use client"

import { CodeBlock, CodeBlockCode } from "@/components/prompt-kit/code-block"

export function CodeBlockPython() {
  const code = `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Generate the first 10 Fibonacci numbers
for number in fibonacci(10):
    print(number)`

  return (
    <div className="w-full max-w-3xl">
      <CodeBlock>
        <CodeBlockCode code={code} language="python" />
      </CodeBlock>
    </div>
  )
}
