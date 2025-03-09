import { ResponseStream } from "@/components/prompt-kit/response-stream"

export function ResponseStreamFade() {
  const text = `This text is fading in word by word. The fade mode creates a smooth and elegant text reveal. You can customize the fadeDuration but also the segmentDelay to control the speed of the animation.`

  return (
    <div className="w-full min-w-full">
      <ResponseStream
        textStream={text}
        mode="fade"
        className="text-sm"
        fadeDuration={1200}
      />
    </div>
  )
}
