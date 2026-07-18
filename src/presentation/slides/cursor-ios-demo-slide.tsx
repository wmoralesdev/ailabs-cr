import { IphoneFrame } from "@/presentation/iphone-frame"
import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorIosDemoSlide() {
  return (
    <Slide variant="content">
      <div className="relative z-10 grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] items-center gap-[4cqw]">
        <div>
          <SlideKicker>On the phone</SlideKicker>
          <SlideTitle>A quick look at the flow</SlideTitle>
          <SlideSubtitle className="mt-[2cqh]">
            Drop real screenshots into these frames later — for now they are
            placeholders so we can rehearse the story.
          </SlideSubtitle>
          <SlideMain className="mt-[3cqh]">
            <ol className="deck-body list-decimal space-y-[0.7em] pl-[1.2em]">
              <li>Open a repo and describe the task</li>
              <li>Let the agent run in the cloud</li>
              <li>Review and send the next instruction</li>
            </ol>
          </SlideMain>
        </div>

        <div className="flex items-center justify-end gap-[2cqw]">
          <IphoneFrame caption="Home / agents" />
          <IphoneFrame caption="Agent run" className="translate-y-[2cqh]" />
        </div>
      </div>
    </Slide>
  )
}
