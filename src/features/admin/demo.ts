import { ADMIN_API_URL } from '@/config/site'
import type { DashboardData } from './api'

/**
 * Mode demo: login sementara tanpa backend agar panel admin bisa dilihat dan dicoba.
 * Aktif hanya bila `ADMIN_API_URL` kosong DAN (`npm run dev` ATAU env `VITE_ADMIN_DEMO=true`).
 * Ini bukan keamanan: kredensial ada di kode sumber dan datanya hanya contoh.
 * Begitu `ADMIN_API_URL` diisi, mode ini mati sendiri.
 */
export const DEMO_ENABLED =
  !ADMIN_API_URL && (import.meta.env.DEV || import.meta.env.VITE_ADMIN_DEMO === 'true')

export const DEMO_CREDENTIALS = { email: 'admin@sdn1bowongso.test', password: 'demo-admin' } as const

const SESSION_KEY = 'admin-demo-session'

export function isDemoSignedIn(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

export function startDemoSession(): void {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    // Penyimpanan diblokir: sesi demo tidak bisa dimulai.
  }
}

export function endDemoSession(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY)
  } catch {
    // Abaikan.
  }
}

/** Data contoh dashboard; HANYA untuk mode demo. */
export const DEMO_DASHBOARD: DashboardData = {
  pendingRegistrations: 12,
  publishedNews: 8,
  upcomingAgenda: 3,
  newMessages: 5,
  followUps: { pendingFiles: 12, draftNews: 2, undatedAgenda: 1 },
  admission: { open: true },
  activity: [
    { admin: 'Admin Demo', action: 'Menerbitkan berita' },
    { admin: 'Admin Demo', action: 'Memverifikasi berkas PPDB' },
    { admin: 'Admin Demo', action: 'Menambah agenda' },
  ],
}
