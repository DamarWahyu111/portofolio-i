"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { useEffect, useRef } from "react"

// Icon mapping for skills
const skillIcons: Record<string, string> = {
  // Frontend
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "📜",
  Figma: "🎭",
  // Backend
  "Node.js": "🟢",
  "Express.js": "🚂",
  MySQL: "🗄️",
  MongoDB: "🍃",
  "REST APIs": "🔌",
  Authentication: "🔐",
  // Design & Tools
  "UI/UX Design": "✨",
  Wireframing: "📐",
  Prototyping: "🛠️",
  "Responsive Design": "📱",
  Git: "🔀",
  VMS: "💻",
  // Soft Skills
  Communication: "💬",
  "Problem Solving": "🧩",
  "Project Management": "📊",
  "Team Collaboration": "👥",
  "Public Speaking": "🎤",
}

const skillCategories = [
  {
    category: "Frontend",
    icon: "",
    skills: ["HTML", "CSS", "JavaScript", "Figma"],
  },
  {
    category: "Backend",
    icon: "",
    skills: ["Node.js", "Express.js", "MySQL", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    category: "Design & Tools",
    icon: "",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design", "Git", "VMS"],
  },
  {
    category: "Soft Skills",
    icon: "",
    skills: ["Communication", "Problem Solving", "Project Management", "Team Collaboration", "Public Speaking"],
  },
]

export default function SkillsPage() {
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const animateCarousel = (carousel: HTMLDivElement, speed: number = 1) => {
      const items = Array.from(carousel.children)
      items.forEach((item) => {
        const clone = item.cloneNode(true)
        carousel.appendChild(clone)
      })

      let scrollPosition = 0
      let animationFrameId: number

      const animate = () => {
        scrollPosition += speed
        carousel.style.transform = `translateX(-${scrollPosition}px)`

        // Reset position to create infinite loop
        if (scrollPosition >= carousel.scrollWidth / 2) {
          scrollPosition = 0
        }

        animationFrameId = requestAnimationFrame(animate)
      }

      animationFrameId = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrameId)
    }

    const cleanupFunctions: (() => void)[] = []

    skillCategories.forEach((cat) => {
      const carousel = carouselRefs.current[cat.category]
      if (carousel) {
        const cleanup = animateCarousel(carousel, 0.8)
        cleanupFunctions.push(cleanup)
      }
    })

    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup())
    }
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan text-center">
            SKILLS &amp; EXPERTISE
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] mx-auto mb-12"></div>
          <p className="text-center font-space-mono text-base md:text-lg text-[rgb(130,140,160)] mb-16 max-w-2xl mx-auto">
            Keterampilan yang telah saya kuasai melalui pembelajaran dan pengalaman praktis.
          </p>

          {/* Skills Carousels - One per category */}
          <div className="space-y-12 md:space-y-16">
            {skillCategories.map((cat, catIndex) => (
              <div key={catIndex} className="space-y-6">
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <span className="text-3xl md:text-4xl">{cat.icon}</span>
                  <h2 className="text-2xl md:text-3xl font-black font-orbitron text-[rgb(0,217,255)]">
                    {cat.category}
                  </h2>
                </div>

                {/* Skills Carousel for this category */}
                <div className="relative overflow-hidden py-4">
                  <div
                    ref={(el) => {
                      if (el) carouselRefs.current[cat.category] = el
                    }}
                    className="flex gap-4 md:gap-6 will-change-transform"
                    style={{ width: "fit-content" }}
                  >
                    {cat.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex-shrink-0 border-glow p-4 md:p-6 rounded-lg hover:shadow-lg transition-all duration-300 group min-w-[180px] md:min-w-[220px]"
                      >
                        <div className="flex items-center gap-3 md:gap-4">
                          <span className="text-3xl md:text-4xl flex-shrink-0" title={skill}>
                            {skillIcons[skill] || "•"}
                          </span>
                          <h4 className="text-sm md:text-base font-black font-orbitron text-[rgb(0,217,255)] group-hover:text-[rgb(255,102,0)] transition-colors">
                            {skill}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-sm font-space-mono text-[rgb(130,140,160)]">
            ↻ Carousel bergerak otomatis
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
