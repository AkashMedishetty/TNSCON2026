"use client"

import { useEffect, useState } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // 768px is Tailwind's md breakpoint
    }

    // Check on mount
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}
