import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function TitleSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="mt-auto mb-auto">
        <BrandMark className="mb-[4cqh]" />
        <SlideTitle>Cursor in Central America</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          From community roots to the ways we build — and what comes next.
        </SlideSubtitle>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>Community meetup</span>
      </SlideFooter>
    </Slide>
  )
}
