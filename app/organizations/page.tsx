"use client"

import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const organizations = [
  {
    name: "Indorelawan",
    role: "Ketua Grup Indorelawan",
    subtitle: "Generasi Bebas Plastik",
    period: "2024 - Sekarang",
    image: "/img/oragnization/indorelawan/WhatsApp Image 2025-07-04 at 14.34.22_76452a2d.jpg",
    description:
      "Memimpin kampanye edukasi lingkungan dan mengorganisasi aksi bersih-bersih di berbagai lokasi. Menginisiasi program awareness tentang pengurangan penggunaan plastik di komunitas.",
    achievements: [
      "Memimpin tim dalam kampanye edukasi lingkungan",
      "Mengorganisasi aksi bersih-bersih di berbagai lokasi",
      "Menginisiasi program awareness pengurangan plastik",
      "Membangun komunitas peduli lingkungan",
    ],
    icon: "🌱",
  },
  {
    name: "Novo Club",
    role: "Member Novo Club",
    subtitle: "Technology Community",
    period: "2024 - Sekarang",
    image: "/img/oragnization/novoclub/WhatsApp Image 2025-07-04 at 14.34.23_1a9c2079.jpg",
    description:
      "Aktif berpartisipasi dalam diskusi teknologi dan pengembangan diri. Membantu mengorganisasi event komunitas digital dan workshop pengembangan skill.",
    achievements: [
      "Berpartisipasi aktif dalam diskusi teknologi",
      "Membantu mengorganisasi event komunitas digital",
      "Mengikuti workshop pengembangan skill",
      "Berbagi pengetahuan dengan anggota komunitas",
    ],
    icon: "💻",
  },
]

export default function OrganizationsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-32 pb-12 md:pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-orbitron mb-4 glow-cyan text-center">
            ORGANIZATIONS &amp; ACHIEVEMENTS
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-[rgb(0,217,255)] to-[rgb(255,102,0)] mx-auto mb-12"></div>
          <p className="text-center font-space-mono text-base md:text-lg text-[rgb(130,140,160)] mb-16 max-w-2xl mx-auto">
            Keterlibatan saya dalam berbagai organisasi dan aktivitas yang membentuk pengalaman profesional.
          </p>

          {/* Achievements Link */}
          <div className="text-center mb-12">
            <Link
              href="/achievements"
              className="inline-block px-8 py-4 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 hover:border-[rgb(255,102,0)] hover:text-[rgb(255,102,0)] transition-all duration-300 uppercase text-sm md:text-base font-black font-orbitron tracking-widest rounded glow-cyan hover:glow-orange"
            >
              Klik My Achievements or Certificates
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {organizations.map((org, i) => (
              <div
                key={i}
                className="border-2 border-[rgb(0,217,255)] rounded-lg overflow-hidden hover:border-[rgb(255,102,0)] transition-all duration-300 group hover:shadow-2xl hover:shadow-[rgb(0,217,255)]/20 slide-in-skill"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {/* Image */}
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <Image
                    src={org.image}
                    alt={org.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgb(10,14,39)] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-4xl mb-2">{org.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-black font-orbitron text-[rgb(0,217,255)] mb-1">
                      {org.name}
                    </h3>
                    <p className="text-sm md:text-base font-space-mono text-[rgb(255,102,0)] uppercase tracking-wider mb-1">
                      {org.role}
                    </p>
                    <p className="text-xs md:text-sm font-space-mono text-[rgb(170,180,196)]">{org.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 bg-[rgb(15,23,52)]/60 backdrop-blur-sm">
                  <p className="text-xs font-space-mono text-[rgb(130,140,160)] mb-4 uppercase tracking-wider">
                    {org.period}
                  </p>
                  <p className="text-sm md:text-base font-space-mono text-[rgb(130,140,160)] leading-relaxed mb-6">
                    {org.description}
                  </p>

                  <h4 className="text-lg font-black font-orbitron mb-4 text-[rgb(0,217,255)]">Pencapaian &amp; Kontribusi</h4>
                  <ul className="space-y-3">
                    {org.achievements.map((achievement, j) => (
                      <li key={j} className="flex gap-3 text-sm font-space-mono text-[rgb(130,140,160)]">
                        <span className="text-[rgb(255,102,0)] font-bold flex-shrink-0">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
