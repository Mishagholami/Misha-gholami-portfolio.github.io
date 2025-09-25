"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Palette, Sparkles, Package, Film, Share2, Coins } from "lucide-react"

// Gallery data organized by sections
const galleryData = {
  illustration: {
    title: "Illustration",
    description:
      "Original artworks created with Adobe Illustrator and Clip Studio Paint, showcasing various styles and techniques.",
    icon: Palette,
    items: [
      {
        id: "ill-1",
        title: "Character Portrait Series",
        description: "Digital character illustrations exploring different art styles",
        image: "/placeholder.svg?height=400&width=300&text=Character+Portrait",
        alt: "Digital character portrait illustration",
      },
      {
        id: "ill-2",
        title: "Nature Studies",
        description: "Botanical and landscape illustrations",
        image: "/placeholder.svg?height=400&width=300&text=Nature+Studies",
        alt: "Nature and botanical illustration studies",
      },
      {
        id: "ill-3",
        title: "Abstract Compositions",
        description: "Experimental abstract digital artworks",
        image: "/placeholder.svg?height=400&width=300&text=Abstract+Art",
        alt: "Abstract digital composition artwork",
      },
      {
        id: "ill-4",
        title: "Fantasy Creatures",
        description: "Mythical and fantasy creature designs",
        image: "/placeholder.svg?height=400&width=300&text=Fantasy+Creatures",
        alt: "Fantasy creature illustration designs",
      },
    ],
  },
  nft: {
    title: "NFT Collections",
    description:
      "Digital collectibles created during my time at Temis Marketing (2020–2022), featuring unique artistic concepts and blockchain integration.",
    icon: Coins,
    items: [
      {
        id: "nft-1",
        title: "Cosmic Dreams Collection",
        description: "Space-themed NFT series with animated elements",
        image: "/placeholder.svg?height=400&width=300&text=Cosmic+Dreams+NFT",
        alt: "Cosmic Dreams NFT collection artwork",
      },
      {
        id: "nft-2",
        title: "Digital Botanica",
        description: "Plant-inspired generative art collection",
        image: "/placeholder.svg?height=400&width=300&text=Digital+Botanica",
        alt: "Digital Botanica NFT collection",
      },
      {
        id: "nft-3",
        title: "Geometric Harmony",
        description: "Mathematical patterns and geometric designs",
        image: "/placeholder.svg?height=400&width=300&text=Geometric+Harmony",
        alt: "Geometric Harmony NFT artwork",
      },
    ],
  },
  digitalPainting: {
    title: "Digital Painting",
    description:
      "Expressive digital paintings created with Adobe Fresco and Clip Studio Paint, focusing on color, light, and atmosphere.",
    icon: Palette,
    items: [
      {
        id: "dp-1",
        title: "Sunset Landscapes",
        description: "Atmospheric landscape paintings with dramatic lighting",
        image: "/placeholder.svg?height=400&width=300&text=Sunset+Landscapes",
        alt: "Digital sunset landscape painting",
      },
      {
        id: "dp-2",
        title: "Portrait Studies",
        description: "Expressive digital portrait paintings",
        image: "/placeholder.svg?height=400&width=300&text=Portrait+Studies",
        alt: "Digital portrait painting studies",
      },
      {
        id: "dp-3",
        title: "Urban Scenes",
        description: "City life captured through digital brushstrokes",
        image: "/placeholder.svg?height=400&width=300&text=Urban+Scenes",
        alt: "Urban scene digital paintings",
      },
    ],
  },
  socialMedia: {
    title: "Social Media Design",
    description:
      "Creative post designs and visual content created with Photoshop, Illustrator, and Clip Studio Paint for various social platforms.",
    icon: Share2,
    items: [
      {
        id: "sm-1",
        title: "Instagram Campaign Series",
        description: "Cohesive visual campaign for lifestyle brand",
        image: "/placeholder.svg?height=400&width=300&text=Instagram+Campaign",
        alt: "Instagram social media campaign design",
      },
      {
        id: "sm-2",
        title: "Product Launch Graphics",
        description: "Promotional graphics for product announcements",
        image: "/placeholder.svg?height=400&width=300&text=Product+Launch",
        alt: "Product launch social media graphics",
      },
      {
        id: "sm-3",
        title: "Event Promotion Design",
        description: "Visual assets for event marketing campaigns",
        image: "/placeholder.svg?height=400&width=300&text=Event+Promotion",
        alt: "Event promotion social media design",
      },
    ],
  },
  packaging: {
    title: "Packaging Design",
    description:
      "Packaging mockups and pattern designs for cosmetic, health, and coffee brands, combining functionality with aesthetic appeal.",
    icon: Package,
    items: [
      {
        id: "pkg-1",
        title: "Cosmetic Brand Packaging",
        description: "Elegant packaging design for luxury skincare line",
        image: "/placeholder.svg?height=400&width=300&text=Cosmetic+Packaging",
        alt: "Cosmetic brand packaging design mockup",
      },
      {
        id: "pkg-2",
        title: "Coffee Brand Identity",
        description: "Complete packaging system for artisan coffee brand",
        image: "/placeholder.svg?height=400&width=300&text=Coffee+Packaging",
        alt: "Coffee brand packaging design",
      },
      {
        id: "pkg-3",
        title: "Health Supplement Design",
        description: "Clean, modern packaging for wellness products",
        image: "/placeholder.svg?height=400&width=300&text=Health+Packaging",
        alt: "Health supplement packaging design",
      },
    ],
  },
  storyboard: {
    title: "Storyboard Art",
    description:
      "Storyboard sketches and visual narratives, including a 4-part NFT animation series that brings stories to life through sequential art.",
    icon: Film,
    items: [
      {
        id: "sb-1",
        title: "4-Part NFT Animation Series",
        description: "Sequential storyboard for animated NFT collection",
        image: "/placeholder.svg?height=400&width=300&text=NFT+Animation+Storyboard",
        alt: "4-part NFT animation series storyboard",
      },
      {
        id: "sb-2",
        title: "Commercial Storyboards",
        description: "Visual planning for advertising campaigns",
        image: "/placeholder.svg?height=400&width=300&text=Commercial+Storyboard",
        alt: "Commercial advertising storyboard sketches",
      },
      {
        id: "sb-3",
        title: "Short Film Concepts",
        description: "Narrative storyboards for creative projects",
        image: "/placeholder.svg?height=400&width=300&text=Short+Film+Storyboard",
        alt: "Short film concept storyboard art",
      },
    ],
  },
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const imageVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedCategory, setSelectedCategory] = useState("illustration")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="gallery" className="py-8 bg-cream-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-56 h-56 bg-gradient-to-br from-brown-200/15 to-cream-300/15 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/5 w-40 h-40 bg-gradient-to-br from-cream-300/15 to-brown-300/15 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-brown-200/15 to-cream-200/15 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "6s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brown-900 mb-4">Creativity Gallery</h2>
          <p className="text-brown-700 max-w-2xl mx-auto leading-relaxed">
            A curated collection of my creative work spanning illustration, digital art, design, and visual
            storytelling.
          </p>
        </motion.div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.entries(galleryData).map(([key, section]) => {
            const IconComponent = section.icon
            return (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === key
                    ? "bg-brown-600 text-cream-50 shadow-lg"
                    : "bg-cream-100 text-brown-700 hover:bg-brown-100"
                }`}
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {section.title}
              </button>
            )
          })}
        </div>

        {/* Category-Specific Gallery Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-12"
        >
          {galleryData[selectedCategory]?.items.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => setSelectedImage({ ...item, category: galleryData[selectedCategory].title })}
            >
              <div className="bg-cream-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-brown-100">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    variants={imageVariants}
                    whileHover="hover"
                    loading="lazy"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-pink-50/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 border border-pink-200/50 shadow-lg relative overflow-hidden">
            {/* Floating Background Bubbles */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-2 right-4 w-16 h-16 bg-gradient-to-br from-pink-200/30 to-blue-200/30 rounded-full blur-xl animate-float-slow"></div>
              <div
                className="absolute bottom-3 left-6 w-12 h-12 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-lg animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-md animate-float-slow"
                style={{ animationDelay: "4s" }}
              ></div>
            </div>

            {/* Content with relative positioning to stay above bubbles */}
            <div className="relative z-10">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">Interested in Collaborating?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new creative challenges and bring artistic visions to life through various
                mediums.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-400 to-blue-400 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Let's Create Together
                  <ExternalLink className="ml-2 h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://drive.google.com/file/d/1e0WQCtjo9-JkQHMglx9oXzQqioYetSqD/view?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 border-2 border-pink-400 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Ilustration Portfolio
                  <Sparkles className="ml-2 h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] bg-white rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />

              {/* Content */}
              <div className="p-6 bg-cream-50">
                <h3 className="text-xl font-semibold text-brown-900 mb-2">{selectedImage.title}</h3>
                <p className="text-brown-700">{selectedImage.description}</p>
                <p className="text-brown-700 mt-2">Category: {selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
