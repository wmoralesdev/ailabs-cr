import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section02Slide() {
  return (
    <Slide variant="section">
      <SlideMain className="deck-split items-end">
        <SlideTitle className="max-w-[12ch] self-center">
          From El Salvador to Central America
        </SlideTitle>
        <SlideNumber className="justify-self-end text-right text-[14cqw] leading-none">
          02
        </SlideNumber>
      </SlideMain>
    </Slide>
  )
}
