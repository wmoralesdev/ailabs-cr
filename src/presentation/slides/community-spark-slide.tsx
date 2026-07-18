import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function CommunitySparkSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex min-h-0 flex-col justify-between gap-[3cqh] py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Hace un par de años</SlideKicker>
            <SlideTitle className="max-w-[12ch]">
              Empezó como una apuesta por la gente
            </SlideTitle>
          </div>
          <SlideMain className="flex flex-col justify-end gap-[2.4cqh]">
            <p className="deck-lead text-foreground">
              Cursor lanzó Ambassadors para que builders armaran comunidad en
              sus propias ciudades, sin esperar un tour desde HQ.
            </p>
            <p className="deck-aside max-w-[32ch]">
              País por país, la gente se sumó. Si te importa cómo se aprende a
              construir con IA, deberías poder reunir a esa gente donde vives.
            </p>
          </SlideMain>
        </div>

        <figure className="relative min-h-0 self-center overflow-hidden rounded-[1.2cqw] shadow-panel">
          <img
            src="/img/_DSC1134.webp"
            alt="Comunidad Cursor con la bandera de IEEE Computer Society"
            className="aspect-[3/2] h-full max-h-[62cqh] w-full object-cover"
          />
        </figure>
      </div>
    </Slide>
  )
}
