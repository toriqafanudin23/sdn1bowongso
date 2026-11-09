import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Section } from '@/components/ui/Section'
import { FACILITIES } from '../content'

export function FacilitiesSection() {
  return (
    <Section title="Fasilitas" id="fasilitas">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {FACILITIES.map(({ name, photo }) => (
          <li key={name}>
            <PhotoSlot photo={photo} placeholder="[Foto]" className="h-30 md:h-37.5" />
            <strong className="mt-2 block md:mt-2.5">{name}</strong>
          </li>
        ))}
      </ul>
    </Section>
  )
}
