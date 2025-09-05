"use client"

import { X, ExternalLink, Calendar, User, Wrench, FileText } from "lucide-react"
import type { GalleryItem } from "../types/portfolio"

interface GalleryModalProps {
  item: GalleryItem
  onClose: () => void
}

export function GalleryModal({ item, onClose }: GalleryModalProps) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-serif font-bold text-primary">{item.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Gallery Image */}
          <div className="mb-8">
            <img
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              className="w-full h-80 object-cover rounded-xl"
            />
          </div>

          {/* Item Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold text-primary mb-4">About This Work</h3>
              <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>

              {/* Context */}
              {item.context && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.context}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Item Details */}
            <div>
              <h4 className="font-semibold text-primary mb-4">Project Details</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">Year: {item.year}</span>
                </div>
                {item.client && (
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Client: {item.client}</span>
                  </div>
                )}
                <div className="flex items-center text-sm">
                  <FileText className="w-4 h-4 mr-2 text-gray-400" />
                  <span className="text-gray-600">
                    Category: {item.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                  </span>
                </div>
              </div>

              {/* Tools */}
              {item.tools && item.tools.length > 0 && (
                <div className="mt-6">
                  <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Wrench className="w-4 h-4 mr-2" />
                    Tools Used
                  </h5>
                  <div className="space-y-1">
                    {item.tools.map((tool) => (
                      <div key={tool} className="text-sm text-gray-600">
                        • {tool}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              <div className="mt-6 space-y-2">
                {item.behanceLink && (
                  <a
                    href={item.behanceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Behance
                  </a>
                )}
                {item.dribbbleLink && (
                  <a
                    href={item.dribbbleLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Dribbble
                  </a>
                )}
                {item.figmaLink && (
                  <a
                    href={item.figmaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View in Figma
                  </a>
                )}
                {item.projectLink && (
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
