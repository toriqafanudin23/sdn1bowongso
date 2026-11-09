import { cn } from '@/lib/cn'

export interface ChipOption<T extends string> {
  value: T
  label: string
  /** Label ringkas untuk layar sempit; bila kosong memakai `label`. */
  shortLabel?: string
}

interface FilterChipsProps<T extends string> {
  options: readonly ChipOption<T>[]
  value: T
  onChange: (value: T) => void
  /** Nama grup untuk pembaca layar, mis. "Filter kategori". */
  label: string
  className?: string
}

/**
 * Deretan chip pilihan tunggal (filter kategori, pilih kelas).
 * Ponsel: satu baris yang bisa digeser sampai tepi layar. Desktop: membungkus ke baris baru.
 */
export function FilterChips<T extends string>({ options, value, onChange, label, className }: FilterChipsProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        '-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0',
        className,
      )}
    >
      {options.map(({ value: optionValue, label: text, shortLabel }) => {
        const isActive = optionValue === value

        return (
          <button
            key={optionValue}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(optionValue)}
            className={cn(
              'shrink-0 px-4 py-[11px] text-[15px] font-semibold whitespace-nowrap ring-2 ring-ink ring-inset transition-colors md:py-2 motion-reduce:transition-none',
              isActive ? 'bg-ink text-white' : 'hover:bg-surface',
            )}
          >
            {shortLabel ? (
              <>
                <span className="md:hidden">{shortLabel}</span>
                <span className="hidden md:inline">{text}</span>
              </>
            ) : (
              text
            )}
          </button>
        )
      })}
    </div>
  )
}
