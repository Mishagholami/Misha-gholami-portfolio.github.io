"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any>(null)

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  }

  const galleryItems = [
    {
      id: 1,
      title: "Mobile App Wireframes",
      category: "UX Design",
      image: "/placeholder.svg?height=400&width=600&text=Mobile+Wireframes",
      description: "Early wireframes for a meditation app focusing on user flow and information architecture.",
    },
    {
      id: 2,
      title: "User Journey Map",
      category: "Research",
      image: "/placeholder.svg?height=400&width=600&text=User+Journey",
      description: "Comprehensive user journey mapping for an e-commerce platform redesign project.",
    },
    {
      id: 3,
      title: "Design System Components",
      category: "UI Design",
      image: "/placeholder.svg?height=400&width=600&text=Design+System",
      description: "Scalable design system components with consistent styling and interaction patterns.",
    },
    {
      id: 4,
      title: "Usability Testing Session",
      category: "Research",
      image: "/placeholder.svg?height=400&width=600&text=Usability+Testing",
      description: "Behind-the-scenes look at a remote usability testing session with think-aloud protocol.",
    },
    {
      id: 5,
      title: "Prototype Interaction",
      category: "Prototyping",
      image: "/placeholder.svg?height=400&width=600&text=Prototype",
      description: "High-fidelity interactive prototype showcasing micro-interactions and animations.",
    },
    {
      id: 6,
      title: "Workshop Facilitation",
      category: "Collaboration",
      image: "/placeholder.svg?height=400&width=600&text=Workshop",
      description: "Leading a design thinking workshop with cross-functional team members.",
    },
  ]

  const categories = ["All", "UX Design", "Research", "UI Design", "Prototyping", "Collaboration"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">Work Gallery</h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
              A visual showcase of my design process, from initial research and wireframes to final prototypes and
              collaborative workshops.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category
                    ? "bg-brown-600 hover:bg-brown-700 text-white"
                    : "border-brown-300 text-brown-700 hover:bg-brown-50"
                }
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Card className="overflow-hidden border-brown-200/50 hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-white/90 text-brown-900 hover:bg-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant="outline" className="text-brown-700 border-brown-300">
                        {item.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold text-brown-900 mb-2">{item.title}</h3>
                    <p className="text-brown-700 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b">
              <div>
                <h3 className="text-xl font-semibold text-brown-900">{selectedImage.title}</h3>
                <Badge variant="outline" className="text-brown-700 border-brown-300 mt-2">
                  {selectedImage.category}
                </Badge>
              </div>
              <Button variant="ghost" size="sm" onClick={() => setSelectedImage(null)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="aspect-[4/3] relative mb-4">
                <Image
                  src={selectedImage.image || "/placeholder.svg"}
                  alt={selectedImage.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-brown-700 leading-relaxed">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
