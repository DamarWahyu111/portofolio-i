"use client"

import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-nav border-t-2 border-white/10 py-12 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black font-orbitron mb-4 text-[rgb(0,217,255)] drop-shadow-md">DAMAR</h3>
            <p className="text-sm font-space-mono text-[rgb(130,140,160)]">
              ALWAYS LEARNING &amp; BUILDING
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
                    className="liquid-nav-link inline-block px-3 py-1.5 -ml-3 text-sm font-bold font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-all duration-300 uppercase tracking-widest relative group"
                  >
                    <span>{link}</span>
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
                    className="liquid-nav-link inline-block px-3 py-1.5 -ml-3 text-sm font-bold font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(255,102,0)] transition-all duration-300 uppercase tracking-widest relative group"
                  >
                    <span>{social.name}</span>
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
              className="glass-button glass-button-cyan px-6 py-2 inline-block text-xs text-center"
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
              <Link
                href="/privacy-policy"
                className="liquid-nav-link inline-block px-4 py-2 text-xs font-bold font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-all duration-300 uppercase tracking-widest relative group"
              >
                <span>PRIVACY POLICY</span>
              </Link>
              <Link
                href="/terms-of-service"
                className="liquid-nav-link inline-block px-4 py-2 text-xs font-bold font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-all duration-300 uppercase tracking-widest relative group"
              >
                <span>TERMS OF SERVICE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
