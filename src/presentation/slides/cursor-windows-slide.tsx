import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const columns = [
  {
    label: "Ventana IDE",
    text: "Escribe, revisa diffs y guía edits cortos en contexto.",
  },
  {
    label: "Ventana Agents",
    text: "Delega tareas más largas y míralas correr.",
  },
  {
    label: "Integraciones",
    text: "Conecta las herramientas que tu equipo ya usa.",
  },
]

export function CursorWindowsSlide() {
  return (
    <Slide variant="content">
      <div className="relative z-10 flex h-full flex-col justify-between gap-[3cqh]">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-start gap-[3cqw]">
          <div className="space-y-[1.4cqh]">
            <SlideKicker>Cómo trabajas ahí</SlideKicker>
            <SlideTitle>IDE, Agents e integraciones</SlideTitle>
          </div>
          <p className="deck-aside mt-[3cqh]">
            Día a día vas y vienes entre el editor y la ventana de Agents, más
            lo que conectes para que Cursor encaje en tu stack.
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
