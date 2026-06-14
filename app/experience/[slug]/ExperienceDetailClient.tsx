"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import Experience from "@/components/experience"
import { experiencesData } from "@/lib/experienceData"

interface ExperienceDetailClientProps {
  experience: {
    id: number
    slug: string
    title: string
    company: string
    period: string
    date: string
    image: string
    description: string
    responsibilities: string[]
    gallery?: string[]
    icon: string
  } | undefined
}

export default function ExperienceDetailClient({ experience }: ExperienceDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)

  if (!experience) {
    notFound()
  }

  // Find the index of the experience in the experiences array from experience.tsx
  // The experiences in experience.tsx match the order in experiencesData
  const experienceIndex = experiencesData.findIndex((e) => e.slug === experience.slug)
  const galleryImages = experience.gallery?.length ? experience.gallery : [experience.image]

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
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-[rgb(0,217,255)] hover:text-[rgb(255,102,0)] transition-colors mb-8 font-orbitron font-bold"
          >
            <span>←</span>
            <span>Back to Experience</span>
          </Link>

          {/* Experience Detail using the component from experience.tsx */}
          <Experience initialSelected={experienceIndex >= 0 ? experienceIndex : 0} showList={false} />

          <section className="mt-10 md:mt-16">
            <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-8 drop-shadow-md">
              EXPERIENCE GALLERY
            </h2>

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
                          ? `Open ${experience.title} gallery image ${i + 1}`
                          : `Show ${experience.title} gallery image ${i + 1}`
                      }
                    >
                      <div className="h-[250px] md:h-[450px] overflow-y-auto rounded-lg bg-[rgb(10,14,39)] px-2 py-3">
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${experience.title} gallery image ${i + 1}`}
                          width={1200}
                          height={1600}
                          className="mx-auto h-auto max-h-none w-auto max-w-full rounded-lg object-contain"
                        />
                      </div>
                    </button>
                  )
                })}

                <button
                  type="button"
                  onClick={showPreviousImage}
                  className="absolute left-2 md:left-6 z-20 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgb(10,14,39)]/80 text-2xl font-black text-[rgb(0,217,255)] shadow-lg transition-all duration-300 hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)]"
                  aria-label="Previous experience image"
                >
                  {"<"}
                </button>
                <button
                  type="button"
                  onClick={showNextImage}
                  className="absolute right-2 md:right-6 z-20 flex h-11 w-11 md:h-14 md:w-14 items-center justify-center rounded-full border border-[rgba(0,217,255,0.35)] bg-[rgb(10,14,39)]/80 text-2xl font-black text-[rgb(0,217,255)] shadow-lg transition-all duration-300 hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)]"
                  aria-label="Next experience image"
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
                      key={`experience-thumb-${image}-${i}`}
                      type="button"
                      onClick={() => setActiveGalleryIndex(i)}
                      className={`h-14 w-20 shrink-0 overflow-hidden rounded-md border p-1 transition-all duration-300 ${
                        activeGalleryIndex === i
                          ? "border-[rgb(0,217,255)] opacity-100"
                          : "border-white/15 opacity-50 hover:opacity-90"
                      }`}
                      aria-label={`Show experience gallery image ${i + 1}`}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${experience.title} thumbnail ${i + 1}`}
                        width={120}
                        height={80}
                        className="h-full w-full rounded object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
      <ScrollToTop />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-y-auto glass-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 text-[rgb(255,102,0)] hover:text-[rgb(0,217,255)] text-3xl font-black transition-colors bg-[rgb(10,14,39)]/80 w-10 h-10 flex items-center justify-center rounded-full"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Experience gallery view"
              width={1200}
              height={1600}
              className="mx-auto h-auto max-w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  )
}
