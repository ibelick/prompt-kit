import {
  ChainOfThought,
  ChainOfThoughtContent,
  ChainOfThoughtItem,
  ChainOfThoughtStep,
  ChainOfThoughtTrigger,
} from "@/components/prompt-kit/chain-of-thought"
import { CodeBlock, CodeBlockCode } from "@/components/prompt-kit/code-block"
import { Lightbulb, Search, Target } from "lucide-react"

export function ChainOfThoughtAdvanced() {
  return (
    <div className="w-full max-w-3xl">
      <ChainOfThought>
        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<Search className="size-4" />}>
            Research phase: Understanding the problem space
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              The problem involves optimizing database queries for a
              high-traffic e-commerce platform
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Current bottlenecks: slow product search (2-3 seconds), category
              filtering delays
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Database: PostgreSQL with 10M+ products, complex joins across
              multiple tables
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<Lightbulb className="size-4" />}>
            Analysis: Identifying optimization opportunities
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              Missing indexes on frequently queried columns (product_name,
              category_id, price_range)
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              N+1 query problem in product listing API - need eager loading
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Full table scans occurring due to non-optimized WHERE clauses
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              Consider implementing database partitioning for better performance
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>

        <ChainOfThoughtStep>
          <ChainOfThoughtTrigger leftIcon={<Target className="size-4" />}>
            Solution: Implementing targeted improvements
          </ChainOfThoughtTrigger>
          <ChainOfThoughtContent>
            <ChainOfThoughtItem>
              <strong>Step 1:</strong> Add composite indexes for common query
              patterns
              <CodeBlock className="mt-2">
                <CodeBlockCode
                  code={`CREATE INDEX CONCURRENTLY idx_products_search
ON products (category_id, price, rating DESC)
WHERE active = true;`}
                  language="sql"
                />
              </CodeBlock>
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              <strong>Step 2:</strong> Optimize ORM queries with eager loading
              <CodeBlock className="mt-2">
                <CodeBlockCode
                  code={`// Before: N+1 queries
products.map(p => p.category.name)

// After: Single query with joins
Product.findAll({
  include: [{ model: Category, as: 'category' }]
})`}
                  language="javascript"
                />
              </CodeBlock>
            </ChainOfThoughtItem>
            <ChainOfThoughtItem>
              <strong>Step 3:</strong> Implement query result caching for
              popular searches
            </ChainOfThoughtItem>
          </ChainOfThoughtContent>
        </ChainOfThoughtStep>
      </ChainOfThought>
    </div>
  )
}
