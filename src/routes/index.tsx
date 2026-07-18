import { createFileRoute } from "@tanstack/react-router"

import { PresentationShell } from "@/presentation/presentation-shell"
import { AgendaSlide } from "@/presentation/slides/agenda-slide"
import { ClosingSlide } from "@/presentation/slides/closing-slide"
import { CommunitySlide } from "@/presentation/slides/community-slide"
import { PracticeSlide } from "@/presentation/slides/practice-slide"
import { RegionSlide } from "@/presentation/slides/region-slide"
import { TitleSlide } from "@/presentation/slides/title-slide"
import { WhatIsCursorSlide } from "@/presentation/slides/what-is-cursor-slide"
import { WhyNowSlide } from "@/presentation/slides/why-now-slide"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <PresentationShell
      slides={[
        <TitleSlide key="title" />,
        <AgendaSlide key="agenda" />,
        <WhyNowSlide key="why-now" />,
        <WhatIsCursorSlide key="what-is-cursor" />,
        <RegionSlide key="region" />,
        <PracticeSlide key="practice" />,
        <CommunitySlide key="community" />,
        <ClosingSlide key="closing" />,
      ]}
    />
  )
}
