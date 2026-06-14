"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import type { Project } from "@/lib/types"

interface ProjectDetailClientProps {
  project: Project | undefined
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  if (!project) {
    notFound()
  }

  const galleryImages = project.gallery.length > 0 ? project.gallery : [project.hero]

  const showPreviousImage = () => {
    setActiveGalleryIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1))
  }

  const showNextImage = () => {
    setActiveGalleryIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1))
  }

  const getGalleryOffset = (index: number) => {
    const total = galleryImages.length
    let offset = index - activeGalleryIndex

    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total

    return offset
  }

  return (
    <main className="min-h-screen bg-transparent">
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
          <div className="glass-panel rounded-[2rem] overflow-hidden p-2">
            <Image 
              src={project.hero || "/placeholder.svg"} 
              alt={project.title} 
              width={1200}
              height={600}
              className="w-full h-auto object-cover" 
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 drop-shadow-md">{project.title}</h1>

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
                className="glass-button glass-button-cyan px-4 py-2 text-xs md:text-sm cursor-pointer"
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
          <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-8 drop-shadow-md">PROJECT GALLERY</h2>

          <div className="glass-panel relative overflow-hidden rounded-[1.5rem] p-4 md:p-8">
            <div className="relative h-[300px] md:h-[520px] flex items-center justify-center overflow-hidden">
              {galleryImages.map((image, i) => {
                const offset = getGalleryOffset(i)
                const isActive = offset === 0
                const isVisible = Math.abs(offset) <= 2

                return (
                  <button
                    key={`${image}-${i}`}
                    type="button"
                    onClick={() => (isActive ? setSelectedImage(image) : setActiveGalleryIndex(i))}
                    className={`absolute w-[78%] md:w-[58%] max-w-3xl overflow-hidden rounded-xl border border-white/20 bg-[rgb(10,14,39)]/80 p-2 shadow-2xl transition-all duration-500 ease-out ${
                      isVisible ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                    style={{
                      opacity: isVisible ? (isActive ? 1 : 0.55) : 0,
                      transform: `translateX(${offset * 34}%) scale(${isActive ? 1 : 0.78}) rotateY(${-offset * 18}deg)`,
                      zIndex: 10 - Math.abs(offset),
                    }}
                    aria-label={
                      isActive
                        ? `Open ${project.title} screenshot ${i + 1}`
                        : `Show ${project.title} screenshot ${i + 1}`
                    }
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} screenshot ${i + 1}`}
                      width={1200}
                      height={800}
                      className="h-[250px] md:h-[450px] w-full rounded-lg object-contain bg-[rgb(10,14,39)]"
                    />
                  </button>
                )
              })}

              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-2 md:left-6 z-20 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgb(10,14,39)]/80 text-2xl font-black text-[rgb(0,217,255)] shadow-lg transition-all duration-300 hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)]"
                aria-label="Previous project image"
              >
                {"<"}
              </button>
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-2 md:right-6 z-20 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgb(10,14,39)]/80 text-2xl font-black text-[rgb(0,217,255)] shadow-lg transition-all duration-300 hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)]"
                aria-label="Next project image"
              >
                {">"}
              </button>
            </div>

            <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <p className="font-space-mono text-xs uppercase tracking-widest text-[rgb(130,140,160)]">
                {activeGalleryIndex + 1} / {galleryImages.length}
              </p>

              <div className="flex gap-2 overflow-x-auto pb-2 md:justify-end">
                {galleryImages.map((image, i) => (
                  <button
                    key={`thumb-${image}-${i}`}
                    type="button"
                    onClick={() => setActiveGalleryIndex(i)}
                    className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border p-1 transition-all duration-300 ${
                      activeGalleryIndex === i
                        ? "border-[rgb(0,217,255)] opacity-100"
                        : "border-white/15 opacity-50 hover:opacity-90"
                    }`}
                    aria-label={`Show gallery image ${i + 1}`}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} thumbnail ${i + 1}`}
                      width={120}
                      height={80}
                      className="h-full w-full rounded object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
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
            className="glass-button glass-button-cyan px-8 py-4 inline-block text-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-[rgb(255,102,0)] hover:text-[rgb(0,217,255)] text-3xl font-black transition-colors bg-[rgb(10,14,39)]/80 w-10 h-10 flex items-center justify-center rounded-full"
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Gallery view"
              width={1200}
              height={800}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </main>
  )
}
