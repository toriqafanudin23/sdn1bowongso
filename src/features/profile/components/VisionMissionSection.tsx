import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { MISSIONS, VISION } from '../content'

export function VisionMissionSection() {
  return (
    <Section title="Visi dan misi" id="visi-misi" tone="dark">
      <p className="mb-5 font-display text-2xl leading-[1.35] md:mb-7 md:text-[38px] md:leading-[1.3]">
        {VISION}
      </p>
      <KeyValueList items={MISSIONS} tone="dark" />
    </Section>
  )
}
