# Implementation Plan — Website Company Profile Sido Muljo Karosen

> Company profile bengkel karoseri / commercial car body repair di Sidoarjo.
> Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**, deploy ke **Cloudflare Pages dengan domain pribadi**.

---

## 0. Jawaban atas 3 Kebutuhan Utama

| Kebutuhan | Keputusan |
|---|---|
| SEO optimal | Next.js App Router dengan **SSG (Static Site Generation)** + Metadata API + JSON-LD structured data + sitemap otomatis. Semua konten dirender di server menjadi HTML statis → cepat & mudah di-crawl. |
| Reusable component | Arsitektur komponen 3 lapis: `ui/` (atom: Button, Card, Badge), `layout/` (Header, Footer), `sections/` (Hero, ServicesGrid, dst). Semua **data-driven** — konten dipisah ke file data TypeScript, komponen menerima props. |
| Deploy dengan domain pribadi? | **Bisa, via Cloudflare Pages** (keputusan final). Paket gratis memperbolehkan situs komersial, bandwidth unlimited, SSL otomatis. Next.js di-set **static export** (`output: 'export'`) → hasil build HTML statis murni. Custom domain: beli domain → DNS di Cloudflare → tambahkan di project Pages → aktif otomatis dalam hitungan menit. Detail di bagian 5. |

---

## 1. Tech Stack

| Layer | Pilihan | Alasan |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSG untuk SEO, Metadata API bawaan, Image/Font optimization |
| Bahasa | TypeScript | Konten type-safe, komponen reusable lebih terstruktur |
| Styling | Tailwind CSS v4 | Cepat, design token via CSS variables, konsisten |
| Font | `next/font/google` — Oswald/Barlow Condensed (heading) + Inter/Barlow (body) | Sesuai gaya tipografi condensed bold uppercase di mockup |
| Konten | File data TypeScript (`src/data/`) | Tanpa CMS dulu — cepat, gratis; mudah migrasi ke MDX/CMS nanti |
| Ikon | `lucide-react` | Ringan, konsisten |
| Animasi | CSS/Tailwind (opsional framer-motion) | Reveal on scroll sederhana |

Tidak perlu backend/database. Form kontak dan WhatsApp cukup pakai link `wa.me`.

---

## 2. Struktur Project

```
compro-sidomulyo/
├── app/
│   ├── layout.tsx              # Root layout: font, header, footer, metadata dasar
│   ├── page.tsx                # Beranda (gabungan semua section)
│   ├── layanan/
│   │   ├── page.tsx            # Index semua layanan
│   │   └── [slug]/page.tsx     # Detail layanan (generateStaticParams + generateMetadata)
│   ├── portfolio/page.tsx      # Grid portfolio + filter kategori
│   ├── testimoni/page.tsx
│   ├── partner/page.tsx
│   ├── kontak/page.tsx         # Info kontak + map embed + CTA WhatsApp
│   ├── not-found.tsx
│   ├── sitemap.ts              # Auto-generate sitemap.xml
│   ├── robots.ts               # Auto-generate robots.txt
│   └── opengraph-image.tsx     # OG image dinamis (opsional)
├── components/
│   ├── ui/                     # ATOM — reusable murni, tanpa logika bisnis
│   │   ├── button.tsx          # variant: primary|outline|whatsapp, size
│   │   ├── badge.tsx           # Label kategori (BODY REPAIR, dst)
│   │   ├── card.tsx
│   │   ├── section-heading.tsx # eyebrow + title + subtitle (center/left)
│   │   ├── container.tsx
│   │   ├── stat-item.tsx       # angka besar + label
│   │   └── icon-box.tsx
│   ├── layout/
│   │   ├── header.tsx          # Sticky, transparan→solid saat scroll, mobile menu
│   │   ├── footer.tsx
│   │   ├── mobile-nav.tsx
│   │   └── whatsapp-float.tsx  # Tombol WA mengambang
│   └── sections/               # Blok halaman, data-driven via props
│       ├── hero.tsx
│       ├── stats-bar.tsx
│       ├── value-props.tsx
│       ├── services-grid.tsx
│       ├── about-section.tsx
│       ├── portfolio-grid.tsx
│       ├── portfolio-card.tsx
│       ├── partners-section.tsx
│       └── cta-banner.tsx
├── data/                       # SUMBER KONTEN — satu tempat, gampang diubah
│   ├── company.ts              # Nama, alamat, telp, email, jam operasional, sosmed
│   ├── navigation.ts           # Menu header & footer
│   ├── services.ts             # 4 layanan + detail (slug, deskripsi, gambar)
│   ├── portfolio.ts            # Item kerja: judul, kategori, gambar, before/after
│   ├── testimonials.ts
│   └── partners.ts
├── lib/
│   ├── config.ts               # SITE_URL, SITE_NAME, WA_NUMBER, dll
│   └── seo.ts                  # Helper JSON-LD & default metadata
├── public/images/              # Foto workshop, portfolio, logo mitra
└── tailwind.config.ts / globals.css
```

**Prinsip reusable:**
- `ui/` tidak tahu apa-apa tentang bisnis — hanya props (variant, size, children).
- `sections/` menerima data via props; `page.tsx` meng-import dari `data/`.
- Ganti konten = edit satu file di `data/`, semua halaman ikut berubah.

---

## 3. Design System (dari mockup)

| Token | Nilai | Pakai untuk |
|---|---|---|
| `--color-primary` | `#1D40AF` / blue-800 | Tombol sekunder, ikon, CTA banner, angka statistik |
| `--color-accent` | `#F59E0B` (amber-500) | Eyebrow text, tombol hero, badge kategori |
| `--color-dark` | `#0A0A0A` | Header, hero overlay, footer |
| `--color-surface` | `#F3F4F6` | Background section selang-seling |
| Heading font | Oswald / Barlow Condensed, uppercase, tracking ketat | H1–H3 |
| Body font | Inter / Barlow | Paragraf, nav |
| Radius | `rounded-lg` kartu, `rounded-full` badge/pill | |
| Section rhythm | padding-y 80–96px desktop, 48–56px mobile | |

Definisikan sebagai CSS variables di `globals.css` + mapping Tailwind, jadi konsisten di semua komponen.

---

## 4. Fase Implementasi

### Fase 0 — Setup (± 0.5 hari)
1. `npx create-next-app@latest compro-sidomulyo --typescript --tailwind --app --eslint`
2. Konfigurasi static export di `next.config.ts`:
   ```ts
   const nextConfig: NextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   ```
3. Setup `next/font` (Oswald + Inter), CSS variables warna.
4. Buat `lib/config.ts` (URL site, nomor WA) dan struktur folder `components/`, `data/`.
5. Init git repo + push ke GitHub.

### Fase 1 — Komponen UI reusable (± 1 hari)
1. `Button` (variant: primary/orange, outline, whatsapp; size: sm/md/lg).
2. `Container`, `SectionHeading` (eyebrow + judul + subjudul, prop `align`).
3. `Badge`, `Card`, `StatItem`, `IconBox`.
4. Verifikasi semua varian di satu halaman `/styleguide` sementara (hapus sebelum rilis).

### Fase 2 — Layout & data (± 1 hari)
1. Isi `data/company.ts`, `data/navigation.ts` (alamat, jam operasional, kontak dari footer mockup).
2. `Header`: sticky, transparan di atas hero → solid saat scroll, menu mobile hamburger.
3. `Footer`: 4 kolom (identitas+alamat+sosmed, Navigasi, Jam Operasional, Kontak).
4. `WhatsAppFloat`: tombol mengambang, link `https://wa.me/62xxx?text=...`.

### Fase 3 — Section beranda (± 2–3 hari)
Urutan sesuai mockup:
1. `Hero` — background foto workshop + overlay gelap, eyebrow "COMMERCIAL CAR BODY REPAIR", H1 besar, 2 CTA, `next/image` priority.
2. `StatsBar` — 4 statistik (500+ unit/tahun, 12+ tahun, dsb).
3. `ValueProps` — 4 kartu (Pelayanan, Cepatnya Pengerjaan, Biaya Transparan, Garansi Mutu).
4. `ServicesGrid` — heading center + grid 2×2 kartu layanan (gambar + judul + deskripsi) + CTA.
5. `AboutSection` — teks kiri, foto kanan, 2 stat, tombol.
6. `PortfolioGrid` — 3 kartu terbaru, badge kategori, overlay BEFORE/AFTER, CTA ke /portfolio.
7. `PartnersSection` — heading + logo mitra (grid 4).
8. `CtaBanner` — kartu biru besar "Kebutuhan Armada? Serahkan Pada Ahlinya" + tombol WhatsApp.

### Fase 4 — Halaman dalam (± 2 hari)
1. `/layanan` + `/layanan/[slug]` — `generateStaticParams()`, layout detail: gambar, deskripsi lengkap, CTA WA per layanan.
2. `/portfolio` — grid semua pekerjaan + filter kategori (client component kecil).
3. `/testimoni` — kartu testimoni.
4. `/partner` — logo + deskripsi singkat mitra.
5. `/kontak` — info kontak, jam operasional, embed Google Maps, tombol WA.

### Fase 5 — SEO (± 1 hari)
1. **Metadata**: `metadataBase` di root layout; `generateMetadata()` per halaman (title template `%s | Sido Muljo Karosen`, description unik, canonical, Open Graph + Twitter Card).
2. **JSON-LD** (`lib/seo.ts`): `LocalBusiness`/`AutoRepair` schema — nama, alamat Sidoarjo, telepon, jam operasional, geo. Untuk artikel layanan tambah `Service` schema.
3. **`app/sitemap.ts` + `app/robots.ts`** — otomatis dari daftar route.
4. **Semantik**: satu H1 per halaman, hierarki heading benar, `alt` deskriptif di semua gambar, `<nav aria-label>`.
5. **Konten**: riset keyword ("karoseri sidoarjo", "bengkel truk surabaya", "car body repair surabaya", "perbaikan bodi truk") — masukkan natural di title, heading, dan paragraf.
6. `favicon` + `apple-icon` + logo OG image.

### Fase 6 — Performa & QA (± 1 hari)
1. Foto dioptimalkan **manual sebelum commit** (format WebP, lebar maks ±1600px, dikompres) karena static export tidak menjalankan image optimization server-side. `next/image` tetap dipakai untuk lazy loading & ukuran responsif.
2. Lighthouse target: Performance/SEO/Accessibility ≥ 90.
3. Tes mobile (menu, ukuran tap, grid 1 kolom).
4. Perbaiki typo mockup: "Chatvia WhatsApp" → "Chat via WhatsApp".
5. Cek semua link WA & tel aktif.

### Fase 7 — Deploy ke Cloudflare Pages + Domain Pribadi (± 0.5 hari)
Lihat bagian 5 di bawah.

**Total estimasi: 8–10 hari kerja.**

---

## 5. Deploy ke Cloudflare Pages + Domain Pribadi

**Keputusan: Cloudflare Pages** — paket gratis memperbolehkan situs komersial (Vercel Hobby melarangnya), bandwidth unlimited, SSL gratis otomatis, dan performa di Indonesia setara. Karena situs ini full statis (SSG), kita pakai **Next.js static export** — tanpa adapter, tanpa kompleksitas tambahan.

### Langkah
1. **Config static export** di `next.config.ts` (sudah masuk Fase 0):
   ```ts
   const nextConfig: NextConfig = {
     output: 'export',           // build menghasilkan folder out/ berisi HTML statis murni
     images: { unoptimized: true },
   };
   ```
   `sitemap.ts`, `robots.ts`, Metadata API, dan JSON-LD tetap berjalan normal karena semuanya dieksekusi saat build.
2. **Push ke GitHub** — Pages deploy langsung dari repo; setiap push ke branch lain otomatis dapat preview URL.
3. **Buat project Pages**: dashboard Cloudflare → **Workers & Pages → Create → Pages → Connect to Git** → pilih repo.
4. **Build settings**:
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `out`
   - Environment variable: `NODE_VERSION` = `22` (kalau default build node-nya terlalu lama untuk Next.js 15)
5. **Beli domain**:
   - `.com` → Cloudflare Registrar (harga modal/tanpa markup, DNS otomatis di Cloudflare)
   - `.id` → registrar lokal berlisensi Pandi (Niagahoster, Domainesia, Rumahweb), lalu arahkan nameserver ke Cloudflare (gratis)
6. **Tambahkan domain**: project Pages → **Custom domains → Set up a custom domain** → masukkan `namadomain.com` dan `www.namadomain.com`. Karena DNS sudah di Cloudflare, CNAME dibuat dan terverifikasi otomatis — aktif dalam hitungan menit, bukan jam.
7. **SSL aktif otomatis** (Universal SSL) beserta redirect http → https.

### Catatan biaya
| Item | Biaya |
|---|---|
| Hosting Cloudflare Pages | Gratis — boleh komersial, bandwidth unlimited |
| Domain .com | ± $10/tahun (harga modal di Cloudflare Registrar) |
| Domain .id | ± Rp100–300rb/tahun (registrar lokal) |
| SSL | Gratis otomatis |

### Image optimization di static export
Static export menonaktifkan optimasi server-side `next/image`. Strateginya: kompres semua foto sebelum di-commit (WebP, lebar maks ±1600px) — untuk 30–50 gambar company profile, ini sekali kerja dan hasilnya tetap cepat. Kalau nanti mau optimasi on-the-fly, opsi lanjutannya Cloudflare Image Resizing dengan custom loader.

### Jalur upgrade
Kalau suatu saat butuh fitur server-side Next.js (ISR, middleware, API routes), tinggal hapus `output: 'export'` lalu pakai adapter **OpenNext Cloudflare** (`@opennextjs/cloudflare`) atau migrasi ke Vercel — kodenya Next.js murni tanpa lock-in hosting, tidak ada yang perlu ditulis ulang.

---

## 6. Checklist Sebelum Launch
- [ ] Semua konten final (teks, foto asli workshop & portfolio, logo mitra)
- [ ] `SITE_URL` di `lib/config.ts` sudah domain produksi
- [ ] Nomor WhatsApp & email aktif
- [ ] Google Search Console: submit sitemap
- [ ] Google Business Profile dibuat (penting untuk SEO lokal "bengkel karoseri terdekat")
- [ ] Lighthouse mobile ≥ 90 di semua halaman
- [ ] Custom domain + HTTPS aktif

---

# BAGIAN 7 — Rencana Implementasi Berikutnya (Remediasi & Launch)

> Kondisi saat ini: kode homepage + halaman dalam + SEO dasar sudah ada, static export sudah dikonfigurasi.
> Hasil audit desain (vs mockup): ±85% sesuai. Plan ini menutup gap audit → konten asli → launch.
> Total estimasi: **4–6 hari kerja**.

## Sprint 1 — Remediasi Desain (± 1 hari) — *tidak butuh input klien, langsung eksekusi*

1. **Stats bar hero sesuai mockup** — ganti 4 kartu ikon di `hero.tsx` dengan strip angka (500+ Service Body/Per Tahun, 12+ Tahun Pengalaman, dst), sumber angka dari `companyData` agar single source of truth.
2. **Tombol header "CHAT WHATSAPP"** — ganti tombol amber nomor telepon dengan tombol outline + ikon WhatsApp (inline SVG — lucide tidak punya brand icon WA) + teks "CHAT WHATSAPP".
3. **Migrasi `next/font`** — hapus `@import` Google Fonts di `globals.css`; import Barlow Condensed + Inter via `next/font/google` di `layout.tsx` (Oswald di-drop, hanya fallback). Mengurangi render-blocking & CLS → naikkan skor Lighthouse.
4. **Hapus link mati Privacy/Terms di footer** — ganti dengan teks lokasi "Krian, Sidoarjo, Jawa Timur" sesuai mockup.
5. **Samakan label dengan mockup** — tombol layanan "Lihat Detail Layanan"; tombol About jadi "Tentang Kami" (menaut ke halaman baru /tentang, lihat Sprint 3).
6. **Keputusan top bar header** — rekomendasi: **pertahankan** (bagus untuk bisnis lokal: alamat & jam langsung terlihat), meski tidak ada di mockup. Kalau ingin 100% identik dengan mockup, hapus blok top bar.

## Sprint 2 — Branding & Data Asli (± 0.5–1 hari) — *sebagian butuh input klien*

1. **KEPUTUSAN BRAND (penghalang utama)**: nama tercatat inkonsisten — mockup & `companyData.name` = "Sido Muljo **Karosen**", tetapi metadata title, semua teks WhatsApp, judul peta, dan domain email memakai "Sido Muljo **Karoseri**". Samakan semuanya mengikuti nama resmi badan usaha (mockup indikasi kuat: "Karosen"). Buat konstanta tunggal di `lib/config.ts`, referensi dari mana saja.
2. **Data kontak asli** di `company.ts` + `config.ts`: telepon/WA 0856-5404-5464 (format WA: 6285654045464), email `sidomuljokarosen@gmail.com`, alamat lengkap Krian/Sidomulyo, koordinat GPS & embed Google Maps aktual (sekarang pin generik pusat Sidoarjo).
3. **URL sosmed asli** — perbarui juga `sameAs` di JSON-LD `seo.ts` (sekarang masih URL tebakan).
4. **Ganti favicon** — `src/app/favicon.ico` masih bawaan create-next-app (logo Next.js!). Ganti dengan logo SM; tambah `icon.png`/`apple-icon` 512px.
5. **Cleanup `public/`** — hapus boilerplate (file.svg, globe.svg, next.svg, vercel.svg, window.svg).

## Sprint 3 — Konten & Halaman (± 1–2 hari) — *foto asli butuh klien*

1. **Buat halaman `/tentang`** — ada di navigasi footer mockup; bagus untuk SEO (halaman profil usaha + sejarah + legalitas). Pindahkan/expand konten AboutSection ke sana.
2. **Foto asli menggantikan placeholder**: hero (workshop), about, 4 layanan, 6–12 foto portfolio **unik** (sekarang 3 kartu portfolio memakai file gambar layanan yang sama). Kompres WebP, lebar maks 1600px, kompres sebelum commit.
3. **Audit halaman dalam**: pastikan `layanan/[slug]` punya `generateStaticParams` + `generateMetadata` per slug; semua halaman punya title/description unik; link balik & CTA WA di tiap halaman berfungsi.
4. **Testimoni** — data saat ini masih fiktif; pertahankan sampai testimoni asli + foto/izin klien ada, jangan tampilkan rating palsu ke publik tanpa dasar.

## Sprint 4 — SEO & Performa (± 1 hari)

1. **OG image dedicated 1200×630** — sekarang memakai `hero-bg.jpg` yang rasionya bukan 1.91:1 (crop acak saat di-share WA/sosmed).
2. **JSON-LD tambahan**: schema `Service` di tiap `/layanan/[slug]`, `BreadcrumbList` di halaman dalam.
3. **Verifikasi `sitemap.ts` & `robots.ts`** setelah /tentang ditambahkan.
4. **Lighthouse mobile ≥ 90** semua halaman (migrasi font Sprint 1 ikut berkontribusi).
5. **Audit alt text** semua gambar (deskriptif + keyword natural).

## Sprint 5 — Deploy & Post-Launch (± 0.5 hari)

1. Push ke GitHub → **Cloudflare Pages**: Connect to Git, preset `None`, build `npm run build`, output `out`, env `NODE_VERSION=22`.
2. Beli domain (.com via Cloudflare Registrar; .id via registrar lokal) → Custom domains di project Pages → SSL otomatis.
3. **Google Search Console**: verifikasi + submit `sitemap.xml`.
4. **Google Business Profile** — paling berdampak untuk SEO lokal "bengkel karoseri terdekat".
5. Verifikasi live: Rich Results Test untuk JSON-LD, sharing debugger untuk OG image, tes mobile fisik.

## Urutan Eksekusi yang Disarankan

Sprint 1 (langsung) → Sprint 4.1–4.2 (bisa paralel) → tunggu data klien untuk Sprint 2–3 foto → Sprint 5.
Sprint 1 + 4 bisa selesai **hari ini** tanpa menunggu apa pun; Sprint 2–3 hanya tertahan di foto & konfirmasi nama brand.
