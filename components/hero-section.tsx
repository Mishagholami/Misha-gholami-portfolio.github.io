"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, FileText, ChevronDown } from "lucide-react"

const roles = [
  "UX Designer",
  "UI Designer",
  "Frontend Developer",
  "User Researcher",
  "Product Designer",
  "Web Developer",
  "Creative Designer",
  "Digital Designer",
]

const skills = [
  "User Research",
  "Prototyping",
  "Visual Design",
  "Frontend Development",
  "User Testing",
  "Information Architecture",
  "Interaction Design",
  "Design Systems",
]

export function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 3000)

    const skillInterval = setInterval(() => {
      setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
    }, 2500)

    return () => {
      clearInterval(roleInterval)
      clearInterval(skillInterval)
    }
  }, [])

  if (!mounted) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 1.2,
      },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Smart Blurred Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Primary Bubble */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(40px)",
          }}
          animate={{
            x: [100, 300, 150, 250, 100],
            y: [200, 100, 300, 150, 200],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        />

        {/* Medium Secondary Bubble */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-15"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(35px)",
          }}
          animate={{
            x: [300, 100, 400, 200, 300],
            y: [100, 250, 50, 200, 100],
            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -5,
          }}
        />

        {/* Small Accent Bubble 1 */}
        <motion.div
          className="absolute w-48 h-48 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(25px)",
          }}
          animate={{
            x: [50, 200, 80, 180, 50],
            y: [300, 150, 250, 100, 300],
            scale: [1.1, 0.7, 1.4, 0.9, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -8,
          }}
        />

        {/* Small Accent Bubble 2 */}
        <motion.div
          className="absolute w-56 h-56 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            filter: "blur(30px)",
          }}
          animate={{
            x: [400, 150, 350, 100, 400],
            y: [50, 200, 80, 180, 50],
            scale: [0.9, 1.5, 0.6, 1.2, 0.9],
            rotate: [0, 270, 180, 90, 0],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
        />

        {/* Micro Bubble 1 */}
        <motion.div
          className="absolute w-24 h-24 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [200, 350, 180, 320, 200],
            y: [80, 220, 120, 180, 80],
            scale: [1.2, 0.8, 1.6, 1, 1.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -6,
          }}
        />

        {/* Micro Bubble 2 */}
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            filter: "blur(20px)",
          }}
          animate={{
            x: [120, 280, 140, 260, 120],
            y: [180, 80, 220, 120, 180],
            scale: [0.7, 1.3, 0.9, 1.1, 0.7],
            rotate: [180, 0, 360],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
        />

        {/* Additional Smart Bubble 1 */}
        <motion.div
          className="absolute w-40 h-40 rounded-full opacity-18"
          style={{
            background: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
            filter: "blur(28px)",
          }}
          animate={{
            x: [80, 320, 120, 280, 80],
            y: [250, 120, 280, 160, 250],
            scale: [1, 0.6, 1.4, 0.8, 1],
            rotate: [90, 270, 180, 0, 90],
          }}
          transition={{
            duration: 19,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -7,
          }}
        />

        {/* Additional Smart Bubble 2 */}
        <motion.div
          className="absolute w-36 h-36 rounded-full opacity-22"
          style={{
            background: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
            filter: "blur(22px)",
          }}
          animate={{
            x: [350, 120, 380, 150, 350],
            y: [120, 280, 100, 240, 120],
            scale: [1.3, 0.9, 1.1, 1.5, 1.3],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            animate={{
              x: [Math.random() * 400, Math.random() * 400],
              y: [Math.random() * 400, Math.random() * 400],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
          />
        ))}

        {/* Background Text Elements */}
        <motion.div
          className="absolute text-9xl font-bold text-slate-200/5 select-none pointer-events-none"
          style={{ left: "10%", top: "20%" }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        >
          UX
        </motion.div>
        <motion.div
          className="absolute text-8xl font-bold text-slate-200/5 select-none pointer-events-none"
          style={{ right: "15%", top: "30%" }}
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        >
          UI
        </motion.div>
        <motion.div
          className="absolute text-7xl font-bold text-slate-200/5 select-none pointer-events-none"
          style={{ left: "20%", bottom: "25%" }}
          animate={{ rotate: [0, 4, -4, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        >
          Design
        </motion.div>
        <motion.div
          className="absolute text-6xl font-bold text-slate-200/5 select-none pointer-events-none"
          style={{ right: "25%", bottom: "20%" }}
          animate={{ rotate: [0, -2, 2, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY }}
        >
          Create
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full text-sm font-medium shadow-lg">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* Name with Letter Animation */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          variants={nameVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {"Misha Gholami".split("").map((letter, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block">
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Dynamic Role with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-2">
            <span className="text-slate-500">I'm a </span>
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {roles[currentRoleIndex]}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-blue-600"
              >
                |
              </motion.span>
            </motion.span>
          </div>
          <div className="text-lg md:text-xl text-slate-600">
            <span>Specializing in </span>
            <motion.span
              key={currentSkillIndex}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-semibold text-indigo-600"
            >
              {skills[currentSkillIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Description with Word Animation */}
        <motion.div variants={itemVariants} className="mb-12">
          <motion.p
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.5,
                },
              },
            }}
          >
            {[
              "Passionate",
              "about",
              "creating",
              "intuitive",
              "digital",
              "experiences",
              "that",
              "solve",
              "real",
              "problems.",
              "I",
              "combine",
              "user-centered",
              "design",
              "with",
              "technical",
              "expertise",
              "to",
              "build",
              "meaningful",
              "solutions.",
            ].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={socialVariants} className="flex justify-center space-x-6 mb-12">
          {[
            { icon: Github, href: "https://github.com/mishagholami", color: "hover:text-gray-800" },
            { icon: Linkedin, href: "https://linkedin.com/in/mishagholami", color: "hover:text-blue-600" },
            { icon: Mail, href: "mailto:misha@example.com", color: "hover:text-red-500" },
            { icon: FileText, href: "/resume.pdf", color: "hover:text-green-600" },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target={href.startsWith("http") ? "_blank" : "_self"}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-600 ${color} transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="flex flex-col items-center">
          <span className="text-sm text-slate-500 mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="cursor-pointer"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="w-6 h-6 text-slate-400 hover:text-slate-600 transition-colors" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Named export for compatibility
export { HeroSection as default }
