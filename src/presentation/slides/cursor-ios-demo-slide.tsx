import { IphoneFrame } from "@/presentation/iphone-frame"
import {
  Slide,
  SlideKicker,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const steps = [
  "Abre un repo y describe la tarea",
  "Deja que el agent corra en la nube",
  "Revisa y manda la siguiente instrucción",
]

export function CursorIosDemoSlide() {
  return (
    <Slide variant="content">
      <div className="relative z-10 grid h-full min-h-0 grid-cols-[1.1fr_0.9fr] items-stretch gap-[3cqw]">
        <div className="flex flex-col justify-between py-[1cqh]">
          <div className="space-y-[1.6cqh]">
            <SlideKicker>En el teléfono</SlideKicker>
            <SlideTitle className="max-w-[12ch]">
              Un vistazo rápido al flujo
            </SlideTitle>
          </div>
          <SlideMain className="deck-rail deck-stagger max-w-[32ch]">
            {steps.map((step, index) => (
              <div key={step} className="deck-rail-item">
                <span className="deck-rail-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="deck-rail-text">{step}</p>
              </div>
            ))}
          </SlideMain>
          <p className="deck-aside max-w-[30ch]">
            Misma conversación con el agent, lejos del escritorio.
          </p>
        </div>

        <div className="flex items-center justify-end gap-[2cqw]">
          <IphoneFrame
            className="w-[min(28cqw,17rem)]"
            caption="Inicio"
          >
            <img
              src="/phone/app0.png"
              alt="Cursor en iPhone: pantalla de inicio"
              className="h-full w-full object-cover object-top"
            />
          </IphoneFrame>
          <IphoneFrame
            className="w-[min(28cqw,17rem)]"
            caption="Inicio / agents"
          >
            <img
              src="/phone/app1.jpeg"
              alt="Cursor en iPhone: pantalla de agents"
              className="h-full w-full object-cover object-top"
            />
          </IphoneFrame>
        </div>
      </div>
    </Slide>
  )
}
