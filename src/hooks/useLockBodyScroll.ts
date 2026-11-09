import { useEffect } from 'react'

/** Mengunci scroll halaman selama `locked` bernilai true (mis. saat menu ponsel terbuka). */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = overflow
    }
  }, [locked])
}
