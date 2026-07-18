import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const cases = [
  "Builders solos sacando features de punta a punta",
  "Equipos metiéndose en codebases grandes y armando cambios con más cuidado",
  "Workshops donde revisar el resultado es parte de la lección",
]

export function CursorUseCasesSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Casos de uso</SlideKicker>
            <SlideTitle className="max-w-[14ch]">
              Solo, en equipo o en workshops
            </SlideTitle>
          </div>
          <p className="deck-aside">
            Misma herramienta, trabajos distintos: solo, en equipo o aprendiendo
            en público.
          </p>
        </div>
        <SlideMain className="deck-stagger flex flex-col justify-center gap-[2.2cqh]">
          {cases.map((item) => (
            <p key={item} className="deck-callout max-w-[32ch] text-foreground">
              {item}
            </p>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
