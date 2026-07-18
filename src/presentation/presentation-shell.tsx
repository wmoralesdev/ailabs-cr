import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowExpandIcon,
  ArrowShrinkIcon,
} from "@hugeicons/core-free-icons"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"

type PresentationShellProps = {
  slides: ReactNode[]
}

export function PresentationShell({ slides }: PresentationShellProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const total = slides.length
  const current = slides[index]

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === rootRef.current)
    }

    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])

  async function toggleFullscreen() {
    const root = rootRef.current
    if (!root) return

    if (document.fullscreenElement === root) {
      await document.exitFullscreen()
      return
    }

    await root.requestFullscreen()
  }

  // isFullscreen kept for the expand/shrink icon only

  useEffect(() => {
    const goNext = () => {
      setIndex((value) => Math.min(value + 1, Math.max(total - 1, 0)))
    }

    const goPrev = () => {
      setIndex((value) => Math.max(value - 1, 0))
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault()
        goNext()
        return
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault()
        goPrev()
        return
      }

      if (event.key === "f" || event.key === "F") {
        event.preventDefault()
        const root = rootRef.current
        if (!root) return
        if (document.fullscreenElement === root) {
          void document.exitFullscreen()
        } else {
          void root.requestFullscreen()
        }
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [total])

  return (
    <div
      ref={rootRef}
      className="relative flex h-svh w-full items-center justify-center overflow-hidden bg-background"
    >
      <div
        className="relative h-[min(100svh,calc(100vw*9/16))] w-[min(100vw,calc(100svh*16/9))] overflow-hidden bg-background"
        data-slide-index={index}
        data-slide-total={total}
      >
        {current}
      </div>

      <div className="absolute right-4 bottom-4 flex items-center gap-2">
        <ThemeToggle />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          className="bg-background/90 shadow-soft backdrop-blur-sm"
          onClick={() => {
            void toggleFullscreen()
          }}
        >
          <HugeiconsIcon
            icon={isFullscreen ? ArrowShrinkIcon : ArrowExpandIcon}
            strokeWidth={2}
          />
        </Button>
      </div>
    </div>
  )
}
