"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { ChevronUp } from "lucide-react"
import { useState } from "react"

type FeaturesComponentProps = {
  title: string
  features: {
    id: string
    title: string
    content: string
    component: React.ReactNode
  }[]
}

export function FeaturesComponent({ title, features }: FeaturesComponentProps) {
  const [activeAccordionId, setActiveAccordionId] = useState<string>(
    features[0].id
  )

  return (
    <div className="mx-auto w-full max-w-7xl">
      <h2 className="text-foreground mb-8 text-center text-3xl font-medium">
        {title}
      </h2>
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="border-border relative hidden h-auto rounded-lg border bg-transparent p-4 lg:flex lg:items-center lg:justify-center">
          {features.find((item) => item.id === activeAccordionId)?.component}
        </div>
        <div className="p-0 sm:p-8 lg:p-16">
          <Accordion
            onValueChange={(value) => {
              if (!value) return
              setActiveAccordionId(value as string)
            }}
            expandedValue={activeAccordionId}
            className="divide-border flex flex-col divide-y"
          >
            {features.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger
                  className={cn(
                    "flex w-full items-center justify-between py-3.5",
                    item.id === activeAccordionId && "cursor-default"
                  )}
                >
                  <h3 className="text-left text-lg text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                  <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50" />
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pb-6 text-left text-zinc-500 lg:pb-8 dark:text-zinc-400">
                    {item.content}
                  </p>
                  <div className="border-border mb-6 flex items-center justify-center rounded-lg border bg-transparent px-2 py-8 lg:mb-0 lg:hidden">
                    {item.component}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
