import { Link } from 'react-router'
import { ADMIN_ROUTES } from '@/config/navigation'
import type { DashboardData } from '../api'
import { Panel } from './Panel'

interface FollowUp {
  label: string
  action: string
  to: string
  count: (data: DashboardData) => number
}

const FOLLOW_UPS: readonly FollowUp[] = [
  {
    label: 'Berkas PPDB menunggu verifikasi',
    action: 'Periksa',
    to: ADMIN_ROUTES.admission,
    count: (d) => d.followUps.pendingFiles,
  },
  {
    label: 'Berita masih berstatus draf',
    action: 'Lanjutkan',
    to: ADMIN_ROUTES.news,
    count: (d) => d.followUps.draftNews,
  },
  {
    label: 'Agenda belum bertanggal',
    action: 'Lengkapi',
    to: ADMIN_ROUTES.agenda,
    count: (d) => d.followUps.undatedAgenda,
  },
]

/** Daftar pekerjaan tertunda. Dengan data, baris yang sudah beres disembunyikan. */
export function FollowUpPanel({ data }: { data: DashboardData | undefined }) {
  const rows = data ? FOLLOW_UPS.filter((item) => item.count(data) > 0) : FOLLOW_UPS

  return (
    <Panel title="Perlu ditindaklanjuti">
      {rows.length === 0 ? (
        <p className="border-t border-line pt-4 text-muted">Semua sudah beres. Tidak ada yang perlu ditindaklanjuti.</p>
      ) : (
        <ul>
          {rows.map(({ label, action, to }) => (
            <li key={label} className="flex items-center justify-between gap-4 border-t border-line py-4">
              <span>{label}</span>
              <Link to={to} className="font-bold underline underline-offset-4 hover:no-underline">
                {action}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  )
}
