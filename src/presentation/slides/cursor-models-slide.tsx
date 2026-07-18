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
    <Slide variant="content" className="justify-center gap-0">
      <div className="deck-split relative z-10 content-center">
        <div className="flex h-full flex-col justify-center gap-[1.8cqh]">
          <SlideKicker>Models</SlideKicker>
          <SlideTitle>Pick the model for the job</SlideTitle>
          <p className="deck-aside mt-[0.4cqh]">
            Inside Cursor you switch models for speed, depth, or a longer agent
            run — whatever the moment needs.
          </p>
        </div>

        <SlideMain className="deck-rail flex h-full flex-col justify-center">
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
