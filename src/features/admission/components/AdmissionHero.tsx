import { PageHero } from '@/components/layout/PageHero'
import { buttonVariants } from '@/components/ui/Button'
import { ROUTES } from '@/config/navigation'
import { PPDB, SITE } from '@/config/site'

/** Hero PPDB: PageHero standar ditambah status pendaftaran dan dua tombol aksi. */
export function AdmissionHero() {
  return (
    <PageHero
      breadcrumb={[{ label: 'Beranda', to: ROUTES.home }, { label: 'PPDB' }]}
      title={`PPDB ${PPDB.year}`}
      description={`Pendaftaran peserta didik baru ${SITE.name} dilakukan online, dari rumah.`}
    >
      <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 md:mt-6">
        <span className="bg-accent px-2.5 py-0.5 text-[15px] font-bold text-ink">Dibuka</span>
        <span className="text-[15px] md:text-base">{PPDB.period}</span>
      </p>
      <div className="mt-6 grid gap-3 md:flex">
        <a href="#formulir" className={buttonVariants()}>
          Mulai pendaftaran
        </a>
        <a href="#cek-status" className={buttonVariants({ variant: 'outline' })}>
          Cek status
        </a>
      </div>
    </PageHero>
  )
}
