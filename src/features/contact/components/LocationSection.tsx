import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Section } from '@/components/ui/Section'
import { LOCATION_PHOTO } from '../content'

export function LocationSection() {
  return (
    <Section title="Lokasi" id="lokasi">
      <PhotoSlot photo={LOCATION_PHOTO} placeholder="[Peta lokasi sekolah]" className="h-60 md:h-90" />
    </Section>
  )
}
