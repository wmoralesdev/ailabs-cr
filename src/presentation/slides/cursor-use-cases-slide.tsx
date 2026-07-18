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
    <Slide variant="content" className="justify-center gap-0">
      <div className="deck-split relative z-10 content-center">
        <div className="flex h-full flex-col justify-center gap-[1.8cqh]">
          <SlideKicker>Use cases</SlideKicker>
          <SlideTitle className="max-w-[11ch]">
            Where people lean on it
          </SlideTitle>
          <p className="deck-aside">
            Same tool, different jobs — alone, with a team, or learning in
            public.
          </p>
        </div>
        <SlideMain className="flex h-full flex-col justify-center gap-[2cqh]">
          {cases.map((item) => (
            <p key={item} className="deck-callout max-w-[30ch] text-foreground">
              {item}
            </p>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
