import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { ROUTES } from '@/config/navigation'
import { PPDB, SITE } from '@/config/site'
import { AdmissionHero } from '@/features/admission/components/AdmissionHero'
import { DocumentsSection } from '@/features/admission/components/DocumentsSection'
import { FlowSection } from '@/features/admission/components/FlowSection'
import { RegistrationFormSection } from '@/features/admission/components/RegistrationFormSection'
import { StatusSection } from '@/features/admission/components/StatusSection'
import { TracksSection } from '@/features/admission/components/TracksSection'

export default function AdmissionPage() {
  const { pathname } = useLocation()

  // /ppdb/status memakai halaman yang sama dan langsung membuka bagian "Cek status".
  useEffect(() => {
    if (pathname === ROUTES.admissionStatus) {
      document.getElementById('cek-status')?.scrollIntoView()
    }
  }, [pathname])

  return (
    <>
      <title>{`PPDB ${PPDB.year} | ${SITE.name}`}</title>
      <AdmissionHero />
      <FlowSection />
      <TracksSection />
      <DocumentsSection />
      <RegistrationFormSection />
      <StatusSection />
    </>
  )
}
