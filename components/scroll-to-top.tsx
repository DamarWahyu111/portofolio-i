"use client"

import { useEffect, useState } from "react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 500)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 p-4 glass-panel text-[rgb(0,217,255)] rounded-full hover:bg-[rgb(0,217,255)]/10 transition-all duration-300 shadow-lg"
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}
