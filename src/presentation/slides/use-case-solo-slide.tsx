import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function UseCaseSoloSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Use case</SlideKicker>
      <SlideTitle>Solo builders and freelancers</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        One person, many hats — Cursor becomes the teammate that never leaves the
        codebase.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Scaffold features and refactor without losing the thread</li>
            <li>Turn client notes into working slices faster</li>
            <li>Keep quality high by reviewing every diff</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
