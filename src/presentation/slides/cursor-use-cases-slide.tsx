import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorUseCasesSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Use cases</SlideKicker>
      <SlideTitle>Where people lean on it</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Same tool, different jobs — depending on whether you are shipping alone,
        with a team, or learning in public.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Solo builders moving features end to end</li>
            <li>Teams exploring big codebases and drafting safer changes</li>
            <li>Workshops where the review step is part of the lesson</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
