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
      <div className="relative z-10 grid h-full min-h-0 grid-cols-[0.95fr_1.05fr] items-center gap-[4cqw]">
        <div>
          <SlideKicker>On the phone</SlideKicker>
          <SlideTitle className="mt-[1.4cqh] max-w-[12ch]">
            A quick look at the flow
          </SlideTitle>
          <SlideMain className="deck-rail mt-[3.5cqh] max-w-[28ch]">
            {steps.map((step, index) => (
              <div key={step} className="deck-rail-item">
                <span className="deck-rail-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="deck-rail-text">{step}</p>
              </div>
            ))}
          </SlideMain>
          <p className="deck-aside mt-[2.4cqh] max-w-[26ch]">
            Screenshot slots for later — rehearse the story with these frames
            today.
          </p>
        </div>

        <div className="flex items-end justify-end gap-[2.2cqw] pr-[1cqw]">
          <IphoneFrame caption="Home / agents" className="w-[min(20cqw,12.5rem)]" />
          <IphoneFrame
            caption="Agent run"
            className="mb-[4cqh] w-[min(20cqw,12.5rem)]"
          />
        </div>
      </div>
    </Slide>
  )
}
