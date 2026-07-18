import { useEffect, useRef, useState } from "react"
import type { PointerEvent as ReactPointerEvent, ReactNode } from "react"
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

type SlideDirection = 1 | -1

/** Slightly longer than `--dur-base` so the exit layer is removed after the CSS animation. */
const SLIDE_TRANSITION_MS = 280
const CHROME_IDLE_MS = 2200

function prefersReducedMotion() {
  if (typeof window === "undefined") return true
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

export function PresentationShell({ slides }: PresentationShellProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef(0)
  const totalRef = useRef(slides.length)
  const transitionTokenRef = useRef(0)
  const goToRef = useRef<(nextIndex: number) => void>(() => {})
  const chromeTimerRef = useRef<number | null>(null)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<SlideDirection>(1)
  const [outgoingIndex, setOutgoingIndex] = useState<number | null>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [chromeVisible, setChromeVisible] = useState(true)

  const total = slides.length
  totalRef.current = total
  const current = slides[index]
  const outgoing = outgoingIndex !== null ? slides[outgoingIndex] : null

  function revealChrome() {
    setChromeVisible(true)
    if (chromeTimerRef.current != null) {
      window.clearTimeout(chromeTimerRef.current)
    }
    chromeTimerRef.current = window.setTimeout(() => {
      setChromeVisible(false)
      chromeTimerRef.current = null
    }, CHROME_IDLE_MS)
  }

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === rootRef.current)
    }

    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", onFullscreenChange)
    }
  }, [])

  useEffect(() => {
    revealChrome()
    return () => {
      transitionTokenRef.current += 1
      if (chromeTimerRef.current != null) {
        window.clearTimeout(chromeTimerRef.current)
      }
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
    function goTo(nextIndex: number) {
      const clamped = Math.min(
        Math.max(nextIndex, 0),
        Math.max(totalRef.current - 1, 0),
      )
      if (clamped === indexRef.current) return

      const nextDirection: SlideDirection =
        clamped > indexRef.current ? 1 : -1
      const fromIndex = indexRef.current
      indexRef.current = clamped
      setDirection(nextDirection)
      setIndex(clamped)
      revealChrome()

      if (prefersReducedMotion()) {
        setOutgoingIndex(null)
        return
      }

      const token = transitionTokenRef.current + 1
      transitionTokenRef.current = token
      setOutgoingIndex(fromIndex)

      window.setTimeout(() => {
        if (transitionTokenRef.current === token) {
          setOutgoingIndex(null)
        }
      }, SLIDE_TRANSITION_MS)
    }

    goToRef.current = goTo

    const onKeyDown = (event: KeyboardEvent) => {
      revealChrome()

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault()
        goTo(indexRef.current + 1)
        return
      }

      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault()
        goTo(indexRef.current - 1)
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

    const onPointerMove = () => {
      revealChrome()
    }

    window.addEventListener("keydown", onKeyDown)
    window.addEventListener("pointermove", onPointerMove)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("pointermove", onPointerMove)
    }
  }, [])

  function onStagePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    const target = event.target
    if (!(target instanceof Element)) return
    if (target.closest("[data-deck-chrome]")) return

    const root = rootRef.current
    if (!root) return

    const { left, width } = root.getBoundingClientRect()
    const ratio = (event.clientX - left) / width
    if (ratio < 0.3) {
      goToRef.current(indexRef.current - 1)
      return
    }
    goToRef.current(indexRef.current + 1)
  }

  const enterClass =
    direction === 1 ? "deck-slide-enter-next" : "deck-slide-enter-prev"
  const exitClass =
    direction === 1 ? "deck-slide-exit-next" : "deck-slide-exit-prev"

  return (
    <div
      ref={rootRef}
      className="relative min-h-[100dvh] h-dvh w-full overflow-hidden bg-background"
      data-slide-index={index}
      data-slide-total={total}
      onPointerDown={onStagePointerDown}
    >
      <div className="relative h-full w-full">
        {outgoing != null ? (
          <div
            key={`exit-${outgoingIndex}`}
            className={`absolute inset-0 h-full w-full ${exitClass}`}
            aria-hidden
          >
            {outgoing}
          </div>
        ) : null}
        <div
          key={`enter-${index}`}
          className={`absolute inset-0 h-full w-full ${outgoing != null ? enterClass : ""}`}
        >
          {current}
        </div>
      </div>

      <div
        data-deck-chrome
        className={cn(
          "absolute right-4 bottom-4 z-20 flex items-center gap-2 transition-opacity duration-200",
          chromeVisible ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onPointerDown={(event) => {
          event.stopPropagation()
          revealChrome()
        }}
      >
        <p
          aria-live="polite"
          aria-atomic="true"
          className="rounded-md border border-border bg-background/90 px-2.5 py-1.5 font-sans text-xs/none tabular-nums tracking-wide text-muted-foreground shadow-soft backdrop-blur-sm"
        >
          <span className="text-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span aria-hidden>/</span>
          <span className="sr-only"> de </span>
          {String(total).padStart(2, "0")}
        </p>
        <ThemeToggle />
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label={isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
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
