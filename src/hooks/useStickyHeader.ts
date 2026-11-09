import { useEffect, useRef, useState } from 'react'

/**
 * Mendeteksi kapan header `sticky top-0` benar-benar menempel di atas layar.
 *
 * Elemen sentinel (1px) ditaruh tepat sebelum header. Begitu sentinel keluar
 * dari atas viewport, header berarti sedang menempel. Pendekatan ini tidak
 * bergantung pada tinggi elemen di atasnya (mis. pengumuman) dan tidak memakai
 * scroll listener.
 */
export function useStickyHeader() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [isStuck, setIsStuck] = useState(false)

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  return { sentinelRef, isStuck }
}
