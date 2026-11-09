import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'

/** Penampung sementara untuk halaman yang belum dibangun (Profil, Akademik, dst.). */
export default function ComingSoonPage() {
  return (
    <section className="bg-grid pt-(--header-h) text-white">
      <title>{`Segera hadir | ${SITE.name}`}</title>
      <Container className="py-16 md:py-24">
        <p className="font-bold">Segera hadir</p>
        <h1 className="mt-4 text-[42px] leading-[1.15] md:text-6xl">Halaman ini sedang disiapkan.</h1>
        <p className="mt-4 mb-8 max-w-xl text-lg text-tint">
          Kami sedang menyusun isinya. Sementara itu, silakan kembali ke beranda.
        </p>
        <Button to={ROUTES.home} withArrow>
          Kembali ke beranda
        </Button>
      </Container>
    </section>
  )
}
