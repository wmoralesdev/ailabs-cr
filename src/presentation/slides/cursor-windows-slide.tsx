import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CursorWindowsSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>How you work in it</SlideKicker>
      <SlideTitle>IDE, Agents, and integrations</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        Day to day, you bounce between the editor and the Agents window — plus
        whatever you connect so Cursor fits your stack.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>
              <strong className="font-medium text-foreground">IDE window</strong>
              {" — "}
              write, review diffs, and steer short edits in context
            </li>
            <li>
              <strong className="font-medium text-foreground">Agents window</strong>
              {" — "}
              hand off longer tasks and watch them run
            </li>
            <li>
              <strong className="font-medium text-foreground">Integrations</strong>
              {" — "}
              plug in the tools your team already uses
            </li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
