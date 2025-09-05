"use client"

import { useState, useEffect } from "react"
import { ProjectModal } from "./project-modal"
import type { Project } from "../types/portfolio"
import { ExternalLink, Github, Figma, FileText, ArrowRight } from "lucide-react"

const projects: Project[] = [
  {
    id: 1,
    title: "🧘‍♀️ Headspace App Redesign",
    description:
      "Rethinking the meditation experience with a focus on accessibility and modern UI principles. A comprehensive redesign that improved user engagement by 40%.",
    image: "/placeholder.svg?height=300&width=400&text=Headspace+Redesign",
    category: "design",
    tags: ["UX/UI Design", "Accessibility", "Mobile App", "User Research"],
    role: "Lead Designer",
    duration: "3 months",
    caseStudyUrl: "/case-studies/headspace",
    caseStudyColor: "purple",
    featured: true,
    figmaLink: "https://figma.com/headspace-redesign",
  },
  {
    id: 2,
    title: "💼 LinkedIn User Study",
    description:
      "An in-depth qualitative research project to uncover user pain points and opportunities on LinkedIn's platform, resulting in actionable insights.",
    image: "/placeholder.svg?height=300&width=400&text=LinkedIn+Study",
    category: "research",
    tags: ["User Research", "Qualitative Analysis", "UX Strategy", "Data Analysis"],
    role: "UX Researcher",
    duration: "2 months",
    caseStudyUrl: "/case-studies/linkedin",
    caseStudyColor: "blue",
    featured: true,
    pdfReport: "/reports/linkedin-study.pdf",
  },
  {
    id: 3,
    title: "🌱 Wellnest to Work",
    description:
      "Ideation and design of a mobile application connecting workplace wellness with productivity. A concept that bridges mental health and work performance.",
    image: "/placeholder.svg?height=300&width=400&text=Wellnest+App",
    category: "concept",
    tags: ["App Concept", "Wellness", "Remote Work", "Product Strategy"],
    role: "Product Designer",
    duration: "4 months",
    caseStudyUrl: "/case-studies/wellnest",
    caseStudyColor: "green",
    featured: true,
    figmaLink: "https://figma.com/wellnest-concept",
  },
  {
    id: 4,
    title: "🏢 KALMONT Web Development",
    description:
      "Full-stack web design and development for a modern business website. A complete digital transformation with focus on user experience and performance.",
    image: "/placeholder.svg?height=300&width=400&text=KALMONT+Website",
    category: "development",
    tags: ["Web Development", "React", "Full-Stack", "Performance"],
    role: "Full-Stack Developer",
    duration: "6 months",
    caseStudyUrl: "/case-studies/kalmont",
    caseStudyColor: "blue",
    featured: false,
    githubRepo: "https://github.com/kalmont-website",
    liveDemo: "https://kalmont.com",
  },
  {
    id: 5,
    title: "🌉 Granville Island Redesign",
    description:
      "A comprehensive UX research and redesign project for the Granville Island website, improving navigation and user satisfaction significantly.",
    image: "/placeholder.svg?height=300&width=400&text=Granville+Island",
    category: "research",
    tags: ["UX Research", "Website Redesign", "User Testing", "Information Architecture"],
    role: "UX Researcher",
    duration: "5 months",
    caseStudyUrl: "/case-studies/granville-island",
    caseStudyColor: "teal",
    featured: false,
    figmaLink: "https://figma.com/granville-redesign",
  },
]

const categoryColors = {
  research: "from-blue-500 to-blue-600",
  design: "from-purple-500 to-purple-600",
  development: "from-green-500 to-green-600",
  concept: "from-orange-500 to-orange-600",
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-48 h-48 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-40 right-20 w-36 h-36 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            A selection of my recent work showcasing user-centered design solutions and creative problem-solving.
          </p>
        </div>

        {/* All Projects */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
                featured={project.featured}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up stagger-8">
          <div className="card max-w-2xl mx-auto bg-gradient-to-br from-primary to-secondary text-white hover-lift">
            <h3 className="text-2xl font-serif font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-white/90 mb-6 text-lg">
              I'm always excited to take on new challenges and collaborate on meaningful projects.
            </p>
            <button
              onClick={() => {
                const contactSection = document.querySelector("#contact")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="btn bg-white text-primary hover:bg-gray-100 hover-scale group"
            >
              Let's Work Together
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}

// Project Card Component
interface ProjectCardProps {
  project: Project
  onClick: () => void
  featured: boolean
  index: number
}

function ProjectCard({ project, onClick, featured, index }: ProjectCardProps) {
  const categoryColors = {
    research: "bg-blue-100 text-blue-700",
    design: "bg-purple-100 text-purple-700",
    development: "bg-green-100 text-green-700",
    concept: "bg-orange-100 text-orange-700",
  }

  return (
    <div
      className={`group cursor-pointer animate-fade-in-up hover-lift ${
        featured ? "card-interactive" : ""
      } bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100`}
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10 animate-bounce-in">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category]} backdrop-blur-sm`}
        >
          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
          <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <ExternalLink className="h-8 w-8 mx-auto mb-2" />
            <div className="font-medium">View Case Study</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-300 mb-3 line-clamp-2">
          {project.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-gray-200 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-gradient-to-r from-secondary/10 to-accent/10 text-secondary text-xs rounded-full font-medium">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500">
            <span className="font-medium">{project.role}</span>
            {project.duration && (
              <>
                <span className="mx-2">•</span>
                <span>{project.duration}</span>
              </>
            )}
          </div>

          {/* Action Links */}
          <div className="flex space-x-2">
            {project.figmaLink && (
              <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-purple-500 hover:text-white flex items-center justify-center transition-all duration-300 hover-scale">
                <Figma size={14} />
              </div>
            )}
            {project.githubRepo && (
              <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white flex items-center justify-center transition-all duration-300 hover-scale">
                <Github size={14} />
              </div>
            )}
            {project.pdfReport && (
              <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white flex items-center justify-center transition-all duration-300 hover-scale">
                <FileText size={14} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
