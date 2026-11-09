import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'

interface ConfirmDialogProps {
  open: boolean
  title: string
  description: string
  /** Sebutkan aksinya, mis. "Tutup pendaftaran" (bukan "OK"). */
  confirmLabel: string
  pending?: boolean
  error?: string
  onConfirm: () => void
  onCancel: () => void
}

/** Konfirmasi aksi yang berdampak besar. Memakai `<dialog>` bawaan: fokus terkunci dan Esc menutup. */
export function ConfirmDialog({
  open,
  title,
  description,
  confirmLabel,
  pending,
  error,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      aria-labelledby="confirm-title"
      onCancel={(event) => {
        event.preventDefault()
        onCancel()
      }}
      className="m-auto w-[calc(100%-2.5rem)] max-w-md border-2 border-ink bg-white p-6 text-ink backdrop:bg-ink/60"
    >
      <h2 id="confirm-title" className="text-2xl">
        {title}
      </h2>
      <p className="mt-3 text-muted">{description}</p>
      {error && (
        <p role="alert" className="mt-4 border-l-4 border-danger bg-surface p-3.5 text-[15px]">
          {error}
        </p>
      )}
      <div className="mt-6 grid gap-3 md:flex">
        <Button variant="dark" onClick={onConfirm} disabled={pending}>
          {pending ? 'Memproses…' : confirmLabel}
        </Button>
        <Button variant="outlineDark" onClick={onCancel}>
          Batal
        </Button>
      </div>
    </dialog>
  )
}
