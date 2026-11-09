import { useEffect, useState } from 'react'
import { fetchDashboard, type DashboardData } from '@/features/admin/api'
import { ActivityPanel } from '@/features/admin/components/ActivityPanel'
import { AdmissionPanel } from '@/features/admin/components/AdmissionPanel'
import { DashboardStats } from '@/features/admin/components/DashboardStats'
import { FollowUpPanel } from '@/features/admin/components/FollowUpPanel'
import { ShortcutsPanel } from '@/features/admin/components/ShortcutsPanel'
import { ServiceUnavailableError } from '@/lib/errors'

type Load = { kind: 'loading' } | { kind: 'ready'; data: DashboardData } | { kind: 'unavailable' }

export default function AdminDashboardPage() {
  const [load, setLoad] = useState<Load>({ kind: 'loading' })

  useEffect(() => {
    let cancelled = false
    fetchDashboard()
      .then((data) => !cancelled && setLoad({ kind: 'ready', data }))
      .catch((error) => {
        if (!(error instanceof ServiceUnavailableError)) throw error
        if (!cancelled) setLoad({ kind: 'unavailable' })
      })
    return () => {
      cancelled = true
    }
  }, [])

  const data = load.kind === 'ready' ? load.data : undefined

  return (
    <>
      <h1 className="mb-5 text-[32px] leading-[1.2] lg:mb-6 lg:text-[40px]">Ringkasan</h1>

      {load.kind === 'unavailable' && (
        <p role="status" className="mb-5 border-l-4 border-brand bg-surface p-3.5 text-[15px]">
          Data dashboard belum terhubung ke server, jadi angka belum tampil.
        </p>
      )}

      <div className="grid gap-3 lg:gap-5">
        <DashboardStats data={data} />

        <div className="grid gap-3 lg:grid-cols-[1.75fr_1fr] lg:gap-5">
          <FollowUpPanel data={data} />
          <AdmissionPanel
            data={data}
            onChanged={(open) => data && setLoad({ kind: 'ready', data: { ...data, admission: { open } } })}
          />
          <ActivityPanel data={data} />
          <ShortcutsPanel />
        </div>
      </div>
    </>
  )
}
