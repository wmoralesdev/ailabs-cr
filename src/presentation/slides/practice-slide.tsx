import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function PracticeSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Practice</SlideKicker>
      <SlideTitle>A useful loop</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Treat Cursor like a sharp teammate. Clear intent beats vague prompts.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ol>
            <li>State the outcome and constraints</li>
            <li>Point at the files that matter</li>
            <li>Review the diff like a PR</li>
            <li>Tighten, then move to the next slice</li>
          </ol>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
