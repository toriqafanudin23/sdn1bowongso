import { NavLink } from 'react-router'
import { ADMIN_NAV_ITEMS, ROUTES } from '@/config/navigation'
import { cn } from '@/lib/cn'

interface AdminNavProps {
  /** Dipanggil saat tautan diklik (menutup menu ponsel). */
  onNavigate?: () => void
  className?: string
}

/** Daftar menu panel admin; dipakai sidebar desktop dan menu ponsel. */
export function AdminNav({ onNavigate, className }: AdminNavProps) {
  return (
    <nav aria-label="Menu panel admin" className={className}>
      <ul>
        {ADMIN_NAV_ITEMS.map(({ label, to }) => (
          <li key={to}>
            <NavLink
              to={to}
              end={to === ROUTES.adminDashboard}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  'block px-7 py-3 no-underline transition-colors motion-reduce:transition-none',
                  isActive ? 'bg-accent font-bold text-ink' : 'text-white hover:bg-white/10',
                )
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
