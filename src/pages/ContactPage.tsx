import { PageHero } from '@/components/layout/PageHero'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'
import { ContactInfoSection } from '@/features/contact/components/ContactInfoSection'
import { LocationSection } from '@/features/contact/components/LocationSection'
import { MessageSection } from '@/features/contact/components/MessageSection'

export default function ContactPage() {
  return (
    <>
      <title>{`Kontak | ${SITE.name}`}</title>
      <PageHero
        breadcrumb={[{ label: 'Beranda', to: ROUTES.home }, { label: 'Kontak' }]}
        title="Kontak"
        description={`Alamat, jam layanan, dan cara menghubungi ${SITE.name}.`}
      />
      <ContactInfoSection />
      <LocationSection />
      <MessageSection />
    </>
  )
}
