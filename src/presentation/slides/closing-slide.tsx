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
      <SlideMain className="flex h-full flex-col justify-between gap-[4cqh]">
        <BrandMark />
        <div className="grid max-w-[52ch] grid-cols-[1.05fr_0.95fr] items-end gap-[3cqw]">
          <SlideTitle className="max-w-[12ch]">
            And then there is AI Labs
          </SlideTitle>
          <div className="space-y-[2cqh] pb-[0.3cqh]">
            <p className="deck-lead max-w-[22ch] text-foreground">
              The community in El Salvador that grew around this practice — and
              kept going past any single tool.
            </p>
            <p className="deck-callout max-w-[26ch] text-muted-foreground">
              Come for Cursor. Stay to talk about AI more broadly — other tools,
              other workflows, and how we keep raising the bar together.
            </p>
          </div>
        </div>
      </SlideMain>

      <SlideFooter className="mt-[3cqh]">
        <span>AI Labs · El Salvador</span>
        <span>Thanks for being here</span>
      </SlideFooter>
    </Slide>
  )
}
