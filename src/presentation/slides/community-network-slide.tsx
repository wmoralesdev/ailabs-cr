import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

const points = [
  "Aprender Cursor en un cuarto con otros builders",
  "Hablar de IA en general, no solo de un producto",
  "Salir con hábitos que puedas usar el lunes en la mañana",
]

export function CommunityNetworkSlide() {
  return (
    <Slide variant="content">
      <div className="deck-split relative z-10 h-full items-stretch">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>Para qué es el programa</SlideKicker>
            <SlideTitle>Meetups, workshops y práctica compartida</SlideTitle>
          </div>
          <SlideSubtitle>
            Cada país arma su propio ritmo: hackathons, workshops, meetups
            informales. Lo que ayude a la gente a subir de nivel junta.
          </SlideSubtitle>
        </div>

        <SlideMain className="deck-rail deck-stagger flex flex-col justify-center">
          {points.map((point, index) => (
            <div key={point} className="deck-rail-item">
              <span className="deck-rail-index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="deck-rail-text">{point}</p>
            </div>
          ))}
        </SlideMain>
      </div>
    </Slide>
  )
}
