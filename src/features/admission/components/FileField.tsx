import { useId } from 'react'
import { cn } from '@/lib/cn'

interface FileFieldProps {
  label: string
  required: boolean
  file: File | undefined
  error?: string
  onChange: (file: File | undefined) => void
}

/** Pilih berkas dengan label terlihat, nama berkas terpilih, dan pesan galat. */
export function FileField({ label, required, file, error, onChange }: FileFieldProps) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-bold">
        {label}
        {!required && <span className="font-normal text-muted"> (opsional)</span>}
      </label>
      <input
        id={id}
        type="file"
        accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.files?.[0])}
        className={cn(
          'block w-full border-2 bg-white text-[15px] file:mr-3 file:h-11 file:cursor-pointer file:border-0 file:bg-ink file:px-4 file:font-bold file:text-white hover:file:bg-brand',
          error ? 'border-danger' : 'border-ink',
        )}
      />
      {file && !error && <p className="mt-1.5 truncate text-sm text-muted">{file.name}</p>}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-bold text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
