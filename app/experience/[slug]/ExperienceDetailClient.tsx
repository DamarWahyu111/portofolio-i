"use client"

import { notFound } from "next/navigation"
import Link from "next/link"
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
    icon: string
  } | undefined
}

export default function ExperienceDetailClient({ experience }: ExperienceDetailClientProps) {
  if (!experience) {
    notFound()
  }

  // Find the index of the experience in the experiences array from experience.tsx
  // The experiences in experience.tsx match the order in experiencesData
  const experienceIndex = experiencesData.findIndex((e) => e.slug === experience.slug)

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
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
