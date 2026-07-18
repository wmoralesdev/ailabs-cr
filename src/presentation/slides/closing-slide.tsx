import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function ClosingSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="mt-auto mb-auto">
        <BrandMark className="mb-[4cqh]" />
        <SlideTitle>Let’s build from Central America</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          Open Cursor. Pick a real problem. Ship the next slice tonight.
        </SlideSubtitle>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>cursor.com</span>
      </SlideFooter>
    </Slide>
  )
}
