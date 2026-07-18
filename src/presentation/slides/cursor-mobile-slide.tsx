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
    <Slide variant="content" className="justify-center gap-0">
      <div className="deck-split relative z-10 content-center">
        <div className="flex h-full flex-col justify-center gap-[1.8cqh]">
          <SlideKicker>The newest piece</SlideKicker>
          <SlideTitle className="max-w-[10ch]">Cursor on your phone</SlideTitle>
          <p className="deck-lead max-w-[20ch] text-foreground">
            Not typing on a tiny keyboard — starting and steering agents away
            from your desk.
          </p>
        </div>
        <SlideMain className="deck-rail flex h-full flex-col justify-center">
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
