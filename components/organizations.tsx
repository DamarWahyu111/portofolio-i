"use client"

const organizations = [
  {
    name: "Indorelawan",
    role: "Ketua Grup Indorelawan",
    subtitle: "Generasi Bebas Plastik",
    period: "Jun 2024 - Aug 2024",
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
    period: "Feb 2024 - Sekarang",
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
  {
    name: "Staff Event Stock-Summit UI",
    role: "Staff Event & MC",
    subtitle: "University Event",
    period: "2024",
    image: "/img/IMG_3833.jpg",
    description:
      "Berperan sebagai staff divisi event dan MC pada acara Seminar Stock-Summit UI. Mengelola koordinasi acara dan memfasilitasi jalannya seminar dengan audience yang besar.",
    achievements: [
      "Mengelola koordinasi teknis dan logistik acara seminar",
      "Menjadi MC untuk membawakan acara di hadapan ratusan peserta",
      "Memfasilitasi sesi Q&A dan interaksi dengan pembicara",
      "Berkoordinasi dengan tim untuk memastikan timeline acara berjalan sesuai rencana",
      "Membantu registrasi dan handling peserta seminar",
    ],
    icon: "💻",
  },
  {
    name: "BAZNAS Volunteer",
    role: "Volunteer Program Lingkungan",
    subtitle: "Aksi Nyata Jaga Bumi",
    period: "Mar 2026",
    image: "/img/volunteer/baznas_volunteer/WhatsApp Image 2026-06-22 at 12.49.07.jpeg",
    description:
      "Terlibat dalam program BAZNAS Volunteer Aksi Nyata Jaga Bumi yang berfokus pada edukasi lingkungan, pengelolaan sampah, dan aktivitas sosial bersama anak-anak. Mendukung pelaksanaan kegiatan agar pesan peduli bumi tersampaikan dengan interaktif dan mudah dipahami.",
    achievements: [
      "Mendukung edukasi isu sampah dan kepedulian lingkungan kepada peserta",
      "Membantu aktivitas recycle serta pilah dan kelola sampah",
      "Mendampingi kegiatan edukatif bersama anak-anak",
      "Berkoordinasi dengan tim volunteer untuk menjaga alur kegiatan",
      "Menerima sertifikat apresiasi sebagai BAZNAS Volunteer",
    ],
    icon: "🌿",
  },
]

export default function Organizations() {
  return (
    <section id="organizations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Organizations &amp; Activities</h2>
        <p className="text-[rgb(130,140,160)] mb-16 max-w-2xl">
          Keterlibatan saya dalam berbagai organisasi dan aktivitas yang membentuk pengalaman profesional.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, i) => (
            <div key={i} className="glass-panel p-6 rounded-[2rem] hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
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
