"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Palette, Sparkles, Package, Film, Coins } from "lucide-react"

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
        title: "Celebrity Saints Gallery",
        description: "Religious iconography style portraits of contemporary celebrities displayed in gallery setting",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-24%20at%2011.05.41%E2%80%AFPM-91Q75RZa8VJC7bumPH9ffhLWDBgcaY.png",
        alt: "Gallery wall showing celebrity portraits in religious saint style with halos and robes",
      },
      {
        id: "ill-2",
        title: "Olympic Panda Illustration",
        description: "Stylized panda character in Greek Olympic setting with classical architectural elements",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0352.JPG-2dWzT4XxHEdKWOVY994pY9wYuOaoMF.jpeg",
        alt: "Panda character illustration in Olympic Greek setting with rings and medal",
      },
      {
        id: "ill-3",
        title: "Scatterbrain Coffee Branding",
        description: "Whimsical hand-drawn illustrations for coffee brand packaging with playful doodle style",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0304.JPG-afnben93Ybnx2VHds8ofDmoW56Uaky.jpeg",
        alt: "Scatterbrain Coffee branding with hand-drawn illustrations on cup and bag",
      },
      {
        id: "ill-4",
        title: "Modern Saints Portrait Series",
        description: "Contemporary celebrities reimagined as religious icons with traditional saint imagery",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-24%20at%2011.05.24%E2%80%AFPM-zu4pQB3QusmIIj7BXPXasjex74qCV4.png",
        alt: "Collection of celebrity portraits in religious iconography style including Post Malone, Frida Kahlo, Drake, and Beyoncé",
      },
      {
        id: "ill-5",
        title: "Beyoncé Angel Portrait",
        description: "Detailed religious-style portrait featuring golden halo and angel wings in classical composition",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-24%20at%2011.05.33%E2%80%AFPM-0pUNVkqnamdhjnF2qvQffULHFoD57n.png",
        alt: "Close-up of Beyoncé portrait in religious iconography style with golden halo and angel wings",
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
        title: "The Hanged Man Tarot Collection",
        description: "Mystical tarot card NFT series featuring The Hanged Man in different artistic interpretations",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0243.JPG-y2cX59zXWBLhpXUGTX187e9klsABrz.jpeg",
        alt: "The Hanged Man tarot card NFT collection with three different color variations",
      },
      {
        id: "nft-2",
        title: "BRAT BAT Characters",
        description: "Cute and quirky bat character NFT collection with unique personalities and accessories",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0300.JPG-iYab54P2UFuMvPD0ibl1NqcFDz3XOz.jpeg",
        alt: "BRAT BAT NFT characters - three cartoon bat characters with different expressions",
      },
      {
        id: "nft-3",
        title: "Mystical Tarot Card Series",
        description: "Complete tarot deck NFT collection featuring The Hanged Man, The Fool, and The Hermit cards",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0248.JPG-PZC8AwlZr6W1kakzOXp2kW0bN8TgPT.jpeg",
        alt: "Collection of mystical tarot card NFTs with various artistic styles",
      },
      {
        id: "nft-4",
        title: "African Heritage Collection",
        description:
          "Diverse character NFTs celebrating African culture with geometric patterns and traditional elements",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-24%20at%2011.04.20%E2%80%AFPM-mmhJdBGuTOqYzlgQ2tXZulwTiXdgBk.png",
        alt: "African heritage NFT collection featuring diverse characters with traditional patterns",
      },
      {
        id: "nft-5",
        title: "Cultural Portrait Series",
        description: "Stylized portrait NFTs featuring people in traditional African-inspired clothing and accessories",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-24%20at%2011.04.28%E2%80%AFPM-Ya6R2pnrB6cImvnxmP4F6TzYScXZMr.png",
        alt: "Cultural portrait NFT series with stylized characters wearing traditional clothing",
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
        title: "African Heritage Portrait",
        description: "Stylized digital portrait celebrating African culture with traditional patterns and landscape",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0329.JPG-LWeNZPNIAo1tGtra5gGl4nJzTEsHlv.jpeg",
        alt: "Digital portrait of person in traditional African attire with geometric patterns and acacia tree landscape",
      },
      {
        id: "dp-2",
        title: "Mystical Tarot Collection",
        description: "Traditional tarot card artwork featuring The Fool and other mystical imagery",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0239.JPG-N5AmwWADTOl9ZWkHUl1hxKO5doTY3o.jpeg",
        alt: "Collection of tarot cards including The Fool card with vibrant traditional artwork",
      },
      {
        id: "dp-3",
        title: "Global Panda - Germany",
        description: "Character illustration of panda in German setting with urban graffiti background",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0337.JPG-MDH12ftupdgwS1qwZL0iKSUEeEDA3C.jpeg",
        alt: "Stylized panda character in German uniform smoking pipe against urban graffiti background",
      },
      {
        id: "dp-4",
        title: "Global Panda - France",
        description: "Elegant panda character illustration with French cultural elements and Parisian backdrop",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0353.JPG-RHoayrw31x9YYUlN0iAnnxr08MNIN2.jpeg",
        alt: "Panda character in French attire with pearl necklaces and Eiffel Tower background",
      },
      {
        id: "dp-5",
        title: "Moonlit African Portrait",
        description: "Vibrant digital portrait with traditional African clothing against nighttime landscape",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0325.JPG-RHu068dYjoszWrqNNGR7Tcv70BsWHU.jpeg",
        alt: "Digital portrait of person in colorful African traditional dress with full moon and acacia trees",
      },
    ],
  },
  socialMedia: {
    title: "Social Media Design",
    description:
      "Creative post designs and visual content created with Photoshop, Illustrator, and Clip Studio Paint for various social platforms.",
    icon: Film,
    items: [
      {
        id: "sm-1",
        title: "Mobile App UI Design Collection",
        description:
          "Comprehensive mobile app interface designs including registration, dashboards, and analytics screens",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-25%20at%2011.41.26%E2%80%AFAM-Wir4hl6FwLk6h1wCtun0XWrCCGsx70.png",
        alt: "Collection of mobile app UI designs showing registration forms, dashboard screens, and analytics interfaces",
      },
      {
        id: "sm-2",
        title: "Financial Management App Design",
        description: "Modern financial app interface design with investment tracking and analytics features",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-09-25%20at%2011.41.33%E2%80%AFAM-J2RpUhjR9udxyT5qn1cCZ3Pk7au2yf.png",
        alt: "Financial management mobile app design with investment dashboard and analytics screens",
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
        title: "LASH BLVD Professional Gel Pads",
        description:
          "Modern minimalist packaging design for beauty brand featuring clean typography and abstract line art",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0186.JPG-h4fgos2d6dPsGBdA1oYVsbVcAeZ4AU.jpeg",
        alt: "LASH BLVD lash lock down professional gel pads packaging with modern minimalist design",
      },
      {
        id: "pkg-2",
        title: "Pure Tiva CBD Recovery Cream",
        description: "Premium packaging design for CBD wellness product with gold accents",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0362.JPG-72Sui8jVjSiGwzQA5cqVRPwmULELCP.jpeg",
        alt: "Pure Tiva CBD Recovery Cream packaging design",
      },
      {
        id: "pkg-3",
        title: "VIO Health Product Line",
        description: "Consistent branding across health product packaging series",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0192.JPG-ThAzAUuVDnvD54nBsVIphq54E5tQL5.jpeg",
        alt: "VIO Health product line packaging design",
      },
      {
        id: "pkg-4",
        title: "Pure Tiva Product Photography",
        description: "Professional product photography showcasing packaging design",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0361.JPG-GcazF3jIPePaQBELIhp4UZTjoyaFge.jpeg",
        alt: "Pure Tiva product photography",
      },
      {
        id: "pkg-5",
        title: "VIO Health Vital Signs Monitor",
        description: "Modern packaging design for health monitoring technology with flowing gradient elements",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0194.JPG-hq4YdpgGrGFpXCmpbFdJmA5KMrrjNc.jpeg",
        alt: "VIO Health Vital Signs Monitor packaging design",
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
