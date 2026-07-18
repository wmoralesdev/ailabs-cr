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
    <Slide variant="content" className="justify-between gap-[4cqh]">
      <div className="relative z-10 max-w-[42ch]">
        <SlideKicker>If you have never used it</SlideKicker>
        <SlideTitle className="mt-[1.2cqh] max-w-[16ch]">
          Cursor is an editor built around AI
        </SlideTitle>
        <p className="deck-lead mt-[2cqh] max-w-[28ch] text-foreground">
          VS Code with AI that understands your project — not a chatbot on the
          side.
        </p>
      </div>

      <SlideMain className="relative z-10 grid grid-cols-3 gap-[2.4cqw]">
        {points.map((point, index) => (
          <div key={point} className="border-t border-foreground/15 pt-[1.4cqh]">
            <p className="deck-rail-index mb-[0.8cqh]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="deck-column-text max-w-[18ch] text-foreground">
              {point}
            </p>
          </div>
        ))}
      </SlideMain>
    </Slide>
  )
}
