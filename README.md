# Portfolio Website - Damar Wahyu Putra

Portofolio website futuristik dengan tema sci-fi yang dibangun menggunakan **Next.js 16**, **React 19**, **TypeScript**, dan **Tailwind CSS v4**.

## 🚀 Fitur Utama

- **Tema Sci-Fi Futuristik** - Desain modern dengan cyan glow effects dan orange accents
- **Dynamic Routing** - Halaman detail project yang dapat diakses via `/projects/[slug]`
- **Responsive Design** - Fully responsive di mobile, tablet, dan desktop
- **Smooth Animations** - Typewriter effect, fade-in, dan hover interactions
- **Performance Optimized** - Image optimization dan lazy loading
- **SEO Friendly** - Metadata yang lengkap dan struktur HTML semantic

## 📁 Struktur Folder

```
portfolio-damar/
├── app/
│   ├── layout.tsx              # Root layout dengan metadata
│   ├── globals.css             # Styling global dengan design tokens sci-fi
│   ├── page.tsx                # Halaman home/landing
│   └── projects/
│       ├── [slug]/
│       │   ├── page.tsx        # Detail page untuk setiap project
│       │   └── not-found.tsx   # 404 page untuk project tidak ditemukan
│
├── components/
│   ├── header.tsx              # Navigation header dengan mobile menu
│   ├── hero.tsx                # Hero section dengan typewriter effect
│   ├── experience.tsx          # Professional experience section
│   ├── projects-section.tsx    # Grid projects dengan hover effects
│   ├── skills.tsx              # Skills & expertise showcase
│   ├── organizations.tsx       # Organizations & activities
│   ├── contact.tsx             # Contact form section
│   ├── footer.tsx              # Footer dengan links
│   └── scroll-to-top.tsx       # Scroll to top button
│
├── public/
│   └── img/                    # Folder untuk semua gambar project
│
├── package.json
├── tailwind.config.js
├── next.config.mjs
├── tsconfig.json
└── README.md
```

## 🎨 Warna & Design Tokens

- **Background Utama**: `rgb(10, 14, 39)` - Deep dark blue/space color
- **Background Secondary**: `rgb(15, 23, 52)` - Slightly lighter for cards
- **Cyan Accent**: `rgb(0, 217, 255)` - Primary glow color
- **Orange Accent**: `rgb(255, 102, 0)` - Secondary accent color
- **Text Primary**: `rgb(255, 255, 255)` - White
- **Text Secondary**: `rgb(170, 180, 196)` - Muted white
- **Text Tertiary**: `rgb(130, 140, 160)` - Further muted

## 🛠 Tech Stack

- **Framework**: Next.js 16
- **React**: 19.2.0
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Geist & Geist Mono (dari Google Fonts)
- **Icons**: Lucide React
- **Analytics**: Vercel Analytics

## 📋 Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Steps

1. **Clone atau download project ini**
   ```bash
   git clone <repository-url>
   cd portfolio-damar
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup images folder**
   - Buat folder `public/img/`
   - Copy semua gambar project ke folder ini

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Akses di browser**
   - Buka `http://localhost:3000`

### Build untuk Production

```bash
npm run build
npm start
```

## 📝 Mengubah Data

### Update Project Data
Edit file `components/projects-section.tsx` dan `app/projects/[slug]/page.tsx`:
```typescript
const projectsData = [
  {
    id: 1,
    slug: "project-slug",
    title: "Project Title",
    description: "Project description",
    category: "Category",
    year: 2025,
    technologies: ["Tech1", "Tech2"],
    hero: "/img/hero.png",
    gallery: ["/img/gallery1.png", ...],
    details: {
      overview: "...",
      challenges: ["..."],
      solutions: ["..."]
    }
  },
  // Tambah project lainnya di sini
]
```

### Update Experience Data
Edit file `components/experience.tsx`:
```typescript
const experiences = [
  {
    title: "Experience Title",
    date: "Date",
    image: "/img/experience.jpg",
    description: "Description",
    responsibilities: ["..."]
  }
]
```

### Update Skills
Edit file `components/skills.tsx`:
```typescript
const skillCategories = [
  {
    category: "Category Name",
    icon: "emoji",
    skills: ["Skill1", "Skill2"]
  }
]
```

### Update Organizations
Edit file `components/organizations.tsx`:
```typescript
const organizations = [
  {
    name: "Organization Name",
    role: "Your Role",
    period: "Date",
    description: "Description",
    achievements: ["..."]
  }
]
```

### Update Contact Info
Edit file `components/footer.tsx` dan `components/contact.tsx` untuk mengupdate:
- Email
- Phone number
- Social media links
- Location

## 🔧 Customization

### Mengubah Warna Tema
Edit file `app/globals.css` di section `:root`:
```css
:root {
  --accent-primary: rgb(0, 217, 255);    /* Ganti warna cyan */
  --accent-secondary: rgb(255, 102, 0);  /* Ganti warna orange */
  /* ... warna lainnya ... */
}
```

### Mengubah Font
Edit file `app/layout.tsx`:
```tsx
import { Cute_Font as YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ['latin'] })
```

Lalu edit `app/globals.css`:
```css
@theme inline {
  --font-sans: 'YourFont', system-ui;
}
```

### Responsive Breakpoints
Tailwind CSS breakpoints yang digunakan:
- `md:` = 768px
- `lg:` = 1024px
- `xl:` = 1280px

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

1. Push project ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Deploy otomatis!

### Deploy ke Server Lain

```bash
npm run build
# Copy folder .next dan public ke server
npm start
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## 📄 License

Project ini bebas untuk digunakan dan dimodifikasi sesuai kebutuhan Anda.

## 💬 Support

Jika ada pertanyaan atau mengalami masalah, jangan ragu untuk bertanya!

---

**Last Updated**: January 2026
**Version**: 1.0.0
