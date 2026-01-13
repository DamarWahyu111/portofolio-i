export interface ProjectDetails {
  overview: string
  challenges: string[]
  solutions: string[]
}

export interface Project {
  id: number
  slug: string
  title: string
  description: string
  category: string
  year: number
  technologies: string[]
  hero: string
  gallery: string[]
  details: ProjectDetails
}
