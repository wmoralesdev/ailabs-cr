import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideBody,
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
        <SlideTitle>And then there is AI Labs</SlideTitle>
        <SlideSubtitle className="mt-[2.4cqh]">
          We are the community in El Salvador that grew around this practice —
          and kept going past any single tool.
        </SlideSubtitle>
        <SlideBody className="mt-[3.5cqh] max-w-[34ch] text-muted-foreground">
          <p>
            Come to the meetup to learn Cursor, sure. Stay because you want a
            place to talk about AI more broadly — other tools, other workflows,
            and how we keep raising the bar together.
          </p>
        </SlideBody>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs · El Salvador</span>
        <span>Thanks for being here</span>
      </SlideFooter>
    </Slide>
  )
}
