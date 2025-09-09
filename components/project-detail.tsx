"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ExternalLink, Github, Figma, Eye, Calendar, Users, User, Building } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types/portfolio"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

interface ProjectDetailProps {
  project: Project
  nextProject?: Project
  previousProject?: Project
}

export default function ProjectDetail({ project, nextProject, previousProject }: ProjectDetailProps) {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen bg-cream-50">
      {/* Navigation Header */}
      <motion.div
        variants={itemVariants}
        className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-sm border-b border-brown-200/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/#projects"
              className="flex items-center space-x-2 text-brown-700 hover:text-brown-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Projects</span>
            </Link>

            <div className="flex items-center space-x-4">
              {project.links.figma && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                    <Figma className="w-4 h-4 mr-2" />
                    Figma
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button size="sm" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div variants={sectionVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div variants={itemVariants} className="mb-6">
                <Badge variant="secondary" className="mb-4">
                  {project.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-brown-900 mb-4">{project.title}</h1>
                <p className="text-xl text-brown-700 leading-relaxed">{project.longDescription}</p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-brown-600" />
                  <div>
                    <p className="text-sm text-brown-600">Role</p>
                    <p className="font-medium text-brown-900">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-brown-600" />
                  <div>
                    <p className="text-sm text-brown-600">Duration</p>
                    <p className="font-medium text-brown-900">{project.duration}</p>
                  </div>
                </div>
                {project.team && (
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-brown-600" />
                    <div>
                      <p className="text-sm text-brown-600">Team</p>
                      <p className="font-medium text-brown-900">{project.team}</p>
                    </div>
                  </div>
                )}
                {project.client && (
                  <div className="flex items-center space-x-3">
                    <Building className="w-5 h-5 text-brown-600" />
                    <div>
                      <p className="text-sm text-brown-600">Client</p>
                      <p className="font-medium text-brown-900">{project.client}</p>
                    </div>
                  </div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Challenge</h3>
                <p className="text-orange-800">{project.overview.challenge}</p>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Approach</h3>
                <p className="text-blue-800">{project.overview.approach}</p>
              </CardContent>
            </Card>
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Outcome</h3>
                <p className="text-green-800">{project.overview.outcome}</p>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Problem Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Problem</h2>
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-red-900 mb-4">{project.problem.title}</h3>
              <p className="text-red-800 mb-6 text-lg">{project.problem.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.problem.painPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-red-800">{point}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Research Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Research</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Methods</h3>
                <ul className="space-y-3">
                  {project.research.methods.map((method, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brown-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brown-700">{method}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Key Insights</h3>
                <ul className="space-y-3">
                  {project.research.insights.map((insight, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brown-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brown-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          {project.research.userQuotes && project.research.userQuotes.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-brown-900 mb-4">User Quotes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.research.userQuotes.map((quote, index) => (
                  <Card key={index} className="border-l-4 border-l-brown-500">
                    <CardContent className="p-6">
                      <blockquote className="text-brown-700 italic">"{quote}"</blockquote>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </motion.section>

        {/* Solution Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Solution</h2>
          <Card className="border-green-200 bg-green-50 mb-8">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Approach</h3>
              <p className="text-green-800 text-lg">{project.solution.approach}</p>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {project.solution.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brown-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Design Decisions</h3>
                <ul className="space-y-3">
                  {project.solution.designDecisions.map((decision, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-brown-700">{decision}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Impact Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {project.impact.metrics.map((metric, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brown-900 mb-2">{metric.value}</div>
                  <div className="text-lg font-semibold text-brown-700 mb-1">{metric.label}</div>
                  <div className="text-sm text-brown-600">{metric.description}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-brown-900 mb-4">Key Outcomes</h3>
              <ul className="space-y-3">
                {project.impact.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-brown-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.section>

        {/* Gallery Section */}
        {project.gallery.length > 0 && (
          <motion.section variants={sectionVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-brown-900 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                  {image.caption && (
                    <CardContent className="p-4">
                      <p className="text-sm text-brown-600">{image.caption}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Skills & Tools Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Skills & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-brown-900 mb-4">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <Badge key={tool} variant="outline">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* Reflection Section */}
        <motion.section variants={sectionVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-brown-900 mb-8">Reflection</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {project.reflection.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-orange-800 text-sm">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Learnings</h3>
                <ul className="space-y-2">
                  {project.reflection.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-blue-800 text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {project.reflection.nextSteps && (
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-4">Next Steps</h3>
                  <ul className="space-y-2">
                    {project.reflection.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-green-800 text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.section>

        {/* Navigation Section */}
        <motion.section variants={sectionVariants} className="border-t border-brown-200 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <Link
                href="/#projects"
                className="inline-flex items-center space-x-2 text-brown-700 hover:text-brown-900 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to All Projects</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              {previousProject && (
                <Link
                  href={`/projects/${previousProject.slug}`}
                  className="group flex items-center space-x-3 p-4 rounded-lg border border-brown-200 hover:border-brown-300 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-brown-600 group-hover:text-brown-800" />
                  <div className="text-left">
                    <p className="text-sm text-brown-600">Previous</p>
                    <p className="font-medium text-brown-900">{previousProject.title}</p>
                  </div>
                </Link>
              )}

              {nextProject && (
                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="group flex items-center space-x-3 p-4 rounded-lg border border-brown-200 hover:border-brown-300 transition-colors"
                >
                  <div className="text-right">
                    <p className="text-sm text-brown-600">Next</p>
                    <p className="font-medium text-brown-900">{nextProject.title}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-brown-600 group-hover:text-brown-800" />
                </Link>
              )}
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
