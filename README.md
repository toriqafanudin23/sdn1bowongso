# Web SDN 1 Bowongso

React 19 + TypeScript + Vite 8 + Tailwind CSS v4. Mobile-first.

## Menjalankan

```bash
npm install
npm run dev      # pengembangan
npm run build    # cek tipe + build produksi
npm run lint
```

## Struktur

```
src/
  config/        site.ts (identitas, PPDB, kontak), navigation.ts (rute & menu)
  lib/           cn, format tanggal, helper Unsplash
  hooks/         useStickyHeader, useLockBodyScroll, useEscapeKey, useMediaQuery, useActiveSection
  components/
    ui/          Button, Container, Section, SectionNav, FilterChips, KeyValueList, Photo, PhotoSlot, Logo, IconTile (reusable)
    layout/      AnnouncementBar, Navbar, MobileMenu, Footer, MainLayout, PageHero
  features/home/ komponen section Beranda + content.ts (data) + types.ts
  features/profile/, academic/, information/  section tiap halaman + content.ts (data placeholder)
  pages/         HomePage, ProfilePage, AcademicPage, InformationPage, ComingSoonPage
  router.tsx     daftar rute
  index.css      token desain (@theme): warna, font, tinggi navbar
```

## Menambah halaman baru

1. Buat `src/pages/NamaPage.tsx` (default export). Untuk halaman dalam, mulai dengan `PageHero` (sudah memakai `pt-(--header-h)`; bila membuat hero sendiri yang berlatar biru, pakai padding itu karena navbar menimpa bagian atas).
2. Daftarkan di `src/router.tsx`.
3. Pakai `Section`, `Button`, `Container` agar konsisten.

## Yang masih sementara

- Foto hero dari Unsplash: ubah `HERO_PHOTO` di `src/features/home/content.ts`.
- Alamat, telepon, email: ubah `CONTACT` di `src/config/site.ts`.
- Halaman Profil, Akademik, dan Informasi sudah jadi. Data yang belum resmi masih placeholder berkurung siku di `content.ts` masing-masing fitur (`features/profile`, `academic`, `information`). Foto: isi `photo: { src, alt }` pada item terkait. Alamat berkas PDF: `CALENDAR_PDF_URL`, `EXTRACURRICULAR_LIST_URL`, dan `DOWNLOADS` (masih `#`).
- Berita dan agenda di halaman Informasi memakai data yang sama dengan Beranda (`features/home/content.ts`); demikian juga program unggulan Akademik.
- Rute lain (PPDB, Kontak, Galeri) menampilkan `ComingSoonPage`.
