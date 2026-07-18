import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section03Slide() {
  return (
    <Slide variant="section" className="justify-center">
      <SlideMain className="relative z-10 flex flex-col items-start gap-[2cqh]">
        <SlideNumber className="mb-0">03</SlideNumber>
        <div className="h-px w-[8cqw] bg-purple/70" aria-hidden />
        <SlideTitle className="max-w-[12ch]">Getting to know Cursor</SlideTitle>
      </SlideMain>
    </Slide>
  )
}
