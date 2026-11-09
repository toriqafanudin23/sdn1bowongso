import type { ReactNode } from 'react'

interface StatCardProps {
  label: ReactNode
  /** Angka, atau `[n]` selama data belum tersedia. */
  value: string
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="border border-line bg-white p-4 lg:p-6">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 font-display text-[32px] leading-[1.2] lg:mt-3 lg:text-[44px]">{value}</p>
    </div>
  )
}
