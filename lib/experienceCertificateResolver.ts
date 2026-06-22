import fs from "node:fs"
import path from "node:path"

type CertificateMetadata = {
  title: string
  issuer: string
  year: string
  file?: string
  matchTerms?: string[]
}

type ResolvedCertificate = {
  title: string
  issuer: string
  year: string
  file: string
}

type ExperienceWithCertificate = {
  certificate?: CertificateMetadata
  company?: string
  slug?: string
  title?: string
}

type ExperienceWithResolvedCertificate<T> = T extends undefined
  ? undefined
  : Omit<T, "certificate"> & {
      certificate?: ResolvedCertificate
    }

const CERTIFICATES_DIR = path.join(process.cwd(), "public", "img", "certificates")
const PUBLIC_CERTIFICATES_PATH = "/img/certificates"
const SUPPORTED_CERTIFICATE_FILES = /\.(pdf|png|jpe?g|webp)$/i

function normalizeForMatch(value: string) {
  return value
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
}

function publicFileExists(file: string) {
  const relativePath = decodeURIComponent(file).replace(/^\/+/, "")
  const absolutePath = path.join(process.cwd(), "public", relativePath)

  return fs.existsSync(absolutePath)
}

function findMatchingCertificate(matchTerms: string[]) {
  if (!fs.existsSync(CERTIFICATES_DIR)) return null

  const normalizedTerms = matchTerms.map(normalizeForMatch).filter(Boolean)
  if (!normalizedTerms.length) return null

  const files = fs
    .readdirSync(CERTIFICATES_DIR, { withFileTypes: true })
    .filter((file) => file.isFile() && SUPPORTED_CERTIFICATE_FILES.test(file.name))

  const matchedFile = files.find((file) => {
    const fileName = normalizeForMatch(file.name)
    return normalizedTerms.some((term) => fileName.includes(term))
  })

  return matchedFile ? `${PUBLIC_CERTIFICATES_PATH}/${matchedFile.name}` : null
}

export function resolveExperienceCertificate<T extends ExperienceWithCertificate | undefined>(
  experience: T,
): ExperienceWithResolvedCertificate<T> {
  if (!experience?.certificate) return experience as unknown as ExperienceWithResolvedCertificate<T>

  const { certificate } = experience
  const explicitFile = certificate.file && publicFileExists(certificate.file) ? certificate.file : null
  const fallbackTerms = certificate.matchTerms ?? [experience.company, experience.title, experience.slug].filter(Boolean)
  const discoveredFile = explicitFile ?? findMatchingCertificate(fallbackTerms as string[])

  if (!discoveredFile) {
    const { certificate: _certificate, ...experienceWithoutCertificate } = experience
    return experienceWithoutCertificate as ExperienceWithResolvedCertificate<T>
  }

  return {
    ...experience,
    certificate: {
      title: certificate.title,
      issuer: certificate.issuer,
      year: certificate.year,
      file: discoveredFile,
    },
  } as unknown as ExperienceWithResolvedCertificate<T>
}
