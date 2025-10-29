import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
} from "@/components/prompt-kit/chain-of-thought"

export function ChainOfThoughtBasic() {
  return (
    <div className="w-full max-w-3xl">
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>
            Analyzing the user&apos;s request
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              The user asked about implementing a sorting algorithm
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              This appears to be a technical question requiring code examples
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>
            Considering implementation options
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              Quick sort: O(n log n) average case, good for general purpose
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Merge sort: O(n log n) worst case, stable and predictable
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Bubble sort: O(n²), simple but inefficient for large datasets
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger>
            Selecting the best approach
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              Given the educational context, I&apos;ll demonstrate merge sort
              for its clarity
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              It shows the divide-and-conquer principle effectively
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    </div>
  )
}
