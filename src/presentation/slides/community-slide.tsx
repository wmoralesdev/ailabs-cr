import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CommunitySlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Community</SlideKicker>
      <SlideTitle>What we’re growing</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        AI Labs is a place to learn in public, share patterns, and raise the bar together.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Meetups with real demos, not slide theater</li>
            <li>Builders helping builders across the region</li>
            <li>A shared language for shipping with AI</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
