"use client"

import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { useTheme } from "./ThemeProvider"

interface ThemedHeroSectionProps {
  onViewWork?: () => void
  onLearnMore?: () => void
}

export default function ThemedHeroSection({ onViewWork, onLearnMore }: ThemedHeroSectionProps) {
  const { getThemeClasses } = useTheme()
  const theme = getThemeClasses()

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
      {/* Dynamic Background with Theme Colors */}
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
        {/* Dynamic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/50" />
        {/* Theme-specific Tint */}
        <div className={`absolute inset-0 ${theme.bg} opacity-10`} />
      </motion.div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-32 h-32 border border-white/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 40,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute bottom-32 left-16 w-24 h-24 border border-white/20 rounded-full"
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
          className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Misha Gholami</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white/90 mt-2">
            Creative Developer & Illustrator
          </span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
        >
          Merging thoughtful design with robust front-end development
        </motion.p>

        <motion.p variants={itemVariants} className="text-base md:text-lg text-white/80 mb-12 max-w-2xl mx-auto">
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
            className="group px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center gap-3"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#about")}
            className="px-8 py-4 border-2 border-white/80 hover:border-white text-white hover:text-white font-semibold rounded-full transition-all duration-300"
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
            className="flex flex-col items-center text-white/80 cursor-pointer"
            onClick={() => scrollToSection("#about")}
          >
            <span className="text-sm mb-2 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
