import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorGrokSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>What is new</SlideKicker>
      <SlideTitle>Cursor Grok</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Cursor&apos;s most capable model — built for hard, long-running work
        across software and beyond.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Strong on multi-step tasks with creative tool use</li>
            <li>Available across desktop, web, iOS, CLI, and SDK</li>
            <li>A fit for agents you start on Mobile and finish later</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
