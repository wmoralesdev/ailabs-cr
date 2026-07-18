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
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[30%] -right-[12%] size-[52%] rounded-full bg-purple/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[35%] -left-[10%] size-[48%] rounded-full bg-lavender/20 blur-3xl dark:bg-lavender/10"
      />

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
