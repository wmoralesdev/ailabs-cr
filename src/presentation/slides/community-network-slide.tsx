import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CommunityNetworkSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>The network</SlideKicker>
      <SlideTitle>Community at scale</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        What started as a call for input became a worldwide Ambassador program.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Hundreds of ambassadors across dozens of countries</li>
            <li>Hundreds of cities hosting Cursor events</li>
            <li>A shared craft: ship in public, teach by doing</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
