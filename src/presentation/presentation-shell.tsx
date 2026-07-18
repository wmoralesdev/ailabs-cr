import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ArrowExpandIcon,
  ArrowShrinkIcon,
} from "@hugeicons/core-free-icons"

import { ThemeToggle } from "@/components/theme-toggle"
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
        "relative flex h-svh w-full flex-col overflow-hidden bg-muted",
        isFullscreen && "bg-background"
      )}
    >
      <div className="flex min-h-0 flex-1 items-center justify-center p-3 md:p-5">
        <div
          className={cn(
            "relative aspect-video h-auto max-h-full w-full overflow-hidden bg-background shadow-panel",
            "max-w-[min(100%,calc((100svh-4.5rem)*16/9))]",
            isFullscreen && "max-w-[min(100vw,calc(100vh*16/9))] shadow-none"
          )}
          data-slide-index={index}
          data-slide-total={total}
        >
          {current}
        </div>
      </div>

      <div
        className={cn(
          "flex shrink-0 items-center justify-between gap-3 px-4 py-2",
          isFullscreen &&
            "absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/70 to-transparent pb-4"
        )}
      >
        <p className="font-sans text-xs text-muted-foreground">
          {total > 0 ? `${index + 1} / ${total}` : "0 / 0"}
        </p>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            className="bg-background shadow-soft"
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
    </div>
  )
}
