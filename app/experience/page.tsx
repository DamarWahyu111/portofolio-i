"use client"

import Link from "next/link"
import { ArrowDownToLine, BriefcaseBusiness, ClipboardList, Landmark } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { experiencesData } from "@/lib/experienceData"

const timelineIcons = [ClipboardList, BriefcaseBusiness, Landmark]

export default function ExperiencePage() {
  return (
    <main className="experience-page min-h-screen overflow-hidden bg-transparent">
      <Header />
      <section className="relative px-4 pb-16 pt-24 md:pb-24 md:pt-36">
        <div className="experience-orb experience-orb-left" aria-hidden="true" />
        <div className="experience-orb experience-orb-right" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="experience-hero">
            <div>
              <div className="experience-eyebrow">
                <span />
                Journey So Far
              </div>
              <h1 className="experience-title">Professional Experience</h1>
            </div>

            <p className="experience-intro">
              Perjalanan profesional saya dalam membangun solusi digital, berkolaborasi dalam tim, dan memberikan
              dampak nyata melalui event, pengembangan aplikasi, serta proses organisasi.
            </p>
          </div>

          <div id="experience-timeline" className="experience-timeline">
            {experiencesData.map((exp, index) => {
              const Icon = timelineIcons[index % timelineIcons.length]
              const side = index % 2 === 0 ? "left" : "right"

              return (
                <div key={exp.id} className={`experience-timeline-item is-${side}`}>
                  <Link href={`/experience/${exp.slug}`} className="experience-timeline-card group">
                    <div className="experience-card-icon" aria-hidden="true">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>

                    <div className="experience-card-copy">
                      <p className="experience-card-period">{exp.period}</p>
                      <h2>{exp.title}</h2>
                      <p className="experience-card-company">{exp.company}</p>
                      <p className="experience-card-description">{exp.description}</p>
                    </div>
                  </Link>

                  <span className="experience-timeline-node" aria-hidden="true" />
                </div>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center md:mt-14">
            <a href="#experience-timeline" className="experience-more-button">
              <ArrowDownToLine size={18} strokeWidth={1.8} />
              Klik Card Untuk Detail
            </a>
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
