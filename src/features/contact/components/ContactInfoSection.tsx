import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { CONTACT_ROWS } from '../content'

export function ContactInfoSection() {
  return (
    <Section title="Hubungi kami" id="hubungi">
      <KeyValueList items={CONTACT_ROWS} stackOnMobile />
    </Section>
  )
}
