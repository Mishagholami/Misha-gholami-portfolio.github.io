"use client"

import { X, ExternalLink, Github, Figma, FileText, Calendar, User, Target } from "lucide-react"
import type { Project } from "../types/portfolio"

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-primary">{project.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Project Image */}
          <div className="mb-8">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-primary mb-4">Project Overview</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Project Details</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <User className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">Role: {project.role}</span>
                </div>
                {project.duration && (
                  <div className="flex items-center text-sm">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Duration: {project.duration}</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <Target className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">Category: {project.category}</span>
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 space-y-2">
                {project.figmaLink && (
                  <a
                    href={project.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <Figma className="w-4 h-4 mr-2" />
                    View in Figma
                  </a>
                )}
                {project.githubRepo && (
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                )}
                {project.pdfReport && (
                  <a
                    href={project.pdfReport}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download Report
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Case Study Button */}
          {project.caseStudyUrl && (
            <div className="text-center">
              <a
                href={project.caseStudyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary inline-flex items-center"
              >
                View Full Case Study
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
