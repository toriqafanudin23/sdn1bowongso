import { buttonVariants } from '@/components/ui/Button'
import { KeyValueList } from '@/components/ui/KeyValueList'
import { Section } from '@/components/ui/Section'
import { EXTRACURRICULAR_LIST_URL, EXTRACURRICULARS } from '../content'

export function ExtracurricularSection() {
  return (
    <Section title="Ekstrakurikuler" id="ekstrakurikuler">
      <KeyValueList items={EXTRACURRICULARS} />
      <p className="mt-5 hidden md:block">
        <a href={EXTRACURRICULAR_LIST_URL} className={buttonVariants()}>
          Daftar kegiatan lengkap
        </a>
      </p>
    </Section>
  )
}
