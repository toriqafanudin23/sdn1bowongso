import type { ComponentProps } from 'react'
import { cn } from '@/lib/cn'

/** Pembatas lebar konten situs (maks. 1200px, gutter 20px ponsel / 40px md+). */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-site px-5 md:px-10', className)} {...props} />
}
