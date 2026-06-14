"use client"

import { type PointerEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"

function HeroPhotoBadge() {
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const dragStartRef = useRef({ x: 0, y: 0 })
  const lastDragRef = useRef({ x: 0, y: 0, tilt: 0, reboundX: 0, reboundTilt: 0 })
  const lastLanyardRef = useRef({ angle: 0, length: 225 })
  const reboundFrameRef = useRef<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isRebounding, setIsRebounding] = useState(false)

  const updateLanyard = (stage: HTMLDivElement, dragX: number, dragY: number) => {
    const card = cardRef.current

    if (!card) return

    const anchorX = stage.clientWidth / 2
    const anchorY = -205
    const ringX = card.offsetLeft + card.offsetWidth / 2 + dragX
    const ringY = card.offsetTop + 22 + dragY
    const deltaX = ringX - anchorX
    const deltaY = ringY - anchorY
    const angle = Math.atan2(-deltaX, deltaY) * (180 / Math.PI)
    const length = Math.hypot(deltaX, deltaY)

    stage.style.setProperty("--lanyard-angle", `${angle}deg`)
    stage.style.setProperty("--lanyard-length", `${length}px`)
    lastLanyardRef.current = { angle, length }
  }

  const setDragPosition = (element: HTMLDivElement, x: number, y: number) => {
    const maxX = Math.min(280, element.clientWidth * 0.48)
    const dragX = Math.max(-maxX, Math.min(maxX, x))
    const dragY = Math.max(-80, Math.min(180, y))
    const tilt = dragX * 0.06
    const reboundX = dragX * -0.16
    const reboundTilt = dragX * -0.025

    element.style.setProperty("--drag-x", `${dragX}px`)
    element.style.setProperty("--drag-y", `${dragY}px`)
    element.style.setProperty("--drag-tilt", `${tilt}deg`)
    element.style.setProperty("--rebound-x", `${reboundX}px`)
    element.style.setProperty("--rebound-tilt", `${reboundTilt}deg`)
    lastDragRef.current = { x: dragX, y: dragY, tilt, reboundX, reboundTilt }
    updateLanyard(element, dragX, dragY)
  }

  const stopRebound = () => {
    if (reboundFrameRef.current !== null) {
      cancelAnimationFrame(reboundFrameRef.current)
      reboundFrameRef.current = null
    }
  }

  const springBack = (element: HTMLDivElement) => {
    let x = lastDragRef.current.x
    let y = lastDragRef.current.y
    let velocityX = -x * 1.8
    let velocityY = y > 0 ? -y * 2.2 : -y * 1.2
    let previousTime = performance.now()

    const animate = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.032)
      previousTime = time

      const stiffness = 42
      const damping = 10.5
      velocityX += (-stiffness * x - damping * velocityX) * delta
      velocityY += (-stiffness * y - damping * velocityY) * delta
      x += velocityX * delta
      y += velocityY * delta

      setDragPosition(element, x, y)

      if (Math.abs(x) < 0.35 && Math.abs(y) < 0.35 && Math.abs(velocityX) < 2 && Math.abs(velocityY) < 2) {
        setDragPosition(element, 0, 0)
        setIsRebounding(false)
        reboundFrameRef.current = null
        return
      }

      reboundFrameRef.current = requestAnimationFrame(animate)
    }

    reboundFrameRef.current = requestAnimationFrame(animate)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    event.currentTarget.style.setProperty("--rotate-x", `${-y * 8}deg`)
    event.currentTarget.style.setProperty("--rotate-y", `${x * 10}deg`)
    event.currentTarget.style.setProperty("--shine-x", `${(x + 0.5) * 100}%`)
    event.currentTarget.style.setProperty("--shine-y", `${(y + 0.5) * 100}%`)

    if (isDragging) {
      setDragPosition(
        event.currentTarget,
        event.clientX - dragStartRef.current.x,
        event.clientY - dragStartRef.current.y,
      )
    }
  }

  const resetTilt = (event: PointerEvent<HTMLDivElement>) => {
    if (isDragging) return

    event.currentTarget.style.setProperty("--rotate-x", "0deg")
    event.currentTarget.style.setProperty("--rotate-y", "0deg")
    event.currentTarget.style.setProperty("--shine-x", "50%")
    event.currentTarget.style.setProperty("--shine-y", "40%")
  }

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    stopRebound()

    dragStartRef.current = { x: event.clientX, y: event.clientY }
    event.currentTarget.setPointerCapture(event.pointerId)
    event.currentTarget.style.setProperty("--drag-x", "0px")
    event.currentTarget.style.setProperty("--drag-y", "0px")
    event.currentTarget.style.setProperty("--drag-tilt", "0deg")
    event.currentTarget.style.setProperty("--rebound-x", "0px")
    event.currentTarget.style.setProperty("--rebound-tilt", "0deg")
    event.currentTarget.style.setProperty("--release-drag-x", "0px")
    event.currentTarget.style.setProperty("--release-drag-y", "0px")
    event.currentTarget.style.setProperty("--release-drag-tilt", "0deg")
    event.currentTarget.style.setProperty("--release-rebound-x", "0px")
    event.currentTarget.style.setProperty("--release-rebound-tilt", "0deg")
    event.currentTarget.style.setProperty("--release-lanyard-angle", "0deg")
    event.currentTarget.style.setProperty("--release-lanyard-rebound-angle", "0deg")
    event.currentTarget.style.setProperty("--release-lanyard-length", "225px")
    lastDragRef.current = { x: 0, y: 0, tilt: 0, reboundX: 0, reboundTilt: 0 }
    setIsRebounding(false)
    setIsDragging(true)
  }

  const releaseDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const element = event.currentTarget

    setIsDragging(false)
    setIsRebounding(true)
    springBack(element)
  }

  useEffect(() => {
    const stage = stageRef.current

    if (stage) {
      updateLanyard(stage, 0, 0)
    }

    const handleResize = () => {
      if (stageRef.current) {
        updateLanyard(stageRef.current, 0, 0)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      stopRebound()

      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      ref={stageRef}
      className={`hero-badge-stage${isDragging ? " is-dragging" : ""}${isRebounding ? " is-rebounding" : ""}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={releaseDrag}
      onPointerCancel={releaseDrag}
      onPointerLeave={resetTilt}
    >
      <div className="hero-lanyard" aria-hidden="true">
        <span>DAMAR</span>
        <span>DAMAR</span>
        <span>DAMAR</span>
      </div>
      <div ref={cardRef} className="hero-photo-badge">
        <span className="hero-badge-hole" aria-hidden="true" />
        <img
          src="/img/profile-damar.png"
          alt="Damar Wahyu Putra"
          className="hero-badge-image"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const fullText = "DAMAR WAHYU PUTRA"

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index + 1))
      index++
      if (index === fullText.length) clearInterval(interval)
    }, 85)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="slide-down">
          <h1 className="text-5xl md:text-7xl font-black font-orbitron mb-6 leading-tight">
            <span className="block">HI, I&apos;M</span>
            <span className="block drop-shadow-lg text-[rgb(0,217,255)]">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl font-black font-orbitron text-[rgb(170,180,196)] mb-4 tracking-widest">
            FRONTEND DEVELOPER &amp; BACKEND DEVELOPER
          </p>
          <p className="text-base font-space-mono leading-relaxed text-[rgb(130,140,160)] mb-8 max-w-xl">
            As a graduate of CEP-CCIT FTUI with an interest in front-end and back-end development,
            I enjoy turning ideas into tangible products. I focus on performance and accessibility,
            combined with clean design so that every interaction feels intuitive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="glass-button glass-button-cyan px-8 py-3 text-sm flex items-center justify-center"
            >
              View My Work
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="glass-button glass-button-orange px-8 py-3 text-sm flex items-center justify-center"
            >
              Download CV
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center mt-52 md:mt-0">
          <HeroPhotoBadge />
        </div>
      </div>

      {/* CV Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="glass-panel p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-orbitron text-[rgb(0,217,255)]">Pilih CV</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-[rgb(130,140,160)] hover:text-white transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="/CV_Damar-Wahyu-Putra.pdf"
                download="CV_Damar-Wahyu-Putra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-cyan px-6 py-3 text-sm text-center block"
                onClick={() => setIsModalOpen(false)}
              >
                Download CV Umum
              </a>
              <a
                href="/CV DAMAR WAHYU PUTRA_IT.pdf"
                download="CV DAMAR WAHYU PUTRA_IT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-orange px-6 py-3 text-sm text-center block"
                onClick={() => setIsModalOpen(false)}
              >
                Download CV Khusus IT
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
