import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

type CursorMarkProps = {
  className?: string
}

export function CursorMark({ className }: CursorMarkProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const src =
    mounted && resolvedTheme === "dark"
      ? "/cursor/LOCKUP_HORIZONTAL_2D_DARK.svg"
      : "/cursor/LOCKUP_HORIZONTAL_2D_LIGHT.svg"

  return (
    <img
      src={src}
      alt="Cursor"
      className={cn("h-[4.2cqw] w-auto", className)}
    />
  )
}
