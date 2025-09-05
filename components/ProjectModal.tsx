"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ExternalLink, Github, Figma, FileText, CheckCircle, Target, Users, Lightbulb } from "lucide-react"
import type { Project } from "@/types/portfolio"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const sectionIcons = {
    problem: Target,
    role: Users,
    outcome: CheckCircle,
    learnings: Lightbulb,
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-cream-50 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        >
          {/* Header */}
          <div className="sticky top-0 bg-cream-50/95 backdrop-blur-md border-b border-brown-200 p-6 flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold text-brown-800 mb-2">{project.title}</h2>
              <p className="text-brown-600 text-lg">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-brown-200 hover:bg-brown-300 rounded-full flex items-center justify-center transition-colors ml-4 flex-shrink-0"
            >
              <X className="w-5 h-5 text-brown-700" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Image Gallery */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h3 className="text-2xl font-bold text-brown-800 mb-4">Project Visuals</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-lg"
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} visual ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Project Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Problem Statement */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-cream-100 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Target className="w-6 h-6 text-brown-600 mr-3" />
                  <h4 className="text-xl font-bold text-brown-800">Problem & Goals</h4>
                </div>
                <p className="text-brown-700 leading-relaxed">{project.problem}</p>
              </motion.div>

              {/* Role & Responsibilities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-cream-100 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Users className="w-6 h-6 text-brown-600 mr-3" />
                  <h4 className="text-xl font-bold text-brown-800">My Role</h4>
                </div>
                <p className="text-brown-700 leading-relaxed">{project.role}</p>
              </motion.div>
            </div>

            {/* Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-cream-100 rounded-xl p-6"
            >
              <h4 className="text-xl font-bold text-brown-800 mb-4">Design Process</h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-cream-50 p-4 rounded-lg border border-brown-200"
                  >
                    <div className="flex items-center mb-2">
                      <span className="w-6 h-6 bg-brown-300 text-brown-800 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <span className="font-medium text-brown-800">{step}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Outcome & Learnings */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-cream-100 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-brown-600 mr-3" />
                  <h4 className="text-xl font-bold text-brown-800">Outcome</h4>
                </div>
                <p className="text-brown-700 leading-relaxed">{project.outcome}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-cream-100 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <Lightbulb className="w-6 h-6 text-brown-600 mr-3" />
                  <h4 className="text-xl font-bold text-brown-800">Key Learnings</h4>
                </div>
                <ul className="space-y-2">
                  {project.learnings.map((learning, index) => (
                    <li key={index} className="flex items-start text-brown-700">
                      <span className="w-2 h-2 bg-brown-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      {learning}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Technologies */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
              <h4 className="text-xl font-bold text-brown-800 mb-4">Methods & Technologies</h4>
              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-brown-200 text-brown-700 rounded-full font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-4 pt-4 border-t border-brown-200"
            >
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-xl font-medium transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              )}
              {project.figmaLink && (
                <a
                  href={project.figmaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium transition-colors"
                >
                  <Figma className="w-5 h-5" />
                  Figma Prototype
                </a>
              )}
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-xl font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
              )}
              {project.pdfReport && (
                <a
                  href={project.pdfReport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors"
                >
                  <FileText className="w-5 h-5" />
                  Research Report
                </a>
              )}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
