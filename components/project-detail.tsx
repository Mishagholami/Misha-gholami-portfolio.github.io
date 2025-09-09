"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Target, Lightbulb, CheckCircle, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/types/portfolio"

interface ProjectDetailProps {
  project: Project
  prevProject?: Project | null
  nextProject?: Project | null
}

export default function ProjectDetail({ project, prevProject, nextProject }: ProjectDetailProps) {
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "research":
        return "bg-blue-100 text-blue-800"
      case "design":
        return "bg-purple-100 text-purple-800"
      case "development":
        return "bg-green-100 text-green-800"
      case "concept":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="min-h-screen bg-cream-50">
      {/* Navigation Header */}
      <motion.div
        variants={itemVariants}
        className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-brown-200/20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/#projects">
              <Button variant="ghost" className="text-brown-600 hover:text-brown-800">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              {project.figmaLink && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.figmaLink} target="_blank" rel="noopener noreferrer">
                    <Eye className="w-4 h-4 mr-2" />
                    View Design
                  </a>
                </Button>
              )}
              {project.liveDemo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubRepo && (
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Badge className={getCategoryColor(project.category)}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
                {project.year && <span className="text-brown-600 text-sm">{project.year}</span>}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brown-800 mb-6">{project.title}</h1>
              <p className="text-xl text-brown-600 mb-8 leading-relaxed">{project.description}</p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">Role</h3>
                  <p className="text-brown-600">{project.role}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-brown-800 mb-2">Duration</h3>
                  <p className="text-brown-600">{project.duration}</p>
                </div>
                {project.team && (
                  <div className="col-span-2">
                    <h3 className="font-semibold text-brown-800 mb-2">Team</h3>
                    <p className="text-brown-600">{project.team.join(", ")}</p>
                  </div>
                )}
                {project.client && (
                  <div className="col-span-2">
                    <h3 className="font-semibold text-brown-800 mb-2">Client</h3>
                    <p className="text-brown-600">{project.client}</p>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src={project.image || "/placeholder.svg?height=600&width=800"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Overview Section */}
        {project.overview && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-white border-brown-200/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-brown-800 mb-6">Overview</h2>
                <p className="text-brown-600 text-lg leading-relaxed">{project.overview}</p>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Problem Section */}
        {project.problem && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-red-50 border-red-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-red-600 mr-3" />
                  <h2 className="text-3xl font-bold text-red-800">Problem</h2>
                </div>
                <p className="text-red-700 text-lg leading-relaxed">{project.problem}</p>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Research Section */}
        {project.research && project.research.length > 0 && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-blue-50 border-blue-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-blue-800">Research & Discovery</h2>
                </div>
                <ul className="space-y-4">
                  {project.research.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-700 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Solution Section */}
        {project.solutionDetails && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-green-50 border-green-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-green-600 mr-3" />
                  <h2 className="text-3xl font-bold text-green-800">Solution</h2>
                </div>
                <p className="text-green-700 text-lg leading-relaxed">{project.solutionDetails}</p>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <motion.section variants={itemVariants} className="mb-16">
            <h2 className="text-3xl font-bold text-brown-800 mb-8 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-xl shadow-lg"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Impact Section */}
        {project.impact && project.impact.length > 0 && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-purple-50 border-purple-200/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-purple-800">Impact & Results</h2>
                </div>
                <ul className="space-y-4">
                  {project.impact.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-700 text-lg">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Skills & Tools Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.skills && project.skills.length > 0 && (
              <Card className="bg-white border-brown-200/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-4">Skills Applied</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-brown-100 text-brown-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
            {project.tools && project.tools.length > 0 && (
              <Card className="bg-white border-brown-200/20 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-brown-800 mb-4">Tools Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="border-brown-300 text-brown-700">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </motion.section>

        {/* Reflection Section */}
        {(project.reflection || (project.lessonsLearned && project.lessonsLearned.length > 0)) && (
          <motion.section variants={itemVariants} className="mb-16">
            <Card className="bg-orange-50 border-orange-200/50 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-orange-800 mb-6">Reflection & Learnings</h2>
                {project.reflection && (
                  <p className="text-orange-700 text-lg leading-relaxed mb-6">{project.reflection}</p>
                )}
                {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold text-orange-800 mb-4">Key Lessons Learned</h3>
                    <ul className="space-y-3">
                      {project.lessonsLearned.map((lesson, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-orange-700">{lesson}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Navigation Section */}
        <motion.section variants={itemVariants} className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`}>
                <Button variant="outline" className="group bg-transparent">
                  <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  <div className="text-left">
                    <div className="text-xs text-brown-500">Previous Project</div>
                    <div className="font-medium">{prevProject.title}</div>
                  </div>
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            <Link href="/#projects">
              <Button className="bg-brown-600 hover:bg-brown-700 text-cream-50">View All Projects</Button>
            </Link>

            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`}>
                <Button variant="outline" className="group bg-transparent">
                  <div className="text-right">
                    <div className="text-xs text-brown-500">Next Project</div>
                    <div className="font-medium">{nextProject.title}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}
