import { Menu } from 'lucide-react'
import { useRef, useState } from 'react'
import { NavLink } from 'react-router'
import { ADMIN_TAB_ITEMS, ROUTES } from '@/config/navigation'
import { cn } from '@/lib/cn'
import { AdminMenuDrawer } from './AdminMenuDrawer'

interface AdminMobileChromeProps {
  onSignOut: () => void
}

const TAB = 'flex h-14 items-center justify-center text-[15px] font-bold no-underline'

/** Bilah atas dan tab bawah panel admin untuk ponsel dan tablet. */
export function AdminMobileChrome({ onSignOut }: AdminMobileChromeProps) {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const close = (restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) toggleRef.current?.focus()
  }

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between bg-ink px-5 text-white">
        <span className="font-display text-xl">Panel admin</span>
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="admin-menu"
          onClick={() => setOpen(true)}
          className="-mr-3 grid size-11 place-items-center"
        >
          <Menu aria-hidden="true" className="size-[26px]" strokeWidth={2.4} />
        </button>
      </header>

      <nav aria-label="Pintasan panel admin" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-4 bg-ink text-white">
        {ADMIN_TAB_ITEMS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === ROUTES.adminDashboard}
            className={({ isActive }) => cn(TAB, isActive && 'bg-accent text-ink')}
          >
            {label}
          </NavLink>
        ))}
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls="admin-menu"
          onClick={() => setOpen(true)}
          className={TAB}
        >
          Menu
        </button>
      </nav>

      <AdminMenuDrawer open={open} onClose={close} onSignOut={onSignOut} />
    </div>
  )
}
