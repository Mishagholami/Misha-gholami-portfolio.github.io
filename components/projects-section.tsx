"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, FileText, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/portfolio"

interface ProjectsSectionProps {
  projects: Project[]
  onCaseStudyClick?: (projectId: number) => void
}

export function ProjectsSection({ projects, onCaseStudyClick }: ProjectsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "research":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "design":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "development":
        return "bg-green-100 text-green-800 border-green-200"
      case "concept":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <section id="projects" className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">Featured Projects</h2>
            <p className="text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              A collection of research studies, design projects, and development work that showcase my approach to
              solving complex problems through user-centered design and thoughtful implementation.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group h-full bg-white border-brown-200/20 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg?height=300&width=500"}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={getCategoryColor(project.category)}>
                          {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                        </Badge>
                        <span className="text-sm text-brown-500">{project.duration}</span>
                      </div>

                      <h3 className="text-2xl font-bold text-brown-800 mb-3 group-hover:text-brown-900 transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-brown-600 mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs border-brown-300 text-brown-600">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="outline" className="text-xs border-brown-300 text-brown-600">
                            +{project.tags.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex space-x-2">
                          {project.figmaLink && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                                <FileText className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.githubRepo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                          {project.liveDemo && (
                            <Button variant="ghost" size="sm" asChild>
                              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4" />
                              </a>
                            </Button>
                          )}
                        </div>

                        <Link href={`/projects/${project.slug}`}>
                          <Button className="bg-brown-600 hover:bg-brown-700 text-cream-50 group/btn">
                            View Details
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* View All Projects Button */}
          <motion.div variants={itemVariants} className="text-center">
            <p className="text-brown-600 mb-6">
              Interested in seeing more of my work? Check out my complete portfolio including case studies, research
              projects, and development work.
            </p>
            <Button size="lg" className="bg-brown-600 hover:bg-brown-700 text-cream-50 px-8 py-3 text-lg group">
              View All Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
