import {
  Slide,
  SlideBody,
  SlideKicker,
  SlideMain,
  SlideSubtitle,
  SlideTitle,
} from "@/presentation/slide"

export function CentralAmericaSlide() {
  return (
    <Slide variant="content">
      <SlideKicker>Then the map filled in</SlideKicker>
      <SlideTitle>Guatemala, Panama, and now Costa Rica</SlideTitle>
      <SlideSubtitle className="mt-[2cqh]">
        After El Salvador, Ambassadors and organizers showed up next door —
        first Guatemala, then Panama, and now Costa Rica.
      </SlideSubtitle>
      <SlideMain className="mt-[4cqh]">
        <SlideBody>
          <ul>
            <li>Same idea: local communities, not one-off talks</li>
            <li>Different cities, shared language around building with AI</li>
            <li>A region that keeps learning in public</li>
          </ul>
        </SlideBody>
      </SlideMain>
    </Slide>
  )
}
