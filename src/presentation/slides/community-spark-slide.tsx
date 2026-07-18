import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CommunitySparkSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>The beginning</SlideKicker>
      <SlideTitle>A program for builders who gather people</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Cursor saw a global community already forming — meetups, forums, shared
        workflows — and decided to back it formally.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Ambassadors host meetups, hackathons, and workshops</li>
            <li>Local leaders help new users find their footing</li>
            <li>Feedback from the floor reaches the Cursor team</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
