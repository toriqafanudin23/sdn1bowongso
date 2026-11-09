import { useCallback, useState } from 'react'

/**
 * `useState` yang menyimpan nilainya di localStorage (draf formulir).
 * Penyimpanan bisa gagal (mode privat, data situs diblokir), jadi semua akses
 * dibungkus try/catch dan state tetap berjalan di memori.
 */
export function usePersistedState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored ? { ...initial, ...JSON.parse(stored) } : initial
    } catch {
      return initial
    }
  })

  const update = useCallback(
    (next: T) => {
      setValue(next)
      try {
        localStorage.setItem(key, JSON.stringify(next))
      } catch {
        // Draf tidak tersimpan; formulir tetap bisa dipakai.
      }
    },
    [key],
  )

  const clear = useCallback(() => {
    try {
      localStorage.removeItem(key)
    } catch {
      // Abaikan.
    }
  }, [key])

  return [value, update, clear] as const
}
