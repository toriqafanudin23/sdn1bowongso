import { Button } from '@/components/ui/Button'
import { IconTile } from '@/components/ui/IconTile'
import { Section } from '@/components/ui/Section'
import { ROUTES } from '@/config/navigation'
import { ACADEMIC_PROGRAMS } from '../content'

export function AcademicSection() {
  return (
    <Section title="Akademik" tone="dark" id="akademik">
      <ul>
        {ACADEMIC_PROGRAMS.map(({ title, description, icon }) => (
          <li key={title} className="flex gap-4 border-t border-white/30 py-4">
            <IconTile icon={icon} />
            <div className="lg:flex lg:flex-1 lg:gap-6">
              <h3 className="text-[21px] leading-[1.15] lg:shrink-0 lg:basis-60 lg:text-[22px]">
                {title}
              </h3>
              <p className="mt-1.5 text-tint lg:mt-0 lg:flex-1">{description}</p>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 md:mt-7">
        <Button to={ROUTES.academic} withArrow>
          Semua program akademik
        </Button>
      </div>
    </Section>
  )
}
