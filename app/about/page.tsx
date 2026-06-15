"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  GraduationCap,
  Rocket,
  Sparkles,
  Target,
  User,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { educationData } from "@/lib/aboutData"

const journeySteps = [
  {
    title: "Background & Early Interest",
    description:
      "I have always been curious about how things work, breaking them down, understanding the logic, and finding better ways to solve problems.",
    icon: Rocket,
  },
  {
    title: "Learning Philosophy",
    description:
      "I believe real growth happens by doing. I learn by building, experimenting, failing, improving, and turning every project into a chance to level up.",
    icon: Brain,
  },
  {
    title: "Current Focus",
    description:
      "I am focused on building impactful web applications with clean design, strong performance, and useful experiences for real users.",
    icon: Target,
  },
]

const educationIcons = [GraduationCap, Target]

export default function AboutPage() {
  return (
    <main className="about-page min-h-screen overflow-hidden">
      <Header />
      <section className="relative px-4 pb-14 pt-24 md:pb-24 md:pt-36">
        <div className="about-page-glow" aria-hidden="true" />

        <div className="about-layout relative mx-auto max-w-7xl">
          <div className="about-main">
            <div className="about-eyebrow">
              <User size={15} strokeWidth={1.8} />
              About Me
            </div>

            <h1>My Journey, My Why</h1>

            <div className="about-intro">
              <p>
                I&apos;m <span>Damar</span> - a curious builder who loves turning ideas into meaningful digital
                experiences.
              </p>
              <p>This is the story of how I got here, what drives me, and where I&apos;m headed.</p>
            </div>

            <div className="about-journey">
              {journeySteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <article key={step.title} className="about-journey-card">
                    <span className="about-journey-node" aria-hidden="true" />
                    <div className="about-journey-icon" aria-hidden="true">
                      <Icon size={35} strokeWidth={1.7} />
                    </div>
                    <div>
                      <h2>
                        {index + 1}. {step.title}
                      </h2>
                      <p>{step.description}</p>
                    </div>
                  </article>
                )
              })}
            </div>

            <section className="about-education" aria-label="Education milestones">
              <div className="about-education-heading">
                <span className="about-journey-node" aria-hidden="true" />
                <h2>4. Education Milestones</h2>
              </div>

              <div className="about-education-grid">
                {educationData.map((education, index) => {
                  const EducationIcon = educationIcons[index % educationIcons.length]

                  return (
                    <article key={education.id} className="about-education-card">
                      <span className="about-period-pill">{education.period}</span>
                      <div className="about-education-card-main">
                        <div className="about-education-icon" aria-hidden="true">
                          <EducationIcon size={40} strokeWidth={1.65} />
                        </div>
                        <div>
                          <h3>{education.institution}</h3>
                          <p className="about-education-level">{education.level}</p>
                          <p className="about-education-field">{education.field}</p>
                        </div>
                      </div>

                      <ul>
                        {education.achievements.slice(0, 3).map((achievement) => (
                          <li key={achievement}>
                            <Sparkles size={13} strokeWidth={1.8} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  )
                })}
              </div>
            </section>
          </div>

          <aside className="about-profile-card">
            <div className="about-profile-logo">
              <Image src="/logo-site.jpg" alt="Damar logo" width={96} height={96} priority />
            </div>

            <h2>DAMAR</h2>
            <p className="about-profile-subtitle">Developer - Problem Solver - Builder</p>

            <div className="about-divider" />

            <div className="about-profile-actions">
              <Link href="/#projects" className="about-project-link">
                See My Projects
                <ArrowRight size={20} strokeWidth={1.8} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
