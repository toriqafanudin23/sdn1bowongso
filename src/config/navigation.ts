export const ROUTES = {
  home: '/',
  profile: '/profil',
  academic: '/akademik',
  information: '/informasi',
  admission: '/ppdb',
  admissionStatus: '/ppdb/status',
  contact: '/kontak',
  gallery: '/galeri',
  adminLogin: '/admin/masuk',
  adminDashboard: '/admin',
} as const

export interface NavItem {
  label: string
  to: string
}

/** Menu utama (navbar desktop dan menu ponsel). */
export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Beranda', to: ROUTES.home },
  { label: 'Profil', to: ROUTES.profile },
  { label: 'Akademik', to: ROUTES.academic },
  { label: 'Informasi', to: ROUTES.information },
  { label: 'PPDB', to: ROUTES.admission },
  { label: 'Kontak', to: ROUTES.contact },
]

export const FOOTER_LINKS: readonly NavItem[] = [
  { label: 'Profil sekolah', to: ROUTES.profile },
  { label: 'Akademik', to: ROUTES.academic },
  { label: 'Berita dan agenda', to: ROUTES.information },
  { label: 'Galeri', to: ROUTES.gallery },
  { label: 'PPDB online', to: ROUTES.admission },
]

export const ADMIN_ROUTES = {
  news: '/admin/berita',
  newsNew: '/admin/berita/baru',
  announcements: '/admin/pengumuman',
  agenda: '/admin/agenda',
  agendaNew: '/admin/agenda/baru',
  gallery: '/admin/galeri',
  galleryUpload: '/admin/galeri/unggah',
  staff: '/admin/guru',
  academic: '/admin/akademik',
  admission: '/admin/ppdb',
  settings: '/admin/pengaturan',
} as const

/** Menu panel admin (sidebar desktop dan menu ponsel). Urutan = urutan tampil. */
export const ADMIN_NAV_ITEMS: readonly NavItem[] = [
  { label: 'Dashboard', to: ROUTES.adminDashboard },
  { label: 'Berita', to: ADMIN_ROUTES.news },
  { label: 'Pengumuman', to: ADMIN_ROUTES.announcements },
  { label: 'Agenda', to: ADMIN_ROUTES.agenda },
  { label: 'Galeri', to: ADMIN_ROUTES.gallery },
  { label: 'Guru dan tendik', to: ADMIN_ROUTES.staff },
  { label: 'Akademik', to: ADMIN_ROUTES.academic },
  { label: 'PPDB', to: ADMIN_ROUTES.admission },
  { label: 'Pengaturan situs', to: ADMIN_ROUTES.settings },
]

/** Tiga pintasan di tab bawah ponsel; tab keempat ("Menu") membuka semua menu. */
export const ADMIN_TAB_ITEMS: readonly NavItem[] = [
  ADMIN_NAV_ITEMS[0],
  ADMIN_NAV_ITEMS[1],
  ADMIN_NAV_ITEMS[7],
]
