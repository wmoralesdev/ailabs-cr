import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  ComputerIcon,
  Moon02Icon,
  Sun03Icon,
} from "@hugeicons/core-free-icons"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const options = [
  { value: "light", label: "Claro", icon: Sun03Icon },
  { value: "dark", label: "Oscuro", icon: Moon02Icon },
  { value: "system", label: "Sistema", icon: ComputerIcon },
] as const

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div aria-hidden className={cn("h-7 w-[5.25rem]", className)} />
  }

  return (
    <div
      role="group"
      aria-label="Tema"
      className={cn(
        "flex items-center rounded-md border border-border bg-background/90 p-0.5 shadow-soft backdrop-blur-sm",
        className
      )}
    >
      {options.map((option) => {
        const active = theme === option.value

        return (
          <Button
            key={option.value}
            type="button"
            variant="ghost"
            size="icon-xs"
            aria-label={option.label}
            aria-pressed={active}
            className={cn(
              "size-6 text-muted-foreground",
              active && "bg-muted text-foreground"
            )}
            onClick={() => {
              setTheme(option.value)
            }}
          >
            <HugeiconsIcon icon={option.icon} strokeWidth={2} />
          </Button>
        )
      })}
    </div>
  )
}
