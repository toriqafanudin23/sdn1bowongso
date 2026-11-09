import { Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { Link } from 'react-router'
import { Container } from '@/components/ui/Container'
import { FOOTER_LINKS } from '@/config/navigation'
import { CONTACT, SITE } from '@/config/site'

const CONTACT_ITEMS: readonly { icon: LucideIcon; text: string }[] = [
  { icon: MapPin, text: CONTACT.address },
  { icon: Phone, text: CONTACT.phone },
  { icon: Mail, text: CONTACT.email },
]

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <Container className="pt-10 pb-6 md:grid md:grid-cols-[1.4fr_1fr_1.4fr] md:gap-10 md:pt-14 md:pb-10">
        <div>
          <p className="font-display text-2xl leading-[1.15] md:text-[26px]">{SITE.name}</p>
          <p className="mt-2 mb-5 text-tint md:mb-0">{SITE.tagline}</p>
        </div>

        <nav aria-label="Tautan footer">
          <ul>
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block border-t border-white/30 py-[11px] no-underline hover:underline md:border-t-0 md:py-0"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <address className="my-5 space-y-3 text-tint not-italic md:my-0">
          {CONTACT_ITEMS.map(({ icon: Icon, text }) => (
            <p key={text} className="flex items-start gap-3">
              <Icon aria-hidden="true" className="mt-1 size-[18px] shrink-0 text-accent" />
              <span>{text}</span>
            </p>
          ))}
        </address>
      </Container>

      <Container className="pb-6 text-sm text-tint md:pb-7">
        © {new Date().getFullYear()} {SITE.name}
      </Container>
    </footer>
  )
}
