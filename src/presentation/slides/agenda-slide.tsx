import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function AgendaSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Tonight</SlideKicker>
        <SlideTitle>What we will do</SlideTitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Why this moment for builders in the region</li>
            <li>What Cursor changes in day-to-day coding</li>
            <li>How teams here are already using it</li>
            <li>A simple practice you can take home tonight</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
