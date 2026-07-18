import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorMobileSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>The newest piece</SlideKicker>
      <SlideTitle>Cursor on your phone</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Cursor for iOS is not about typing code on a tiny keyboard. It is about
        starting and steering agents when you are away from your desk.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Kick off a cloud agent when an idea shows up</li>
            <li>Check progress, leave follow-ups, review what came back</li>
            <li>Merge when it is ready — without opening the laptop first</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
