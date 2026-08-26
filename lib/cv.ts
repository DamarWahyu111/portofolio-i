const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ""

export const CV_FILE_PATH = `${BASE_PATH}/Resume_Damar%20Wahyu%20Putra.pdf`

export function getAbsoluteCvUrl(origin: string) {
  return `${origin}${CV_FILE_PATH}`
}
