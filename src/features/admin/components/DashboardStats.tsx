import type { DashboardData } from '../api'
import { StatCard } from './StatCard'

const PLACEHOLDER = '[n]'

export function DashboardStats({ data }: { data: DashboardData | undefined }) {
  const show = (pick: (data: DashboardData) => number) => (data ? String(pick(data)) : PLACEHOLDER)

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
      <StatCard
        label={
          <>
            <span className="lg:hidden">Menunggu verifikasi</span>
            <span className="hidden lg:inline">Pendaftar menunggu verifikasi</span>
          </>
        }
        value={show((d) => d.pendingRegistrations)}
      />
      <StatCard label="Berita terbit" value={show((d) => d.publishedNews)} />
      <StatCard label="Agenda mendatang" value={show((d) => d.upcomingAgenda)} />
      <StatCard label="Pesan masuk" value={show((d) => d.newMessages)} />
    </div>
  )
}
