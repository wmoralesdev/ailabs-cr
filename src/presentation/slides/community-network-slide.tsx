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
      <SlideKicker>What the program is for</SlideKicker>
      <SlideTitle>Meetups, workshops, and shared practice</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Each country builds its own rhythm — hackathons, workshops, casual
        meetups — whatever helps people level up together.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Learn Cursor in a room with other builders</li>
            <li>Go deeper on AI in general, not only one product</li>
            <li>Leave with habits you can use on Monday morning</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
