"use client"

import { DemoPromptInput } from "@/components/app/demo-prompt-input"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CheckIcon, ChevronUp } from "lucide-react"
import { useState } from "react"
import type { LandingContent } from "./data"

function FeaturesComponent({
  features,
}: {
  title: string
  features: {
    id: string
    title: string
    content: string
    component: React.ReactNode
  }[]
}) {
  const [activeAccordionId, setActiveAccordionId] = useState<string>(
    features[0].id
  )

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col lg:grid lg:grid-cols-2">
        <div className="bg-muted relative hidden h-auto p-4 lg:flex lg:items-center lg:justify-center">
          {features.find((item) => item.id === activeAccordionId)?.component}
        </div>
        <div className="p-0 sm:p-8 lg:p-16">
          <h2 className="text-foreground mb-16 text-left text-3xl font-medium">
            Perfect components to build your next AI application
          </h2>
          <Accordion
            onValueChange={(value) => {
              if (!value) return
              setActiveAccordionId(value as string)
            }}
            expandedValue={activeAccordionId}
            className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800"
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
                  <div className="bg-muted mb-6 flex items-center justify-center pb-8 lg:mb-0 lg:hidden">
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

export default function Landing({ content }: { content: LandingContent }) {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col gap-48">
      {/* Hero Section */}
      <div className="mx-auto max-w-4xl text-center">
        <span className="text-foreground mb-6 block text-sm">
          {content.hero.badge}
        </span>
        <h1 className="text-foreground mb-6 text-5xl">{content.hero.title}</h1>
        <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
          {content.hero.description}
        </p>
        <a href="/docs">
          <Button>Get Started</Button>
        </a>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        <DemoPromptInput />
      </div>

      {/* features list */}
      <div className="mx-auto max-w-6xl">
        <h2 className="text-foreground mb-16 text-center text-3xl font-medium">
          {content.features_core.title}
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {content.features_core.content.map((feature) => {
            return (
              <div className="border-border bg-card rounded-lg border p-6">
                <h3 className="text-card-foreground mb-6 text-xl font-medium">
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.content.map((item, index) => {
                    return (
                      <li
                        className="flex items-center gap-2"
                        key={`${feature.title}-${index}`}
                      >
                        <CheckIcon className="h-4 w-4" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      <FeaturesComponent
        title={content.features_components.title}
        features={content.features_components.content}
      />

      <div className="relative flex flex-col items-center justify-center gap-6">
        <a
          href="https://x.com/shadcn/status/1953137884728381678"
          target="_blank"
          className="text-foreground mx-auto w-full max-w-xl text-center text-2xl"
        >
          <span className="font-serif">"</span>
          <span>
            You're one npx command away from a fully functional chatbot with
            tool call. Amazing work by @Ibelick
          </span>
          <span className="font-serif">"</span>
        </a>
        <div className="flex items-center gap-4">
          <Avatar className="size-10 rounded-full">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="Avatar for shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <p className="text-foreground text-sm">shadcn</p>
            <p className="text-muted-foreground text-sm">
              Creator of shadcn/ui
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-xl">
        <div className="text-foreground mb-4 text-left text-3xl font-medium">
          One command to install
        </div>
        <div className="bg-muted w-full rounded-lg p-4">
          <pre className="text-sm">
            <code>npx shadcn@latest add [COMPONENT]</code>
          </pre>
        </div>
      </div>

      <div className="relative mx-auto max-w-xl py-12">
        <div className="mb-10 text-left">
          <h2 className="text-foreground mb-4 text-3xl font-medium">
            Frequently asked questions
          </h2>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            Here are some of the most common questions we receive from our
            users.
          </p>
        </div>
        <Accordion
          className="flex w-full flex-col divide-y divide-zinc-200 border-t border-zinc-200 dark:divide-zinc-700 dark:border-zinc-700"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {content.faq.content.map((item) => (
            <AccordionItem value={item.id} className="py-4" key={item.id}>
              <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center justify-between">
                  <div>{item.title}</div>
                  <ChevronUp className="h-4 w-4 -rotate-180 text-zinc-950 transition-transform duration-200 group-data-[expanded]:rotate-0 dark:text-zinc-50" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="pt-2 text-zinc-500 dark:text-zinc-400">
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
