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
          How the community started, how it grew here, and how we actually use
          the tool day to day.
        </SlideSubtitle>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>Community meetup</span>
      </SlideFooter>
    </Slide>
  )
}
