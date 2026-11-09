import { buttonVariants } from '@/components/ui/Button'
import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { ACADEMIC_CALENDAR, CALENDAR_PDF_URL } from '../content'

export function CalendarSection() {
  return (
    <Section title="Kalender akademik" id="kalender">
      <KeyValueList items={ACADEMIC_CALENDAR} />
      <p className="mt-5">
        <a href={CALENDAR_PDF_URL} download className={buttonVariants({ variant: 'dark' })}>
          <span className="md:hidden">Unduh kalender (PDF)</span>
          <span className="hidden md:inline">Unduh kalender akademik (PDF)</span>
        </a>
      </p>
    </Section>
  )
}
