import { CONTACT_API_URL } from '@/config/site'
import { ServiceUnavailableError } from '@/lib/errors'

export interface ContactMessage {
  name: string
  /** Email atau nomor WhatsApp pengirim. */
  reply: string
  message: string
}

/** Kontrak yang diharapkan: POST {CONTACT_API_URL}/messages (JSON) -> 2xx. */
export async function sendMessage(payload: ContactMessage): Promise<void> {
  if (!CONTACT_API_URL) throw new ServiceUnavailableError()
  try {
    const response = await fetch(`${CONTACT_API_URL}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!response.ok) throw new ServiceUnavailableError()
  } catch {
    throw new ServiceUnavailableError()
  }
}
