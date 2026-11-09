import { useSyncExternalStore } from 'react'

/** Melacak hasil `window.matchMedia(query)` secara reaktif (aman untuk SSR: bernilai false di server). */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query)
      mql.addEventListener('change', onChange)
      return () => mql.removeEventListener('change', onChange)
    },
    () => window.matchMedia(query).matches,
    () => false,
  )
}
