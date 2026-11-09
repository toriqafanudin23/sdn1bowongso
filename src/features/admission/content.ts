import type { KeyValue } from '@/components/ui/KeyValueList'

/**
 * TODO: ganti nilai berkurung siku dengan ketentuan resmi panitia PPDB
 * (sengaja tidak diisi data karangan). Periode dan tahun ajaran ada di `PPDB` (config/site.ts).
 */

export interface AdmissionStep {
  title: string
  description: string
}

export const ADMISSION_FLOW: readonly AdmissionStep[] = [
  { title: 'Pendaftaran online', description: 'Isi formulir dan unggah berkas.' },
  { title: 'Verifikasi berkas', description: 'Panitia memeriksa data dan berkas.' },
  { title: 'Pengumuman hasil', description: 'Hasil seleksi diumumkan di website.' },
  { title: 'Daftar ulang', description: 'Konfirmasi dan serahkan berkas asli.' },
  { title: 'Tahun ajaran baru', description: 'Murid mulai belajar.' },
]

export const ADMISSION_TRACKS: readonly AdmissionStep[] = [
  {
    title: 'Jalur Domisili',
    description: 'Untuk calon murid yang tinggal di sekitar sekolah sesuai batas wilayah yang ditetapkan.',
  },
  { title: 'Jalur Afirmasi', description: '[Ketentuan jalur afirmasi]' },
  { title: 'Jalur Perpindahan', description: '[Ketentuan jalur perpindahan tugas orang tua]' },
]

export const MAX_FILE_MB = 2
export const MAX_FILE_BYTES = MAX_FILE_MB * 1024 * 1024
export const ACCEPTED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png']

export type DocumentId = 'birthCertificate' | 'familyCard' | 'photo' | 'supporting' | 'kindergarten'

export interface AdmissionDocument {
  id: DocumentId
  label: string
  /** TODO: konfirmasi dengan panitia berkas mana yang wajib. */
  required: boolean
}

export const ADMISSION_DOCUMENTS: readonly AdmissionDocument[] = [
  { id: 'birthCertificate', label: 'Akta kelahiran', required: true },
  { id: 'familyCard', label: 'Kartu Keluarga', required: true },
  { id: 'photo', label: 'Pas foto', required: true },
  { id: 'supporting', label: 'Berkas pendukung', required: false },
  { id: 'kindergarten', label: 'Surat keterangan TK', required: false },
]

export const DOCUMENT_LIST: readonly KeyValue[] = ADMISSION_DOCUMENTS.map(({ label }) => ({
  label,
  value: `Maks. ${MAX_FILE_MB} MB`,
}))

export type FieldName = 'fullName' | 'birthDate' | 'address' | 'village' | 'guardianName' | 'guardianPhone'

export interface FieldDefinition {
  name: FieldName
  label: string
  kind: 'text' | 'date' | 'tel' | 'multiline'
  autoComplete?: string
  hint?: string
}

export interface FormStep {
  /** Label di daftar langkah. */
  label: string
  /** Judul kartu formulir. */
  title: string
  /** Isi tombol lanjut. */
  nextLabel: string
  fields: readonly FieldDefinition[]
}

/** Langkah 1-3 berisi isian, langkah 4 unggah berkas, langkah 5 tinjauan. */
export const FORM_STEPS: readonly FormStep[] = [
  {
    label: 'Data murid',
    title: 'Data murid',
    nextLabel: 'Lanjut ke alamat',
    fields: [
      { name: 'fullName', label: 'Nama lengkap', kind: 'text', autoComplete: 'off' },
      { name: 'birthDate', label: 'Tanggal lahir', kind: 'date', autoComplete: 'off' },
    ],
  },
  {
    label: 'Alamat',
    title: 'Alamat',
    nextLabel: 'Lanjut ke orang tua',
    fields: [
      { name: 'address', label: 'Alamat lengkap', kind: 'multiline', autoComplete: 'street-address' },
      { name: 'village', label: 'Desa atau kelurahan', kind: 'text', autoComplete: 'address-level3' },
    ],
  },
  {
    label: 'Orang tua',
    title: 'Orang tua atau wali',
    nextLabel: 'Lanjut ke berkas',
    fields: [
      { name: 'guardianName', label: 'Nama orang tua atau wali', kind: 'text', autoComplete: 'name' },
      {
        name: 'guardianPhone',
        label: 'Nomor WhatsApp',
        kind: 'tel',
        autoComplete: 'tel',
        hint: 'Contoh: 081234567890. Dipakai panitia untuk menghubungi Anda.',
      },
    ],
  },
  { label: 'Berkas', title: 'Unggah berkas', nextLabel: 'Lanjut ke tinjauan', fields: [] },
  { label: 'Tinjau', title: 'Tinjau data', nextLabel: 'Kirim pendaftaran', fields: [] },
]

export const FILES_STEP_INDEX = 3
export const REVIEW_STEP_INDEX = 4

export const ADMISSION_SECTIONS_NOTE = {
  support: 'Butuh bantuan? Hubungi panitia lewat WhatsApp.',
  hours: 'Jam layanan: [Jam layanan panitia]',
} as const
