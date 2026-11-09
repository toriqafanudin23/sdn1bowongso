import type { DashboardData } from '../api'
import { Panel } from './Panel'

const PLACEHOLDER_ROWS = Array.from({ length: 3 }, () => ({
  admin: '[Nama admin]',
  action: '[Aksi, mis. menerbitkan berita]',
}))

export function ActivityPanel({ data }: { data: DashboardData | undefined }) {
  const rows = data ? data.activity : PLACEHOLDER_ROWS

  return (
    <Panel title="Aktivitas terbaru">
      {rows.length === 0 ? (
        <p className="border-t border-line pt-4 text-muted">Belum ada aktivitas.</p>
      ) : (
        <ul>
          {rows.map(({ admin, action }, index) => (
            <li
              key={index}
              className="flex flex-col gap-0.5 border-t border-line py-3.5 lg:flex-row lg:justify-between lg:gap-6"
            >
              <span className="text-muted">{admin}</span>
              <span className="font-bold lg:text-right">{action}</span>
            </li>
          ))}
        </ul>
      )}
    </Panel>
  )
}
