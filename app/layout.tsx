import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Space_Mono, Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] })
const _orbitron = Orbitron({ weight: ["400", "700", "900"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Damar Wahyu Putra - Full Stack Developer",
  description:
    "Portfolio of Damar Wahyu Putra - Frontend Developer, Backend Developer, and UI/UX Designer. Showcasing projects, experience, and skills.",
  generator: "v0.app",
  keywords: ["developer", "frontend", "backend", "full-stack", "ui/ux design", "portfolio", "web development"],
  openGraph: {
    title: "Damar Wahyu Putra - Full Stack Developer",
    description: "Check out my portfolio and projects",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${_spaceMono.className} bg-[rgb(10,14,39)] text-white relative overflow-x-hidden`}
        style={
          {
            "--font-orbitron": _orbitron.style.fontFamily,
          } as React.CSSProperties
        }
      >
        <div className="glitch-bg"></div>

        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Grid background */}
          <div className="absolute inset-0 bg-grid-animation opacity-20"></div>
          {/* Animated particles */}
          <div className="absolute inset-0 particle-container"></div>
        </div>

        {/* Content wrapper */}
        <div className="relative z-10">{children}</div>

        <Analytics />
      </body>
    </html>
  )
}
