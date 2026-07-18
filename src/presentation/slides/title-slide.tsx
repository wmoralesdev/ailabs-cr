import { BrandMark } from "@/presentation/brand-mark"
import { CursorMark } from "@/presentation/cursor-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

export function TitleSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="flex h-full flex-col justify-between">
        <div className="motion-fade-in flex items-center gap-[2.4cqw]">
          <BrandMark />
          <span
            aria-hidden
            className="h-[2.4cqw] w-px bg-foreground/20"
          />
          <CursorMark />
        </div>
        <div className="grid grid-cols-[1.15fr_0.85fr] items-end gap-[3cqw]">
          <SlideTitle className="motion-rise motion-delay-1 max-w-[15ch]">
            Cursor en Centroamérica
          </SlideTitle>
          <p className="deck-aside motion-rise motion-delay-2 pb-[0.3cqh]">
            Cómo empezó la comunidad, cómo creció en la región y qué hacemos con
            la herramienta día a día.
          </p>
        </div>
      </SlideMain>

      <SlideFooter className="motion-fade-in motion-delay-3 mt-[3cqh]">
        <span>Ai Labs</span>
        <span>Meetup de comunidad</span>
      </SlideFooter>
    </Slide>
  )
}
