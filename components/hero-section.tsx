"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  const roles = [
    "UX Designer",
    "Creative Illustrator",
    "Frontend Developer",
    "User Researcher",
    "Visual Designer",
    "Product Designer",
    "Interaction Designer",
    "Digital Artist",
  ]

  const skills = [
    "User-Centered Design",
    "Creative Problem Solving",
    "Interactive Prototyping",
    "Visual Storytelling",
    "Design Systems",
    "Accessibility Design",
    "Human-Computer Interaction",
    "Digital Illustration",
  ]

  useEffect(() => {
    setMounted(true)

    // Role rotation
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    // Skill rotation
    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 4000)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => {
      clearInterval(roleInterval)
      clearInterval(skillInterval)
      clearInterval(cursorInterval)
    }
  }, [])

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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Simplified Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary Bubble - Simplified */}
        <motion.div
          className="absolute top-20 right-32 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(20px)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Bubble - Simplified */}
        <motion.div
          className="absolute bottom-40 left-20 w-60 h-60 rounded-full opacity-15"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        />

        {/* Small Accent Bubble */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(10px)",
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />
      </div>

      {/* Simplified Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/12 text-6xl font-bold text-gray-200/5 select-none">UX</div>
        <div className="absolute top-2/3 right-1/12 text-5xl font-bold text-gray-200/5 select-none">UI</div>
        <div className="absolute bottom-1/4 left-1/6 text-4xl font-bold text-gray-200/5 select-none">Design</div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Animated Name */}
        <motion.div variants={itemVariants} className="mb-8 mt-20">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {"Misha Gholami".split("").map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                className="inline-block hover:text-blue-600 transition-colors duration-300 cursor-default"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Dynamic Role with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 mb-4 h-12 flex items-center justify-center">
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="inline-block"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.span
              className="inline-block w-0.5 h-8 bg-blue-600 ml-1"
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>

        {/* Dynamic Description */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed space-y-4">
            <motion.p variants={wordVariants} className="mb-4">
              Merging thoughtful design with robust development to create meaningful digital experiences
            </motion.p>
            <motion.div
              key={currentSkillIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.4 }}
              className="text-blue-600 font-medium"
            >
              Specializing in {skills[currentSkillIndex]}
            </motion.div>
            <motion.p variants={wordVariants}>
              Interaction Design Student at Capilano University | Crafting immersive experiences that tell stories and
              feel personal
            </motion.p>
          </div>
        </motion.div>

        {/* Enhanced Social Icons */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex justify-center space-x-6">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/misha-gholami-7b2079220",
                label: "LinkedIn",
                color: "hover:text-blue-600 hover:bg-blue-50",
              },
              {
                icon: Github,
                href: "https://github.com/Mishagholami",
                label: "GitHub",
                color: "hover:text-gray-800 hover:bg-gray-50",
              },
              {
                icon: Mail,
                href: "mailto:hello@mishagholami.com",
                label: "Email",
                color: "hover:text-red-600 hover:bg-red-50",
              },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                  rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                  whileHover={{ scale: 1.05, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-14 h-14 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <IconComponent className="w-6 h-6" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          variants={containerVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("#projects")}
            className="group px-10 py-4 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-semibold rounded-full shadow-lg transition-all duration-200 flex items-center gap-3"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToSection("#about")}
            className="px-10 py-4 border-2 border-transparent bg-gradient-to-r from-orange-300 to-blue-300 hover:from-orange-400 hover:to-blue-400 text-transparent font-semibold rounded-full transition-all duration-200 relative overflow-hidden"
          >
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white rounded-full m-0.5"></div>
            <span className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-orange-300 to-blue-300 bg-clip-text text-transparent font-semibold z-20">
              Learn More
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 2, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-200"
            onClick={() => scrollToSection("#about")}
          >
            <span className="text-sm mb-6 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Simplified Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-gray-50/10 to-transparent" />
      </div>
    </section>
  )
}

export default HeroSection
