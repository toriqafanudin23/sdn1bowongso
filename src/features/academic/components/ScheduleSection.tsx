import { useState } from 'react'
import { FilterChips } from '@/components/ui/FilterChips'
import { Section } from '@/components/ui/Section'
import { CLASS_OPTIONS, type ClassGrade } from '../content'

/**
 * Jadwal per kelas. Tabel jadwal belum tersedia (sesuai desain, masih kotak sementara);
 * pilihan kelas sudah berfungsi dan menentukan isi kotak.
 */
export function ScheduleSection() {
  const [grade, setGrade] = useState<ClassGrade>('1')

  return (
    <Section title="Jadwal pelajaran" id="jadwal">
      <FilterChips options={CLASS_OPTIONS} value={grade} onChange={setGrade} label="Pilih kelas" />
      <div
        role="status"
        className="mt-5 flex h-45 items-center justify-center border-2 border-dashed border-placeholder-line bg-surface p-4 text-center text-sm text-muted md:h-50"
      >
        <span className="md:hidden">[Jadwal pelajaran kelas {grade}]</span>
        <span className="hidden md:inline">
          [Tabel jadwal pelajaran kelas {grade}: hari, jam, mata pelajaran, guru]
        </span>
      </div>
    </Section>
  )
}
