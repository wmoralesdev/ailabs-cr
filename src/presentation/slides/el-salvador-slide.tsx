import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content">
      <SlideMain className="relative z-10 grid h-full grid-cols-[1fr_1fr] items-stretch gap-[4cqw]">
        <div className="flex flex-col justify-between py-[1cqh]">
          <SlideKicker>Chapter one</SlideKicker>
          <SlideTitle className="max-w-[13ch]">
            It started here in El Salvador
          </SlideTitle>
        </div>
        <div className="flex flex-col justify-between gap-[3cqh] py-[1cqh]">
          <p className="deck-lead max-w-[24ch] text-foreground">
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
