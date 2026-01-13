"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [displayText, setDisplayText] = useState("")
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
            <span className="glow-cyan block">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl font-black font-orbitron text-[rgb(170,180,196)] mb-4 tracking-widest">
            FRONTEND DEVELOPER &amp; BACKEND DEVELOPER
          </p>
          <p className="text-base font-space-mono leading-relaxed text-[rgb(130,140,160)] mb-8 max-w-xl">
            Sebagai lulusan dari CEP-CCIT FTUI yang tertarik pada front-end dan back-end, saya senang mengubah ide
            menjadi produk nyata. Saya berfokus pada performa dan aksesibilitas, dipadukan dengan desain yang rapi agar
            setiap interaksi terasa intuitif.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="px-8 py-3 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 hover:shadow-lg transition-all duration-300 uppercase text-sm font-black font-orbitron tracking-widest rounded glow-cyan hover:glow-cyan-strong"
            >
              View My Work
            </Link>
            <a
              href="/CV_Damar-Wahyu-Putra.pdf"
              download="CV_Damar-Wahyu-Putra.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-[rgb(255,102,0)] text-[rgb(255,102,0)] hover:bg-[rgb(255,102,0)]/10 hover:shadow-lg transition-all duration-300 uppercase text-sm font-black font-orbitron tracking-widest rounded glow-orange hover:text-white"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="float border-glow p-4 rounded-lg">
            <img
              src="/img/profile-damar.png"
              alt="Damar Wahyu Putra"
              className="w-full h-auto object-cover rounded"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
