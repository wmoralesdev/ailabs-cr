import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CentralAmericaSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>The region</SlideKicker>
      <SlideTitle>Then it spread across Central America</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        What worked in El Salvador became a pattern other cities could run with.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Meetups and circles forming beyond one country</li>
            <li>Builders sharing prompts, reviews, and shipping habits</li>
            <li>A regional network — connected, still local</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
