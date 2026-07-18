import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

export function Section02Slide() {
  return (
    <Slide variant="section">
      <SlideMain className="relative z-10 mt-auto mb-auto flex items-end gap-[3.5cqw]">
        <SlideNumber className="mb-0 shrink-0 text-[9cqw]">02</SlideNumber>
        <SlideTitle className="max-w-[13ch] pb-[0.8cqh]">
          From El Salvador to Central America
        </SlideTitle>
      </SlideMain>
    </Slide>
  )
}
