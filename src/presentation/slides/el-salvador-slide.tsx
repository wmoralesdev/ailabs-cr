import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function ElSalvadorSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex min-h-0 flex-col justify-between gap-[3cqh] py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Capítulo uno</SlideKicker>
            <SlideTitle className="max-w-[13ch]">
              Empezó aquí, en El Salvador
            </SlideTitle>
          </div>
          <SlideMain className="flex flex-col justify-end gap-[2.4cqh]">
            <p className="deck-lead max-w-[24ch] text-foreground">
              No fue una gran conferencia. Fue gente llegando, haciendo
              preguntas y construyendo junta.
            </p>
            <p className="deck-callout text-muted-foreground">
              Ahí se vio que Ambassadors podía funcionar aquí: salas reales,
              proyectos reales, gente que volvía.
            </p>
          </SlideMain>
        </div>

        <figure className="relative min-h-0 self-center overflow-hidden rounded-[1.2cqw] shadow-panel">
          <img
            src="/img/_DSC0897.jpg"
            alt="Builders trabajando juntos en un meetup de Cursor"
            className="aspect-[3/2] h-full max-h-[62cqh] w-full object-cover"
          />
        </figure>
      </div>
    </Slide>
  )
}
