"use client"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[rgb(0,217,255)]/30 py-12 px-4 bg-[rgb(10,14,39)]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black font-orbitron glow-cyan mb-4">DAMAR</h3>
            <p className="text-sm font-space-mono text-[rgb(130,140,160)]">
              FRONTEND &amp; BACKEND DEVELOPER | UI/UX DESIGNER | ALWAYS LEARNING &amp; BUILDING
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-black font-orbitron text-[rgb(0,217,255)] mb-4 uppercase text-sm tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-colors uppercase tracking-wider"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-black font-orbitron text-[rgb(255,102,0)] mb-4 uppercase text-sm tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2">
              {[
                { name: "GitHub", url: "https://github.com/DamarWahyu111" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/damarwahyuputra" },
                { name: "Email", url: "mailto:damarwahyup160@gmail.com" },
              ].map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    className="text-sm font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(255,102,0)] transition-colors uppercase tracking-wider"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-black font-orbitron text-[rgb(0,217,255)] mb-4 uppercase text-sm tracking-widest">
              Let&apos;s Talk
            </h4>
            <p className="text-sm font-space-mono text-[rgb(130,140,160)] mb-4">
              Interested in working together? Reach out and let&apos;s create something amazing!
            </p>
            <a
              href="mailto:damarwahyup160@gmail.com"
              className="inline-block px-4 py-2 border border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 transition-all text-xs font-black font-orbitron uppercase tracking-widest rounded"
            >
              Send Email
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[rgb(0,217,255)]/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-space-mono text-[rgb(130,140,160)] uppercase tracking-wider">
              © {currentYear} DAMAR WAHYU PUTRA. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-colors uppercase tracking-wider"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="text-xs font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-colors uppercase tracking-wider"
              >
                TERMS OF SERVICE
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
