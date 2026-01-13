"use client"

// Icon mapping for skills
const skillIcons: Record<string, string> = {
  // Frontend
  HTML: "🌐",
  CSS: "🎨",
  JavaScript: "📜",
  "Tailwind CSS": "💨",
  Figma: "🎭",
  // Backend
  "Node.js": "🟢",
  "Express.js": "🚂",
  MySQL: "🗄️",
  MongoDB: "🍃",
  "REST APIs": "🔌",
  Authentication: "🔐",
  // Design & Tools
  "UI/UX Design": "✨",
  Wireframing: "📐",
  Prototyping: "🛠️",
  "Responsive Design": "📱",
  Git: "🔀",
  VMS: "💻",
  // Soft Skills
  Communication: "💬",
  "Problem Solving": "🧩",
  "Project Management": "📊",
  "Team Collaboration": "👥",
  "Public Speaking": "🎤",
}

const skillCategories = [
  {
    category: "Frontend",
    icon: "⚡",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS", "TypeScript", "Figma"],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "PHP", "MySQL", "MongoDB", "REST APIs", "Authentication"],
  },
  {
    category: "Design & Tools",
    icon: "🎨",
    skills: ["UI/UX Design", "Wireframing", "Prototyping", "Responsive Design", "Git", "VMS"],
  },
  {
    category: "Soft Skills",
    icon: "🎯",
    skills: ["Communication", "Problem Solving", "Project Management", "Team Collaboration", "Public Speaking"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-cyan">Skills &amp; Expertise</h2>
        <p className="text-[rgb(130,140,160)] mb-16 max-w-2xl">
          Keterampilan yang telah saya kuasai melalui pembelajaran dan pengalaman praktis.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <div key={i} className="border-glow p-6 rounded hover:shadow-2xl transition-all duration-300 group">
              <div className="text-4xl mb-4">{cat.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[rgb(0,217,255)] group-hover:text-[rgb(255,102,0)] transition-colors">
                {cat.category}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="text-sm text-[rgb(130,140,160)] flex items-center gap-2">
                    <span className="text-base flex-shrink-0" title={skill}>
                      {skillIcons[skill] || "•"}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
