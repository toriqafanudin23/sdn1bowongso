import { PageHero } from '@/components/layout/PageHero'
import { SectionNav } from '@/components/ui/SectionNav'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'
import { AgendaSection } from '@/features/information/components/AgendaSection'
import { AnnouncementsSection } from '@/features/information/components/AnnouncementsSection'
import { DownloadsSection } from '@/features/information/components/DownloadsSection'
import { GallerySection } from '@/features/information/components/GallerySection'
import { NewsSection } from '@/features/information/components/NewsSection'
import { INFORMATION_SECTIONS } from '@/features/information/content'

export default function InformationPage() {
  return (
    <>
      <title>{`Informasi | ${SITE.name}`}</title>
      <PageHero
        breadcrumb={[{ label: 'Beranda', to: ROUTES.home }, { label: 'Informasi' }]}
        title="Informasi"
        description="Berita, pengumuman, agenda, galeri, dan berkas unduhan dari sekolah."
      />
      <SectionNav sections={INFORMATION_SECTIONS} label="Bagian informasi" />
      <NewsSection />
      <AnnouncementsSection />
      <AgendaSection />
      <GallerySection />
      <DownloadsSection />
    </>
  )
}
