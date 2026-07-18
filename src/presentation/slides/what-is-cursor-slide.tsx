import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function WhatIsCursorSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>If you have never used it</SlideKicker>
      <SlideTitle>Cursor is an editor built around AI</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Think of it as VS Code with AI that actually understands your project —
        not a chatbot you paste code into on the side.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>It reads the codebase you are working in</li>
            <li>It proposes edits you can accept, tweak, or reject</li>
            <li>You stay in control of what lands in the repo</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
