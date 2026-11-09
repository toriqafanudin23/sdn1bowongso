import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { PPDB } from '@/config/site'
import { ServiceUnavailableError } from '@/lib/errors'
import { setAdmissionOpen, type DashboardData } from '../api'
import { ConfirmDialog } from './ConfirmDialog'
import { Panel } from './Panel'

interface AdmissionPanelProps {
  data: DashboardData | undefined
  /** Dipanggil setelah status PPDB berhasil diubah di server. */
  onChanged: (open: boolean) => void
}

export function AdmissionPanel({ data, onChanged }: AdmissionPanelProps) {
  const [confirming, setConfirming] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string>()

  const isOpen = data?.admission.open
  const nextOpen = !isOpen
  const verb = nextOpen ? 'Buka' : 'Tutup'

  const handleConfirm = async () => {
    setPending(true)
    setError(undefined)
    try {
      await setAdmissionOpen(nextOpen)
      onChanged(nextOpen)
      setConfirming(false)
    } catch (caught) {
      if (!(caught instanceof ServiceUnavailableError)) throw caught
      setError('Status pendaftaran belum berubah karena server tidak bisa dihubungi. Coba lagi nanti.')
    } finally {
      setPending(false)
    }
  }

  return (
    <Panel title={`PPDB ${PPDB.year}`}>
      <p>
        <strong>{data ? (isOpen ? 'Dibuka' : 'Ditutup') : '[Status]'}</strong>
        <span className="mt-1 block text-muted">{PPDB.period}</span>
      </p>

      <Button
        variant="dark"
        disabled={!data}
        onClick={() => {
          setError(undefined)
          setConfirming(true)
        }}
        className="mt-5"
      >
        {verb} pendaftaran
      </Button>

      <ConfirmDialog
        open={confirming}
        title={`${verb} pendaftaran PPDB ${PPDB.year}?`}
        description={
          nextOpen
            ? 'Formulir pendaftaran di website akan bisa diisi kembali.'
            : 'Formulir pendaftaran di website tidak bisa diisi lagi sampai Anda membukanya kembali. Data pendaftar yang sudah masuk tetap aman.'
        }
        confirmLabel={`${verb} pendaftaran`}
        pending={pending}
        error={error}
        onConfirm={handleConfirm}
        onCancel={() => setConfirming(false)}
      />
    </Panel>
  )
}
