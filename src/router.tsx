import { createBrowserRouter } from 'react-router'
import { MainLayout } from '@/components/layout/MainLayout'
import { ROUTES } from '@/config/navigation'
import ComingSoonPage from '@/pages/ComingSoonPage'
import HomePage from '@/pages/HomePage'

/**
 * Halaman baru: tambahkan satu rute di sini. Untuk halaman besar gunakan
 * `lazy: async () => ({ Component: (await import('...')).default })`.
 * Halaman Beranda dimuat langsung karena menjadi pintu masuk utama (LCP).
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      {
        path: ROUTES.profile,
        lazy: async () => ({ Component: (await import('@/pages/ProfilePage')).default }),
      },
      {
        path: ROUTES.academic,
        lazy: async () => ({ Component: (await import('@/pages/AcademicPage')).default }),
      },
      {
        path: ROUTES.information,
        lazy: async () => ({ Component: (await import('@/pages/InformationPage')).default }),
      },
      { path: '*', Component: ComingSoonPage },
    ],
  },
])
