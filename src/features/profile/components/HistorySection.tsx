import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { HISTORY_PHOTO, HISTORY_STATEMENT, HISTORY_TIMELINE } from '../content'

export function HistorySection() {
  return (
    <Section title="Sejarah" id="sejarah">
      <p className="mb-5 font-display text-xl leading-[1.35] md:mb-7 md:text-[32px] md:leading-[1.3]">
        {HISTORY_STATEMENT}
      </p>
      <PhotoSlot photo={HISTORY_PHOTO} placeholder="[Foto dokumentasi sekolah]" className="h-50 md:h-75" />
      <KeyValueList items={HISTORY_TIMELINE} className="hidden md:block" />
    </Section>
  )
}
