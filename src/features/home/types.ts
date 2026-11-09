import type { LucideIcon } from 'lucide-react'
import type { PhotoSource } from '@/components/ui/PhotoSlot'

export interface SchoolStat {
  label: string
  /** Label ringkas untuk layar sempit; bila kosong memakai `label`. */
  shortLabel?: string
  value: string
}

export interface AcademicProgram {
  title: string
  description: string
  icon: LucideIcon
}

export interface NewsPost {
  slug: string
  category: string
  /** Format ISO `YYYY-MM-DD`. */
  date: string
  title: string
  photo?: PhotoSource
}

export interface AgendaEvent {
  /** Format ISO `YYYY-MM-DD`. */
  date: string
  title: string
}
