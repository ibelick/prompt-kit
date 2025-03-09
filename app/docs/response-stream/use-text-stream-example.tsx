"use client"

import { useTextStream } from "@/components/prompt-kit/response-stream"
import { cn } from "@/lib/utils"

export function UseTextStreamExample() {
  const text = `This example demonstrates direct use of the useTextStream hook with fade animation. Each word fades in sequentially, creating a smooth reading experience. The hook doesn't interfere with the UI rendering, so you can use it in combination with other components. You can customize the fadeIn effect as you want. You can use getFadeDuration or getSegmentDelay to control the animation speed. Or you can just set speed and control everything with CSS.`

  const { segments } = useTextStream({
    textStream: text,
    mode: "fade",
    speed: 100,
  })

  // For fade mode, we need to manually create the CSS and render the segments.
  const fadeStyle = `
    @keyframes fadeIn {
      from { opacity: 0; filter: blur(2px); }
      to { opacity: 1; filter: blur(0px); }
    }
    
    .custom-fade-segment {
      display: inline;
      opacity: 0;
      animation: fadeIn 1000ms ease-out forwards;
    }

    .custom-fade-segment-space {
      white-space: pre;
    }
  `

  return (
    <div className="w-full min-w-full">
      <style>{fadeStyle}</style>

      <div className="min-h-[100px] rounded-md p-4 text-sm">
        <div className="relative">
          {segments.map((segment, idx) => {
            const isWhitespace = /^\s+$/.test(segment.text)

            return (
              <span
                key={`${segment.text}-${idx}`}
                className={cn(
                  "custom-fade-segment",
                  isWhitespace && "custom-fade-segment-space"
                )}
                style={{
                  animationDelay: `${idx * 2}ms`,
                }}
              >
                {segment.text}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
