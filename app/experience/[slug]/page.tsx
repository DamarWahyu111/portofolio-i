import ExperienceDetailClient from "./ExperienceDetailClient"
import { experiencesData } from "@/lib/experienceData"
import { resolveExperienceCertificate } from "@/lib/experienceCertificateResolver"

export const dynamicParams = false

export async function generateStaticParams() {
  return experiencesData.map((exp) => ({
    slug: exp.slug,
  }))
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const experience = experiencesData.find((e) => e.slug === slug)

  return <ExperienceDetailClient experience={resolveExperienceCertificate(experience)} />
}
