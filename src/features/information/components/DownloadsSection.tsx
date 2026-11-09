import { Section } from '@/components/ui/Section'
import { DOWNLOADS } from '../content'

export function DownloadsSection() {
  return (
    <Section title="Unduhan" id="unduhan">
      <ul>
        {DOWNLOADS.map(({ name, href }) => (
          <li key={name} className="flex justify-between gap-4 border-t border-line py-3.5 md:gap-6 md:py-4">
            <span>{name}</span>
            <a href={href} download className="font-bold underline-offset-4 hover:underline">
              Unduh<span className="hidden md:inline"> [PDF]</span>
              <span className="sr-only"> {name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
