import { isIndonesianPhone } from '@/lib/validators'
import { ACCEPTED_FILE_TYPES, MAX_FILE_BYTES, MAX_FILE_MB, type AdmissionDocument, type FieldDefinition } from './content'

/** Mengembalikan pesan galat, atau `undefined` bila isian sudah benar. */
export function validateField({ kind, label }: FieldDefinition, value: string): string | undefined {
  const text = value.trim()
  if (!text) return `Isi ${label.toLowerCase()} dulu.`

  if (kind === 'date' && new Date(text).getTime() > Date.now()) {
    return 'Tanggal lahir tidak boleh setelah hari ini.'
  }

  if (kind === 'tel') {
    if (!isIndonesianPhone(text)) return 'Nomor belum sesuai format. Contoh: 081234567890.'
  }

  return undefined
}

export function validateFile({ label, required }: AdmissionDocument, file: File | undefined): string | undefined {
  if (!file) return required ? `Unggah ${label.toLowerCase()} dulu.` : undefined
  if (!ACCEPTED_FILE_TYPES.includes(file.type)) return 'Format berkas harus PDF, JPG, atau PNG.'
  if (file.size > MAX_FILE_BYTES) return `Ukuran berkas melebihi ${MAX_FILE_MB} MB. Perkecil lalu unggah lagi.`
  return undefined
}
