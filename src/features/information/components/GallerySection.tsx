import { PhotoSlot } from '@/components/ui/PhotoSlot'
import { Section } from '@/components/ui/Section'
import { GALLERY } from '../content'

export function GallerySection() {
  return (
    <Section title="Galeri" id="galeri">
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
        {GALLERY.map(({ caption, shortCaption, photo }) => (
          <li key={caption}>
            <PhotoSlot photo={photo} placeholder="[Foto]" className="h-30 md:h-45" />
            <span className="mt-1.5 block text-sm md:mt-2 md:text-base">
              {shortCaption ? (
                <>
                  <span className="md:hidden">{shortCaption}</span>
                  <span className="hidden md:inline">{caption}</span>
                </>
              ) : (
                caption
              )}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
