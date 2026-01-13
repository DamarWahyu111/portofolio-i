"use client"

const organizations = [
  {
    name: "CEP-CCIT FTUI",
    role: "Mahasiswa",
    period: "2020 - Sekarang",
    description:
      "Program pendidikan terkemuka di bidang Teknik Informatika dengan fokus pada pengembangan skill practical.",
    achievements: [
      "Mengikuti berbagai workshop dan seminar tentang web development",
      "Berpartisipasi dalam kompetisi programming",
      "Mengembangkan multiple projects sebagai bagian dari kurikulum",
    ],
    icon: "🎓",
  },
  {
    name: "Stock-Summit UI",
    role: "Staff Event",
    period: "2024",
    description: "Pengalaman dalam event management dan public speaking di acara seminar tingkat nasional.",
    achievements: [
      "Mengelola koordinasi acara dengan ratusan peserta",
      "Menjadi MC dan memimpin diskusi dengan expert speakers",
      "Mendapatkan pengalaman berharga dalam komunikasi publik",
    ],
    icon: "🎤",
  },
  {
    name: "BPJS Ketenagakerjaan",
    role: "Internship - Full Stack Developer",
    period: "Agustus 2025 - November 2025",
    description: "Pengalaman industri sebagai full-stack developer mengembangkan aplikasi internal perusahaan.",
    achievements: [
      "Mengembangkan REST APIs dan frontend components",
      "Bekerja dengan tech stack production: Vue.js, Node.js, PHP",
      "Berkolaborasi dengan team developer di lingkungan perusahaan profesional",
    ],
    icon: "💼",
  },
]

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">Organizations &amp; Activities</h2>
        <p className="text-[rgb(130,140,160)] mb-16 max-w-2xl">
          Keterlibatan saya dalam berbagai organisasi dan aktivitas yang membentuk pengalaman profesional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, i) => (
            <div key={i} className="border-glow p-6 rounded hover:shadow-2xl transition-all duration-300 group">
              <div className="text-5xl mb-4">{org.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-[rgb(0,217,255)]">{org.name}</h3>
              <p className="text-[rgb(255,102,0)] text-sm font-semibold uppercase tracking-widest mb-1">{org.role}</p>
              <p className="text-xs text-[rgb(130,140,160)] mb-4">{org.period}</p>

              <p className="text-sm text-[rgb(130,140,160)] mb-4">{org.description}</p>

              <ul className="space-y-2">
                {org.achievements.map((achievement, j) => (
                  <li key={j} className="text-xs text-[rgb(130,140,160)] flex gap-2">
                    <span className="text-[rgb(0,217,255)] font-bold flex-shrink-0">→</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
