"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight, X, Eye, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/types/portfolio"

interface ProjectDetailProps {
  project: Project
  nextProject?: Project
  previousProject?: Project
}

interface LightboxImage {
  src: string
  alt: string
  caption?: string
  credit?: string
}

export default function ProjectDetail({ project, nextProject, previousProject }: ProjectDetailProps) {
  const [selectedImage, setSelectedImage] = useState<LightboxImage | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [allImages, setAllImages] = useState<LightboxImage[]>([])

  // Collect all images from the project for lightbox navigation
  useEffect(() => {
    const images: LightboxImage[] = []

    // Add hero image
    if (project.image) {
      images.push({
        src: project.image,
        alt: `${project.title} hero image`,
        caption: `${project.title} - Main project showcase`,
      })
    }

    // Add gallery images
    project.gallery.forEach((img) => {
      images.push({
        src: img.src,
        alt: img.alt,
        caption: img.caption,
        credit: img.credit,
      })
    })

    setAllImages(images)
  }, [project])

  // Animation variants
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  const galleryItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  // Handle image navigation in lightbox
  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
    setSelectedImage(allImages[(currentImageIndex + 1) % allImages.length])
  }

  const handlePrevImage = () => {
    const newIndex = (currentImageIndex - 1 + allImages.length) % allImages.length
    setCurrentImageIndex(newIndex)
    setSelectedImage(allImages[newIndex])
  }

  const openLightbox = (image: LightboxImage, index: number) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === "Escape") {
          setSelectedImage(null)
        }
        if (e.key === "ArrowRight") {
          handleNextImage()
        }
        if (e.key === "ArrowLeft") {
          handlePrevImage()
        }
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [selectedImage, currentImageIndex])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-brown-50 relative overflow-hidden">
      {/* Animated Background Bubbles - Same as homepage */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-yellow-200/30 to-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse-custom"></div>
      </div>

      {/* Navigation Bar - Same as homepage */}
      <Navbar />

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="container mx-auto px-4 pt-24 pb-16"
        >
          {/* Back to Projects Button */}
          <motion.div variants={itemVariants} className="mb-8">
            <Link href="/#projects">
              <Button variant="ghost" className="group hover:bg-brown-100/50 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.section variants={sectionVariants} className="mb-16">
            <div className="text-center mb-12">
              <motion.div variants={itemVariants} className="mb-6">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-brown-100 text-brown-800 hover:bg-brown-200 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-brown-900 mb-4 font-serif leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Project Links */}
              <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
                <Button
                  asChild
                  className="group bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 text-gray-800 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
                >
                  <a
                    href="https://drive.google.com/drive/folders/1X9O2MQ-lBLAIH7l3K7UEsDatyKGxNOcj?usp=share_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Project
                    <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div variants={itemVariants} className="relative">
              <div
                className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white cursor-pointer group"
                onClick={() =>
                  openLightbox(
                    {
                      src: project.image || "/placeholder.svg",
                      alt: `${project.title} hero image`,
                      caption: `${project.title} - Main project showcase`,
                    },
                    0,
                  )
                }
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} hero image`}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Overview Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">Overview</h2>

              {/* Brief intro paragraph */}
              <div className="text-center mb-8">
                <p className="text-lg text-brown-700 leading-relaxed max-w-3xl mx-auto">{project.longDescription}</p>
              </div>

              {/* Role, Timeline, Tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-brown-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-brown-800 mb-3">Role</h3>
                  <p className="text-brown-600">{project.role}</p>
                  {project.team && <p className="text-sm text-brown-500 mt-2">Team: {project.team}</p>}
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-brown-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-brown-800 mb-3">Timeline</h3>
                  <p className="text-brown-600">{project.duration}</p>
                  <p className="text-sm text-brown-500 mt-2">{project.year}</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-brown-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-brown-800 mb-3">Tools</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.slice(0, 4).map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {project.tools.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tools.length - 4} more
                      </Badge>
                    )}
                  </div>
                </Card>
              </div>

              {/* Challenge, Approach, Outcome */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gradient-to-br from-pink-100/80 via-rose-100/80 to-orange-100/80 backdrop-blur-sm border-pink-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-pink-900 mb-3">Challenge</h3>
                  <p className="text-pink-800 text-sm leading-relaxed">{project.overview.challenge}</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-100/80 via-purple-100/80 to-indigo-100/80 backdrop-blur-sm border-blue-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-blue-900 mb-3">Approach</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">{project.overview.approach}</p>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-green-100/80 via-emerald-100/80 to-teal-100/80 backdrop-blur-sm border-green-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-green-900 mb-3">Outcome</h3>
                  <p className="text-green-800 text-sm leading-relaxed">{project.overview.outcome}</p>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* Problem Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">Problem</h2>
              <Card className="p-8 bg-gradient-to-br from-rose-100/80 via-pink-100/80 to-purple-100/80 backdrop-blur-sm border-rose-200/30">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">{project.problem.title}</h3>
                <p className="text-rose-800 mb-6 leading-relaxed text-lg">{project.problem.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.problem.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-rose-800 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Research Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">Research & Discovery</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-brown-200/30">
                  <h3 className="font-semibold text-brown-800 mb-4">Research Methods</h3>
                  <ul className="space-y-3">
                    {project.research.methods.map((method, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-brown-600 text-sm leading-relaxed">{method}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-brown-200/30">
                  <h3 className="font-semibold text-brown-800 mb-4">Key Insights</h3>
                  <ul className="space-y-3">
                    {project.research.insights.map((insight, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-brown-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-brown-600 text-sm leading-relaxed">{insight}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              {project.research.userQuotes && project.research.userQuotes.length > 0 && (
                <div className="mt-8">
                  <h3 className="font-semibold text-brown-800 mb-4 text-center">What Users Said</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.research.userQuotes.map((quote, index) => (
                      <Card key={index} className="p-6 bg-brown-50/50 border-brown-200/30">
                        <blockquote className="text-brown-700 italic text-sm leading-relaxed">"{quote}"</blockquote>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.section>

          {/* Strategy / Design Principles Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">
                Strategy & Design Principles
              </h2>
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-brown-200/30 mb-8">
                <h3 className="text-xl font-semibold text-brown-800 mb-4">Our Approach</h3>
                <p className="text-brown-600 leading-relaxed mb-6 text-lg">{project.solution.approach}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.solution.keyFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-brown-600 text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brown-800 mb-3">Design Decisions</h4>
                    <ul className="space-y-2">
                      {project.solution.designDecisions.map((decision, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-brown-600 text-sm leading-relaxed">{decision}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Design Process & Final Design Gallery */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">
                Design Process & Final Design
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { src: "/sleep-mood-overview.png", alt: "Sleep Mood app overview and wireframes" },
                  { src: "/sleep-mood-why.png", alt: "Why Sleep Mood - explaining the need for sleep wellness" },
                  {
                    src: "/sleep-mood-key-features.png",
                    alt: "Sleep Mood key features: relaxation techniques, soundscapes, and bedtime stories",
                  },
                  { src: "/sleep-mood-brainstorm-mindmap.png", alt: "Sleep Mood brainstorm and concept mind map" },
                  { src: "/sleep-mood-elevator-pitch.png", alt: "Sleep Mood elevator pitch presentation" },
                  {
                    src: "/sleep-mood-customizable-soundscapes.png",
                    alt: "Customizable soundscapes feature interface",
                  },
                  { src: "/sleep-mood-wireframes.png", alt: "Sleep Mood wireframes to final design progression" },
                ].map((image, index) => (
                  <motion.div
                    key={index}
                    variants={galleryItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox({ src: image.src, alt: image.alt }, index + 1)}
                  >
                    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-brown-200/30 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                          <Maximize2 className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Impact & Results Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">Impact & Results</h2>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.impact.metrics.map((metric, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center bg-white/80 backdrop-blur-sm border-brown-200/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-brown-800 mb-2">{metric.value}</div>
                    <div className="font-semibold text-brown-700 mb-1">{metric.label}</div>
                    <div className="text-xs text-brown-600 leading-relaxed">{metric.description}</div>
                  </Card>
                ))}
              </div>

              {/* Outcomes */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-brown-200/30">
                <h3 className="font-semibold text-brown-800 mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {project.impact.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-brown-600 text-sm leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </motion.section>

          {/* Reflection & Next Steps Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-brown-900 mb-8 font-serif text-center">Reflection & Next Steps</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-6 bg-gradient-to-br from-orange-100/80 via-peach-100/80 to-pink-100/80 backdrop-blur-sm border-orange-200/30">
                  <h3 className="font-semibold text-orange-900 mb-4">Challenges</h3>
                  <ul className="space-y-2">
                    {project.reflection.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-orange-800 text-sm leading-relaxed">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-blue-100/80 via-indigo-100/80 to-purple-100/80 backdrop-blur-sm border-blue-200/30">
                  <h3 className="font-semibold text-blue-900 mb-4">Key Learnings</h3>
                  <ul className="space-y-2">
                    {project.reflection.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-blue-800 text-sm leading-relaxed">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
              {project.reflection.nextSteps && project.reflection.nextSteps.length > 0 && (
                <Card className="p-6 bg-gradient-to-br from-green-100/80 via-teal-100/80 to-cyan-100/80 backdrop-blur-sm border-green-200/30 mt-8">
                  <h3 className="font-semibold text-green-900 mb-4">Next Steps</h3>
                  <ul className="space-y-2">
                    {project.reflection.nextSteps.map((step, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-green-800 text-sm leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              )}
            </div>
          </motion.section>

          {/* Bottom Navigation */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-8"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center">
                  <Link href="/#projects">
                    <Button
                      size="lg"
                      className="bg-brown-600 hover:bg-brown-700 text-white transition-all duration-300"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Projects
                    </Button>
                  </Link>
                </div>

                <div className="flex gap-4">
                  {previousProject && (
                    <Link href={`/projects/${previousProject.slug}`}>
                      <Button
                        variant="outline"
                        className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                      >
                        <ChevronLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
                        Previous
                      </Button>
                    </Link>
                  )}
                  {nextProject && (
                    <Link href={`/projects/${nextProject.slug}`}>
                      <Button
                        variant="outline"
                        className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Navigation Buttons */}
              {allImages.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={handlePrevImage}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                    onClick={handleNextImage}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}

              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Caption and Credit */}
              {(selectedImage.caption || selectedImage.credit) && (
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                  {selectedImage.caption && <p className="text-sm mb-1">{selectedImage.caption}</p>}
                  {selectedImage.credit && <p className="text-xs text-gray-300">Credit: {selectedImage.credit}</p>}
                </div>
              )}

              {/* Image Counter */}
              {allImages.length > 1 && (
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {allImages.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
