import { Section } from '@/components/ui/Section'
import { ABOUT_STATEMENT, SCHOOL_STATS } from '../content'

export function AboutSection() {
  return (
    <Section title="Tentang sekolah" id="tentang">
      <p className="mb-5 font-display text-2xl leading-[1.35] md:mb-7 md:text-[32px] md:leading-[1.3]">
        {ABOUT_STATEMENT}
      </p>

      <dl>
        {SCHOOL_STATS.map(({ label, shortLabel, value }) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-4 border-t border-line py-3.5 md:gap-6 md:py-4"
          >
            <dt className="text-muted">
              {shortLabel ? (
                <>
                  <span className="md:hidden">{shortLabel}</span>
                  <span className="hidden md:inline">{label}</span>
                </>
              ) : (
                label
              )}
            </dt>
            <dd className="font-display text-2xl leading-[1.1] md:text-[28px]">{value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
