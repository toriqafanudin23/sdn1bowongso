const BASE_URL = 'https://images.unsplash.com'

interface UnsplashImageOptions {
  /** ID foto Unsplash, mis. `photo-1615466178532-b6d2f9c304de`. */
  id: string
  /** Lebar (px) yang dipakai sebagai `src` bawaan. */
  width: number
  /** Daftar lebar (px) untuk `srcset`. */
  widths: readonly number[]
  quality?: number
}

export interface ResponsiveImage {
  src: string
  srcSet: string
}

const buildUrl = (id: string, width: number, quality: number) =>
  `${BASE_URL}/${id}?auto=format&fit=crop&w=${width}&q=${quality}`

/**
 * Membuat `src` dan `srcSet` responsif dari ID foto Unsplash.
 * Hanya untuk foto sementara; ganti dengan aset sekolah saat tersedia.
 */
export function unsplashImage({
  id,
  width,
  widths,
  quality = 75,
}: UnsplashImageOptions): ResponsiveImage {
  return {
    src: buildUrl(id, width, quality),
    srcSet: widths.map((w) => `${buildUrl(id, w, quality)} ${w}w`).join(', '),
  }
}
