import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CentralAmericaSlide() {
  return (
    <Slide variant="content" className="justify-center gap-0">
      <div className="relative z-10 flex h-full flex-col justify-center gap-[5cqh]">
        <div className="grid grid-cols-[1.1fr_0.9fr] items-start gap-[3cqw]">
          <div>
            <SlideKicker>Then the map filled in</SlideKicker>
            <SlideTitle className="mt-[1.2cqh] max-w-[18ch]">
              Guatemala, Panama, and now Costa Rica
            </SlideTitle>
          </div>
          <SlideSubtitle className="mt-[3.2cqh] max-w-[28ch]">
            After El Salvador, Ambassadors and organizers showed up next door.
          </SlideSubtitle>
        </div>

        <SlideMain className="space-y-[2cqh]">
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
          <p className="deck-aside max-w-[44ch]">
            Same idea in every city: local communities, not one-off talks. A
            region that keeps learning in public.
          </p>
        </SlideMain>
      </div>
    </Slide>
  )
}
