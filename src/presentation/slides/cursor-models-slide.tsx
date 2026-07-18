import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorModelsSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Models</SlideKicker>
      <SlideTitle>Pick the model for the job</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Inside Cursor you can switch models depending on what you need — speed,
        depth, or a longer agent run.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Use a faster model for small edits and exploration</li>
            <li>Reach for a stronger model when the task is messy or multi-step</li>
            <li>Change mid-session when the work changes shape</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
