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
    <Slide variant="content">
      <div className="relative z-10 grid h-full min-h-0 grid-cols-[1.05fr_0.95fr] items-stretch gap-[3cqw]">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>On the phone</SlideKicker>
            <SlideTitle className="max-w-[12ch]">A quick look at the flow</SlideTitle>
          </div>
          <SlideMain className="deck-rail max-w-[32ch]">
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

        <div className="flex items-center justify-end gap-[2cqw]">
          <IphoneFrame caption="Home / agents" className="w-[min(24cqw,15rem)]" />
          <IphoneFrame caption="Agent run" className="w-[min(24cqw,15rem)]" />
        </div>
      </div>
    </Slide>
  )
}
