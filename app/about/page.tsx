"use client"

import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { educationData } from "@/lib/aboutData"

export default function AboutPage() {
  const calculateProgress = (startYear: number, endYear: number) => {
    const current = new Date().getFullYear()
    const duration = endYear - startYear
    const elapsed = current - startYear
    return Math.min((elapsed / duration) * 100, 100)
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title Section */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan">
            ABOUT ME
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] mb-12"></div>

          {/* Bio Section */}
          <div className="mb-16">
            <p className="text-lg md:text-xl font-space-mono text-[rgb(170,180,196)] leading-relaxed mb-6 max-w-4xl">
              Hi! I'm a passionate full-stack developer and UI/UX designer with a journey spanning from high school 
              to university. My educational background has equipped me with strong fundamentals in science and technology, 
              and I'm continuously building expertise in modern web development, design thinking, and software engineering.
            </p>
            <p className="text-lg md:text-xl font-space-mono text-[rgb(170,180,196)] leading-relaxed max-w-4xl">
              I believe in learning by doing and creating real-world projects that solve meaningful problems. 
              Every project I build is an opportunity to grow, innovate, and push the boundaries of what's possible.
            </p>
          </div>

          {/* Education Timeline */}
          <h2 className="text-3xl md:text-4xl font-black font-orbitron mb-12 text-[rgb(0,217,255)]">
            EDUCATION JOURNEY
          </h2>

          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                className="border-2 border-[rgb(0,217,255)] rounded-lg p-8 hover:border-[rgb(255,102,0)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgb(0,217,255)]/20 slide-in-skill"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon and Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl md:text-6xl">{edu.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl md:text-3xl font-black font-orbitron text-[rgb(0,217,255)] group-hover:text-[rgb(255,102,0)]">
                        {edu.institution}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold font-orbitron uppercase tracking-wide ${
                          edu.status === "completed"
                            ? "bg-[rgb(0,217,255)]/20 text-[rgb(0,217,255)]"
                            : "bg-[rgb(255,102,0)]/20 text-[rgb(255,102,0)] glow-orange"
                        }`}
                      >
                        {edu.status === "completed" ? "COMPLETED" : "ONGOING"}
                      </span>
                    </div>
                    <p className="text-lg font-bold font-space-mono text-[rgb(255,102,0)] mb-1">
                      {edu.level}
                    </p>
                    <p className="text-sm font-space-mono text-[rgb(130,140,160)]">
                      {edu.field} • {edu.period}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base md:text-lg font-space-mono text-[rgb(170,180,196)] mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Progress Bar (for ongoing) */}
                {edu.status === "ongoing" && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold font-orbitron text-[rgb(255,102,0)] uppercase">
                        Progress
                      </span>
                      <span className="text-xs font-bold font-orbitron text-[rgb(130,140,160)]">
                        {Math.round(calculateProgress(edu.startYear, edu.endYear))}%
                      </span>
                    </div>
                    <div className="h-2 bg-[rgb(20,30,60)] rounded-full overflow-hidden border border-[rgb(0,217,255)]/30">
                      <div
                        className="h-full bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] transition-all duration-500"
                        style={{
                          width: `${calculateProgress(edu.startYear, edu.endYear)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-bold font-orbitron text-[rgb(0,217,255)] uppercase tracking-wide mb-3">
                    Highlights & Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm md:text-base font-space-mono text-[rgb(170,180,196)]"
                      >
                        <span className="text-[rgb(255,102,0)] mt-1">✦</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border-2 border-[rgb(0,217,255)]/30 rounded-lg p-6 text-center hover:border-[rgb(0,217,255)] transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black font-orbitron text-[rgb(255,102,0)] mb-2">
                3+
              </div>
              <p className="text-xs md:text-sm font-space-mono text-[rgb(170,180,196)] uppercase tracking-wide">
                Years of Learning
              </p>
            </div>
            <div className="border-2 border-[rgb(0,217,255)]/30 rounded-lg p-6 text-center hover:border-[rgb(0,217,255)] transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black font-orbitron text-[rgb(255,102,0)] mb-2">
                50+
              </div>
              <p className="text-xs md:text-sm font-space-mono text-[rgb(170,180,196)] uppercase tracking-wide">
                Projects Built
              </p>
            </div>
            <div className="border-2 border-[rgb(0,217,255)]/30 rounded-lg p-6 text-center hover:border-[rgb(0,217,255)] transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black font-orbitron text-[rgb(255,102,0)] mb-2">
                15+
              </div>
              <p className="text-xs md:text-sm font-space-mono text-[rgb(170,180,196)] uppercase tracking-wide">
                Technologies
              </p>
            </div>
            <div className="border-2 border-[rgb(0,217,255)]/30 rounded-lg p-6 text-center hover:border-[rgb(0,217,255)] transition-all duration-300">
              <div className="text-3xl md:text-4xl font-black font-orbitron text-[rgb(255,102,0)] mb-2">
                100%
              </div>
              <p className="text-xs md:text-sm font-space-mono text-[rgb(170,180,196)] uppercase tracking-wide">
                Passion Driven
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl font-space-mono text-[rgb(170,180,196)] mb-8">
              Interested in working together or want to know more?
            </p>
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] font-bold font-orbitron uppercase tracking-widest hover:bg-[rgb(0,217,255)] hover:text-[rgb(10,14,39)] transition-all duration-300 rounded-lg glow-cyan hover:glow-orange"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </main>
  )
}
