import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function TitleSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="flex h-full flex-col justify-end gap-[3cqh]">
        <BrandMark />
        <div className="grid grid-cols-[1.2fr_0.8fr] items-end gap-[3cqw]">
          <SlideTitle className="max-w-[15ch]">
            Cursor in Central America
          </SlideTitle>
          <p className="deck-aside pb-[0.3cqh]">
            How the community started, how it grew here, and how we actually use
            the tool day to day.
          </p>
        </div>
      </SlideMain>

      <SlideFooter className="mt-[4cqh]">
        <span>AI Labs</span>
        <span>Community meetup</span>
      </SlideFooter>
    </Slide>
  )
}
