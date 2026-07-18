import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const rows = [
  {
    label: "Faster",
    text: "Small edits, exploration, when you want momentum.",
  },
  {
    label: "Stronger",
    text: "Messy, multi-step work that needs more judgment.",
  },
  {
    label: "Flexible",
    text: "Switch mid-session when the work changes shape.",
  },
]

export function CursorModelsSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Models</SlideKicker>
            <SlideTitle>Pick the model for the job</SlideTitle>
          </div>
          <p className="deck-aside">
            Inside Cursor you switch models for speed, depth, or a longer agent
            run — whatever the moment needs.
          </p>
        </div>

        <SlideMain className="deck-rail flex flex-col justify-center">
          {rows.map((row) => (
            <div key={row.label} className="deck-rail-item grid-cols-[8cqw_1fr]">
              <span className="deck-rail-index tracking-tight">{row.label}</span>
              <p className="deck-rail-text text-muted-foreground">{row.text}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
