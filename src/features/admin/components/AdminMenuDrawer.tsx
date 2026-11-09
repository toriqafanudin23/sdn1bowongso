import { X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { cn } from '@/lib/cn'
import { AdminNav } from './AdminNav'

interface AdminMenuDrawerProps {
  open: boolean
  onClose: (restoreFocus?: boolean) => void
  onSignOut: () => void
}

/** Menu layar penuh panel admin untuk ponsel dan tablet (di bawah breakpoint `lg`). */
export function AdminMenuDrawer({ open, onClose, onSignOut }: AdminMenuDrawerProps) {
  const closeRef = useRef<HTMLButtonElement>(null)

  useLockBodyScroll(open)
  useEscapeKey(open, () => onClose(true))
  useEffect(() => {
    if (open) closeRef.current?.focus()
  }, [open])

  return (
    <div
      id="admin-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu panel admin"
      inert={!open}
      className={cn(
        'fixed inset-0 z-50 flex h-dvh flex-col overflow-y-auto bg-ink text-white duration-200 motion-reduce:transition-none lg:hidden',
        open ? 'visible opacity-100 transition-opacity' : 'invisible opacity-0 transition-[opacity,visibility]',
      )}
    >
      <div className="flex h-14 shrink-0 items-center justify-between px-5">
        <span className="font-display text-xl">Panel admin</span>
        <button
          ref={closeRef}
          type="button"
          aria-label="Tutup menu"
          onClick={() => onClose(true)}
          className="-mr-3 grid size-11 place-items-center"
        >
          <X aria-hidden="true" className="size-6" strokeWidth={2.4} />
        </button>
      </div>

      <AdminNav onNavigate={() => onClose()} className="flex-1 py-2 text-lg" />

      <div className="border-t border-white/30 p-5">
        <button type="button" onClick={onSignOut} className="font-bold underline underline-offset-4">
          Keluar
        </button>
      </div>
    </div>
  )
}
