import { ADMISSION_API_URL } from '@/config/site'
import type { DocumentId, FieldName } from './content'

/** Dilempar bila `ADMISSION_API_URL` belum diisi atau server tidak bisa dihubungi. */
export class AdmissionUnavailableError extends Error {
  constructor() {
    super('Layanan pendaftaran belum aktif.')
  }
}

export type StudentValues = Record<FieldName, string>
export type StudentFiles = Partial<Record<DocumentId, File>>

export interface StatusResult {
  /** Mis. "Diverifikasi", "Diterima". Teks apa adanya dari panitia. */
  status: string
  note?: string
}

/**
 * Kontrak API yang diharapkan (sesuaikan bila backend berbeda):
 *   POST {ADMISSION_API_URL}/registrations        multipart/form-data -> { registrationNumber: string }
 *   GET  {ADMISSION_API_URL}/registrations/:nomor                      -> { status: string, note?: string } | 404
 */
async function request(path: string, init?: RequestInit): Promise<Response> {
  if (!ADMISSION_API_URL) throw new AdmissionUnavailableError()
  try {
    return await fetch(`${ADMISSION_API_URL}${path}`, init)
  } catch {
    throw new AdmissionUnavailableError()
  }
}

export async function submitRegistration(values: StudentValues, files: StudentFiles): Promise<string> {
  const body = new FormData()
  for (const [name, value] of Object.entries(values)) body.append(name, value.trim())
  for (const [id, file] of Object.entries(files)) if (file) body.append(id, file)

  const response = await request('/registrations', { method: 'POST', body })
  if (!response.ok) throw new AdmissionUnavailableError()
  return ((await response.json()) as { registrationNumber: string }).registrationNumber
}

/** `null` bila nomor tidak ditemukan. */
export async function fetchStatus(registrationNumber: string): Promise<StatusResult | null> {
  const response = await request(`/registrations/${encodeURIComponent(registrationNumber.trim())}`)
  if (response.status === 404) return null
  if (!response.ok) throw new AdmissionUnavailableError()
  return (await response.json()) as StatusResult
}
