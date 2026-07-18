import { IphoneFrame } from "@/presentation/iphone-frame"
import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const steps = [
  "Open a repo and describe the task",
  "Let the agent run in the cloud",
  "Review and send the next instruction",
]

export function CursorIosDemoSlide() {
  return (
    <Slide variant="content" className="justify-center gap-0">
      <div className="relative z-10 grid h-full min-h-0 grid-cols-[1.05fr_0.95fr] items-center gap-[3cqw]">
        <div className="flex flex-col justify-center gap-[2cqh]">
          <SlideKicker>On the phone</SlideKicker>
          <SlideTitle className="max-w-[12ch]">A quick look at the flow</SlideTitle>
          <SlideMain className="deck-rail mt-[0.5cqh] max-w-[32ch]">
            {steps.map((step, index) => (
              <div key={step} className="deck-rail-item">
                <span className="deck-rail-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="deck-rail-text">{step}</p>
              </div>
            ))}
          </SlideMain>
          <p className="deck-aside max-w-[30ch]">
            Screenshot slots for later — rehearse the story with these frames
            today.
          </p>
        </div>

        <div className="flex h-full items-center justify-center gap-[2cqw]">
          <IphoneFrame caption="Home / agents" className="w-[min(24cqw,15rem)]" />
          <IphoneFrame caption="Agent run" className="w-[min(24cqw,15rem)]" />
        </div>
      </div>
    </Slide>
  )
}
