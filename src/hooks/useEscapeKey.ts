import { useEffect } from 'react'

/** Memanggil `handler` saat tombol Escape ditekan, hanya selama `active` bernilai true. */
export function useEscapeKey(active: boolean, handler: () => void) {
  useEffect(() => {
    if (!active) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handler()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [active, handler])
}
