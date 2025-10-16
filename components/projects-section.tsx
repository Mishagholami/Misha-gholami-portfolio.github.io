"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Eye } from "lucide-react"
import { projects } from "@/lib/projects-data"
import { ProjectModal } from "./project-modal"

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brown-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-brown-700 max-w-3xl mx-auto">
            A showcase of my design and development work, from user research to full-stack applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Dark overlay on hover */}
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
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 text-brown-900 border-white/90 hover:bg-white"
                      onClick={() => setSelectedProject(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Quick View
                    </Button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-brown-900">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-brown-900 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm text-brown-600">{project.year}</span>
                </div>

                <p className="text-brown-700 mb-4 line-clamp-2">{project.description}</p>

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

                <div className="flex items-center justify-between text-sm text-brown-600">
                  <span>{project.role}</span>
                  <span>{project.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
