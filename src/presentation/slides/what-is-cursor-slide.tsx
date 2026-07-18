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
    <Slide variant="content">
      <div className="relative z-10 flex h-full flex-col justify-between gap-[3cqh]">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-start gap-[3cqw]">
          <div className="space-y-[1.4cqh]">
            <SlideKicker>If you have never used it</SlideKicker>
            <SlideTitle className="max-w-[16ch]">
              Cursor is an editor built around AI
            </SlideTitle>
          </div>
          <p className="deck-lead mt-[3cqh] max-w-[24ch] text-foreground">
            VS Code with AI that understands your project — not a chatbot on the
            side.
          </p>
        </div>

        <SlideMain className="grid grid-cols-3 gap-[2.4cqw]">
          {points.map((point, index) => (
            <div
              key={point}
              className="border-t border-foreground/15 pt-[1.4cqh]"
            >
              <p className="deck-rail-index mb-[0.8cqh]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="deck-column-text max-w-[18ch] text-foreground">
                {point}
              </p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
