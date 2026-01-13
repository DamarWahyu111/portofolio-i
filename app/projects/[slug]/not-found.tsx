import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="text-center">
        <h1 className="text-6xl font-bold glow-cyan mb-4">404</h1>
        <p className="text-2xl text-[rgb(130,140,160)] mb-8">Project tidak ditemukan</p>
        <p className="text-[rgb(130,140,160)] mb-8 max-w-md">
          Maaf, project yang Anda cari tidak ada. Kembali ke halaman utama untuk melihat semua project.
        </p>
        <Link
          href="/#projects"
          className="inline-block px-8 py-4 border-2 border-[rgb(0,217,255)] text-[rgb(0,217,255)] hover:bg-[rgb(0,217,255)]/10 transition-all duration-300 uppercase text-sm font-bold tracking-widest rounded"
        >
          Kembali ke Projects
        </Link>
      </div>
    </div>
  )
}
