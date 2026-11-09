import { useMemo } from 'react'
import { Container } from '@/components/ui/Container'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

export interface SectionLink {
  /** Id elemen section di halaman (`<Section id>`). */
  id: string
  label: string
  /** Label ringkas untuk layar sempit; bila kosong memakai `label`. */
  shortLabel?: string
}

interface SectionNavProps {
  sections: readonly SectionLink[]
  /** Nama landmark untuk pembaca layar, mis. "Bagian profil". */
  label: string
}

/**
 * Sub-menu tautan ke tiap section sebuah halaman.
 * Ponsel: deretan chip yang bisa digeser, chip aktif mengikuti posisi scroll.
 * Desktop: tautan teks, section aktif bergaris bawah.
 * `sections` harus konstan (mis. dari file content), bukan dibuat ulang tiap render.
 */
export function SectionNav({ sections, label }: SectionNavProps) {
  const ids = useMemo(() => sections.map(({ id }) => id), [sections])
  const activeId = useActiveSection(ids)

  return (
    <nav aria-label={label} className="border-b border-line">
      <Container className="px-0 md:px-10">
        <ul className="flex gap-2 overflow-x-auto px-5 py-3.5 [scrollbar-width:none] md:gap-7 md:px-0 md:py-4">
          {sections.map(({ id, label: text, shortLabel }) => {
            const isActive = id === activeId

            return (
              <li key={id} className="shrink-0">
                <a
                  href={`#${id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'block px-4 py-[11px] text-[15px] font-semibold whitespace-nowrap ring-2 ring-ink ring-inset md:p-0 md:ring-0',
                    'md:decoration-2 md:underline-offset-8',
                    isActive
                      ? 'bg-ink text-white md:bg-transparent md:text-ink md:underline'
                      : 'md:hover:underline',
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
                </a>
              </li>
            )
          })}
        </ul>
      </Container>
    </nav>
  )
}
