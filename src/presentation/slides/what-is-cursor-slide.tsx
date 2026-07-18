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
      <SlideKicker>The tool</SlideKicker>
      <SlideTitle>What Cursor is</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        An editor built around AI — not a chatbot bolted onto your IDE.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Reads your codebase, not just the open file</li>
            <li>Edits across files with intent you can review</li>
            <li>Keeps you in the loop: propose, inspect, accept</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
