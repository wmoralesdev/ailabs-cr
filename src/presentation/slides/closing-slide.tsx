import { BrandMark } from "@/presentation/brand-mark"
import {
  Slide,
  SlideFooter,
  SlideMain,
  SlideTitle,
} from "@/presentation/slide"

const team = [
  {
    name: "Walter",
    src: "/members/me.png",
  },
  {
    name: "Dani",
    src: "/members/dani.jpeg",
  },
  {
    name: "Bea",
    src: "/members/bea.jpeg",
  },
  {
    name: "Saul",
    src: "/members/saul.jpeg",
  },
] as const

export function ClosingSlide() {
  return (
    <Slide variant="title">
      <SlideMain className="flex h-full min-h-0 flex-col">
        <BrandMark className="motion-fade-in self-start" />

        <div className="mt-auto flex w-full flex-col gap-[4cqh]">
          <div className="motion-rise motion-delay-1 flex max-w-[32ch] flex-col gap-[2cqh]">
            <SlideTitle>Gracias</SlideTitle>
            <p className="deck-aside text-muted-foreground">
Seguimos en la comunidad.
            </p>
          </div>

          <ul
            aria-label="Equipo Ai Labs"
            className="motion-rise motion-delay-2 flex items-end gap-[2cqw]"
          >
            {team.map((member) => (
              <li
                key={member.name}
                className="flex flex-col items-center gap-[0.8cqh]"
              >
                <img
                  src={member.src}
                  alt=""
                  className="size-[5.5cqw] shrink-0 rounded-full object-cover ring-2 ring-background"
                />
                <span className="font-sans text-[1.1cqw] leading-none text-muted-foreground">
                  {member.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SlideMain>

      <SlideFooter className="motion-fade-in motion-delay-3 mt-[3cqh]">
        <span>Ai Labs</span>
        <span>El Salvador</span>
      </SlideFooter>
    </Slide>
  )
}
