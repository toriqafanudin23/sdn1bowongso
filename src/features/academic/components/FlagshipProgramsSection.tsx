import { Section } from '@/components/ui/Section'
import { ACADEMIC_PROGRAMS } from '@/features/home/content'

/** Daftar program unggulan. Ponsel: judul di atas deskripsi. Desktop: judul 280px di kiri, deskripsi di kanan. */
export function FlagshipProgramsSection() {
  return (
    <Section title="Program unggulan" id="program" tone="dark">
      <ul>
        {ACADEMIC_PROGRAMS.map(({ title, description }) => (
          <li key={title} className="border-t border-white/30 py-4 md:flex md:gap-6">
            <h3 className="text-[21px] leading-[1.15] md:shrink-0 md:basis-70 md:text-[22px]">{title}</h3>
            <p className="mt-1.5 text-tint md:mt-0 md:flex-1">{description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
