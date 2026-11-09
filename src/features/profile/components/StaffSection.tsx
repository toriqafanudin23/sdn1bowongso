import { useState } from 'react'
import { FilterChips } from '@/components/ui/FilterChips'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Section } from '@/components/ui/Section'
import { STAFF, STAFF_FILTERS, type StaffFilter } from '../content'

/** Guru dan tenaga kependidikan, dengan filter kategori. Kepala sekolah hanya muncul di "Semua". */
export function StaffSection() {
  const [filter, setFilter] = useState<StaffFilter>('semua')
  const members = filter === 'semua' ? STAFF : STAFF.filter(({ category }) => category === filter)

  return (
    <Section title="Guru dan tendik" id="guru-tendik">
      <FilterChips options={STAFF_FILTERS} value={filter} onChange={setFilter} label="Filter kategori" />

      {members.length === 0 ? (
        <p className="mt-5 text-muted">Belum ada data untuk kategori ini.</p>
      ) : (
        <ul className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {members.map(({ id, name, role, photo }) => (
            <li key={id}>
              <PhotoSlot photo={photo} placeholder="[Foto]" className="h-37.5 md:h-55" />
              <strong className="mt-2 block md:mt-2.5">{name}</strong>
              <span className="text-sm text-muted md:text-base">{role}</span>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}
