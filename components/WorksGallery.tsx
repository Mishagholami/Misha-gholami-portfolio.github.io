"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink, Github, Figma, FileText, Search, Palette, Code, Lightbulb, Eye } from 'lucide-react'
import type { Project } from "@/types/portfolio"

interface WorksGalleryProps {
  projects: Project[]
  onProjectClick: (project: Project) => void
  onCaseStudyClick?: (projectId: number) => void
}

const categoryIcons = {
  research: Search,
  design: Palette,
  development: Code,
  concept: Lightbulb,
}

const categoryColors = {
  research: "bg-blue-100 text-blue-700 border-blue-200",
  design: "bg-purple-100 text-purple-700 border-purple-200",
  development: "bg-green-100 text-green-700 border-green-200",
  concept: "bg-orange-100 text-orange-700 border-orange-200",
}

export default function WorksGallery({ projects, onProjectClick, onCaseStudyClick }: WorksGalleryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20 px-4 bg-cream-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">University Projects</h2>
          <p className="text-lg text-brown-600 max-w-3xl mx-auto">
            A showcase of key assignments from my studies at Capilano University, demonstrating skills in UX research,
            UI design, and development across various real-world challenges.
          </p>
          <div className="w-24 h-1 bg-brown-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => {
            const CategoryIcon = categoryIcons[project.category]
            const hasDetailedCaseStudy = [1, 2, 3, 4, 5].includes(project.id) // All projects now have case studies
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-cream-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brown-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4">
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[project.category]} backdrop-blur-sm`}
                    >
                      <CategoryIcon className="w-3 h-3 inline mr-1" />
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </div>
                  </div>
                  {hasDetailedCaseStudy && (
                    <div className="absolute top-4 left-4">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium text-white backdrop-blur-sm ${
                        project.id === 3 ? 'bg-green-600' : 
                        project.id === 4 ? 'bg-blue-600' :
                        project.id === 5 ? 'bg-teal-600' : 'bg-purple-600'
                      }`}>
                        Case Study Available
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-2 group-hover:text-brown-900 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-brown-600 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-brown-200 text-brown-700 text-sm rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-3 py-1 bg-brown-300 text-brown-800 text-sm rounded-full font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brown-500 font-medium">{project.role}</span>
                    <div className="flex space-x-2">
                      {hasDetailedCaseStudy && onCaseStudyClick && (
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation()
                            onCaseStudyClick(project.id)
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                            project.id === 3 ? 'bg-green-100 hover:bg-green-200' : 
                            project.id === 4 ? 'bg-blue-100 hover:bg-blue-200' :
                            project.id === 5 ? 'bg-teal-100 hover:bg-teal-200' :
                            'bg-purple-100 hover:bg-purple-200'
                          }`}
                          title="View detailed case study"
                        >
                          <Eye className={`w-4 h-4 ${
                            project.id === 3 ? 'text-green-600' : 
                            project.id === 4 ? 'text-blue-600' :
                            project.id === 5 ? 'text-teal-600' : 'text-purple-600'
                          }`} />
                        </motion.button>
                      )}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation()
                          onProjectClick(project)
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 bg-brown-100 hover:bg-brown-200 rounded-full flex items-center justify-center transition-colors"
                        title="View project details"
                      >
                        <ExternalLink className="w-4 h-4 text-brown-600" />
                      </motion.button>
                      {project.figmaLink && (
                        <Figma className="w-4 h-4 text-brown-600 group-hover:text-brown-800 transition-colors" />
                      )}
                      {project.githubRepo && (
                        <Github className="w-4 h-4 text-brown-600 group-hover:text-brown-800 transition-colors" />
                      )}
                      {project.pdfReport && (
                        <FileText className="w-4 h-4 text-brown-600 group-hover:text-brown-800 transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
