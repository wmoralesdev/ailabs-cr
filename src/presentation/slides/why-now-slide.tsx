import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function WhyNowSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Context</SlideKicker>
      <SlideTitle>Why now</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        AI coding stopped being a demo. It’s becoming the default way software gets made.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Smaller teams can ship at a larger pace</li>
            <li>Distance matters less than judgment and taste</li>
            <li>Central America can lead in practice, not just adoption</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
