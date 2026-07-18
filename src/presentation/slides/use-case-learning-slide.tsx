import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function UseCaseLearningSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Use case</SlideKicker>
      <SlideTitle>Learning and teaching</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Students, mentors, and community workshops use Cursor as a live studio —
        not a black box.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Explain a codebase while you navigate it</li>
            <li>Practice prompting with real constraints</li>
            <li>Show the review step as part of the craft</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
