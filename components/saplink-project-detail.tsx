"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Figma,
  ChevronLeft,
  ChevronRight,
  X,
  Eye,
  Maximize2,
  Gift,
  Building,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"
import type { Project } from "@/types/portfolio"

interface SaplinkProjectDetailProps {
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

export default function SaplinkProjectDetail({ project, nextProject, previousProject }: SaplinkProjectDetailProps) {
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

  const whyChooseFeatures = [
    "Verified impact tracking",
    "Real-time tree monitoring",
    "Support for local communities",
    "Eco-friendly gifting options",
    "Corporate sustainability solutions",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Bubbles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-1/4 w-56 h-56 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse-custom"></div>
      </div>

      {/* Navigation Bar */}
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
              <Button variant="ghost" className="group hover:bg-white/50 transition-all duration-300">
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
                      className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 font-serif leading-tight">
                  {project.title}
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">{project.description}</p>
              </motion.div>

              {/* Project Links */}
              {Object.keys(project.links).length > 0 && (
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-8">
                  {project.links.figma && (
                    <Button
                      asChild
                      variant="outline"
                      className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                    >
                      <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                        <Figma className="w-4 h-4 mr-2" />
                        View Design
                        <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    </Button>
                  )}
                  {project.links.prototype && (
                    <Button
                      asChild
                      className="group bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-gray-900 transition-all duration-300"
                    >
                      <a href={project.links.prototype} target="_blank" rel="noopener noreferrer">
                        <Eye className="w-4 h-4 mr-2" />
                        View Prototype
                        <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </a>
                    </Button>
                  )}
                </motion.div>
              )}
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

          {/* Why Choose SAPLINK Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">Why Choose SAPLINK?</h2>
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {whyChooseFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif">Ready to Make an Impact?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-gray-900 transition-all duration-300 hover:scale-105"
                >
                  <Leaf className="w-5 h-5 mr-2" />✅ Plant a Tree Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
                >
                  <Gift className="w-5 h-5 mr-2" />✅ Gift a Tree
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
                >
                  <Building className="w-5 h-5 mr-2" />✅ Partner with Us
                </Button>
              </div>
            </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">Project Overview</h2>

              {/* Brief intro paragraph */}
              <div className="text-center mb-8">
                <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{project.longDescription}</p>
              </div>

              {/* Role, Timeline, Tools */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-gray-800 mb-3">Role</h3>
                  <p className="text-gray-600">{project.role}</p>
                  {project.team && <p className="text-sm text-gray-500 mt-2">Team: {project.team}</p>}
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-gray-800 mb-3">Timeline</h3>
                  <p className="text-gray-600">{project.duration}</p>
                  <p className="text-sm text-gray-500 mt-2">{project.year}</p>
                </Card>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-gray-800 mb-3">Tools</h3>
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
                <Card className="p-6 bg-orange-50/80 backdrop-blur-sm border-orange-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-orange-900 mb-3">Challenge</h3>
                  <p className="text-orange-800 text-sm leading-relaxed">{project.overview.challenge}</p>
                </Card>
                <Card className="p-6 bg-blue-50/80 backdrop-blur-sm border-blue-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-blue-900 mb-3">Approach</h3>
                  <p className="text-blue-800 text-sm leading-relaxed">{project.overview.approach}</p>
                </Card>
                <Card className="p-6 bg-purple-50/80 backdrop-blur-sm border-purple-200/30 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-semibold text-purple-900 mb-3">Outcome</h3>
                  <p className="text-purple-800 text-sm leading-relaxed">{project.overview.outcome}</p>
                </Card>
              </div>
            </div>
          </motion.section>

          {/* Design Process Gallery - Placeholder for mockups, flowcharts, and images */}
          {project.gallery && project.gallery.length > 0 && (
            <motion.section
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16"
            >
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">
                  Design Process & Mockups
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.gallery.map((image, index) => (
                    <motion.div
                      key={index}
                      variants={galleryItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      className="group cursor-pointer"
                      onClick={() =>
                        openLightbox(
                          { src: image.src, alt: image.alt, caption: image.caption, credit: image.credit },
                          index + 1,
                        )
                      }
                    >
                      <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
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
          )}

          {/* Impact & Results Section */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 font-serif text-center">Impact & Results</h2>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {project.impact.metrics.map((metric, index) => (
                  <Card
                    key={index}
                    className="p-6 text-center bg-white/80 backdrop-blur-sm border-purple-200/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-purple-600 mb-2">{metric.value}</div>
                    <div className="font-semibold text-gray-700 mb-1">{metric.label}</div>
                    <div className="text-xs text-gray-600 leading-relaxed">{metric.description}</div>
                  </Card>
                ))}
              </div>

              {/* Outcomes */}
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-purple-200/30">
                <h3 className="font-semibold text-gray-800 mb-4">Key Outcomes</h3>
                <ul className="space-y-3">
                  {project.impact.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
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
                      className="bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-gray-900 transition-all duration-300"
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
