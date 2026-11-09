import type { KeyValue } from '@/components/ui/KeyValueList'
import type { PhotoSource } from '@/components/ui/PhotoSlot'
import { CONTACT } from '@/config/site'

/** TODO: ganti nilai berkurung siku dengan data resmi (alamat, telepon, email ada di `CONTACT`, config/site.ts). */
export const CONTACT_ROWS: readonly KeyValue[] = [
  { label: 'Alamat', value: CONTACT.address },
  { label: 'Telepon / WhatsApp', value: CONTACT.phone },
  { label: 'Email', value: CONTACT.email },
  { label: 'Jam layanan', value: '[Jam layanan sekolah]' },
]

/** TODO: isi `src` dan `alt` dengan foto peta/lokasi sekolah; selama kosong tampil kotak sementara. */
export const LOCATION_PHOTO: PhotoSource | undefined = undefined
