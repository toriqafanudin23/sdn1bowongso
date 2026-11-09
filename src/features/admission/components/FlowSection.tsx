import { Section } from '@/components/ui/Section'
import { ADMISSION_FLOW } from '../content'

export function FlowSection() {
  return (
    <Section title="Alur pendaftaran" id="alur">
      <ol>
        {ADMISSION_FLOW.map(({ title, description }, index) => (
          <li
            key={title}
            className="grid grid-cols-[2rem_1fr] items-baseline gap-x-3 border-t border-line py-3.5 md:grid-cols-[3rem_14rem_1fr] md:gap-x-6 md:py-4"
          >
            <span aria-hidden="true" className="font-display text-2xl leading-none md:text-[28px]">
              {index + 1}
            </span>
            <h3 className="font-sans text-base font-bold md:font-display md:text-xl md:font-normal">{title}</h3>
            <p className="col-start-2 text-muted md:col-start-auto">{description}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
