# Cara Deploy ke GitHub Pages

## Setup GitHub Pages

### 1. Aktifkan GitHub Pages di Repository

1. Buka repository Anda di GitHub
2. Pergi ke **Settings** → **Pages**
3. Di bagian **Source**, pilih:
   - **Source**: `GitHub Actions`
   - (Bukan "Deploy from a branch")

### 2. Push Kode ke GitHub

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### 3. GitHub Actions akan Otomatis Build & Deploy

- Setelah push, GitHub Actions akan otomatis menjalankan workflow
- Cek status di tab **Actions** di repository GitHub Anda
- Tunggu sampai workflow selesai (sekitar 2-5 menit)

### 4. Akses Website

Setelah deploy selesai, website akan tersedia di:
```
https://damarwahyu111.github.io/portofolio-i/
```

## Troubleshooting

### Jika GitHub Actions Gagal

1. **Cek Logs**: Klik pada workflow yang gagal → lihat error message
2. **Pastikan Branch**: Workflow hanya jalan di branch `main`
3. **Pastikan Permissions**: Repository Settings → Actions → General → Workflow permissions harus "Read and write permissions"

### Jika Website Tidak Muncul

1. **Cek Base Path**: Pastikan URL menggunakan `/portofolio-i/` (dengan trailing slash)
2. **Clear Cache**: Hard refresh browser (Ctrl+Shift+R atau Cmd+Shift+R)
3. **Cek GitHub Pages Settings**: Pastikan source sudah di-set ke "GitHub Actions"

### Build Lokal untuk Testing

Untuk test build lokal sebelum push:

```bash
# Set environment variable
export GITHUB_PAGES=true
export NEXT_PUBLIC_REPO_NAME=portofolio-i

# Build
npm run build

# Test static files
npx serve out
```

Atau di Windows PowerShell:
```powershell
$env:GITHUB_PAGES="true"
$env:NEXT_PUBLIC_REPO_NAME="portofolio-i"
npm run build
npx serve out
```

## Catatan Penting

- **Base Path**: Website akan di-deploy ke `/portofolio-i/` (sesuai nama repository)
- **Static Export**: Semua halaman akan di-generate sebagai static files
- **Images**: Sudah di-set `unoptimized: true` untuk kompatibilitas GitHub Pages
- **Trailing Slash**: URL akan otomatis menambahkan trailing slash

## Update Website

Setiap kali Anda push perubahan ke branch `main`, GitHub Actions akan otomatis:
1. Build ulang website
2. Deploy ke GitHub Pages
3. Website akan update dalam 1-2 menit setelah build selesai

---

**Tips**: Untuk development lokal, tetap gunakan `npm run dev` (tanpa environment variables).
