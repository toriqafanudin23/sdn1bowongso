import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { DOCUMENT_LIST } from '../content'

export function DocumentsSection() {
  return (
    <Section title="Berkas" id="berkas">
      <KeyValueList items={DOCUMENT_LIST} />
    </Section>
  )
}
