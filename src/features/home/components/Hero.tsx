import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Photo } from '@/components/ui/Photo'
import { ROUTES } from '@/config/navigation'
import { PPDB, SITE } from '@/config/site'
import { HERO_PHOTO } from '../content'

/**
 * Hero berlatar biru berkisi. Navbar menimpa bagian atas section ini,
 * sehingga padding atas memakai `--header-h`.
 * Ponsel: teks lalu foto. Desktop: teks di kiri, foto menempel ke dasar section di kanan.
 */
export function Hero() {
  return (
    <section className="bg-grid pt-(--header-h) text-white">
      <Container className="pt-10 lg:grid lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-12 lg:pt-6">
        <div className="lg:pb-18">
          <h1 className="text-[42px] leading-[1.15] md:text-[56px] lg:text-[68px] lg:leading-[1.12]">
            {SITE.tagline}
          </h1>
          <p className="mt-4 mb-6 text-[17px] text-tint lg:mt-6 lg:mb-8 lg:max-w-[520px] lg:text-xl">
            {SITE.description}
          </p>

          <div className="grid gap-3 lg:flex">
            <Button to={ROUTES.admission} withArrow>
              Daftar PPDB {PPDB.year}
            </Button>
            <Button to={ROUTES.profile} variant="outline">
              Lihat profil sekolah
            </Button>
          </div>
        </div>

        <div className="mt-8 h-70 bg-accent lg:mt-0 lg:h-130">
          <Photo
            priority
            src={HERO_PHOTO.src}
            sizes="(min-width: 1024px) 480px, (min-width: 768px) calc(100vw - 80px), calc(100vw - 40px)"
            alt={HERO_PHOTO.alt}
            fallbackLabel={HERO_PHOTO.fallbackLabel}
            className="size-full object-[center_30%]"
          />
        </div>
      </Container>
    </section>
  )
}
