"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Download,
  FileText,
  Leaf,
  Medal,
  Sparkles,
  Trophy,
  UsersRound,
  X,
} from "lucide-react"
import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

const organizations = [
  {
    name: "Indorelawan",
    role: "Ketua Grup Indorelawan",
    subtitle: "Generasi Bebas Plastik",
    period: "2024",
    image: "/img/oragnization/indorelawan/WhatsApp Image 2025-07-04 at 14.34.22_76452a2d.jpg",
    description:
      "Memimpin kampanye edukasi lingkungan dan mengorganisasi aksi bersih-bersih di berbagai lokasi. Menginisiasi program awareness tentang pengurangan penggunaan plastik di komunitas.",
    icon: Leaf,
    certificates: [
      {
        title: "Sertifikat Indorelawan",
        issuer: "Indorelawan",
        year: "2024",
        file: "",
        icon: Award,
      },
    ],
  },
  {
    name: "Novo Club",
    role: "Member Novo Club",
    subtitle: "Technology Community",
    period: "2024",
    image: "/img/oragnization/novoclub/WhatsApp Image 2025-07-04 at 14.34.23_1a9c2079.jpg",
    description:
      "Aktif berpartisipasi dalam diskusi teknologi dan pengembangan diri. Membantu mengorganisasi event komunitas digital dan workshop pengembangan skill.",
    icon: UsersRound,
    certificates: [
      {
        title: "Kontributor Aktif Novo Club",
        issuer: "Novo Club",
        year: "2024",
        file: "",
        icon: Medal,
      },
    ],
  },
  {
    name: "Staff Event Stock-Summit UI",
    role: "Staff Event & MC",
    subtitle: "University Event",
    period: "2024",
    image: "/img/IMG_3833.jpg",
    description:
      "Berperan sebagai staff divisi event dan MC pada acara Seminar Stock-Summit UI. Mengelola koordinasi acara dan memfasilitasi jalannya seminar dengan audience yang besar.",
    icon: BriefcaseBusiness,
    certificates: [
      {
        title: "Sertifikat Staff Stock-Summit UI",
        issuer: "Stock-Summit UI",
        year: "2024",
        file: "",
        icon: Award,
      },
      {
        title: "Apresiasi Event Support",
        issuer: "Stock-Summit UI",
        year: "2024",
        file: "",
        icon: Trophy,
      },
    ],
  },
]

type Organization = (typeof organizations)[number]
type OrganizationCertificate = Organization["certificates"][number]
type SelectedCertificate = OrganizationCertificate & {
  organizationName: string
}

function OrganizationPreviewCard({
  org,
  position,
  onClick,
}: {
  org: Organization
  position: "left" | "right"
  onClick: () => void
}) {
  const Icon = org.icon

  return (
    <button type="button" className={`org-preview-card org-preview-${position}`} onClick={onClick}>
      <Image src={org.image} alt={org.name} fill className="object-cover" />
      <span className="org-preview-overlay" />
      <span className="org-preview-icon" aria-hidden="true">
        <Icon size={24} strokeWidth={1.8} />
      </span>
      <span className="org-preview-copy">
        <strong>{org.name}</strong>
        <span>{org.period}</span>
        <small>{org.role}</small>
      </span>
    </button>
  )
}

export default function OrganizationsPage() {
  const [activeIndex, setActiveIndex] = useState(1)
  const [selectedCertificate, setSelectedCertificate] = useState<SelectedCertificate | null>(null)
  const activeOrg = organizations[activeIndex]
  const ActiveIcon = activeOrg.icon
  const previousIndex = (activeIndex - 1 + organizations.length) % organizations.length
  const nextIndex = (activeIndex + 1) % organizations.length
  const activeCertificates = activeOrg.certificates

  const moveCarousel = (direction: "previous" | "next") => {
    setActiveIndex((current) => {
      if (direction === "next") return (current + 1) % organizations.length
      return (current - 1 + organizations.length) % organizations.length
    })
  }

  const openCertificate = (certificate: OrganizationCertificate) => {
    setSelectedCertificate({
      ...certificate,
      organizationName: activeOrg.name,
    })
  }

  useEffect(() => {
    const interval = window.setInterval(() => {
      moveCarousel("next")
    }, 6200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <main className="org-page min-h-screen overflow-hidden">
      <Header />
      <section className="relative px-4 pb-14 pt-24 md:pb-24 md:pt-36">
        <div className="org-page-glow" aria-hidden="true" />

        <div className="relative mx-auto max-w-7xl">
          <div className="org-hero">
            <div className="org-eyebrow">
              <Sparkles size={15} strokeWidth={1.8} />
              Organizations & Achievements
            </div>
            <h1>
              Berkontribusi, Berkolaborasi, dan Memberi <span>Dampak Nyata</span>
            </h1>
            <p>
              Keterlibatan saya dalam berbagai organisasi, komunitas, dan aktivitas profesional yang membentuk
              pengalaman, keterampilan, dan perspektif saya.
            </p>
          </div>

          <div className="org-feature-stage">
            <button
              type="button"
              className="org-slider-arrow org-slider-left"
              onClick={() => moveCarousel("previous")}
              aria-label="Previous organization"
            >
              <ArrowLeft size={23} strokeWidth={1.8} />
            </button>
            <button
              type="button"
              className="org-slider-arrow org-slider-right"
              onClick={() => moveCarousel("next")}
              aria-label="Next organization"
            >
              <ArrowRight size={23} strokeWidth={1.8} />
            </button>

            <OrganizationPreviewCard
              org={organizations[previousIndex]}
              position="left"
              onClick={() => setActiveIndex(previousIndex)}
            />
            <OrganizationPreviewCard
              org={organizations[nextIndex]}
              position="right"
              onClick={() => setActiveIndex(nextIndex)}
            />

            <article className="org-feature-card">
              <div className="org-feature-image">
                <Image src={activeOrg.image} alt={activeOrg.name} fill className="object-cover" priority />
              </div>

              <div className="org-feature-content">
                <div className="org-feature-topline">
                  <span className="org-feature-icon" aria-hidden="true">
                    <ActiveIcon size={30} strokeWidth={1.8} />
                  </span>
                  <span className="org-feature-badge">Featured</span>
                </div>

                <h2>{activeOrg.name}</h2>
                <p className="org-feature-year">{activeOrg.period}</p>
                <span className="org-feature-role">{activeOrg.role}</span>
                <p className="org-feature-description">{activeOrg.description}</p>

                {activeCertificates[0].file ? (
                  <a
                    href={activeCertificates[0].file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="org-detail-button"
                  >
                    <span>Lihat Sertifikat</span>
                    <ArrowRight size={18} strokeWidth={1.8} />
                  </a>
                ) : (
                  <button type="button" className="org-detail-button" onClick={() => openCertificate(activeCertificates[0])}>
                    <span>Lihat Sertifikat</span>
                    <ArrowRight size={18} strokeWidth={1.8} />
                  </button>
                )}
              </div>
            </article>

            <div className="org-slider-dots" aria-label="Organization slider position">
              {organizations.map((org, index) => (
                <button
                  key={org.name}
                  type="button"
                  className={activeIndex === index ? "is-active" : ""}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${org.name}`}
                />
              ))}
            </div>
          </div>

          <section className="org-achievement-strip" aria-label="Pencapaian dan sertifikat">
            <div className="org-achievement-title">
              <Medal size={31} strokeWidth={1.8} />
              <div>
                <h2>Sertifikat {activeOrg.name}</h2>
                <p>Klik salah satu slot untuk melihat sertifikat organisasi ini.</p>
              </div>
            </div>

            <div className="org-achievement-list">
              {activeCertificates.map((certificate) => {
                const Icon = certificate.icon

                return (
                  <button
                    key={certificate.title}
                    type="button"
                    className="org-achievement-item"
                    onClick={() => openCertificate(certificate)}
                  >
                    <span aria-hidden="true">
                      <Icon size={28} strokeWidth={1.75} />
                    </span>
                    <div>
                      <strong>{certificate.title}</strong>
                      <p>{certificate.year}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            <Link href="/achievements" className="org-all-button">
              <span>Lihat Semua Sertifikat</span>
              <ArrowRight size={18} strokeWidth={1.8} />
            </Link>
          </section>
        </div>
      </section>
      {selectedCertificate && (
        <div className="org-certificate-modal" onClick={() => setSelectedCertificate(null)}>
          <div className="org-certificate-dialog" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="org-certificate-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate preview"
            >
              <X size={22} strokeWidth={1.9} />
            </button>

            <div className="org-certificate-header">
              <span aria-hidden="true">
                <FileText size={30} strokeWidth={1.8} />
              </span>
              <div>
                <p>{selectedCertificate.organizationName}</p>
                <h2>{selectedCertificate.title}</h2>
                <small>
                  {selectedCertificate.issuer} - {selectedCertificate.year}
                </small>
              </div>
            </div>

            <div className="org-certificate-viewer">
              {selectedCertificate.file ? (
                selectedCertificate.file.toLowerCase().endsWith(".pdf") ? (
                  <iframe
                    src={`${selectedCertificate.file}#toolbar=0`}
                    title={selectedCertificate.title}
                    className="h-full w-full"
                  />
                ) : (
                  <Image src={selectedCertificate.file} alt={selectedCertificate.title} fill className="object-contain p-4" />
                )
              ) : (
                <div className="org-certificate-empty">
                  <FileText size={52} strokeWidth={1.5} />
                  <h3>Slot sertifikat belum diisi</h3>
                  <p>
                    Masukkan path file di <code>certificates.file</code> untuk organisasi ini. Contoh:
                    <br />
                    <code>/img/certificates/org/novo-club.pdf</code>
                  </p>
                </div>
              )}
            </div>

            {selectedCertificate.file && (
              <a
                href={selectedCertificate.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="org-certificate-download"
              >
                <Download size={18} strokeWidth={1.8} />
                Download Sertifikat
              </a>
            )}
          </div>
        </div>
      )}
      <Footer />
      <ScrollToTop />
    </main>
  )
}
