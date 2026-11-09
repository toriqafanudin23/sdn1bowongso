import { Button } from '@/components/ui/Button'
import { ROUTES } from '@/config/navigation'

/** Penampung untuk menu panel admin yang belum dibangun (Berita, PPDB, dst.), tetap di dalam kerangka panel. */
export default function AdminComingSoonPage() {
  return (
    <div className="max-w-xl">
      <h1 className="mb-3 text-[32px] leading-[1.2] lg:text-[40px]">Segera hadir</h1>
      <p className="mb-6 text-muted">Halaman ini sedang disiapkan.</p>
      <Button to={ROUTES.adminDashboard} variant="dark" withArrow>
        Kembali ke dashboard
      </Button>
    </div>
  )
}
