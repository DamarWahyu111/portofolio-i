import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export const metadata = {
  title: "Privacy Policy | Damar Wahyu Putra",
  description: "Privacy Policy for Damar Wahyu Putra's Portfolio.",
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-32 pb-16 px-4 md:px-8">
      <Header />
      
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 border-t-2 border-[rgb(0,217,255)]/50">
          <h1 className="text-3xl md:text-5xl font-black font-orbitron text-[rgb(0,217,255)] mb-8 drop-shadow-md">
            PRIVACY POLICY
          </h1>
          
          <div className="space-y-8 font-space-mono text-[rgb(170,180,196)] text-sm md:text-base leading-relaxed">
            <p className="text-[rgb(255,102,0)]">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">1. Information We Collect</h2>
              <p>
                We do not collect any personal information automatically when you browse this portfolio website. We only collect the information you explicitly provide to us through our contact forms or when you send us a direct email. This may include your name, email address, and the contents of your message.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">2. How We Use Your Information</h2>
              <p>
                The information collected is used exclusively to:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Respond to your inquiries or requests.</li>
                <li>Discuss potential collaborations and projects.</li>
                <li>Improve the overall quality of our services and communications.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">3. Data Security</h2>
              <p>
                We implement standard security measures and best practices to protect your information against unauthorized access, alteration, or disclosure. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">4. Third-Party Links</h2>
              <p>
                This portfolio may contain links to external websites, such as GitHub or LinkedIn. We are not responsible for the privacy practices, content, or security of these third-party sites. We encourage you to review their respective privacy policies.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">5. Changes to This Policy</h2>
              <p>
                We reserve the right to update this Privacy Policy at any time. Any changes will be reflected on this page with a revised "Last updated" date. We encourage you to periodically review this page for the latest information on our privacy practices.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">6. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy, please contact us at: <br />
                <a href="mailto:damarwahyup160@gmail.com" className="text-[rgb(0,217,255)] hover:underline">damarwahyup160@gmail.com</a>
              </p>
            </section>
            
            <div className="pt-8 border-t border-white/10 mt-8">
              <Link href="/" className="glass-button glass-button-cyan px-6 py-3 inline-block text-sm font-bold uppercase tracking-widest">
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
