import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { UPCOMING_AGENDA } from '@/features/home/content'
import { formatDate } from '@/lib/format'

const AGENDA_ITEMS = UPCOMING_AGENDA.map(({ date, title }) => ({ label: formatDate(date), value: title }))

export function AgendaSection() {
  return (
    <Section title="Agenda" id="agenda" tone="dark">
      <KeyValueList items={AGENDA_ITEMS} tone="dark" stackOnMobile />
    </Section>
  )
}
