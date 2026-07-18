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
    <Slide variant="content" className="justify-center gap-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-[5cqh]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-[3cqw]">
          <div>
            <SlideKicker>How you work in it</SlideKicker>
            <SlideTitle className="mt-[1.2cqh]">
              IDE, Agents, and integrations
            </SlideTitle>
          </div>
          <p className="deck-aside pb-[0.4cqh]">
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
