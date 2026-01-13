import Header from "@/components/header"
import Hero from "@/components/hero"
import ProjectsSection from "@/components/projects-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProjectsSection />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
