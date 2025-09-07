"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight, Github, Linkedin, Mail, Dribbble } from "lucide-react"

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Smart Blurred Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Primary Bubble */}
        <motion.div
          className="absolute top-20 right-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Medium Secondary Bubble */}
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(35px)",
          }}
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 30, -15, 0],
            scale: [1, 0.7, 1.3, 1],
            rotate: [0, -90, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
        />

        {/* Small Accent Bubble 1 */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(30px)",
          }}
          animate={{
            x: [0, 20, -30, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.4, 0.6, 1],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -5,
          }}
        />

        {/* Small Accent Bubble 2 */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-56 h-56 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            filter: "blur(25px)",
          }}
          animate={{
            x: [0, -40, 25, 0],
            y: [0, 20, -35, 0],
            scale: [1, 0.9, 1.5, 1],
            rotate: [0, -150, 210, 360],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -8,
          }}
        />

        {/* Micro Bubble 1 */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full opacity-35"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            filter: "blur(20px)",
          }}
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.6, 0.4, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        />

        {/* Micro Bubble 2 */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [0, -18, 22, 0],
            y: [0, 28, -12, 0],
            scale: [1, 0.5, 1.8, 1],
            rotate: [0, -60, 300, 360],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -6,
          }}
        />

        {/* Additional Smart Bubbles */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            filter: "blur(32px)",
          }}
          animate={{
            x: [0, 35, -15, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.3, 0.7, 1],
            rotate: [0, 45, 315, 360],
          }}
          transition={{
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/6 w-36 h-36 rounded-full opacity-28"
          style={{
            background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            filter: "blur(28px)",
          }}
          animate={{
            x: [0, -28, 32, 0],
            y: [0, 18, -25, 0],
            scale: [1, 0.8, 1.4, 1],
            rotate: [0, -45, 225, 360],
          }}
          transition={{
            duration: 19,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-2 h-2 bg-white/40 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 10, -5, 0],
            y: [0, -15, 8, 0],
            opacity: [0.4, 0.8, 0.2, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/5 right-1/5 w-3 h-3 bg-blue-300/30 rounded-full"
          style={{ filter: "blur(2px)" }}
          animate={{
            x: [0, -8, 12, 0],
            y: [0, 20, -10, 0],
            opacity: [0.3, 0.7, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-300/50 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 6, -4, 0],
            y: [0, -12, 16, 0],
            opacity: [0.5, 0.9, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-pink-300/40 rounded-full"
          style={{ filter: "blur(1.5px)" }}
          animate={{
            x: [0, -12, 8, 0],
            y: [0, 14, -6, 0],
            opacity: [0.4, 0.6, 0.2, 0.4],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/6 right-2/5 w-1.5 h-1.5 bg-green-300/35 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 9, -7, 0],
            y: [0, -18, 11, 0],
            opacity: [0.35, 0.75, 0.15, 0.35],
          }}
          transition={{
            duration: 11,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Background Text Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/12 text-6xl font-bold text-gray-200/10 select-none"
          animate={{
            x: [0, 10, -5, 0],
            y: [0, -8, 12, 0],
            rotate: [0, 2, -1, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          UX
        </motion.div>
        <motion.div
          className="absolute top-2/3 right-1/12 text-5xl font-bold text-gray-200/10 select-none"
          animate={{
            x: [0, -8, 6, 0],
            y: [0, 10, -7, 0],
            rotate: [0, -1, 2, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
        >
          UI
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/6 text-4xl font-bold text-gray-200/10 select-none"
          animate={{
            x: [0, 12, -8, 0],
            y: [0, -6, 9, 0],
            rotate: [0, 1, -2, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -5,
          }}
        >
          Design
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 text-3xl font-bold text-gray-200/10 select-none"
          animate={{
            x: [0, -6, 9, 0],
            y: [0, 14, -4, 0],
            rotate: [0, -2, 1, 0],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        >
          Create
        </motion.div>
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
                transition={{ delay: index * 0.1 }}
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
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
                href: "https://linkedin.com/in/mishagholami",
                label: "LinkedIn",
                color: "hover:text-blue-600 hover:bg-blue-50",
              },
              {
                icon: Github,
                href: "https://github.com/mishagholami",
                label: "GitHub",
                color: "hover:text-gray-800 hover:bg-gray-50",
              },
              {
                icon: Dribbble,
                href: "https://dribbble.com/mishagholami",
                label: "Dribbble",
                color: "hover:text-pink-600 hover:bg-pink-50",
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
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-14 h-14 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 ${social.color}`}
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
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#projects")}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-xl transition-all duration-300 flex items-center gap-3"
          >
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>

          <motion.button
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(59, 130, 246, 0.05)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("#about")}
            className="px-10 py-4 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 font-semibold rounded-full transition-all duration-300"
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 3, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center text-gray-400 cursor-pointer hover:text-gray-600 transition-colors duration-300"
            onClick={() => scrollToSection("#about")}
          >
            <span className="text-sm mb-6 font-medium">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-50/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-50/20 to-transparent" />
      </div>
    </section>
  )
}

export default HeroSection
