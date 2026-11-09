import { useEffect, useState } from 'react'

/**
 * Scroll-spy: mengembalikan id section (urut dokumen) yang sedang melintasi pita
 * di bagian atas layar. `ids` harus konstan (mis. dari modul), bukan dibuat ulang tiap render.
 */
export function useActiveSection(ids: readonly string[]): string | undefined {
  const [activeId, setActiveId] = useState<string | undefined>(ids[0])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (elements.length === 0) return

    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting } of entries) {
          if (isIntersecting) visible.add(target.id)
          else visible.delete(target.id)
        }
        const current = ids.find((id) => visible.has(id))
        if (current) setActiveId(current)
      },
      // Pita setinggi ~10% layar, sedikit di bawah navbar.
      { rootMargin: '-20% 0px -70% 0px' },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return activeId
}
