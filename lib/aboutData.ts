export interface EducationItem {
  id: number
  institution: string
  level: string
  field: string
  period: string
  startYear: number
  endYear: number
  status: "completed" | "ongoing"
  description: string
  achievements: string[]
  icon: string
}

export const educationData: EducationItem[] = [
  {
    id: 1,
    institution: "SMA Negeri 2 Babelan",
    level: "Senior High School (SMA)",
    field: "Natural Sciences",
    period: "2020 - 2023",
    startYear: 2020,
    endYear: 2023,
    status: "completed",
    description: "Foundation in science subjects with focus on mathematics, physics, chemistry, and biology. Developed strong analytical and problem-solving skills.",
    achievements: [
      "Graduated with honors",
      "Active in science club",
      "Participated in national science olympiad",
    ],
    icon: "🎓",
  },
  {
    id: 2,
    institution: "CEP-CCIT FTUI",
    level: "Diploma in Professional Information Technology",
    field: "Computer Science / Information Technology",
    period: "2023 - 2025 (Expected)",
    startYear: 2023,
    endYear: new Date().getFullYear(),
    // status: "ongoing",
    status: "completed",
    description: "Pursuing degree in Computer Science with specialization in web development and software engineering. Building expertise in full-stack development, UI/UX design, and modern web technologies.",
    achievements: [
      "GPA: 3.46/4.0",
      "Active in programming clubs",
      "Building real-world projects and portfolio",
      "Always eager to learn new technologies",
      "Always 2 weeks build a new project from class assignment",
    ],
    icon: "🎯",
  },
]
