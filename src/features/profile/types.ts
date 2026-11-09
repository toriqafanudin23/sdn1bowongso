import type { PhotoSource } from '@/components/ui/PhotoSlot'

export type StaffCategory = 'kepala-sekolah' | 'guru-kelas' | 'guru-mapel' | 'tendik'

export interface StaffMember {
  id: string
  name: string
  /** Jabatan yang ditampilkan di bawah nama. */
  role: string
  category: StaffCategory
  photo?: PhotoSource
}


export interface Facility {
  name: string
  photo?: PhotoSource
}
