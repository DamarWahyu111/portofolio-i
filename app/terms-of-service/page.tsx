import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Terms of Service | Damar Wahyu Putra",
  description: "Terms of Service for Damar Wahyu Putra's Portfolio.",
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      <Header />
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 border-t-2 border-[rgb(255,102,0)]/50">
          <h1 className="text-3xl md:text-5xl font-black font-orbitron text-[rgb(255,102,0)] mb-8 drop-shadow-md">
            TERMS OF SERVICE
          </h1>
          
          <div className="space-y-8 font-space-mono text-[rgb(170,180,196)] text-sm md:text-base leading-relaxed">
            <p className="text-[rgb(0,217,255)]">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this portfolio website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this website.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. Intellectual Property Rights</h2>
              <p>
                All content, features, code, and functionality available on this website (including but not limited to design, text, graphics, and interfaces) are the exclusive property of Damar Wahyu Putra, unless otherwise stated (e.g., open-source libraries or third-party assets).
              </p>
              <p className="mt-2">
                You may not reproduce, distribute, or create derivative works from this content without express written consent.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. User Conduct</h2>
              <p>
                When using this website or contacting us through provided forms or emails, you agree to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Provide accurate and truthful information.</li>
                <li>Not use the website for any unlawful purpose.</li>
                <li>Not attempt to gain unauthorized access to any portion or feature of the site, or any other systems or networks connected to the site.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Disclaimer of Warranties</h2>
              <p>
                The materials on this website are provided on an "as is" basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Limitations of Liability</h2>
              <p>
                In no event shall Damar Wahyu Putra or associated partners be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Indonesia and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>
            
            <div className="pt-8 border-t border-white/10 mt-8">
              <Link href="/" className="glass-button glass-button-orange px-6 py-3 inline-block text-sm font-bold uppercase tracking-widest">
                &larr; BACK TO HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}
