import { Link } from 'react-router'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'
import { cn } from '@/lib/cn'

/** `onDark`: untuk latar biru/navy. `onLight`: untuk latar putih. */
export type LogoTone = 'onDark' | 'onLight'

interface LogoMarkProps {
  tone: LogoTone
  className?: string
}

/** Lambang sekolah: tiga persegi (dasar, aksen kuning di kanan-bawah, aksen di kiri-atas). */
export function LogoMark({ tone, className }: LogoMarkProps) {
  const isDark = tone === 'onDark'

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={cn('size-10 shrink-0', className)}>
      <rect width="48" height="48" className={isDark ? 'fill-white' : 'fill-brand'} />
      <rect x="24" y="24" width="24" height="24" className="fill-accent" />
      <rect width="12" height="12" className={isDark ? 'fill-brand' : 'fill-white'} />
    </svg>
  )
}

interface LogoProps {
  tone: LogoTone
  /** Tampilkan keterangan jenis sekolah (`SITE.type`) (hanya di layar besar). */
  showSubtitle?: boolean
  onClick?: () => void
  className?: string
}

/** Lambang + nama sekolah, tertaut ke beranda. Warna teks mengikuti induk. */
export function Logo({ tone, showSubtitle = true, onClick, className }: LogoProps) {
  return (
    <Link
      to={ROUTES.home}
      onClick={onClick}
      className={cn('flex items-center gap-3 no-underline lg:gap-3.5', className)}
    >
      <LogoMark tone={tone} className="lg:size-12" />
      <span className="font-display text-[19px] leading-[1.1] lg:text-[22px]">
        {SITE.name}
        {showSubtitle && (
          <small className="hidden font-sans text-[13px] lg:block">{SITE.type}</small>
        )}
      </span>
    </Link>
  )
}
