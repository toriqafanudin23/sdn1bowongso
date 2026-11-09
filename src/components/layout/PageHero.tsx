import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'

export interface BreadcrumbItem {
  label: string
  /** Kosongkan untuk halaman yang sedang dibuka (item terakhir). */
  to?: string
}

interface PageHeroProps {
  breadcrumb: readonly BreadcrumbItem[]
  title: string
  description: string
  /** Konten tambahan di bawah deskripsi (mis. status dan tombol aksi PPDB). */
  children?: ReactNode
}

/**
 * Kepala halaman dalam (Profil, Akademik, dst.): latar biru berkisi, jejak halaman,
 * judul besar, dan deskripsi singkat. Seperti Hero beranda, navbar menimpa bagian
 * atasnya sehingga padding atas memakai `--header-h`.
 */
export function PageHero({ breadcrumb, title, description, children }: PageHeroProps) {
  return (
    <section className="bg-grid pt-(--header-h) text-white">
      <Container className="pt-2 pb-10 md:pt-7 md:pb-18">
        <nav aria-label="Jejak halaman" className="text-sm font-semibold md:text-[15px]">
          <ol className="flex flex-wrap gap-x-2">
            {breadcrumb.map(({ label, to }, index) => (
              <li key={label} className="flex gap-2">
                {index > 0 && <span aria-hidden="true">/</span>}
                {to ? (
                  <Link to={to} className="hover:underline">
                    {label}
                  </Link>
                ) : (
                  <span aria-current="page">{label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="mt-10 text-[40px] leading-[1.15] md:mt-18 md:text-[52px] lg:text-[64px] lg:leading-[1.12]">
          {title}
        </h1>
        <p className="mt-3.5 max-w-[620px] text-[17px] text-tint md:mt-5 md:text-xl">
          {description}
        </p>
        {children}
      </Container>
    </section>
  )
}
