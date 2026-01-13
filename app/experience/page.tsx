"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { experiencesData } from "@/lib/experienceData"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan">
            PROFESSIONAL EXPERIENCE
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiencesData.map((exp, i) => (
              <Link
                key={exp.id}
                href={`/experience/${exp.slug}`}
                className="border-2 border-[rgb(0,217,255)] p-6 md:p-8 rounded-lg hover:border-[rgb(255,102,0)] transition-all duration-300 group hover:shadow-lg hover:shadow-[rgb(0,217,255)]/20 slide-in-skill block"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {exp.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black font-orbitron text-[rgb(0,217,255)] group-hover:text-[rgb(255,102,0)] transition-colors mb-2">
                  {exp.title}
                </h3>

                {/* Period */}
                <p className="text-xs md:text-sm font-orbitron text-[rgb(255,102,0)] uppercase tracking-wide mb-2">
                  {exp.period}
                </p>

                {/* Company */}
                <p className="text-xs md:text-sm font-space-mono text-[rgb(130,140,160)] mb-4">{exp.company}</p>

                {/* Description */}
                <p className="text-sm md:text-base font-space-mono text-[rgb(170,180,196)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Arrow */}
                <div className="flex justify-end group-hover:translate-x-2 transition-transform duration-300">
                  <span className="text-[rgb(0,217,255)] font-orbitron font-black text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
