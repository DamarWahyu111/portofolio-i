"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

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
        <div className="flex justify-center">
          <div className="float glass-panel p-4 rounded-[2rem]">
            <img
              src="/img/profile-damar.png"
              alt="Damar Wahyu Putra"
              className="w-full h-auto object-cover rounded"
            />
          </div>
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
