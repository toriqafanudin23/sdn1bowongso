import { PageHero } from '@/components/layout/PageHero'
import { SectionNav } from '@/components/ui/SectionNav'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'
import { CalendarSection } from '@/features/academic/components/CalendarSection'
import { CurriculumSection } from '@/features/academic/components/CurriculumSection'
import { ExtracurricularSection } from '@/features/academic/components/ExtracurricularSection'
import { FlagshipProgramsSection } from '@/features/academic/components/FlagshipProgramsSection'
import { ScheduleSection } from '@/features/academic/components/ScheduleSection'
import { ACADEMIC_SECTIONS } from '@/features/academic/content'

export default function AcademicPage() {
  return (
    <>
      <title>{`Akademik | ${SITE.name}`}</title>
      <PageHero
        breadcrumb={[{ label: 'Beranda', to: ROUTES.home }, { label: 'Akademik' }]}
        title="Akademik"
        description={`Kurikulum, program unggulan, kegiatan di luar kelas, dan kalender belajar ${SITE.name}.`}
      />
      <SectionNav sections={ACADEMIC_SECTIONS} label="Bagian akademik" />
      <CurriculumSection />
      <FlagshipProgramsSection />
      <ExtracurricularSection />
      <CalendarSection />
      <ScheduleSection />
    </>
  )
}
