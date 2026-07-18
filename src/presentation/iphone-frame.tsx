import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type IphoneFrameProps = {
  children?: ReactNode
  className?: string
  /** Short label under the Dynamic Island area, for empty screens. */
  caption?: string
}

export function IphoneFrame({
  children,
  className,
  caption = "Screenshot",
}: IphoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[9/19.5] w-[min(22cqw,14rem)] overflow-hidden rounded-[2.2cqw] border border-border bg-graphite shadow-panel",
        "ring-1 ring-black/10 dark:ring-white/10",
        className
      )}
    >
      <div className="absolute inset-[0.55cqw] overflow-hidden rounded-[1.7cqw] bg-background">
        <div className="absolute top-[1.1cqw] left-1/2 z-10 h-[1.35cqw] w-[28%] -translate-x-1/2 rounded-full bg-graphite" />
        <div className="flex h-full w-full items-center justify-center">
          {children ?? (
            <div className="flex h-full w-full flex-col items-center justify-center gap-[1cqh] bg-muted/60 px-[1.2cqw] text-center">
              <div className="size-[18%] rounded-[0.8cqw] border border-dashed border-border-dark/40 dark:border-white/25" />
              <p className="font-sans text-[1.1cqw] leading-snug text-muted-foreground">
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
