import { createFileRoute } from "@tanstack/react-router"

import { PresentationShell } from "@/presentation/presentation-shell"
import { TitleSlide } from "@/presentation/slides/title-slide"

export const Route = createFileRoute("/")({ component: App })

function App() {
  return (
    <PresentationShell
      slides={[
        <TitleSlide key="title" />,
      ]}
    />
  )
}
