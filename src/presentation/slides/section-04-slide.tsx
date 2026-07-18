import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section04Slide() {
  return (
    <Slide variant="section" className="justify-between">
      <SlideTitle className="relative z-10 max-w-[10ch] self-start">
        Cursor for iOS
      </SlideTitle>
      <SlideMain className="relative z-10 mt-auto">
        <SlideNumber className="mb-0 text-[12cqw]">04</SlideNumber>
      </SlideMain>
    </Slide>
  )
}
