import { useState } from 'react'
import { Link } from 'react-router'
import { FilterChips } from '@/components/ui/FilterChips'
import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Section } from '@/components/ui/Section'
import { ROUTES } from '@/config/navigation'
import { LATEST_NEWS } from '@/features/home/content'
import type { NewsPost } from '@/features/home/types'
import { formatDate } from '@/lib/format'
import { NEWS_FILTERS, type NewsFilter } from '../content'

function PostMeta({ post }: { post: NewsPost }) {
  return (
    <p className="text-sm text-muted">
      {post.category}, <time dateTime={post.date}>{formatDate(post.date)}</time>
    </p>
  )
}

function PostLink({ post }: { post: NewsPost }) {
  return (
    <Link
      to={`${ROUTES.information}/${post.slug}`}
      className="no-underline underline-offset-4 hover:underline"
    >
      {post.title}
    </Link>
  )
}

/** Berita dengan filter kategori: berita pertama hasil filter tampil besar, sisanya berupa daftar. */
export function NewsSection() {
  const [filter, setFilter] = useState<NewsFilter>('semua')
  const posts = filter === 'semua' ? LATEST_NEWS : LATEST_NEWS.filter(({ category }) => category === filter)
  const [featured, ...others] = posts

  return (
    <Section title="Berita" id="berita">
      <FilterChips options={NEWS_FILTERS} value={filter} onChange={setFilter} label="Filter kategori berita" />

      {!featured ? (
        <p className="mt-5 text-muted">Belum ada berita untuk kategori ini.</p>
      ) : (
        <div className="mt-5">
          <article>
            <PhotoSlot
              photo={featured.photo}
              placeholder="[Foto berita utama]"
              className="h-50 md:h-85"
            />
            <div className="mt-3 md:mt-3.5">
              <PostMeta post={featured} />
              <h3 className="mt-1 text-[26px] leading-[1.15] md:mt-1.5 md:text-4xl md:leading-[1.12]">
                <PostLink post={featured} />
              </h3>
            </div>
          </article>

          {others.length > 0 && (
            <ul className="mt-5 md:mt-7">
              {others.map((post) => (
                <li key={post.slug} className="border-t border-line py-4">
                  <article>
                    <PostMeta post={post} />
                    <h3 className="mt-1 text-[21px] leading-[1.15] md:mt-1.5 md:text-2xl md:leading-[1.12]">
                      <PostLink post={post} />
                    </h3>
                  </article>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Section>
  )
}
