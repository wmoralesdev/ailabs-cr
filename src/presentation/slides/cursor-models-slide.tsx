import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const rows = [
  {
    label: "Más rápido",
    text: "Edits chicos y exploración, cuando quieres avanzar rápido.",
  },
  {
    label: "Más fuerte",
    text: "Trabajo enmarañado, de varios pasos, que pide más criterio.",
  },
  {
    label: "Flexible",
    text: "Cambia a mitad de sesión si el trabajo cambia de forma.",
  },
]

export function CursorModelsSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Modelos</SlideKicker>
            <SlideTitle>Elige el modelo para el trabajo</SlideTitle>
          </div>
          <p className="deck-aside">
            Dentro de Cursor cambias de modelo según lo que pida el momento:
            velocidad, profundidad o una corrida de agente más larga.
          </p>
        </div>

        <SlideMain className="deck-rail deck-stagger flex flex-col justify-center">
          {rows.map((row) => (
            <div key={row.label} className="deck-rail-item grid-cols-[8cqw_1fr]">
              <span className="deck-rail-index tracking-tight">{row.label}</span>
              <p className="deck-rail-text text-muted-foreground">{row.text}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
