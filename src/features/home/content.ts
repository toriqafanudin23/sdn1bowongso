import {
  BookOpenText,
  Compass,
  HeartHandshake,
  Laptop,
  ShieldCheck,
  Trophy,
} from 'lucide-react'
import { unsplashImage } from '@/lib/unsplash'
import type { AcademicProgram, AgendaEvent, NewsPost, SchoolStat } from './types'

export const HERO_PHOTO = {
  src: '/hero.jpg',
  alt: 'Dua siswi berseragam merah putih bersepeda di lingkungan sekolah',
  fallbackLabel: '[Foto murid sekolah]',
} as const

export const ABOUT_STATEMENT =
  'Pembelajaran di sekolah kami aktif, kreatif, dan menyenangkan. Guru mendampingi setiap anak di lingkungan yang aman dan ramah anak.'

export const SCHOOL_STATS: readonly SchoolStat[] = [
  { label: 'Peserta didik', value: '312' },
  { label: 'Guru dan tenaga kependidikan', shortLabel: 'Guru dan tendik', value: '18' },
  { label: 'Rombongan belajar', value: '12' },
  { label: 'Prestasi', value: '25' },
]

export const ACADEMIC_PROGRAMS: readonly AcademicProgram[] = [
  {
    title: 'Literasi dan Numerasi',
    description: 'Membiasakan membaca, berhitung, dan bernalar sejak dini lewat kegiatan yang seru.',
    icon: BookOpenText,
  },
  {
    title: 'Pendidikan Karakter',
    description: 'Pembiasaan sikap jujur, santun, disiplin, dan gotong royong dalam keseharian.',
    icon: HeartHandshake,
  },
  {
    title: 'Kurikulum Merdeka',
    description: 'Pembelajaran berdiferensiasi yang memberi ruang bagi minat dan bakat setiap murid.',
    icon: Compass,
  },
  {
    title: 'Ekstrakurikuler',
    description: 'Pramuka, seni, olahraga, dan kegiatan lain untuk mengembangkan bakat murid.',
    icon: Trophy,
  },
  {
    title: 'Sekolah Ramah Anak',
    description: 'Lingkungan belajar yang aman, inklusif, dan bebas dari perundungan.',
    icon: ShieldCheck,
  },
  {
    title: 'Literasi Digital',
    description: 'Mengenalkan teknologi secara bijak dan bertanggung jawab untuk menunjang belajar.',
    icon: Laptop,
  },
]

export const LATEST_NEWS: readonly NewsPost[] = [
  {
    slug: 'ppdb-2027-2028-resmi-dibuka',
    category: 'Pengumuman',
    date: '2026-11-05',
    title: 'PPDB Tahun Ajaran 2027/2028 Resmi Dibuka: Alur dan Persyaratannya',
    photo: {
      ...unsplashImage({
        id: 'photo-1615466178532-b6d2f9c304de',
        width: 960,
        widths: [480, 640, 960, 1280],
      }),
      alt: 'Siswa-siswi berseragam merah putih menyambut tahun ajaran baru',
    },
  },
  {
    slug: 'pembelajaran-berbasis-proyek-kelas-4',
    category: 'Kegiatan',
    date: '2026-11-02',
    title: 'Murid Kelas 4 Antusias Mengikuti Pembelajaran Berbasis Proyek',
    photo: {
      ...unsplashImage({
        id: 'photo-1509062522246-3755977927d7',
        width: 960,
        widths: [480, 640, 960, 1280],
      }),
      alt: 'Murid kelas 4 antusias berpartisipasi dalam pembelajaran aktif di kelas',
    },
  },
]

export const UPCOMING_AGENDA: readonly AgendaEvent[] = [
  { date: '2026-11-25', title: 'Peringatan Hari Guru Nasional' },
  { date: '2026-12-18', title: 'Pembagian Rapor Semester Ganjil' },
  { date: '2026-12-22', title: 'Peringatan Hari Ibu' },
  { date: '2027-03-01', title: 'Pendaftaran PPDB 2027/2028, tahap 1' },
]
