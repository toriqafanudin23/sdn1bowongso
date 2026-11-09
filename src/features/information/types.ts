import type { PhotoSource } from '@/components/ui/PhotoSlot'

export interface GalleryPhoto {
  caption: string
  /** Keterangan ringkas untuk layar sempit; bila kosong memakai `caption`. */
  shortCaption?: string
  photo?: PhotoSource
}

export interface DownloadFile {
  name: string
  href: string
}
