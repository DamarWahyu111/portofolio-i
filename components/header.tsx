"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      e.preventDefault()
      window.location.href = "/#projects"
    } else {
      e.preventDefault()
      const element = document.getElementById("projects")
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const navItems: Array<{
    label: string
    href: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
  }> = [
    { label: "ABOUT", href: "/about" },
    { label: "PROJECTS", href: "#projects", onClick: handleProjectsClick },
    { label: "SKILLS", href: "/skills" },
    { label: "ORG", href: "/organizations" },
    { label: "EXPERIENCE", href: "/experience" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[rgb(15,23,52)]/95 border-b-2 border-[rgb(0,217,255)]/50" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group"
        >
          <div className="relative">
            <Image
              src="/logo-site.jpg"
              alt="Damar Wahyu Putra Logo"
              width={45}
              height={45}
              className="rounded-lg border-2 border-[rgb(0,217,255)]/30 group-hover:border-[rgb(0,217,255)] transition-all duration-300 object-cover"
              priority
            />
            <div className="absolute inset-0 rounded-lg bg-[rgb(0,217,255)]/0 group-hover:bg-[rgb(0,217,255)]/10 transition-all duration-300"></div>
          </div>
          <span className="text-xl md:text-2xl font-black font-orbitron glow-cyan hover:glow-orange transition-all duration-300 hidden sm:inline">
            DAMAR
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={item.onClick}
              className="text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] hover:glow-cyan transition-all duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden flex flex-col gap-2 z-50">
          <div
            className={`w-6 h-1 bg-[rgb(0,217,255)] transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
          ></div>
          <div className={`w-6 h-1 bg-[rgb(0,217,255)] transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div
            className={`w-6 h-1 bg-[rgb(0,217,255)] transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          ></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgb(15,23,52)] border-t border-[rgb(0,217,255)]/30 p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) item.onClick(e)
                setMobileMenuOpen(false)
              }}
              className="block py-3 text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
