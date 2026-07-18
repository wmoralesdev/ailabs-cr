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
    <Slide variant="content" className="justify-between gap-0">
      <div className="relative z-10 max-w-[30ch]">
        <SlideKicker>Models</SlideKicker>
        <SlideTitle className="mt-[1.4cqh]">Pick the model for the job</SlideTitle>
      </div>

      <SlideMain className="relative z-10 mt-auto">
        <p className="deck-aside mb-[3cqh] max-w-[36ch]">
          Inside Cursor you switch models for speed, depth, or a longer agent
          run — whatever the moment needs.
        </p>
        <div className="deck-rail max-w-[52ch]">
          {rows.map((row) => (
            <div key={row.label} className="deck-rail-item grid-cols-[8cqw_1fr]">
              <span className="deck-rail-index tracking-tight">{row.label}</span>
              <p className="deck-rail-text text-muted-foreground">{row.text}</p>
            </div>
          ))}
        </div>
      </SlideMain>
    </Slide>
  )
}
