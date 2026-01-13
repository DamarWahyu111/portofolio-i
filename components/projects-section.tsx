"use client"

import Link from "next/link"
import { useState } from "react"
import { projectsData } from "@/lib/projectData"

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-black font-orbitron mb-4 glow-cyan">FEATURED PROJECTS</h2>
        <p className="text-lg font-space-mono text-[rgb(130,140,160)] mb-16 max-w-2xl">
          Koleksi proyek yang menunjukkan kemampuan saya dalam frontend, backend, dan UI/UX design.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded border-glow transition-all duration-300 hover:shadow-2xl"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.hero || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,14,39)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 bg-[rgb(15,23,52)]">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs uppercase tracking-widest font-black font-orbitron text-[rgb(0,217,255)]">
                    {project.category}
                  </span>
                  <span className="text-xs font-space-mono text-[rgb(130,140,160)]">{project.year}</span>
                </div>
                <h3 className="text-xl font-black font-orbitron mb-2 group-hover:text-[rgb(0,217,255)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm font-space-mono text-[rgb(130,140,160)] line-clamp-2">{project.description}</p>

                {/* View Details Link */}
                <div className="mt-4 flex items-center text-[rgb(0,217,255)] gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-black font-orbitron">VIEW DETAILS</span>
                  <span className="text-lg">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
