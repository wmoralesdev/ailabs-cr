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
        <SlideTitle>The story keeps growing here</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          Community started it. Practice spreads it. Mobile and Grok open the
          next chapter — from Central America.
        </SlideSubtitle>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>cursor.com</span>
      </SlideFooter>
    </Slide>
  )
}
