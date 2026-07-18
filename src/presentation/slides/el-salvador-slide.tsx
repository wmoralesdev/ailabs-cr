import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content" className="justify-center gap-0">
      <SlideMain className="relative z-10 grid max-w-[56ch] grid-cols-[1fr_1fr] items-center gap-[4cqw]">
        <div className="space-y-[1.8cqh]">
          <SlideKicker>Chapter one</SlideKicker>
          <SlideTitle className="max-w-[13ch]">
            It started here in El Salvador
          </SlideTitle>
        </div>
        <div className="space-y-[2.4cqh]">
          <p className="deck-lead max-w-[22ch] text-foreground">
            Not a big conference — people showing up, asking questions, and
            shipping together.
          </p>
          <p className="deck-callout text-muted-foreground">
            That local energy proved the Ambassadors model could work here: real
            rooms, real projects, real follow-up.
          </p>
        </div>
      </SlideMain>
    </Slide>
  )
}
