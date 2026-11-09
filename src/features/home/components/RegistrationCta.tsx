import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/config/navigation'
import { PPDB } from '@/config/site'

/** Banner kuning ajakan mendaftar PPDB. */
export function RegistrationCta() {
  return (
    <section className="bg-accent text-ink">
      <Container className="flex flex-col gap-5 py-10 md:flex-row md:items-center md:justify-between md:gap-8 md:py-16">
        <h2 className="text-[30px] leading-[1.15] md:max-w-175 md:text-[44px] md:leading-[1.12]">
          Pendaftaran {PPDB.year} dibuka {PPDB.period}.
        </h2>
        <Button to={ROUTES.admission} variant="dark" withArrow className="md:shrink-0">
          Mulai daftar
        </Button>
      </Container>
    </section>
  )
}
