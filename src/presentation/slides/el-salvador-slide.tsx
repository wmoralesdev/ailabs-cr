import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content" className="justify-center gap-0">
      <SlideMain className="relative z-10 max-w-[36ch]">
        <SlideKicker>Chapter one</SlideKicker>
        <SlideTitle className="mt-[1.6cqh] max-w-[14ch]">
          It started here in El Salvador
        </SlideTitle>
        <p className="deck-lead mt-[3.5cqh] max-w-[24ch] text-foreground">
          Not a big conference — people showing up, asking questions, and
          shipping together.
        </p>
        <p className="deck-callout mt-[3.5cqh] text-muted-foreground">
          That local energy proved the Ambassadors model could work here: real
          rooms, real projects, real follow-up.
        </p>
      </SlideMain>
    </Slide>
  )
}
