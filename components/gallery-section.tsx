"use client"

import { useState, useEffect } from "react"
import { GalleryModal } from "./gallery-modal"
import type { GalleryItem } from "../types/portfolio"
import { ExternalLink, Tag, Eye, Sparkles } from "lucide-react"

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Digital Portrait Series",
    description: "A collection of digital portraits exploring different artistic styles and techniques.",
    image: "/placeholder.svg?height=400&width=600&text=Digital+Portrait+Series",
    category: "illustration",
    tags: ["Digital Art", "Portraits", "Character Design"],
    tools: ["Procreate", "Adobe Photoshop", "Wacom Tablet"],
    context:
      "Personal project exploring different portrait styles and digital painting techniques. Created over 3 months as part of daily practice routine.",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "Coffee Shop Branding",
    description:
      "Complete brand identity design for a local artisan coffee shop including logo, packaging, and signage.",
    image: "/placeholder.svg?height=400&width=600&text=Coffee+Shop+Branding",
    category: "branding",
    tags: ["Branding", "Logo Design", "Packaging"],
    tools: ["Adobe Illustrator", "Adobe InDesign", "Figma"],
    context:
      "Freelance project for a startup coffee shop. Developed complete brand identity from concept to implementation.",
    year: "2024",
    client: "Brew & Bean Coffee Co.",
    featured: true,
  },
  {
    id: 3,
    title: "Smart Home App Concept",
    description:
      "UX concept for a smart home control application with intuitive interface and seamless user experience.",
    image: "/placeholder.svg?height=400&width=600&text=Smart+Home+App",
    category: "ux-concept",
    tags: ["UX Design", "Mobile App", "Smart Home"],
    tools: ["Figma", "Principle", "Adobe XD"],
    context: "Conceptual project exploring smart home interfaces. Focus on simplicity and user-friendly controls.",
    year: "2023",
    figmaLink: "https://figma.com/example",
    featured: false,
  },
  {
    id: 4,
    title: "Animated Logo Collection",
    description: "Series of animated logos and brand marks created for various clients and personal projects.",
    image: "/placeholder.svg?height=400&width=600&text=Animated+Logos",
    category: "animation",
    tags: ["Animation", "Logo Design", "Motion Graphics"],
    tools: ["After Effects", "Principle", "Lottie"],
    context:
      "Collection of logo animations created for different brands. Focus on smooth transitions and brand personality.",
    year: "2023",
    featured: false,
  },
  {
    id: 5,
    title: "Botanical Illustrations",
    description: "Hand-drawn botanical illustrations digitized and refined for print and digital use.",
    image: "/placeholder.svg?height=400&width=600&text=Botanical+Illustrations",
    category: "illustration",
    tags: ["Botanical", "Hand-drawn", "Nature"],
    tools: ["Procreate", "Adobe Illustrator", "Traditional Media"],
    context:
      "Personal project combining traditional drawing with digital refinement. Inspired by local flora and nature walks.",
    year: "2023",
    featured: false,
  },
  {
    id: 6,
    title: "E-commerce Redesign",
    description:
      "Complete redesign of an e-commerce platform focusing on improved user experience and conversion rates.",
    image: "/placeholder.svg?height=400&width=600&text=E-commerce+Redesign",
    category: "freelance",
    tags: ["Web Design", "E-commerce", "UX/UI"],
    tools: ["Figma", "Adobe XD", "Hotjar"],
    context:
      "Freelance project to redesign an existing e-commerce site. Improved conversion rates by 35% through better UX.",
    year: "2024",
    client: "TechGear Online",
    featured: true,
  },
]

const categories = [
  { key: "all", label: "All Work", icon: Sparkles },
  { key: "illustration", label: "Illustrations", icon: Eye },
  { key: "branding", label: "Branding", icon: Tag },
  { key: "ux-concept", label: "UX Concepts", icon: Eye },
  { key: "animation", label: "Animation", icon: Sparkles },
  { key: "freelance", label: "Freelance", icon: Tag },
]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredItems =
    selectedCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  if (!mounted) return null

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-56 h-56 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">Creative Gallery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            A showcase of personal illustrations, creative projects, and professional work experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up stagger-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-500 hover-lift ${
                  selectedCategory === category.key
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:text-primary border border-gray-200 hover:border-primary/30 hover:shadow-md"
                }`}
              >
                <span className="flex items-center">
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Gallery Stats */}
        <div className="text-center mb-12 animate-fade-in-up stagger-3">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-full shadow-lg border border-gray-100 hover-lift">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{filteredItems.length}</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">
                {filteredItems.filter((item) => item.featured).length}
              </div>
              <div className="text-sm text-gray-500">Featured</div>
            </div>
            <div className="w-px h-8 bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">3+</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
          </div>
        </div>

        {/* Unified Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {filteredItems.map((item, index) => (
            <GalleryCard key={item.id} item={item} onClick={() => setSelectedItem(item)} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up stagger-8">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10 hover-lift">
            <h3 className="text-2xl font-semibold text-primary mb-4">Interested in Working Together?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new creative challenges and collaborate on meaningful projects.
            </p>
            <a href="#contact" className="btn btn-primary inline-flex items-center hover-scale group">
              Let's Create Something Amazing
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedItem && <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </section>
  )
}

// Gallery Card Component
interface GalleryCardProps {
  item: GalleryItem
  onClick: () => void
  index: number
}

function GalleryCard({ item, onClick, index }: GalleryCardProps) {
  const categoryColors = {
    illustration: "bg-purple-100 text-purple-700",
    branding: "bg-blue-100 text-blue-700",
    "ux-concept": "bg-green-100 text-green-700",
    animation: "bg-orange-100 text-orange-700",
    freelance: "bg-red-100 text-red-700",
    personal: "bg-gray-100 text-gray-700",
  }

  return (
    <div
      className="group cursor-pointer animate-fade-in-up hover-lift bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 relative"
      onClick={onClick}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-secondary to-accent text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg z-10 animate-bounce-in">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden h-48">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Category Badge */}
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]} backdrop-blur-sm`}
        >
          {item.category.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </div>

        {/* Year Badge */}
        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium">
          {item.year}
        </div>

        {/* Hover Info Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4">
          <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{item.title}</h3>
            <p className="text-sm text-gray-200 mb-3 line-clamp-2">{item.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 2).map((tag) => (
                <span key={tag} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
              {item.tags.length > 2 && <span className="text-xs text-gray-300">+{item.tags.length - 2}</span>}
            </div>

            {/* Client */}
            {item.client && (
              <div className="text-xs text-gray-300 mb-2">
                Client: <span className="font-medium text-white">{item.client}</span>
              </div>
            )}

            {/* View Details Button */}
            <div className="flex items-center text-sm font-medium">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
