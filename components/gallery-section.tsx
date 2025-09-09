"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { X, ExternalLink } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Mobile App Wireframes",
    category: "UX Design",
    image: "/placeholder.svg?height=400&width=300&text=Mobile+Wireframes",
    description: "Low-fidelity wireframes for a fitness tracking mobile application",
  },
  {
    id: 2,
    title: "E-commerce Dashboard",
    category: "UI Design",
    image: "/placeholder.svg?height=300&width=400&text=Dashboard+Design",
    description: "Clean and modern dashboard design for an e-commerce platform",
  },
  {
    id: 3,
    title: "User Journey Map",
    category: "UX Research",
    image: "/placeholder.svg?height=300&width=500&text=Journey+Map",
    description: "Comprehensive user journey mapping for a banking application",
  },
  {
    id: 4,
    title: "Design System",
    category: "UI Design",
    image: "/placeholder.svg?height=400&width=300&text=Design+System",
    description: "Complete design system with components and style guide",
  },
  {
    id: 5,
    title: "Usability Testing",
    category: "UX Research",
    image: "/placeholder.svg?height=300&width=400&text=Usability+Testing",
    description: "Usability testing session documentation and insights",
  },
  {
    id: 6,
    title: "Landing Page",
    category: "Web Design",
    image: "/placeholder.svg?height=400&width=300&text=Landing+Page",
    description: "Modern landing page design for a SaaS product",
  },
]

const categories = ["All", "UX Design", "UI Design", "UX Research", "Web Design"]

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Design Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of design work, research artifacts, and creative explorations showcasing my design process and
            thinking.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <span className="inline-block px-3 py-1 bg-amber-500 text-white text-sm rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedItem.image || "/placeholder.svg"}
                  alt={selectedItem.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full">
                    {selectedItem.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{selectedItem.title}</h3>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default GallerySection
