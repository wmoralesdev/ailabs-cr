import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Chapter one</SlideKicker>
      <SlideTitle>It started here in El Salvador</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        The first chapter of this regional story was not a big conference. It
        was people in El Salvador showing up, asking questions, and shipping
        together.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <p>
            That local energy mattered. It proved the Ambassadors model could
            work in our context — real rooms, real projects, real follow-up.
          </p>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
