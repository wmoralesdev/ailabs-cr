import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideHeader,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function TitleSlide() {
  return (
    <Slide variant="title">
      <SlideHeader>
        <BrandMark />
      </SlideHeader>

      <SlideMain>
        <SlideTitle>Event presentation</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          One idea per slide. Add the next one as its own TSX file.
        </SlideSubtitle>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>16:9</span>
      </SlideFooter>
    </Slide>
  )
}
