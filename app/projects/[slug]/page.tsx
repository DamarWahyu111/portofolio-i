import ProjectDetailClient from "./ProjectDetailClient"
import { projectsData } from "@/lib/projectData"

export const dynamicParams = false

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectsData.find((p) => p.slug === slug)

  return <ProjectDetailClient project={project} />
}
