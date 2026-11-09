import { cn } from '@/lib/cn'

export interface KeyValue {
  label: string
  value: string
}

interface KeyValueListProps {
  items: readonly KeyValue[]
  /** `dark`: untuk section berlatar biru. */
  tone?: 'light' | 'dark'
  /** Ponsel: label di atas nilai (untuk tanggal agenda). Desktop tetap berdampingan. */
  stackOnMobile?: boolean
  className?: string
}

/** Daftar label di kiri dan nilai tebal di kanan, dipisah garis tipis (Identitas, Misi, Agenda, dst.). */
export function KeyValueList({ items, tone = 'light', stackOnMobile = false, className }: KeyValueListProps) {
  const isDark = tone === 'dark'

  return (
    <dl className={className}>
      {items.map(({ label, value }, index) => (
        <div
          key={`${label}-${index}`}
          className={cn(
            'flex justify-between gap-4 border-t py-3.5 md:flex-row md:gap-6 md:py-4',
            stackOnMobile && 'flex-col gap-0',
            isDark ? 'border-white/30' : 'border-line',
          )}
        >
          <dt className={isDark ? 'text-tint' : 'text-muted'}>{label}</dt>
          <dd className={cn('font-bold', !stackOnMobile && 'text-right', 'md:text-right')}>{value}</dd>
        </div>
      ))}
    </dl>
  )
}
