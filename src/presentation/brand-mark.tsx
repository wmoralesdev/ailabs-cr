import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

type BrandMarkProps = {
  className?: string
}

export function BrandMark({ className }: BrandMarkProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const src =
    mounted && resolvedTheme === "dark"
      ? "/brand/ailabs-light.svg"
      : "/brand/ailabs-dark.svg"

  return (
    <img
      src={src}
      alt="AI Labs"
      className={cn("h-[4.2cqw] w-auto", className)}
    />
  )
}
