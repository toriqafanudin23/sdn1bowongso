import { Photo } from '@/components/ui/Photo'
import { cn } from '@/lib/cn'

export interface PhotoSource {
  src: string
  alt: string
  srcSet?: string
}

interface PhotoSlotProps {
  /** Foto asli. Selama belum ada, ditampilkan kotak putus-putus bertuliskan `placeholder`. */
  photo?: PhotoSource
  /** Teks kotak sementara, mis. `[Foto]`. */
  placeholder: string
  /** Wajib memuat tinggi, mis. `h-50 md:h-75`. */
  className?: string
}

/**
 * Slot foto: menampilkan foto bila sudah tersedia, atau kotak sementara sesuai
 * desain. Cukup isi `photo` di file content untuk mengganti tanpa mengubah komponen.
 */
export function PhotoSlot({ photo, placeholder, className }: PhotoSlotProps) {
  if (!photo) {
    return (
      <div
        className={cn(
          'flex items-center justify-center border-2 border-dashed border-placeholder-line bg-surface p-4 text-center text-sm text-muted',
          className,
        )}
      >
        {placeholder}
      </div>
    )
  }

  return (
    <div className={cn('bg-accent', className)}>
      <Photo
        src={photo.src}
        srcSet={photo.srcSet}
        alt={photo.alt}
        fallbackLabel={placeholder}
        className="size-full"
      />
    </div>
  )
}
