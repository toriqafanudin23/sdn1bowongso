import { Menu } from 'lucide-react'
import { useCallback, useRef, useState } from 'react'
import { NavLink } from 'react-router'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NAV_ITEMS, ROUTES } from '@/config/navigation'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useStickyHeader } from '@/hooks/useStickyHeader'
import { cn } from '@/lib/cn'
import { MobileMenu } from './MobileMenu'

/**
 * Navbar `sticky`. Di posisi awal transparan (menimpa latar biru hero, sehingga
 * konten pertama wajib memberi ruang `pt-(--header-h)`); setelah menempel di
 * atas layar berubah menjadi putih dengan bayangan dan menampilkan tombol PPDB.
 */
export function Navbar() {
  const { sentinelRef, isStuck } = useStickyHeader()
  const isDesktop = useMediaQuery('(min-width: 64rem)')
  const [menuRequested, setMenuRequested] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  // Menu otomatis dianggap tertutup begitu layar melebar ke desktop.
  const menuOpen = menuRequested && !isDesktop

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuRequested(false)
    if (restoreFocus) toggleRef.current?.focus()
  }, [])

  useLockBodyScroll(menuOpen)
  useEscapeKey(menuOpen, useCallback(() => closeMenu(true), [closeMenu]))

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="pointer-events-none -mb-px h-px" />

      <header
        className={cn(
          'sticky top-0 z-40 -mb-(--header-h) transition-[background-color,color,box-shadow] duration-200 motion-reduce:transition-none',
          isStuck ? 'bg-white text-ink shadow-nav' : 'bg-transparent text-white',
        )}
      >
        <Container className="flex h-(--header-h) items-center justify-between gap-3">
          <Logo tone={isStuck ? 'onLight' : 'onDark'} />

          <nav aria-label="Menu utama" className="hidden items-center gap-8 lg:flex">
            {NAV_ITEMS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === ROUTES.home}
                className={({ isActive }) =>
                  cn(
                    'border-b-[3px] py-1.5 font-semibold no-underline transition-colors motion-reduce:transition-none',
                    isActive
                      ? isStuck
                        ? 'border-brand'
                        : 'border-accent'
                      : 'border-transparent hover:border-current/40',
                  )
                }
              >
                {label}
              </NavLink>
            ))}

            <div
              inert={!isStuck}
              className={cn(
                'whitespace-nowrap transition-[max-width,margin,opacity] duration-200 motion-reduce:transition-none',
                // Saat tersembunyi: lebar nol dan dipotong agar tidak menambah lebar scroll halaman.
                isStuck
                  ? 'max-w-48 opacity-100'
                  : 'invisible -ml-8 max-w-0 overflow-hidden opacity-0',
              )}
            >
              <Button to={ROUTES.admission} size="sm">
                Daftar PPDB
              </Button>
            </div>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            aria-label="Buka menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuRequested(true)}
            className="-mr-3 grid size-11 place-items-center lg:hidden"
          >
            <Menu aria-hidden="true" className="size-[26px]" strokeWidth={2.4} />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  )
}
