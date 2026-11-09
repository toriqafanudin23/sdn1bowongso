import { ArrowUpRight, Megaphone } from 'lucide-react'
import { Link } from 'react-router'
import { ROUTES } from '@/config/navigation'
import { PPDB } from '@/config/site'
import { Container } from '@/components/ui/Container'

/** Pita kuning di paling atas: info periode PPDB dan pintasan cek status. */
export function AnnouncementBar() {
  return (
    <div className="bg-accent text-[13px] font-semibold text-ink md:text-sm">
      <Container className="flex items-center justify-between gap-4 py-[9px] md:py-2.5">
        <p className="flex items-center gap-2">
          <Megaphone aria-hidden="true" className="size-4 shrink-0" />
          <span className="md:hidden">PPDB dibuka {PPDB.period}</span>
          <span className="hidden md:inline">
            PPDB {PPDB.year} dibuka {PPDB.period}
          </span>
        </p>
        <Link
          to={ROUTES.admissionStatus}
          className="hidden items-center gap-1 underline underline-offset-4 hover:no-underline md:inline-flex"
        >
          Cek status pendaftaran
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </Link>
      </Container>
    </div>
  )
}
