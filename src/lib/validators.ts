export const isEmail = (value: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())

/** Nomor ponsel Indonesia: 08..., 628..., atau +628... (spasi dan strip diabaikan). */
export const isIndonesianPhone = (value: string): boolean =>
  /^(\+62|62|0)8\d{7,12}$/.test(value.replace(/[\s-]/g, ''))
