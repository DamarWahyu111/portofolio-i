"use client"

import type React from "react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-orbitron mb-4 drop-shadow-md">LET&apos;S WORK TOGETHER</h2>
          <p className="text-lg font-space-mono text-[rgb(130,140,160)] max-w-2xl mx-auto">
            Saya terbuka untuk kesempatan magang, kolaborasi, atau sekadar diskusi tentang teknologi web. Hubungi saya
            dan mari kita ciptakan sesuatu yang luar biasa!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              {
                icon: "📧",
                title: "EMAIL",
                value: "damarwahyup160@gmail.com",
                link: "mailto:damarwahyup160@gmail.com",
              },
              {
                icon: "📱",
                title: "PHONE",
                value: "+62 878-7498-9010",
                link: "tel:+622327686909",
              },
              {
                icon: "📍",
                title: "LOCATION",
                value: "Bekasi, Indonesia",
                link: "#",
              },
            ].map((contact, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{contact.icon}</div>
                <div>
                  <h3 className="font-black font-orbitron text-[rgb(0,217,255)] mb-1 uppercase tracking-wider">
                    {contact.title}
                  </h3>
                  <a
                    href={contact.link}
                    className="text-sm font-space-mono text-[rgb(130,140,160)] hover:text-[rgb(0,217,255)] transition-colors"
                  >
                    {contact.value}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-panel p-8 space-y-6">
            <div>
              <label className="block text-sm font-black font-orbitron text-[rgb(0,217,255)] mb-2 uppercase tracking-wider">
                Nama
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white font-space-mono placeholder-white/50 focus:border-[rgb(0,217,255)] focus:outline-none transition-colors rounded-xl backdrop-blur-sm"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label className="block text-sm font-black font-orbitron text-[rgb(0,217,255)] mb-2 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white font-space-mono placeholder-white/50 focus:border-[rgb(0,217,255)] focus:outline-none transition-colors rounded-xl backdrop-blur-sm"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-black font-orbitron text-[rgb(0,217,255)] mb-2 uppercase tracking-wider">
                Subjek
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white font-space-mono placeholder-white/50 focus:border-[rgb(0,217,255)] focus:outline-none transition-colors rounded-xl backdrop-blur-sm"
                placeholder="Subjek pesan"
              />
            </div>

            <div>
              <label className="block text-sm font-black font-orbitron text-[rgb(0,217,255)] mb-2 uppercase tracking-wider">
                Pesan
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white font-space-mono placeholder-white/50 focus:border-[rgb(0,217,255)] focus:outline-none transition-colors rounded-xl backdrop-blur-sm resize-none"
                placeholder="Tulis pesan Anda di sini..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="glass-button glass-button-cyan w-full px-6 py-4 text-sm"
            >
              {submitted ? "TERIMA KASIH! PESAN TERKIRIM" : "KIRIM PESAN"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
