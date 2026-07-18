import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const points = [
  "It reads the codebase you are working in",
  "It proposes edits you can accept, tweak, or reject",
  "You stay in control of what lands in the repo",
]

export function WhatIsCursorSlide() {
  return (
    <Slide variant="content" className="justify-between gap-0">
      <div className="relative z-10 max-w-[36ch]">
        <SlideKicker>If you have never used it</SlideKicker>
        <SlideTitle className="mt-[1.4cqh] max-w-[16ch]">
          Cursor is an editor built around AI
        </SlideTitle>
        <p className="deck-lead mt-[2.8cqh] max-w-[26ch] text-foreground">
          VS Code with AI that understands your project — not a chatbot on the
          side.
        </p>
      </div>

      <SlideMain className="relative z-10 mt-[5cqh] grid grid-cols-3 gap-[2cqw]">
        {points.map((point, index) => (
          <div key={point} className="border-t border-foreground/15 pt-[1.6cqh]">
            <p className="deck-rail-index mb-[1cqh]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="deck-column-text text-foreground">{point}</p>
          </div>
        ))}
      </SlideMain>
    </Slide>
  )
}
