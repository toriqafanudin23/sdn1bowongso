import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { ANNOUNCEMENTS } from '../content'

export function AnnouncementsSection() {
  return (
    <Section title="Pengumuman" id="pengumuman">
      <KeyValueList items={ANNOUNCEMENTS} />
    </Section>
  )
}
