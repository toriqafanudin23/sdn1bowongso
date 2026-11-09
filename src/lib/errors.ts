/** Dilempar bila backend belum dikonfigurasi atau tidak bisa dihubungi. UI menampilkan pesan "belum aktif". */
export class ServiceUnavailableError extends Error {
  constructor() {
    super('Layanan belum aktif.')
  }
}
