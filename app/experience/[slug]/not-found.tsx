import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 text-[rgb(0,217,255)]">
            Experience Not Found
          </h1>
          <p className="text-[rgb(130,140,160)] mb-8 font-space-mono">
            The experience you're looking for doesn't exist.
          </p>
          <Link
            href="/experience"
            className="inline-block border-2 border-[rgb(0,217,255)] px-6 py-3 rounded-lg text-[rgb(0,217,255)] hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)] transition-all duration-300 font-orbitron font-bold"
          >
            Back to Experience
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}
