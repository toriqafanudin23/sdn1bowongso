import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { CURRICULUM_PHASES, CURRICULUM_STATEMENT, CURRICULUM_SUBJECTS_NOTE } from '../content'

export function CurriculumSection() {
  return (
    <Section title="Kurikulum" id="kurikulum">
      <p className="mb-5 font-display text-xl leading-[1.35] md:mb-7 md:text-[32px] md:leading-[1.3]">
        {CURRICULUM_STATEMENT}
      </p>
      <KeyValueList items={CURRICULUM_PHASES} />
      <p className="mt-5 hidden text-muted md:block">{CURRICULUM_SUBJECTS_NOTE}</p>
    </Section>
  )
}
