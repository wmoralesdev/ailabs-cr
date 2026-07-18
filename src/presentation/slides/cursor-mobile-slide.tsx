import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const steps = [
  "Kick off a cloud agent when an idea shows up",
  "Check progress, leave follow-ups, review what came back",
  "Merge when it is ready — without opening the laptop first",
]

export function CursorMobileSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>The newest piece</SlideKicker>
            <SlideTitle className="max-w-[10ch]">Cursor on your phone</SlideTitle>
          </div>
          <p className="deck-lead max-w-[20ch] text-foreground">
            Not typing on a tiny keyboard — starting and steering agents away
            from your desk.
          </p>
        </div>
        <SlideMain className="deck-rail flex flex-col justify-center">
          {steps.map((step, index) => (
            <div key={step} className="deck-rail-item">
              <span className="deck-rail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="deck-rail-text">{step}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
