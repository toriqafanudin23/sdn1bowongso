export const ROUTES = {
  home: '/',
  profile: '/profil',
  academic: '/akademik',
  information: '/informasi',
  admission: '/ppdb',
  admissionStatus: '/ppdb/status',
  contact: '/kontak',
  gallery: '/galeri',
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
