import { Slide, SlideMain, SlideTitle } from "@/presentation/slide"

export function Section01Slide() {
  return (
    <Slide variant="section" className="justify-end">
      <p aria-hidden className="deck-watermark">
        01
      </p>
      <SlideMain className="relative z-10 mb-[4cqh] max-w-[14ch]">
        <p className="deck-kicker mb-[2cqh]">Section</p>
        <SlideTitle>The Cursor Ambassadors program</SlideTitle>
      </SlideMain>
    </Slide>
  )
}
