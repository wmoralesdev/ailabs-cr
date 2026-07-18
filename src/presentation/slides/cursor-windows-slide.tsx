import {
  Slide,
  SlideKicker,
  SlideMain,
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
    <Slide variant="content">
      <div className="relative z-10 flex h-full flex-col justify-between gap-[3cqh]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-[3cqw]">
          <div className="space-y-[1.4cqh]">
            <SlideKicker>How you work in it</SlideKicker>
            <SlideTitle>IDE, Agents, and integrations</SlideTitle>
          </div>
          <p className="deck-aside mt-[3cqh]">
            Day to day you bounce between the editor and the Agents window —
            plus whatever you connect so Cursor fits your stack.
          </p>
        </div>

        <SlideMain className="deck-columns">
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
      </div>
    </Slide>
  )
}
