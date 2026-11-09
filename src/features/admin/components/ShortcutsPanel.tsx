import { Button } from '@/components/ui/Button'
import { ADMIN_ROUTES } from '@/config/navigation'
import { Panel } from './Panel'

export function ShortcutsPanel() {
  return (
    <Panel title="Pintasan">
      <div className="grid gap-3 lg:justify-items-start">
        <Button to={ADMIN_ROUTES.newsNew}>Tulis berita</Button>
        <Button to={ADMIN_ROUTES.agendaNew} variant="dark">
          Tambah agenda
        </Button>
        <Button to={ADMIN_ROUTES.galleryUpload} variant="dark">
          Unggah foto
        </Button>
      </div>
    </Panel>
  )
}
