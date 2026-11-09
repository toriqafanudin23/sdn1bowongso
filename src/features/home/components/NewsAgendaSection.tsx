import { CalendarDays } from 'lucide-react'
import { Link } from 'react-router'
import { Section } from '@/components/ui/Section'
import { ROUTES } from '@/config/navigation'
import { formatDate } from '@/lib/format'
import { LATEST_NEWS, UPCOMING_AGENDA } from '../content'
import type { AgendaEvent, NewsPost } from '../types'

function NewsItem({ post }: { post: NewsPost }) {
  return (
    <article>
      <p className="text-sm text-muted">
        {post.category}, <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      <h3 className="mt-1 text-[21px] leading-[1.15] md:mt-1.5 md:text-2xl md:leading-[1.12]">
        <Link
          to={`${ROUTES.information}/${post.slug}`}
          className="no-underline underline-offset-4 hover:underline"
        >
          {post.title}
        </Link>
      </h3>
    </article>
  )
}

function AgendaItem({ event }: { event: AgendaEvent }) {
  return (
    <>
      <time dateTime={event.date} className="inline-flex items-center gap-2 whitespace-nowrap text-muted">
        <CalendarDays aria-hidden="true" className="size-4 shrink-0" />
        {formatDate(event.date)}
      </time>
      <strong className="font-bold">{event.title}</strong>
    </>
  )
}

export function NewsAgendaSection() {
  return (
    <Section title="Berita dan agenda" id="berita">
      <div className="md:grid md:grid-cols-[1.2fr_1fr] md:gap-12">
        <div>
          <h3 className="sr-only">Berita terbaru</h3>
          <ul>
            {LATEST_NEWS.map((post) => (
              <li key={post.slug} className="border-t border-line py-4">
                <NewsItem post={post} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mt-7 mb-1 text-xl md:sr-only">Agenda</h3>
          <ul>
            {UPCOMING_AGENDA.map((event) => (
              <li
                key={event.date}
                className="flex flex-col border-t border-line py-3.5 md:flex-row md:justify-between md:gap-6 md:py-4"
              >
                <AgendaItem event={event} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
