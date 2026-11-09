import { useState, type FormEvent } from 'react'
import { Button } from '@/components/ui/Button'
import { Section } from '@/components/ui/Section'
import { TextField } from '@/components/ui/TextField'
import { ServiceUnavailableError } from '@/lib/errors'
import { isEmail, isIndonesianPhone } from '@/lib/validators'
import { sendMessage } from '../api'

type FieldName = 'name' | 'reply' | 'message'
type Values = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>
type Outcome = 'idle' | 'sending' | 'sent' | 'unavailable'

const EMPTY: Values = { name: '', reply: '', message: '' }

function validate(name: FieldName, value: string): string | undefined {
  const text = value.trim()
  if (!text) {
    return { name: 'Isi nama Anda dulu.', reply: 'Isi email atau nomor WhatsApp dulu.', message: 'Tulis pesan Anda dulu.' }[name]
  }
  if (name === 'reply' && !isEmail(text) && !isIndonesianPhone(text)) {
    return 'Isi email atau nomor WhatsApp yang benar. Contoh: nama@email.com atau 081234567890.'
  }
  return undefined
}

export function MessageSection() {
  const [values, setValues] = useState<Values>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [outcome, setOutcome] = useState<Outcome>('idle')

  const change = (name: FieldName, value: string) => {
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name] && !validate(name, value)) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const blur = (name: FieldName) => setErrors((current) => ({ ...current, [name]: validate(name, values[name]) }))

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const found: Errors = {}
    for (const name of Object.keys(values) as FieldName[]) found[name] = validate(name, values[name])
    setErrors(found)
    if (Object.values(found).some(Boolean)) {
      event.currentTarget.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus()
      return
    }

    setOutcome('sending')
    try {
      await sendMessage({ name: values.name.trim(), reply: values.reply.trim(), message: values.message.trim() })
      setValues(EMPTY)
      setOutcome('sent')
    } catch (error) {
      if (!(error instanceof ServiceUnavailableError)) throw error
      setOutcome('unavailable')
    }
  }

  return (
    <Section title="Kirim pesan" tone="dark" id="pesan">
      <form noValidate onSubmit={handleSubmit} className="bg-white p-5 text-ink md:max-w-xl md:p-8">
        <h3 className="mb-5 text-2xl">Tulis pesan untuk sekolah</h3>

        <div className="grid gap-5">
          <TextField
            label="Nama lengkap"
            autoComplete="name"
            value={values.name}
            error={errors.name}
            onChange={(event) => change('name', event.target.value)}
            onBlur={() => blur('name')}
          />
          <TextField
            label="Email atau nomor WhatsApp"
            autoComplete="email"
            hint="Dipakai sekolah untuk membalas pesan Anda."
            value={values.reply}
            error={errors.reply}
            onChange={(event) => change('reply', event.target.value)}
            onBlur={() => blur('reply')}
          />
          <TextField
            multiline
            label="Pesan"
            rows={5}
            value={values.message}
            error={errors.message}
            onChange={(event) => change('message', event.target.value)}
            onBlur={() => blur('message')}
          />
        </div>

        <div aria-live="polite">
          {outcome === 'sent' && (
            <p className="mt-5 border-l-4 border-brand bg-surface p-3.5 text-[15px]">
              Pesan terkirim. Sekolah akan membalas lewat kontak yang Anda isi.
            </p>
          )}
          {outcome === 'unavailable' && (
            <p className="mt-5 border-l-4 border-danger bg-surface p-3.5 text-[15px]">
              Pengiriman pesan online belum aktif, jadi pesan belum terkirim. Silakan hubungi sekolah lewat
              kontak di bagian Hubungi kami.
            </p>
          )}
        </div>

        <Button type="submit" disabled={outcome === 'sending'} className="mt-5">
          {outcome === 'sending' ? 'Mengirim…' : 'Kirim pesan'}
        </Button>
      </form>
    </Section>
  )
}
