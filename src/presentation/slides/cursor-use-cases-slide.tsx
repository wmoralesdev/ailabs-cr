import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const cases = [
  "Solo builders moving features end to end",
  "Teams exploring big codebases and drafting safer changes",
  "Workshops where the review step is part of the lesson",
]

export function CursorUseCasesSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Use cases</SlideKicker>
            <SlideTitle className="max-w-[11ch]">
              Where people lean on it
            </SlideTitle>
          </div>
          <p className="deck-aside">
            Same tool, different jobs — alone, with a team, or learning in
            public.
          </p>
        </div>
        <SlideMain className="flex flex-col justify-center gap-[2.2cqh]">
          {cases.map((item) => (
            <p key={item} className="deck-callout max-w-[32ch] text-foreground">
              {item}
            </p>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
