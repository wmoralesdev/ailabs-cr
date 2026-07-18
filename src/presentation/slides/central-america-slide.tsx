import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CentralAmericaSlide() {
  return (
    <Slide variant="content" className="justify-between gap-[4cqh]">
      <div className="relative z-10 max-w-[40ch]">
        <SlideKicker>Then the map filled in</SlideKicker>
        <SlideTitle className="mt-[1.2cqh] max-w-[18ch]">
          Guatemala, Panama, and now Costa Rica
        </SlideTitle>
        <SlideSubtitle className="mt-[1.6cqh]">
          After El Salvador, Ambassadors and organizers showed up next door.
        </SlideSubtitle>
      </div>

      <SlideMain className="relative z-10 space-y-[2.4cqh]">
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
          <span className="deck-path-item">Panama</span>
          <span className="deck-path-sep" aria-hidden>
            →
          </span>
          <span className="deck-path-item">Costa Rica</span>
        </div>
        <p className="deck-aside max-w-[40ch]">
          Same idea in every city: local communities, not one-off talks. A
          region that keeps learning in public.
        </p>
      </SlideMain>
    </Slide>
  )
}
