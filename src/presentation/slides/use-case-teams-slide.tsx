import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function UseCaseTeamsSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Use case</SlideKicker>
      <SlideTitle>Product and engineering teams</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Shared repos, shared standards — Cursor helps the team move together.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Explore unfamiliar areas of a large codebase quickly</li>
            <li>Draft tests, migrations, and docs beside the change</li>
            <li>Use agents for longer tasks; humans own the merge</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
