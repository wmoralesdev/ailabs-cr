import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CentralAmericaSlide() {
  return (
    <Slide variant="content">
      <div className="relative z-10 flex h-full flex-col justify-between gap-[3cqh]">
        <div className="grid grid-cols-[1.15fr_0.85fr] items-start gap-[3cqw]">
          <div className="space-y-[1.4cqh]">
            <SlideKicker>Luego el mapa se llenó</SlideKicker>
            <SlideTitle className="max-w-[18ch]">
              Guatemala, Panamá y ahora Costa Rica
            </SlideTitle>
          </div>
          <SlideSubtitle className="mt-[3cqh]">
            Después de El Salvador, Ambassadors y organizadores aparecieron en
            los países vecinos.
          </SlideSubtitle>
        </div>

        <SlideMain className="space-y-[2.2cqh]">
          <div className="deck-path">
            <span className="deck-path-item" data-muted="true">
              El Salvador
            </span>
            <span className="deck-path-sep" aria-hidden>
              →
            </span>
            <span className="deck-path-item">Guatemala</span>
            <span className="deck-path-sep" aria-hidden>
              →
            </span>
            <span className="deck-path-item">Panamá</span>
            <span className="deck-path-sep" aria-hidden>
              →
            </span>
            <span className="deck-path-item">Costa Rica</span>
          </div>
          <p className="deck-aside max-w-[46ch]">
            La misma idea en cada ciudad: comunidades locales, no charlas
            sueltas. La región sigue aprendiendo en público.
          </p>
        </SlideMain>
      </div>
    </Slide>
  )
}
