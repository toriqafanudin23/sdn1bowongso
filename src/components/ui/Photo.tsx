import { useState, type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

interface PhotoProps extends Omit<ComponentProps<'img'>, 'alt' | 'src'> {
  src: string
  alt: string
  /** Foto di atas lipatan layar (LCP): dimuat segera dengan prioritas tinggi. */
  priority?: boolean
  /** Teks yang tampil bila gambar gagal dimuat. Bawaan: `alt`. */
  fallbackLabel?: string
}

/**
 * Gambar dengan lazy-loading dan fallback bila gagal dimuat (mis. offline atau
 * sumber sementara dihapus), sehingga tata letak tidak pecah.
 * Latar kuning disediakan induknya (`bg-accent`) sebagai warna saat memuat.
 */
export function Photo({ alt, priority = false, fallbackLabel, className, ...props }: PhotoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn('flex items-center justify-center p-4 text-center text-sm text-ink', className)}
      >
        {fallbackLabel ?? alt}
      </div>
    )
  }

  return (
    <img
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn('object-cover', className)}
      {...props}
    />
  )
}
