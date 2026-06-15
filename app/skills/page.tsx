"use client"

import { useState } from "react"
import {
  BadgeCheck,
  Code2,
  Database,
  Figma,
  FileCode2,
  GitBranch,
  Globe2,
  KeyRound,
  LayoutDashboard,
  MessageCircle,
  Mic2,
  Paintbrush2,
  PenTool,
  PlugZap,
  Puzzle,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

type SkillItem = {
  name: string
  description: string
  level: string
  icon: LucideIcon
}

type SkillCategory = {
  category: string
  description: string
  strength: string
  icon: LucideIcon
  skills: SkillItem[]
  stats: {
    value: string
    label: string
    icon: LucideIcon
  }[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    description: "Building responsive, accessible, and performant user interfaces with modern web technologies.",
    strength: "Core Strength",
    icon: Code2,
    skills: [
      {
        name: "JavaScript",
        description: "Core language for dynamic and interactive web experiences.",
        level: "Advanced",
        icon: FileCode2,
      },
      {
        name: "HTML",
        description: "Semantic, accessible, and SEO-friendly markup.",
        level: "Advanced",
        icon: Globe2,
      },
      {
        name: "CSS",
        description: "Modern styling with responsive layouts and animation.",
        level: "Advanced",
        icon: Paintbrush2,
      },
      {
        name: "Figma",
        description: "UI design, prototyping, and design systems.",
        level: "Advanced",
        icon: Figma,
      },
    ],
    stats: [
      { value: "4+", label: "Frontend Skills", icon: Code2 },
      { value: "Modern Stack", label: "Up-to-date Tools", icon: Trophy },
      { value: "Performance", label: "Optimized for Speed", icon: Rocket },
      { value: "Best Practices", label: "Clean & Maintainable", icon: ShieldCheck },
    ],
  },
  {
    category: "Backend",
    description: "Designing APIs, data flow, and server-side logic for reliable internal systems.",
    strength: "System Logic",
    icon: Server,
    skills: [
      {
        name: "Node.js",
        description: "Runtime for scalable JavaScript backend services.",
        level: "Intermediate",
        icon: Server,
      },
      {
        name: "Express.js",
        description: "REST API routing, middleware, and backend structure.",
        level: "Intermediate",
        icon: PlugZap,
      },
      {
        name: "MySQL",
        description: "Relational database modeling and query workflows.",
        level: "Intermediate",
        icon: Database,
      },
      {
        name: "MongoDB",
        description: "Document-based data storage for flexible app data.",
        level: "Intermediate",
        icon: Database,
      },
      {
        name: "REST APIs",
        description: "Clean API contracts between frontend and backend.",
        level: "Advanced",
        icon: GitBranch,
      },
      {
        name: "Authentication",
        description: "User access, protected routes, and secure flows.",
        level: "Intermediate",
        icon: KeyRound,
      },
    ],
    stats: [
      { value: "6+", label: "Backend Skills", icon: Server },
      { value: "REST APIs", label: "Frontend Integration", icon: PlugZap },
      { value: "Data Flow", label: "Database to UI", icon: Database },
      { value: "Auth Ready", label: "Access Control", icon: KeyRound },
    ],
  },
  {
    category: "Design & Tools",
    description: "Turning product ideas into flows, prototypes, and maintainable implementation assets.",
    strength: "Product Craft",
    icon: PenTool,
    skills: [
      {
        name: "UI/UX Design",
        description: "Interface structure focused on clarity and user flow.",
        level: "Advanced",
        icon: LayoutDashboard,
      },
      {
        name: "Wireframing",
        description: "Fast visual planning before implementation.",
        level: "Advanced",
        icon: PenTool,
      },
      {
        name: "Prototyping",
        description: "Interactive validation for screens and journeys.",
        level: "Advanced",
        icon: Sparkles,
      },
      {
        name: "Responsive Design",
        description: "Layouts that stay clean across device sizes.",
        level: "Advanced",
        icon: Globe2,
      },
      {
        name: "Git",
        description: "Version control for project collaboration.",
        level: "Intermediate",
        icon: GitBranch,
      },
      {
        name: "VMS",
        description: "Working with existing systems and operational tools.",
        level: "Intermediate",
        icon: LayoutDashboard,
      },
    ],
    stats: [
      { value: "6+", label: "Design Tools", icon: PenTool },
      { value: "Figma Flow", label: "Prototype Ready", icon: Figma },
      { value: "Git", label: "Version Control", icon: GitBranch },
      { value: "Responsive", label: "Device Friendly", icon: Globe2 },
    ],
  },
  {
    category: "Soft Skills",
    description: "Collaborating, communicating, and managing work so teams can move with less friction.",
    strength: "Team Impact",
    icon: UsersRound,
    skills: [
      {
        name: "Communication",
        description: "Clear updates, context sharing, and team alignment.",
        level: "Advanced",
        icon: MessageCircle,
      },
      {
        name: "Problem Solving",
        description: "Breaking messy issues into clear next steps.",
        level: "Advanced",
        icon: Puzzle,
      },
      {
        name: "Project Management",
        description: "Keeping timelines, priorities, and execution organized.",
        level: "Intermediate",
        icon: BadgeCheck,
      },
      {
        name: "Team Collaboration",
        description: "Working across roles with practical ownership.",
        level: "Advanced",
        icon: UsersRound,
      },
      {
        name: "Public Speaking",
        description: "Presenting and guiding event or discussion moments.",
        level: "Intermediate",
        icon: Mic2,
      },
    ],
    stats: [
      { value: "5+", label: "Soft Skills", icon: UsersRound },
      { value: "Events", label: "Public Facing", icon: Mic2 },
      { value: "Teamwork", label: "Collaborative", icon: MessageCircle },
      { value: "Ownership", label: "Reliable Delivery", icon: BadgeCheck },
    ],
  },
]

export default function SkillsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCategory = skillCategories[activeIndex]
  const ActiveIcon = activeCategory.icon
  const marqueeSkills = [...activeCategory.skills, ...activeCategory.skills]

  return (
    <main className="skills-page min-h-screen overflow-hidden">
      <Header />
      <section className="relative px-4 pb-14 pt-24 md:pb-24 md:pt-36">
        <div className="skills-page-glow" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="skills-heading">
            <h1>Tech Stack &amp; Skills</h1>
            <p>A curated set of technologies and skills I use to build modern, scalable, and impactful solutions.</p>
          </div>

          <div className="skills-tabs" role="tablist" aria-label="Skill categories">
            {skillCategories.map((category, index) => {
              const TabIcon = category.icon
              const isActive = activeIndex === index

              return (
                <button
                  key={category.category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`skills-tab ${isActive ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <TabIcon size={22} strokeWidth={1.9} />
                  <span>{category.category}</span>
                </button>
              )
            })}
          </div>

          <section className="skills-showcase" aria-label={`${activeCategory.category} skills`}>
            <div className="skills-showcase-header">
              <div className="skills-showcase-title">
                <span className="skills-category-icon" aria-hidden="true">
                  <ActiveIcon size={30} strokeWidth={1.9} />
                </span>
                <div>
                  <h2>{activeCategory.category}</h2>
                  <p>{activeCategory.description}</p>
                </div>
              </div>

              <span className="skills-strength">
                <span />
                {activeCategory.strength}
              </span>
            </div>

            <div className="skills-marquee" aria-label={`${activeCategory.category} skill list`}>
              <div key={activeCategory.category} className="skills-marquee-track">
                {marqueeSkills.map((skill, index) => {
                  const SkillIcon = skill.icon

                  return (
                    <article key={`${skill.name}-${index}`} className="skills-marquee-card">
                      <span className="skills-item-icon" aria-hidden="true">
                        <SkillIcon size={34} strokeWidth={1.85} />
                      </span>
                      <div>
                        <div className="skills-item-topline">
                          <h3>{skill.name}</h3>
                          <span>{skill.level}</span>
                        </div>
                        <p>{skill.description}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>

            <div className="skills-stats">
              {activeCategory.stats.map((stat) => {
                const StatIcon = stat.icon

                return (
                  <div key={`${activeCategory.category}-${stat.value}`} className="skills-stat">
                    <span aria-hidden="true">
                      <StatIcon size={26} strokeWidth={1.8} />
                    </span>
                    <div>
                      <strong>{stat.value}</strong>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
