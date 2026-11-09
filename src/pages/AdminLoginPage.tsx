import { Link } from 'react-router'
import { LogoMark } from '@/components/ui/Logo'
import { ROUTES } from '@/config/navigation'
import { SITE } from '@/config/site'
import { AdminLoginForm } from '@/features/admin/components/AdminLoginForm'

/**
 * Halaman mandiri (tanpa navbar dan footer publik).
 * Ponsel: panel biru ringkas di atas, formulir di bawah. Desktop: layar terbagi dua.
 */
export default function AdminLoginPage() {
  return (
    <div className="min-h-dvh md:grid md:grid-cols-2">
      <title>{`Masuk admin | ${SITE.name}`}</title>
      <meta name="robots" content="noindex" />

      <section className="bg-grid px-5 pt-5 pb-10 text-white md:flex md:flex-col md:px-14 md:py-14">
        <Link to={ROUTES.home} className="flex items-center gap-3 no-underline">
          <LogoMark tone="onDark" className="md:hidden" />
          <span className="font-display text-[19px] md:text-[26px]">{SITE.name}</span>
        </Link>

        <div className="mt-10 md:my-auto md:max-w-lg">
          <h2 className="text-[34px] leading-[1.15] md:text-5xl md:leading-[1.15] lg:text-[56px]">
            Kelola website sekolah dari satu tempat.
          </h2>
          <p className="mt-4 hidden text-xl text-tint md:block">
            Tulis berita, atur agenda dan galeri, serta periksa pendaftar PPDB.
          </p>
        </div>

        <p className="hidden text-sm text-tint md:block">Khusus admin dan operator sekolah.</p>
      </section>

      <main className="px-5 py-8 md:flex md:items-center md:px-14 md:py-14">
        <div className="w-full md:mx-auto md:max-w-100">
          <AdminLoginForm />
        </div>
      </main>
    </div>
  )
}
