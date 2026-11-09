import { Outlet, ScrollRestoration } from 'react-router'
import { AnnouncementBar } from './AnnouncementBar'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

/** Kerangka semua halaman publik: pengumuman, navbar, konten, footer. */
export function MainLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Lewati ke konten utama
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="konten-utama" className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <ScrollRestoration />
    </div>
  )
}
