import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowExpandIcon,
  ArrowShrinkIcon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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

  useEffect(() => {
    const goNext = () => {
      setIndex((value) => Math.min(value + 1, Math.max(total - 1, 0)))
    }

    const goPrev = () => {
      setIndex((value) => Math.max(value - 1, 0))
    }

    const onKeyDown = (event: KeyboardEvent) => {
      // Up / down navigate slides (same role as left / right in typical decks).
      // Left / right keep their usual prev / next meaning.
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
      className={cn(
        "relative flex h-svh w-full items-center justify-center overflow-hidden bg-graphite",
        isFullscreen && "bg-black"
      )}
    >
      <div
        className={cn(
          "relative aspect-video w-full overflow-hidden bg-background shadow-panel",
          "max-h-svh max-w-[min(100vw,calc(100svh*16/9))]",
          isFullscreen && "max-h-full max-w-[min(100vw,calc(100vh*16/9))] shadow-none"
        )}
        data-slide-index={index}
        data-slide-total={total}
      >
        {current}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <p className="font-sans text-xs text-white/55">
          {total > 0 ? `${index + 1} / ${total}` : "0 / 0"}
          <span className="ml-3 text-white/35">↑↓ / ←→ slides · F fullscreen</span>
        </p>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          className="pointer-events-auto border-border-dark bg-graphite text-white hover:bg-graphite/80"
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
