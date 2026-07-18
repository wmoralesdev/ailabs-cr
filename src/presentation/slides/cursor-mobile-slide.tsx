import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const steps = [
  "Arranca un cloud agent cuando aparece una idea",
  "Revisa el progreso, deja follow-ups y mira qué volvió",
  "Haz merge cuando esté listo, sin abrir la laptop primero",
]

export function CursorMobileSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>La pieza más nueva</SlideKicker>
            <SlideTitle className="max-w-[10ch]">Cursor en el teléfono</SlideTitle>
          </div>
          <p className="deck-lead max-w-[20ch] text-foreground">
            No es tipear en un teclado chico. Es arrancar y guiar agents lejos
            del escritorio.
          </p>
        </div>
        <SlideMain className="deck-rail deck-stagger flex flex-col justify-center">
          {steps.map((step, index) => (
            <div key={step} className="deck-rail-item">
              <span className="deck-rail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="deck-rail-text">{step}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
