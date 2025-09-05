"use client"

import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"

interface HeroSectionProps {
  onViewWork?: () => void
  onLearnMore?: () => void
}

export default function HeroSection({ onViewWork, onLearnMore }: HeroSectionProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brown-900/70 via-brown-800/60 to-brown-700/50" />
        {/* Additional Cream Tint */}
        <div className="absolute inset-0 bg-cream-100/10" />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-cream-200/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-24 h-24 border border-cream-300/20 rounded-full"
        />
        <motion.div
          animate={{
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/3 left-10 w-2 h-2 bg-cream-200/40 rounded-full"
        />
        <motion.div
          animate={{
            y: [10, -10, 10],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-2/3 right-32 w-3 h-3 bg-cream-300/30 rounded-full"
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-cream-50 mb-6 leading-tight"
        >
          <span className="block">Misha Gholami</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-cream-200 mt-2">
            Creative Developer & Illustrator
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-cream-100 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Merging thoughtful design with robust front-end development
        </motion.p>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-cream-200 mb-12 max-w-2xl mx-auto">
          Interaction Design Student at Capilano University | Crafting immersive digital experiences that tell stories
          and feel personal
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#projects")}
            className="group px-8 py-4 bg-cream-50 hover:bg-cream-100 text-brown-800 font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(254, 252, 248, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#about")}
            className="px-8 py-4 border-2 border-cream-200 hover:border-cream-100 text-cream-100 hover:text-cream-50 font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-cream-200 cursor-pointer"
            onClick={() => scrollToSection("#about")}
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brown-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brown-900/20 to-transparent" />
      </div>
    </section>
  )
}
