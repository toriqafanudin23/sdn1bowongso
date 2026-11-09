import { redirect } from 'react-router'
import { ROUTES } from '@/config/navigation'
import { fetchSession, type AdminSession } from './api'

/**
 * Loader rute /admin: hanya admin yang sudah masuk boleh lewat, selain itu ke halaman login.
 * Sesi demo (tanpa backend) ditangani di fetchSession; lihat demo.ts.
 */
export async function requireAdmin(): Promise<AdminSession> {
  let session: AdminSession | null = null
  try {
    session = await fetchSession()
  } catch {
    // Server tidak terjangkau: perlakukan sebagai belum masuk.
  }
  if (!session) throw redirect(ROUTES.adminLogin)
  return session
}
