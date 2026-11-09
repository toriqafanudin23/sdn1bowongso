const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  // Tanggal disimpan sebagai ISO `YYYY-MM-DD` (UTC) agar hasilnya sama di semua zona waktu.
  timeZone: 'UTC',
})

/** `2026-11-05` -> `5 Nov 2026` */
export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(isoDate))
}
