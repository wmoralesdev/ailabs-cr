import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SlideProps = {
  children: ReactNode
  className?: string
  /** Title slides center content; content slides use a top title band. */
  variant?: "title" | "content"
}

export function Slide({
  children,
  className,
  variant = "content",
}: SlideProps) {
  return (
    <section
      data-slide
      data-variant={variant}
      className={cn(
        "deck-slide relative flex h-full w-full flex-col overflow-hidden bg-background text-foreground",
        variant === "title" && "justify-between",
        variant === "content" && "justify-start gap-[3cqh]",
        className
      )}
    >
      <div aria-hidden className="deck-gradient pointer-events-none absolute inset-0">
        <div className="absolute -top-[30%] -right-[12%] size-[52%] rounded-full bg-purple/25 blur-3xl" />
        <div className="absolute -bottom-[35%] -left-[10%] size-[48%] rounded-full bg-lavender/20 blur-3xl dark:bg-lavender/10" />
      </div>
      {children}
    </section>
  )
}

export function SlideHeader({
  children,
  className,
  ...props
}: ComponentProps<"header">) {
  return (
    <header className={cn("deck-header relative z-10", className)} {...props}>
      {children}
    </header>
  )
}

export function SlideMain({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("deck-main relative z-10", className)} {...props}>
      {children}
    </div>
  )
}

export function SlideFooter({
  children,
  className,
  ...props
}: ComponentProps<"footer">) {
  return (
    <footer
      className={cn(
        "deck-footer relative z-10 flex items-end justify-between gap-[2cqw] text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </footer>
  )
}

export function SlideKicker({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("deck-kicker", className)} {...props}>
      {children}
    </p>
  )
}

export function SlideTitle({
  children,
  className,
  ...props
}: ComponentProps<"h1">) {
  return (
    <h1 className={cn("deck-title font-display text-balance", className)} {...props}>
      {children}
    </h1>
  )
}

export function SlideSubtitle({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p
      className={cn("deck-subtitle text-pretty text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export function SlideBody({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div className={cn("deck-body", className)} {...props}>
      {children}
    </div>
  )
}
