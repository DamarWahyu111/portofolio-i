"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Project } from "@/lib/types" // Assuming you have a Project type defined

interface ProjectDetailClientProps {
  project: Project | undefined
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[rgb(10,14,39)]">
      <Header />

      <div className="pt-20 md:pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[rgb(0,217,255)] hover:text-[rgb(255,102,0)] font-orbitron font-black uppercase text-sm mb-12 transition-colors hover:translate-x-1 duration-300"
          >
            ← KEMBALI KE PROJECTS
          </Link>
        </div>
      </div>

      <section className="px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="border-glow rounded-lg overflow-hidden">
            <img src={project.hero || "/placeholder.svg"} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan">{project.title}</h1>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 mb-8 flex-wrap">
            <span className="text-xs uppercase tracking-widest text-[rgb(0,217,255)] font-orbitron font-black">
              {project.category}
            </span>
            <span className="text-xs uppercase tracking-widest text-[rgb(255,102,0)] font-orbitron font-black">
              {project.year}
            </span>
          </div>

          <p className="text-base md:text-lg font-space-mono text-[rgb(130,140,160)] max-w-3xl mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
            {project.technologies.map((tech, i) => (
              <button
                key={i}
                onClick={() => alert(`${tech} - Teknologi yang digunakan`)}
                className="px-3 md:px-4 py-2 border border-[rgb(0,217,255)]/50 hover:border-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 text-[rgb(0,217,255)] hover:text-[rgb(255,102,0)] text-xs md:text-sm font-orbitron font-black rounded transition-all duration-300 cursor-pointer hover:scale-105"
              >
                {tech}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-6 text-[rgb(0,217,255)]">OVERVIEW</h2>
            <p className="text-sm md:text-base text-[rgb(130,140,160)] font-space-mono leading-relaxed mb-8">
              {project.details.overview}
            </p>

            <h3 className="text-xl md:text-2xl font-bold font-orbitron mb-4 text-[rgb(255,102,0)]">CHALLENGES</h3>
            <ul className="space-y-3">
              {project.details.challenges.map((challenge, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-[rgb(130,140,160)] font-space-mono">
                  <span className="text-[rgb(0,217,255)] font-bold flex-shrink-0">•</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold font-orbitron mb-4 text-[rgb(0,217,255)]">SOLUTIONS</h3>
            <ul className="space-y-3">
              {project.details.solutions.map((solution, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-[rgb(130,140,160)] font-space-mono">
                  <span className="text-[rgb(255,102,0)] font-bold flex-shrink-0">→</span>
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-8 glow-cyan">PROJECT GALLERY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {project.gallery.map((image, i) => (
              <div
                key={i}
                className="border-glow rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => alert("Gallery image: " + (i + 1))}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} screenshot ${i + 1}`}
                  className="w-full h-40 md:h-64 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-6">INGIN BEKERJA SAMA?</h2>
          <p className="text-sm md:text-base text-[rgb(130,140,160)] font-space-mono mb-8 max-w-2xl mx-auto">
            Saya terbuka untuk kolaborasi, freelance projects, atau kesempatan magang. Mari kita ciptakan sesuatu yang
            luar biasa!
          </p>
          <Link
            href="/#contact"
            className="inline-block px-6 md:px-8 py-3 md:py-4 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 transition-all duration-300 uppercase text-xs md:text-sm font-black font-orbitron tracking-widest rounded"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
