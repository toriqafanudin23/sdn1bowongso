import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { TextField } from '@/components/ui/TextField'
import { AdmissionUnavailableError, fetchStatus, type StatusResult } from '../api'
import { ADMISSION_SECTIONS_NOTE } from '../content'

type Outcome =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'found'; result: StatusResult }
  | { kind: 'not-found' }
  | { kind: 'unavailable' }

export function StatusSection() {
  const [number, setNumber] = useState('')
  const [error, setError] = useState<string>()
  const [outcome, setOutcome] = useState<Outcome>({ kind: 'idle' })

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!number.trim()) {
      setError('Isi nomor pendaftaran dulu.')
      return
    }

    setError(undefined)
    setOutcome({ kind: 'loading' })
    try {
      const result = await fetchStatus(number)
      setOutcome(result ? { kind: 'found', result } : { kind: 'not-found' })
    } catch (caught) {
      if (!(caught instanceof AdmissionUnavailableError)) throw caught
      setOutcome({ kind: 'unavailable' })
    }
  }

  return (
    <Section title="Cek status" id="cek-status">
      <form noValidate onSubmit={handleSubmit} className="max-w-md">
        <TextField
          label="Nomor pendaftaran"
          value={number}
          error={error}
          autoComplete="off"
          onChange={(event) => {
            setNumber(event.target.value)
            if (error) setError(undefined)
          }}
        />
        <Button type="submit" variant="dark" disabled={outcome.kind === 'loading'} className="mt-4">
          {outcome.kind === 'loading' ? 'Memeriksa…' : 'Cek status'}
        </Button>
      </form>

      <div aria-live="polite" className="mt-4">
        {outcome.kind === 'found' && (
          <p className="font-bold">
            Status: {outcome.result.status}
            {outcome.result.note && <span className="block font-normal text-muted">{outcome.result.note}</span>}
          </p>
        )}
        {outcome.kind === 'not-found' && (
          <p>Nomor tidak ditemukan. Periksa lagi nomor pada bukti pendaftaran Anda.</p>
        )}
        {outcome.kind === 'unavailable' && (
          <p>Cek status online belum aktif. Silakan hubungi panitia lewat WhatsApp.</p>
        )}
      </div>

      <p className="mt-5 text-muted">
        {ADMISSION_SECTIONS_NOTE.support} {ADMISSION_SECTIONS_NOTE.hours}
      </p>
    </Section>
  )
}
