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
            <SlideKicker>Then the map filled in</SlideKicker>
            <SlideTitle className="max-w-[18ch]">
              Guatemala, Panama, and now Costa Rica
            </SlideTitle>
          </div>
          <SlideSubtitle className="mt-[3cqh]">
            After El Salvador, Ambassadors and organizers showed up next door.
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
            <span className="deck-path-item">Panama</span>
            <span className="deck-path-sep" aria-hidden>
              →
            </span>
            <span className="deck-path-item">Costa Rica</span>
          </div>
          <p className="deck-aside max-w-[46ch]">
            Same idea in every city: local communities, not one-off talks. A
            region that keeps learning in public.
          </p>
        </SlideMain>
      </div>
    </Slide>
  )
}
