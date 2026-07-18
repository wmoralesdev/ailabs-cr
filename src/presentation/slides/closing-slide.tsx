import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function ClosingSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="flex h-full flex-col">
        <BrandMark />
        <div className="mt-auto max-w-[38ch] pb-[2cqh]">
          <SlideTitle className="max-w-[14ch]">
            And then there is AI Labs
          </SlideTitle>
          <p className="deck-lead mt-[2.8cqh] max-w-[28ch] text-foreground">
            The community in El Salvador that grew around this practice — and
            kept going past any single tool.
          </p>
          <p className="deck-callout mt-[3cqh] text-muted-foreground">
            Come for Cursor. Stay to talk about AI more broadly — other tools,
            other workflows, and how we keep raising the bar together.
          </p>
        </div>
      </SlideMain>

      <SlideFooter>
        <span>AI Labs · El Salvador</span>
        <span>Thanks for being here</span>
      </SlideFooter>
    </Slide>
  )
}
