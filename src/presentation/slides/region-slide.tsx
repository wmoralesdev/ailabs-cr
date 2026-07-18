import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function RegionSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Central America</SlideKicker>
      <SlideTitle>Building from here</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        We don’t need to wait for a scene elsewhere. The scene is whoever shows up and ships.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Founders and freelancers already delivering with AI</li>
            <li>Students learning production habits earlier</li>
            <li>Communities forming around craft, not hype</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
