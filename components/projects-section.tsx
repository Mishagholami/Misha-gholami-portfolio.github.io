"use client"

import { motion } from "framer-motion"
import { ExternalLink, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: "kalmont",
    title: "KALMONT x WorkSafeBC",
    description:
      "A comprehensive 3-page informational website featuring clean design, accessible layouts, and engaging visual storytelling to enhance workplace safety education.",
    image: "/placeholder.svg?height=300&width=500&text=KALMONT+WorkSafeBC+Website",
    tags: ["Web Design", "Development", "React", "Tailwind CSS"],
    type: "case-study",
    caseStudyUrl: "#case-studies/kalmont",
    liveUrl: "https://mishagholami.github.io/fm.kalmont.github.io/",
    featured: true,
  },
  {
    id: "linkedin",
    title: "LinkedIn User Study",
    description:
      "An in-depth qualitative research study to uncover user pain points and opportunities on LinkedIn's platform, focusing on professional networking and content discovery experiences.",
    image: "/placeholder.svg?height=300&width=500&text=LinkedIn+User+Study",
    tags: ["UX Research", "User Interviews", "Usability Testing"],
    type: "case-study",
    caseStudyUrl: "#case-studies/linkedin",
    featured: true,
  },
  {
    id: "wellnest",
    title: "Wellnest to Work",
    description:
      "A conceptual mobile application designed to help remote workers integrate wellness practices into their daily work routines, promoting better work-life balance and productivity.",
    image: "/placeholder.svg?height=300&width=500&text=Wellnest+to+Work+App",
    tags: ["App Concept", "UX Design", "Figma", "Prototyping"],
    type: "case-study",
    caseStudyUrl: "#case-studies/wellnest",
    prototypeUrl: "https://figma.com/wellnesstowork-concept",
    featured: true,
  },
  {
    id: "granville-island",
    title: "Granville Island Website Redesign",
    description:
      "A comprehensive UX research and redesign project for the Granville Island website, aiming to enhance visitor experience, improve navigation, and better showcase the island's diverse offerings.",
    image: "/placeholder.svg?height=300&width=500&text=Granville+Island+Redesign",
    tags: ["UX Research", "Website Redesign", "User Testing"],
    type: "case-study",
    caseStudyUrl: "#case-studies/granville-island",
    prototypeUrl: "https://figma.com/granville-island-prototype",
    featured: true,
  },
  {
    id: "headspace",
    title: "Headspace App Redesign",
    description:
      "Rethinking the meditation experience with a focus on accessibility, modern UI principles, and enhanced user engagement through thoughtful design decisions.",
    image: "/placeholder.svg?height=300&width=500&text=Headspace+App+Redesign",
    tags: ["UX/UI Design", "Accessibility", "Mobile App"],
    type: "case-study",
    caseStudyUrl: "#case-studies/headspace",
    prototypeUrl: "https://figma.com/headspace-redesign",
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured)

  const handleCaseStudyClick = (caseStudyUrl: string) => {
    window.location.hash = caseStudyUrl.replace("#", "")
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of UX research studies, design projects, and development work that showcase my approach to
            solving complex problems through user-centered design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white border-0 shadow-lg">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        onClick={() => handleCaseStudyClick(project.caseStudyUrl)}
                        className="bg-white/90 text-gray-900 hover:bg-white"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Case Study
                      </Button>
                      {project.liveUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Site
                          </a>
                        </Button>
                      )}
                      {project.prototypeUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        >
                          <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Prototype
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-amber-100 text-amber-800 hover:bg-amber-200">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 mb-6">Interested in seeing more of my work?</p>
          <Button
            size="lg"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3"
          >
            Let's Connect
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
