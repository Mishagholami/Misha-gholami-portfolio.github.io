"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Figma, Eye, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/portfolio"

interface ProjectsSectionProps {
  projects: Project[]
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="projects" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">Featured Projects</h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
              A collection of design and development projects showcasing user-centered solutions and creative
              problem-solving across various industries and platforms.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.id} variants={cardVariants} whileHover="hover" className="group">
                <Card className="h-full overflow-hidden border-brown-200/50 hover:border-brown-300 transition-all duration-300 hover:shadow-xl">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Hover Overlay with Links */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-3">
                        <Link href={`/projects/${project.slug}`}>
                          <Button size="sm" className="bg-white/90 text-brown-900 hover:bg-white">
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </Link>
                        {project.links.live && (
                          <Button
                            size="sm"
                            variant="outline"
                            className="bg-white/90 border-white/90 text-brown-900 hover:bg-white"
                            asChild
                          >
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <span className="text-sm text-brown-600">{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-brown-900 mb-3 group-hover:text-brown-700 transition-colors">
                      <Link href={`/projects/${project.slug}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-brown-700 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tags.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-brown-200/50">
                      <Link href={`/projects/${project.slug}`}>
                        <Button variant="ghost" size="sm" className="text-brown-700 hover:text-brown-900 p-0 group/btn">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      <div className="flex space-x-2">
                        {project.links.figma && (
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild>
                            <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                              <Figma className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                        {project.links.github && (
                          <Button size="sm" variant="ghost" className="w-8 h-8 p-0" asChild>
                            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                              <Github className="w-4 h-4" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Link */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <p className="text-brown-600 mb-6">Want to see more of my work? Check out my complete portfolio.</p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
