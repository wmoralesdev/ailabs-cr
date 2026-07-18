import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

const columns = [
  {
    label: "IDE window",
    text: "Write, review diffs, and steer short edits in context.",
  },
  {
    label: "Agents window",
    text: "Hand off longer tasks and watch them run.",
  },
  {
    label: "Integrations",
    text: "Plug in the tools your team already uses.",
  },
]

export function CursorWindowsSlide() {
  return (
    <Slide variant="content" className="justify-between gap-[4cqh]">
      <div className="relative z-10 max-w-[40ch]">
        <SlideKicker>How you work in it</SlideKicker>
        <SlideTitle className="mt-[1.2cqh]">
          IDE, Agents, and integrations
        </SlideTitle>
        <SlideSubtitle className="mt-[1.6cqh]">
          Day to day you bounce between the editor and the Agents window — plus
          whatever you connect so Cursor fits your stack.
        </SlideSubtitle>
      </div>

      <SlideMain className="deck-columns relative z-10">
        {columns.map((column) => (
          <div
            key={column.label}
            className="border-t border-foreground/15 pt-[1.4cqh]"
          >
            <p className="deck-column-label">{column.label}</p>
            <p className="deck-column-text max-w-[18ch] text-foreground">
              {column.text}
            </p>
          </div>
        ))}
      </SlideMain>
    </Slide>
  )
}
