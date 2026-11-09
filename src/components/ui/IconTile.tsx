import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/cn'

interface IconTileProps {
  icon: LucideIcon
  className?: string
}

/** Ikon dalam kotak kuning bersudut tajam, selaras dengan lambang sekolah. */
export function IconTile({ icon: Icon, className }: IconTileProps) {
  return (
    <span className={cn('grid size-11 shrink-0 place-items-center bg-accent text-ink', className)}>
      <Icon aria-hidden="true" className="size-6" strokeWidth={2} />
    </span>
  )
}
