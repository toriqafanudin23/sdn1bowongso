import type { ChipOption } from '@/components/ui/FilterChips'
import type { KeyValue } from '@/components/ui/KeyValueList'
import type { SectionLink } from '@/components/ui/SectionNav'
import { SITE } from '@/config/site'
import { unsplashImage } from '@/lib/unsplash'
import type { Facility, StaffCategory, StaffMember } from './types'

/**
 * Foto sementara dari Unsplash untuk melengkapi tampilan website.
 * Ganti dengan foto dan data resmi sekolah saat aset asli tersedia.
 */

/** Urutan di sini = urutan section di halaman = urutan tautan sub-menu. */
export const PROFILE_SECTIONS: readonly SectionLink[] = [
  { id: 'sejarah', label: 'Sejarah' },
  { id: 'identitas', label: 'Identitas' },
  { id: 'visi-misi', label: 'Visi dan misi' },
  { id: 'guru-tendik', label: 'Guru dan tendik', shortLabel: 'Guru' },
  { id: 'fasilitas', label: 'Fasilitas' },
]

export const HISTORY_STATEMENT =
  '[Tuliskan sejarah berdirinya sekolah: tahun berdiri, latar belakang, dan tonggak penting.]'

export const HISTORY_PHOTO = {
  ...unsplashImage({
    id: 'photo-1580582932707-520aed937b7b',
    width: 960,
    widths: [480, 640, 960, 1280],
  }),
  alt: 'Gedung dan lingkungan sekolah',
} as const

/** Hanya tampil di layar md ke atas (sesuai desain, ponsel menampilkan pernyataan dan foto saja). */
export const HISTORY_TIMELINE: readonly KeyValue[] = [
  { label: '[Tahun]', value: 'Sekolah berdiri' },
  { label: '[Tahun]', value: 'Pengembangan fasilitas' },
  { label: '[Tahun]', value: 'Prestasi membanggakan' },
]

export const SCHOOL_IDENTITY: readonly KeyValue[] = [
  { label: 'Nama sekolah', value: SITE.name },
  { label: 'NPSN', value: '[NPSN]' },
  { label: 'Status', value: 'Negeri' },
  { label: 'Akreditasi', value: '[ A ]' },
  { label: 'Kurikulum', value: 'Kurikulum Merdeka' },
  { label: 'Alamat', value: '[Alamat sekolah]' },
  { label: 'Kepala sekolah', value: '[Nama Kepala Sekolah]' },
]

export const VISION = '[Tuliskan visi sekolah di sini.]'

export const MISSIONS: readonly KeyValue[] = [
  { label: 'Misi 1', value: '[Misi pertama sekolah.]' },
  { label: 'Misi 2', value: '[Misi kedua sekolah.]' },
  { label: 'Misi 3', value: '[Misi ketiga sekolah.]' },
  { label: 'Misi 4', value: '[Misi keempat sekolah.]' },
]

export type StaffFilter = 'semua' | Exclude<StaffCategory, 'kepala-sekolah'>

export const STAFF_FILTERS: readonly ChipOption<StaffFilter>[] = [
  { value: 'semua', label: 'Semua' },
  { value: 'guru-kelas', label: 'Guru Kelas' },
  { value: 'guru-mapel', label: 'Guru Mapel' },
  { value: 'tendik', label: 'Tenaga Kependidikan', shortLabel: 'Tendik' },
]

export const STAFF: readonly StaffMember[] = [
  {
    id: 'kepala-sekolah',
    name: '[Nama Kepala Sekolah]',
    role: 'Kepala sekolah',
    category: 'kepala-sekolah',
    photo: {
      ...unsplashImage({
        id: 'photo-1560250097-0b93528c311a',
        width: 400,
        widths: [200, 400, 600],
      }),
      alt: 'Kepala Sekolah',
    },
  },
  {
    id: 'guru-kelas-1',
    name: '[Nama guru]',
    role: 'Guru kelas',
    category: 'guru-kelas',
    photo: {
      ...unsplashImage({
        id: 'photo-1573496359142-b8d87734a5a2',
        width: 400,
        widths: [200, 400, 600],
      }),
      alt: 'Guru Kelas',
    },
  },
  {
    id: 'guru-mapel-1',
    name: '[Nama guru]',
    role: 'Guru mapel',
    category: 'guru-mapel',
    photo: {
      ...unsplashImage({
        id: 'photo-1589206946274-929e4da3996b',
        width: 400,
        widths: [200, 400, 600],
      }),
      alt: 'Guru Mata Pelajaran',
    },
  },
  {
    id: 'tendik-1',
    name: '[Nama staf]',
    role: 'Tenaga kependidikan',
    category: 'tendik',
    photo: {
      ...unsplashImage({
        id: 'photo-1507003211169-0a1dd7228f2d',
        width: 400,
        widths: [200, 400, 600],
      }),
      alt: 'Tenaga Kependidikan',
    },
  },
]

export const FACILITIES: readonly Facility[] = [
  {
    name: 'Ruang kelas',
    photo: {
      ...unsplashImage({
        id: 'photo-1510531704581-5b2870972060',
        width: 600,
        widths: [300, 600, 900],
      }),
      alt: 'Ruang kelas belajar mengajar yang rapi dan nyaman',
    },
  },
  {
    name: 'Perpustakaan',
    photo: {
      ...unsplashImage({
        id: 'photo-1481627834876-b7833e8f5570',
        width: 600,
        widths: [300, 600, 900],
      }),
      alt: 'Perpustakaan sekolah dengan berbagai buku bacaan dan literatur',
    },
  },
  {
    name: 'Lapangan',
    photo: {
      ...unsplashImage({
        id: 'photo-1527410514447-0d41efed395f',
        width: 600,
        widths: [300, 600, 900],
      }),
      alt: 'Lapangan olahraga dan upacara bendera sekolah',
    },
  },
  {
    name: 'UKS',
    photo: {
      ...unsplashImage({
        id: 'photo-1519494026892-80bbd2d6fd0d',
        width: 600,
        widths: [300, 600, 900],
      }),
      alt: 'Ruang Unit Kesehatan Sekolah (UKS) untuk pertolongan pertama',
    },
  },
]
