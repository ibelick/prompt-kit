import { ResponseStream } from "@/components/prompt-kit/response-stream"

export function ResponseStreamTypewriter() {
  const text = `This text is being typed out character by character, simulating a typewriter effect. This is the default mode of the ResponseStream component. You can use speed to control the speed or as to control the rendering element. Or onComplete to run a function when the text is fully typed. Check the other props too!
    `

  return (
    <div className="w-full min-w-full">
      <ResponseStream
        textStream={text}
        mode="typewriter"
        speed={20}
        className="text-sm"
      />
    </div>
  )
}
