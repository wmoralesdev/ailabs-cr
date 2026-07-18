import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section01Slide() {
  return (
    <Slide variant="section">
      <p aria-hidden className="deck-watermark">
        01
      </p>
      <SlideMain className="relative z-10 mt-auto mb-auto flex max-w-[42ch] flex-col gap-[2cqh]">
        <SlideNumber className="mb-0">01</SlideNumber>
        <SlideTitle className="max-w-[15ch]">
          The Cursor Ambassadors program
        </SlideTitle>
      </SlideMain>
    </Slide>
  )
}
