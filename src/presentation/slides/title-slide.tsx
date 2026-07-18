import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function TitleSlide() {
  return (
    <Slide variant="title" className="justify-center">
      <SlideMain>
        <BrandMark className="mb-[4cqh]" />
        <SlideTitle>Event presentation</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          One idea per slide. Add the next one as its own TSX file.
        </SlideSubtitle>
      </SlideMain>
    </Slide>
  )
}
