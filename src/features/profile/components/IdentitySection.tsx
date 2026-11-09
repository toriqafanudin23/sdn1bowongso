import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { SCHOOL_IDENTITY } from '../content'

export function IdentitySection() {
  return (
    <Section title="Identitas" id="identitas">
      <KeyValueList items={SCHOOL_IDENTITY} />
    </Section>
  )
}
