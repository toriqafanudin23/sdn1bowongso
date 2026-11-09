import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface PanelProps {
  title: string
  children: ReactNode
  className?: string
}

/** Kotak putih berbingkai dengan judul serif; satuan dasar isi dashboard admin. */
export function Panel({ title, children, className }: PanelProps) {
  return (
    <section className={cn('border border-line bg-white p-5 lg:p-6', className)}>
      <h2 className="mb-4 text-xl lg:text-2xl">{title}</h2>
      {children}
    </section>
  )
}
