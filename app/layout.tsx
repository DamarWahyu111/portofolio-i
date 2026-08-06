import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

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
      <body className="font-space-mono bg-[rgb(10,14,39)] text-white relative overflow-x-hidden">
        <div className="glass-bg pointer-events-none"></div>
        <div className="glass-bg-overlay pointer-events-none"></div>

        {/* Content wrapper */}
        <div className="relative z-10">{children}</div>

        <Analytics />
      </body>
    </html>
  )
}
