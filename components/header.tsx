"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Download } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showCvLink, setShowCvLink] = useState(false)
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (pathname !== "/") {
      setShowCvLink(true)
      return
    }

    const hero = document.getElementById("about")

    if (!hero) {
      setShowCvLink(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowCvLink(!entry.isIntersecting)
      },
      {
        rootMargin: "-72px 0px 0px 0px",
        threshold: 0,
      },
    )

    observer.observe(hero)

    return () => observer.disconnect()
  }, [pathname])

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
        scrolled ? "glass-nav" : "bg-transparent"
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
          <span className="text-xl md:text-2xl font-black font-orbitron text-[rgb(0,217,255)] hover:text-[rgb(95,232,255)] transition-all duration-300 hidden sm:inline drop-shadow-md">
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
              className="liquid-nav-link px-4 py-2 text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] transition-all duration-300 relative group drop-shadow-sm"
            >
              <span>{item.label}</span>
            </Link>
          ))}
          {showCvLink && (
            <button
              type="button"
              onClick={() => setIsCvModalOpen(true)}
              className="liquid-nav-link border-0 bg-transparent px-4 py-2 text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] transition-all duration-300 relative group drop-shadow-sm cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                DOWNLOAD CV
                <Download size={15} strokeWidth={1.8} />
              </span>
            </button>
          )}
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
        <div className="md:hidden glass-nav p-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) item.onClick(e)
                setMobileMenuOpen(false)
              }}
              className="liquid-nav-link flex w-full justify-start px-4 py-3 text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] transition-colors"
            >
              <span>{item.label}</span>
            </Link>
          ))}
          {showCvLink && (
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                setIsCvModalOpen(true)
              }}
              className="liquid-nav-link flex w-full justify-start border-0 bg-transparent px-4 py-3 text-sm font-bold font-space-mono uppercase tracking-widest text-[rgb(170,180,196)] hover:text-[rgb(0,217,255)] transition-colors cursor-pointer"
            >
              <span className="inline-flex items-center gap-2">
                DOWNLOAD CV
                <Download size={15} strokeWidth={1.8} />
              </span>
            </button>
          )}
        </div>
      )}

      {isCvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="glass-panel p-6 max-w-sm w-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold font-orbitron text-[rgb(0,217,255)]">Pilih CV</h3>
              <button
                onClick={() => setIsCvModalOpen(false)}
                className="text-[rgb(130,140,160)] hover:text-white transition-colors text-2xl leading-none"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="/CV_Damar-Wahyu-Putra.pdf"
                download="CV_Damar-Wahyu-Putra.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-cyan px-6 py-3 text-sm text-center block"
                onClick={() => setIsCvModalOpen(false)}
              >
                Download CV Umum
              </a>
              <a
                href="/CV DAMAR WAHYU PUTRA_IT.pdf"
                download="CV DAMAR WAHYU PUTRA_IT.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button glass-button-orange px-6 py-3 text-sm text-center block"
                onClick={() => setIsCvModalOpen(false)}
              >
                Download CV Khusus IT
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
