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
      <SlideMain className="flex h-full flex-col">
        <BrandMark />
        <div className="mt-auto grid grid-cols-[1.2fr_0.8fr] items-end gap-[4cqw] pb-[2cqh]">
          <SlideTitle className="max-w-[16ch]">
            Cursor in Central America
          </SlideTitle>
          <p className="deck-aside mb-[0.6cqh] justify-self-end text-right">
            How the community started, how it grew here, and how we actually use
            the tool day to day.
          </p>
        </div>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs</span>
        <span>Community meetup</span>
      </SlideFooter>
    </Slide>
  )
}
