"use client"

import {
  Source,
  SourceContent,
  SourceTrigger,
} from "@/components/prompt-kit/source"

export function SourceCustom() {
  return (
    <div className="flex gap-2">
      <Source href="https://ibelick.com">
        <SourceTrigger label={1} />
        <SourceContent
          title="Ibelick"
          description="Julien Thibeaut (@Ibelick). Design Engineer passionate about crafting beautiful, functional interfaces and tools."
        />
      </Source>
      <Source href="https://www.google.com">
        <SourceTrigger
          label={2}
          className="hover:bg-foreground hover:text-background"
        />
        <SourceContent
          title="Google"
          description="Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for."
        />
      </Source>
      <Source href="https://www.figma.com">
        <SourceTrigger />
        <SourceContent title="Figma" description="Figma is a design tool." />
      </Source>
      <Source href="https://www.github.com">
        <SourceTrigger showFavicon label="G" />
        <SourceContent
          title="GitHub"
          description="GitHub is a code hosting platform for version control and collaboration."
        />
      </Source>
      <Source href="https://www.wikipedia.org">
        <SourceTrigger showFavicon label="Wikipedia" />
        <SourceContent
          title="Wikipedia"
          description="Wikipedia is a free encyclopedia."
        />
      </Source>
    </div>
  )
}
