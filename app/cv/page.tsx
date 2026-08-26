"use client"

import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const cvFile = "/Resume_Damar Wahyu Putra.pdf"

  return (
    <div className="h-screen w-full flex flex-col bg-slate-950">
      {/* Top Bar */}
      <div className="flex justify-between items-center p-4 bg-black/50 backdrop-blur-md border-b border-white/10 z-10 sticky top-0">
        <Link href="/" className="flex items-center gap-2 text-[rgb(0,217,255)] hover:text-white transition-colors font-orbitron font-bold">
          <ArrowLeft size={20} />
          <span>Back</span>
        </Link>
        <a
          href={cvFile}
          download="Resume_Damar Wahyu Putra.pdf"
          className="glass-button glass-button-orange px-4 py-2 text-sm flex items-center gap-2 font-bold"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>
      </div>
      
      {/* PDF Viewer */}
      <div className="flex-1 w-full h-full relative bg-slate-900">
        <object
          data={cvFile}
          type="application/pdf"
          className="w-full h-full absolute inset-0"
        >
          <div className="flex flex-col items-center justify-center h-full text-white gap-4 p-8 text-center">
            <p className="text-xl font-orbitron text-[rgb(0,217,255)]">Your browser doesn't support inline PDFs.</p>
            <p className="text-slate-400">Please download the CV to view it.</p>
            <a
              href={cvFile}
              download="Resume_Damar Wahyu Putra.pdf"
              className="glass-button glass-button-cyan px-6 py-3"
            >
              <Download size={18} className="inline mr-2" />
              Download PDF
            </a>
          </div>
        </object>
      </div>
    </div>
  )
}
