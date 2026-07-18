import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section04Slide() {
  return (
    <Slide variant="section" className="justify-center">
      <SlideMain className="relative z-10 flex max-w-[40ch] flex-col gap-[2cqh]">
        <SlideNumber className="mb-0">04</SlideNumber>
        <SlideTitle className="max-w-[10ch]">Cursor for iOS</SlideTitle>
      </SlideMain>
    </Slide>
  )
}
