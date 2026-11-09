import { Section } from '@/components/ui/Section'
import { ADMISSION_TRACKS } from '../content'

export function TracksSection() {
  return (
    <Section title="Jalur pendaftaran" id="jalur">
      <ul>
        {ADMISSION_TRACKS.map(({ title, description }) => (
          <li
            key={title}
            className="border-t border-line py-4 md:grid md:grid-cols-[1fr_1.3fr] md:gap-6 md:py-4"
          >
            <h3 className="text-xl md:text-[22px]">{title}</h3>
            <p className="mt-1 text-muted md:mt-0">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
