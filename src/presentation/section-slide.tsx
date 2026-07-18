import type { ReactNode } from "react"

import { cn } from "@/lib/utils"
import { Slide, SlideMain, SlideNumber, SlideTitle } from "@/presentation/slide"

type SectionSlideProps = {
  number: string
  title: ReactNode
  titleClassName?: string
}

/** Shared chapter opener: watermark + number + title. */
export function SectionSlide({
  number,
  title,
  titleClassName,
}: SectionSlideProps) {
  return (
    <Slide variant="section">
      <p aria-hidden className="deck-watermark">
        {number}
      </p>
      <SlideMain className="relative z-10 mt-auto mb-auto flex max-w-[42ch] flex-col gap-[2cqh]">
        <SlideNumber className="mb-0">{number}</SlideNumber>
        <SlideTitle className={cn(titleClassName)}>{title}</SlideTitle>
      </SlideMain>
    </Slide>
  )
}
