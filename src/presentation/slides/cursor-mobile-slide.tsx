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
      <SlideKicker>What is new</SlideKicker>
      <SlideTitle>Cursor for Mobile</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        A native iOS app to launch and steer agents from anywhere — not a tiny
        code editor in your pocket.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Start cloud agents when an idea hits</li>
            <li>Follow progress, review work, merge on the go</li>
            <li>Same models and agent loop as desktop and web</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
