"use client"

import { useState } from "react"

const experiences = [
  {
    title: "Staff Event Stock-Summit UI",
    date: "2024",
    image: "/img/IMG_3833.jpg",
    description:
      "Berperan sebagai staff divisi event dan MC pada acara Seminar Stock-Summit UI. Mengelola koordinasi acara dan memfasilitasi jalannya seminar dengan audience yang besar.",
    responsibilities: [
      "Mengelola koordinasi teknis dan logistik acara seminar",
      "Menjadi MC untuk membawakan acara di hadapan ratusan peserta",
      "Memfasilitasi sesi Q&A dan interaksi dengan pembicara",
      "Berkoordinasi dengan tim untuk memastikan timeline acara berjalan sesuai rencana",
      "Membantu registrasi dan handling peserta seminar",
    ],
  },
  {
    title: "BPJS Ketenagakerjaan Internship",
    date: "Agustus 2025 - November 2025",
    image: "/img/bpjs.jpg",
    description:
      "Magang sebagai Full-Stack Developer di BPJS Ketenagakerjaan, bertanggung jawab dalam pengembangan aplikasi internal perusahaan.",
    responsibilities: [
      "Mengimplementasikan Vue.js, Node.js(Express.js), PHP, dan VMS sebagai tech stack utama",
      "Menggunakan Figma untuk mendesain antarmuka pengguna (UI) situs web internal",
      "Bekerja sama dengan tim di Figma untuk mendesain fitur situs web internal",
      "Mengambil peran sebagai Insinyur Back End, fokus pada logika sisi server",
      "Membuat REST APIs menggunakan Node.js (Express.js) dan PHP",
      "Menerapkan integrasi frontend dengan formulir, tombol, dan validasi berdasarkan desain Figma",
      "Menerapkan alur create, read, dan update antara Database ⇄ API ⇄ Frontend",
    ],
  },
  {
    title: "Otoritas Jasa Keuangan Internship",
    date: "Feb 2026 - Mei 2026",
    image: "/img/damOJK.jpg",
    description:
      "Magang di bagian Departmen Organisasi, SDM & Budaya.",
    divisions: [
      {
        name: "Human Resources and Culture Organization - DOPS",
        period: "Apr 2026 - Mei 2026",
        responsibilities: [
          "Otomatiskan proses pengelolaan dokumen dengan mengintegrasikan data Excel ke dalam Word melalui sistem Mail Merge untuk meningkatkan efisiensi kerja.",
          "Kembangkan dasbor Excel interaktif untuk memantau dan memvisualisasikan data organisasi untuk periode Januari–Juni 2026.",
          "Melakukan verifikasi dan pengendalian mutu terhadap lebih dari 100 dokumen sertifikat PCT OJK untuk memastikan keakuratan data sebelum didistribusikan ke berbagai kantor wilayah.",
        ],
      },
      {
        name: "Human Resources and Culture Organization - LMSt (Layanan Managemstis-1)",
        period: "Feb 2026 - Mar 2026",
        responsibilities: [
          "Mengelola digitalisasi dan input data dari lebih dari 500+ dokumen arsip strategis ke dalam database Excel.",
          "Memastikan tingkat akurasi yang tinggi untuk menjamin ketersediaan data dalam proyeksi organisasi di masa depan.",
        ],
      },
    ],
  },
]

interface ExperienceProps {
  initialSelected?: number
  showList?: boolean
}

interface AdaptiveExperienceImageProps {
  src: string
  alt: string
}

function AdaptiveExperienceImage({ src, alt }: AdaptiveExperienceImageProps) {
  const [orientation, setOrientation] = useState<"landscape" | "portrait" | "square">("landscape")

  const frameClass =
    orientation === "portrait"
      ? "mx-auto w-full max-w-[520px] min-h-[520px] md:min-h-[680px]"
      : orientation === "square"
        ? "mx-auto w-full max-w-[680px] aspect-square"
        : "w-full aspect-[4/3] md:aspect-video"

  return (
    <div className={`mb-5 md:mb-6 rounded-xl overflow-hidden glass-panel p-2 ${frameClass}`}>
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        onLoad={(event) => {
          const { naturalWidth, naturalHeight } = event.currentTarget
          const ratio = naturalWidth / naturalHeight

          if (ratio < 0.85) {
            setOrientation("portrait")
          } else if (ratio > 1.15) {
            setOrientation("landscape")
          } else {
            setOrientation("square")
          }
        }}
        className="w-full h-full object-contain rounded-lg bg-transparent"
      />
    </div>
  )
}

export default function Experience({ initialSelected = 0, showList = true }: ExperienceProps = {}) {
  const [selected, setSelected] = useState(initialSelected)
  const [isAnimating, setIsAnimating] = useState(false)

  const handleSelect = (index: number) => {
    if (index !== selected) {
      setIsAnimating(true)
      setTimeout(() => {
        setSelected(index)
        setIsAnimating(false)
      }, 150)
    }
  }

  return (
    <section id="experience" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 drop-shadow-md">Professional Experience</h2>
        <p className="text-sm md:text-base text-[rgb(130,140,160)] mb-10 md:mb-16 max-w-2xl">
          Perjalanan karir saya mencakup event management, dan full-stack development dengan berbagai teknologi.
        </p>

        <div className={`grid gap-6 md:gap-8 ${showList ? "md:grid-cols-3" : "md:grid-cols-1"}`}>
          {/* Experience List */}
          {showList && (
            <div className="md:col-span-1 flex flex-col gap-3 md:gap-4">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`text-left p-4 rounded-xl transition-all duration-300 ${selected === i
                    ? "glass-panel border-[rgba(0,217,255,0.5)] text-[rgb(0,217,255)] shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                    : "glass-panel opacity-60 hover:opacity-100 text-[rgb(130,140,160)]"
                    }`}
                >
                  <div className="font-bold text-sm md:text-base uppercase tracking-widest mb-2">{exp.title}</div>
                  <div className="text-xs text-[rgb(100,110,140)]">{exp.date}</div>
                </button>
              ))}
            </div>
          )}

          {/* Experience Detail */}
          <div className={showList ? "md:col-span-2" : "md:col-span-1"}>
            <div className={`transition-all duration-300 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <AdaptiveExperienceImage
                src={experiences[selected].image}
                alt={experiences[selected].title}
              />

              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-[rgb(0,217,255)]">{experiences[selected].title}</h3>
              <p className="text-[rgb(255,102,0)] text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4">
                {experiences[selected].date}
              </p>
              <p className="text-sm md:text-base text-[rgb(130,140,160)] leading-relaxed mb-5 md:mb-6">
                {experiences[selected].description}
              </p>

              <h4 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-[rgb(0,217,255)]">
                Tanggung Jawab & Pencapaian
              </h4>

              {/* Handle kedua struktur: divisions atau responsibilities */}
              {experiences[selected].divisions ? (
                <div className="space-y-6">
                  {experiences[selected].divisions.map((division, i) => (
                    <div key={i}>
                      <div className="mb-3">
                        <h5 className="text-sm md:text-base font-bold text-[rgb(0,217,255)] mb-1">
                          {division.name}
                        </h5>
                        <p className="text-xs md:text-sm text-[rgb(255,102,0)] uppercase tracking-widest">
                          {division.period}
                        </p>
                      </div>
                      <ul className="space-y-3 md:space-y-3.5">
                        {division.responsibilities.map((resp, j) => (
                          <li key={j} className="flex gap-3 text-sm md:text-base text-[rgb(130,140,160)]">
                            <span className="text-[rgb(255,102,0)] font-bold flex-shrink-0 mt-0.5">▸</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3 md:space-y-3.5">
                  {experiences[selected].responsibilities?.map((resp, i) => (
                    <li key={i} className="flex gap-3 text-sm md:text-base text-[rgb(130,140,160)]">
                      <span className="text-[rgb(255,102,0)] font-bold flex-shrink-0 mt-0.5">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
