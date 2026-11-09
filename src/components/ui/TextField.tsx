import { Eye, EyeOff } from 'lucide-react'
import { useId, useState, type ComponentProps } from 'react'
import { cn } from '@/lib/cn'

interface TextFieldProps extends Omit<ComponentProps<'input'>, 'id'> {
  label: string
  /** Petunjuk format di bawah kolom. */
  hint?: string
  /** Pesan galat; bila ada, kolom ditandai tidak valid. */
  error?: string
  /** Pakai `<textarea>` untuk isian panjang (mis. alamat). */
  multiline?: boolean
  /** Tinggi `<textarea>` dalam baris (hanya untuk `multiline`). */
  rows?: number
}

const CONTROL =
  'block w-full border-2 bg-white px-3.5 text-base text-ink placeholder:text-muted/70 md:text-[17px]'

/** Kolom isian dengan label selalu terlihat, petunjuk, dan pesan galat yang terhubung ke pembaca layar. */
export function TextField({ label, hint, error, multiline = false, rows = 3, className, ...rest }: TextFieldProps) {
  const id = useId()
  const hintId = `${id}-hint`
  const errorId = `${id}-error`
  const describedBy = [hint && hintId, error && errorId].filter(Boolean).join(' ') || undefined
  const controlClass = cn(CONTROL, error ? 'border-danger' : 'border-ink', className)
  // Kolom kata sandi otomatis mendapat tombol mata untuk menampilkan atau menyembunyikan isinya.
  const isPassword = !multiline && rest.type === 'password'
  const [isRevealed, setIsRevealed] = useState(false)
  const type = isPassword && isRevealed ? 'text' : rest.type

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[15px] font-bold">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={rows}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(controlClass, 'py-2.5')}
          {...(rest as ComponentProps<'textarea'>)}
        />
      ) : (
        <div className="relative">
          <input
            id={id}
            aria-invalid={error ? true : undefined}
            aria-describedby={describedBy}
            className={cn(controlClass, 'h-12', isPassword && 'pr-12')}
            {...rest}
            type={type}
          />
          {isPassword && (
            <button
              type="button"
              aria-label={isRevealed ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              aria-pressed={isRevealed}
              onClick={() => setIsRevealed((revealed) => !revealed)}
              className="absolute inset-y-0 right-0 grid w-12 place-items-center text-ink hover:text-brand"
            >
              {isRevealed ? (
                <EyeOff aria-hidden="true" className="size-5" />
              ) : (
                <Eye aria-hidden="true" className="size-5" />
              )}
            </button>
          )}
        </div>
      )}
      {hint && (
        <p id={hintId} className="mt-1.5 text-sm text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-bold text-danger">
          {error}
        </p>
      )}
    </div>
  )
}
