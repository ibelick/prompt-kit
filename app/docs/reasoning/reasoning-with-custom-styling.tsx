"use client"

import {
  Reasoning,
  ReasoningContent,
  ReasoningResponse,
  ReasoningTrigger,
} from "@/components/prompt-kit/reasoning"

export function ReasoningWithCustomStyling() {
  const reasoningText = `## Algorithm Selection Analysis

I compared several sorting algorithms based on their time complexity:

- **Bubble Sort:** O(n²) - Too inefficient for large datasets
- **Merge Sort:** O(n log n) - Consistent but requires extra space
- **Quick Sort:** O(n log n) average case - Best overall option
- **Heap Sort:** O(n log n) - Good but typically slower than Quick Sort

Quick Sort was selected because it offers excellent average-case performance, can be implemented with minimal extra space (in-place), and performs well on real-world data.`

  return (
    <div className="min-h-[350px] w-full flex-col gap-4 bg-gradient-to-r from-purple-50 to-blue-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
      <p className="mb-4 text-base font-medium">
        The most efficient algorithm for this problem is Quick Sort, with O(n
        log n) time complexity.
      </p>

      <Reasoning className="w-full">
        <ReasoningTrigger className="text-indigo-600 transition-colors hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
          AI Reasoning Process
        </ReasoningTrigger>

        <ReasoningContent className="mt-4 rounded-md border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <ReasoningResponse
            text={reasoningText}
            className="p-4 text-sm"
            mode="typewriter"
          />
        </ReasoningContent>
      </Reasoning>
    </div>
  )
}
