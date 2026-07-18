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
    <Slide variant="content" className="justify-center gap-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-[5cqh]">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-end gap-[3cqw]">
          <div>
            <SlideKicker>If you have never used it</SlideKicker>
            <SlideTitle className="mt-[1.2cqh] max-w-[16ch]">
              Cursor is an editor built around AI
            </SlideTitle>
          </div>
          <p className="deck-lead max-w-[24ch] pb-[0.3cqh] text-foreground">
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
