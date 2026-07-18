import type { ComponentProps, ReactNode } from "react"

import { cn } from "@/lib/utils"

type SlideProps = {
  children: ReactNode
  className?: string
  /** title = hero; section = number + name; content = body slides */
  variant?: "title" | "section" | "content"
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
        variant === "section" && "justify-between",
        variant === "content" && "justify-between gap-[3cqh]",
        className
      )}
    >
      <div aria-hidden className="deck-gradient pointer-events-none absolute inset-0" />
      {children}
    </section>
  )
}

export function SlideNumber({
  children,
  className,
  ...props
}: ComponentProps<"p">) {
  return (
    <p className={cn("deck-number font-display", className)} {...props}>
      {children}
    </p>
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
    <div className={cn("deck-main relative z-10 min-h-0", className)} {...props}>
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
        "deck-footer relative z-10 mt-auto flex items-end justify-between gap-[2cqw] text-muted-foreground",
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
