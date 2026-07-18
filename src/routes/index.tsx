import { createFileRoute } from "@tanstack/react-router"

import { PresentationShell } from "@/presentation/presentation-shell"
import { CentralAmericaSlide } from "@/presentation/slides/central-america-slide"
import { ClosingSlide } from "@/presentation/slides/closing-slide"
import { CommunityNetworkSlide } from "@/presentation/slides/community-network-slide"
import { CommunitySparkSlide } from "@/presentation/slides/community-spark-slide"
import { CursorGrokSlide } from "@/presentation/slides/cursor-grok-slide"
import { CursorMobileSlide } from "@/presentation/slides/cursor-mobile-slide"
import { ElSalvadorSlide } from "@/presentation/slides/el-salvador-slide"
import { Section01Slide } from "@/presentation/slides/section-01-slide"
import { Section02Slide } from "@/presentation/slides/section-02-slide"
import { Section03Slide } from "@/presentation/slides/section-03-slide"
import { Section04Slide } from "@/presentation/slides/section-04-slide"
import { TitleSlide } from "@/presentation/slides/title-slide"
import { UseCaseLearningSlide } from "@/presentation/slides/use-case-learning-slide"
import { UseCaseSoloSlide } from "@/presentation/slides/use-case-solo-slide"
import { UseCaseTeamsSlide } from "@/presentation/slides/use-case-teams-slide"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <PresentationShell
      slides={[
        <TitleSlide key="title" />,
        <Section01Slide key="section-01" />,
        <CommunitySparkSlide key="community-spark" />,
        <CommunityNetworkSlide key="community-network" />,
        <Section02Slide key="section-02" />,
        <ElSalvadorSlide key="el-salvador" />,
        <CentralAmericaSlide key="central-america" />,
        <Section03Slide key="section-03" />,
        <UseCaseSoloSlide key="use-case-solo" />,
        <UseCaseTeamsSlide key="use-case-teams" />,
        <UseCaseLearningSlide key="use-case-learning" />,
        <Section04Slide key="section-04" />,
        <CursorMobileSlide key="cursor-mobile" />,
        <CursorGrokSlide key="cursor-grok" />,
        <ClosingSlide key="closing" />,
      ]}
    />
  )
}
