import { DemoPromptInput } from "@/components/app/demo-prompt-input"
import { DocCodeBlock } from "@/components/app/doc-code-block"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CheckIcon, ChevronUp } from "lucide-react"
import type { LandingContent } from "./data"
import { FeaturesComponent } from "./features-component"

export default function Landing({ content }: { content: LandingContent }) {
  return (
    <div className="bg-background flex min-h-screen w-full flex-col gap-48">
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

      <div className="relative mx-auto w-full max-w-3xl">
        <h2 className="text-foreground mb-8 text-center text-3xl font-medium">
          The best way to build AI interfaces
        </h2>
        <DemoPromptInput />
      </div>

      <div className="mx-auto max-w-6xl">
        <h2 className="text-foreground mb-8 text-center text-3xl font-medium">
          {content.features_core.title}
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
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
        <div className="text-foreground mb-8 text-left text-3xl font-medium">
          One command to install
        </div>
        <DocCodeBlock
          language="bash"
          code={`npx shadcn@latest add "https://prompt-kit.com/c/[COMPONENT].json"`}
        />
      </div>

      <div className="relative mx-auto w-full max-w-xl py-12">
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
