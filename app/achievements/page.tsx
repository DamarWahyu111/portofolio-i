"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { useState } from "react"

// Achievement/Certificate data
const achievements = [
  {
    id: 1,
    title: "ASEAN Data Science",
    issuer: "ASEAN Foundation",
    date: "2024",
    category: "Data Science",
    image: "/img/certificates/ASEAN Data Science _ Sertifikat Damar Wahyu Putra.pdf",
  },
  {
    id: 2,
    title: "Completion Certificate SkillsBuild",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "Professional IT",
    image: "/img/certificates/Completion Certificate _ SkillsBuild.pdf",
  },
  {
    id: 3,
    title: "Completion Certificate 2 SkillsBuild",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "Professional IT",
    image: "/img/certificates/Completion Certificate 2 _ SkillsBuild.pdf",
  },
  {
    id: 4,
    title: "Completion Certificate 3 SkillsBuild",
    issuer: "IBM SkillsBuild",
    date: "2025",
    category: "Professional IT",
    image: "/img/certificates/Completion Certificate 3 _ SkillsBuild.pdf",
  },
  {
    id: 5,
    title: "Professional Software Engineering",
    issuer: "Professional Certification",
    date: "2025",
    category: "Professional IT",
    image: "/img/certificates/Sertifikasi_Professional_Software_Engineering_Damar Wahyu Putra (1).pdf",
  },
  {
    id: 6,
    title: "Code Generation and Optimization - Wave 3",
    issuer: "Certification Program",
    date: "2025",
    category: "Professional IT",
    image: "/img/certificates/Sertifikat Code Generation and Optimization - Wave 3 (1).pdf",
  },
  {
    id: 7,
    title: "Workshop Laravel",
    issuer: "Workshop Certification",
    date: "2024",
    category: "Web Development",
    image: "/img/certificates/Sertifikat-Workshop Laravel-Damar Wahyu Putra.pdf",
  },
  {
    id: 8,
    title: "TOEFL Certificate",
    issuer: "TOEFL",
    date: "2025",
    category: "Language",
    image: "/img/certificates/Toefl-Damar Wahyu Putra (1).pdf",
  },
  {
    id: 9,
    title: "HTML5 Certificate",
    issuer: "Course Certification",
    date: "2024",
    category: "Web Development",
    image: "/img/certificates/UC-HTML5-Certifpdf.pdf",
  },
  {
    id: 10,
    title: "Course Certificate - Gen AI",
    issuer: "Course Platform",
    date: "2025",
    category: "AI & Technology",
    image: "/img/certificates/sertifikat_course_use_gen_ai.pdf",
  },
  {
    id: 11,
    title: "Course Certificate",
    issuer: "Course Platform",
    date: "2024",
    category: "General",
    image: "/img/certificates/sertifikat_course_862_4145078_100625144651.pdf",
  },
  {
    id: 12,
    title: "Additional Certificate",
    issuer: "Certification Body",
    date: "2025",
    category: "General",
    image: "/img/certificates/Damar Wahyu Putra (4) (1).pdf",
  },
]

export default function AchievementsPage() {
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null)

  // Get unique categories
  const categories = [...new Set(achievements.map(a => a.category))]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Link
            href="/organizations"
            className="inline-flex items-center gap-2 text-[rgb(0,217,255)] hover:text-[rgb(255,102,0)] transition-colors mb-8 font-orbitron font-bold"
          >
            <span>←</span>
            <span>Back to Organizations</span>
          </Link>

          {/* Header */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan text-center">
            ACHIEVEMENTS &amp; CERTIFICATES
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] mx-auto mb-12"></div>
          <p className="text-center font-space-mono text-base md:text-lg text-[rgb(130,140,160)] mb-16 max-w-2xl mx-auto">
            Koleksi sertifikat dan pencapaian yang telah saya raih melalui pembelajaran dan pengalaman profesional.
          </p>

          {/* Achievements by Category */}
          {categories.map((category) => {
            const categoryAchievements = achievements.filter(a => a.category === category)
            return (
              <div key={category} className="mb-16">
                <h2 className="text-2xl md:text-3xl font-black font-orbitron text-[rgb(0,217,255)] mb-8 border-b border-[rgb(0,217,255)]/30 pb-2">
                  {category} Certifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {categoryAchievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className="border-2 border-[rgb(0,217,255)] rounded-lg overflow-hidden hover:border-[rgb(255,102,0)] transition-all duration-300 group hover:shadow-2xl hover:shadow-[rgb(0,217,255)]/20 cursor-pointer slide-in-skill"
                      onClick={() => setSelectedAchievement(achievement.id)}
                      style={{
                        animationDelay: `${(achievement.id - 1) * 0.1}s`,
                      }}
                    >
                      {/* Certificate Preview */}
                      <div className="relative w-full h-52 sm:h-60 lg:h-64 overflow-hidden bg-[rgb(15,23,52)] flex items-center justify-center">
                        {achievement.image.endsWith(".pdf") ? (
                          <div className="text-center p-4">
                            <div className="text-5xl md:text-7xl mb-3 md:mb-4">📄</div>
                            <p className="text-xs md:text-sm font-space-mono text-[rgb(130,140,160)] uppercase tracking-wider">
                              PDF Certificate
                            </p>
                          </div>
                        ) : (
                          <Image
                            src={achievement.image}
                            alt={achievement.title}
                            fill
                            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,14,39)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>

                      {/* Content */}
                      <div className="p-4 md:p-6 bg-[rgb(15,23,52)]/60 backdrop-blur-sm">
                        <h3 className="text-base md:text-xl font-black font-orbitron text-[rgb(0,217,255)] group-hover:text-[rgb(255,102,0)] transition-colors mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-[11px] md:text-sm font-space-mono text-[rgb(255,102,0)] uppercase tracking-wider mb-1">
                          {achievement.issuer}
                        </p>
                        <p className="text-[11px] md:text-xs font-space-mono text-[rgb(130,140,160)] mb-1 md:mb-2">{achievement.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}

          {/* Empty State */}
          {achievements.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg font-space-mono text-[rgb(130,140,160)]">
                No achievements available yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Certificate Detail */}
      {selectedAchievement !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[rgb(10,14,39)]/95 backdrop-blur-sm"
          onClick={() => setSelectedAchievement(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] md:max-h-[92vh] overflow-auto border-2 border-[rgb(0,217,255)] rounded-lg bg-[rgb(15,23,52)] p-4 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedAchievement(null)}
              className="absolute top-4 right-4 text-[rgb(255,102,0)] hover:text-[rgb(0,217,255)] text-2xl font-black transition-colors"
            >
              ✕
            </button>
            {selectedAchievement && (
              <>
                <h2 className="text-xl md:text-3xl font-black font-orbitron text-[rgb(0,217,255)] mb-2">
                  {achievements.find((a) => a.id === selectedAchievement)?.title}
                </h2>
                <p className="text-xs md:text-base font-space-mono text-[rgb(255,102,0)] uppercase tracking-wider mb-2">
                  {achievements.find((a) => a.id === selectedAchievement)?.issuer}
                </p>
                <p className="text-xs md:text-sm font-space-mono text-[rgb(130,140,160)] mb-4">
                  {achievements.find((a) => a.id === selectedAchievement)?.date}
                </p>

                {/* PDF Viewer or Image */}
                <div className="relative w-full h-[65vh] md:h-[70vh] mb-5 md:mb-6 border-2 border-[rgb(0,217,255)]/30 rounded overflow-hidden">
                  {achievements.find((a) => a.id === selectedAchievement)?.image.endsWith(".pdf") ? (
                    <iframe
                      src={`${achievements.find((a) => a.id === selectedAchievement)?.image}#toolbar=0`}
                      className="w-full h-full"
                      title={achievements.find((a) => a.id === selectedAchievement)?.title}
                    />
                  ) : (
                    <Image
                      src={achievements.find((a) => a.id === selectedAchievement)?.image || "/placeholder.svg"}
                      alt={achievements.find((a) => a.id === selectedAchievement)?.title || ""}
                      fill
                      className="object-contain p-4"
                    />
                  )}
                </div>

                {/* Download Button */}
                {achievements.find((a) => a.id === selectedAchievement)?.image.endsWith(".pdf") && (
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a
                      href={achievements.find((a) => a.id === selectedAchievement)?.image}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 transition-all duration-300 uppercase text-sm font-black font-orbitron tracking-widest rounded"
                    >
                      Download PDF
                    </a>
                    <a
                      href={achievements.find((a) => a.id === selectedAchievement)?.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 border-2 border-[rgb(255,102,0)] text-[rgb(255,102,0)] hover:bg-[rgb(255,102,0)]/10 transition-all duration-300 uppercase text-sm font-black font-orbitron tracking-widest rounded"
                    >
                      Open in New Tab
                    </a>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </main>
  )
}
