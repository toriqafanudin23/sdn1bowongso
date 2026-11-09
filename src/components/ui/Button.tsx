import { cva, type VariantProps } from 'class-variance-authority'
import { ArrowRight } from 'lucide-react'
import type { ComponentProps } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/cn'

export const buttonVariants = cva(
  'group inline-flex items-center justify-center gap-2 text-center font-bold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none',
  {
    variants: {
      variant: {
        /** Kuning: aksi utama di atas latar biru. */
        primary: 'bg-accent text-ink hover:bg-white',
        /** Garis putih: aksi sekunder di atas latar biru. */
        outline: 'text-white ring-2 ring-white ring-inset hover:bg-white hover:text-ink',
        /** Navy: aksi utama di atas latar kuning atau putih. */
        dark: 'bg-ink text-white hover:bg-brand',
        /** Garis navy: aksi sekunder di atas latar putih. */
        outlineDark: 'text-ink ring-2 ring-ink ring-inset hover:bg-ink hover:text-white',
      },
      size: {
        /** Ponsel: selebar kolom dengan target sentuh 48px. Desktop: selebar konten. */
        md: 'min-h-12 w-full px-5 py-3.5 md:w-auto md:px-6',
        /** Kompak, untuk di dalam navbar. */
        sm: 'px-4.5 py-2.5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  },
)

interface SharedProps extends VariantProps<typeof buttonVariants> {
  /** Menampilkan ikon panah di akhir label. */
  withArrow?: boolean
}

type LinkButtonProps = SharedProps & ComponentProps<typeof Link>
type NativeButtonProps = SharedProps & ComponentProps<'button'> & { to?: undefined }

export type ButtonProps = LinkButtonProps | NativeButtonProps

/**
 * Tombol. Jika `to` diberikan, dirender sebagai tautan router
 * (`<Link>`), selain itu sebagai `<button>` biasa.
 */
export function Button(props: ButtonProps) {
  const { variant, size, withArrow, className, children, ...rest } = props
  const classes = cn(buttonVariants({ variant, size }), className)
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-5 shrink-0 transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
        />
      )}
    </>
  )

  if (rest.to !== undefined) {
    return (
      <Link className={classes} {...(rest as Omit<LinkButtonProps, keyof SharedProps>)}>
        {content}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ComponentProps<'button'>)}>
      {content}
    </button>
  )
}
