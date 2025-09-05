"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, Download, ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)

  const roles = [
    "UX Designer",
    "UI Designer",
    "Product Designer",
    "User Researcher",
    "Frontend Developer",
    "Design Systems",
    "Interaction Designer",
    "Visual Designer",
  ]

  const skills = [
    "User Research",
    "Prototyping",
    "Design Systems",
    "React Development",
    "Figma Design",
    "User Testing",
    "Information Architecture",
    "Visual Design",
  ]

  useEffect(() => {
    setMounted(true)

    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)

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
        ease: "easeOut",
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

  const wordVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const socialIcons = [
    {
      icon: Github,
      href: "https://github.com/mishagholami",
      label: "GitHub",
      color: "hover:text-gray-900 hover:bg-gray-100",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mishagholami",
      label: "LinkedIn",
      color: "hover:text-blue-600 hover:bg-blue-50",
    },
    {
      icon: Mail,
      href: "mailto:misha.gholami@example.com",
      label: "Email",
      color: "hover:text-red-600 hover:bg-red-50",
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-50 via-white to-cream-100">
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
            x: [100, 200, 50, 150, 100],
            y: [100, 50, 200, 150, 100],
            scale: [1, 1.2, 0.8, 1.1, 1],
            rotate: [0, 90, 180, 270, 360],
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
            right: "10%",
            top: "20%",
          }}
          animate={{
            x: [-50, 50, -30, 70, -50],
            y: [50, -50, 80, -30, 50],
            scale: [0.8, 1.3, 0.9, 1.1, 0.8],
            rotate: [360, 270, 180, 90, 0],
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
            left: "15%",
            bottom: "25%",
          }}
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -80, 0],
            scale: [1, 0.7, 1.4, 0.9, 1],
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
          className="absolute w-56 h-56 rounded-full opacity-18"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            filter: "blur(30px)",
            right: "25%",
            bottom: "15%",
          }}
          animate={{
            x: [20, -60, 40, -80, 20],
            y: [-20, 60, -40, 80, -20],
            scale: [0.9, 1.5, 0.6, 1.2, 0.9],
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
            top: "15%",
            left: "60%",
          }}
          animate={{
            x: [0, 40, -20, 30, 0],
            y: [0, -30, 20, -40, 0],
            scale: [1, 1.3, 0.7, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />

        {/* Micro Bubble 2 */}
        <motion.div
          className="absolute w-32 h-32 rounded-full opacity-22"
          style={{
            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            filter: "blur(20px)",
            top: "60%",
            left: "80%",
          }}
          animate={{
            x: [-10, 30, -15, 25, -10],
            y: [10, -25, 15, -30, 10],
            scale: [0.8, 1.2, 0.9, 1.4, 0.8],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -6,
          }}
        />

        {/* Additional Smart Bubble 1 */}
        <motion.div
          className="absolute w-40 h-40 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            filter: "blur(28px)",
            top: "40%",
            left: "5%",
          }}
          animate={{
            x: [0, 70, -35, 50, 0],
            y: [0, -50, 35, -70, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
            rotate: [0, 180, 360, 180, 0],
          }}
          transition={{
            duration: 19,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
        />

        {/* Additional Smart Bubble 2 */}
        <motion.div
          className="absolute w-36 h-36 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
            filter: "blur(22px)",
            bottom: "40%",
            right: "5%",
          }}
          animate={{
            x: [-20, 45, -25, 35, -20],
            y: [20, -35, 25, -45, 20],
            scale: [0.9, 1.4, 0.7, 1.1, 0.9],
          }}
          transition={{
            duration: 17,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -7,
          }}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brown-300 rounded-full opacity-40"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}

        {/* Background Text Elements */}
        <motion.div
          className="absolute text-9xl font-bold text-brown-100 opacity-5 select-none"
          style={{ top: "10%", left: "5%" }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
        >
          UX
        </motion.div>
        <motion.div
          className="absolute text-8xl font-bold text-brown-100 opacity-5 select-none"
          style={{ bottom: "15%", right: "10%" }}
          animate={{ rotate: [0, -3, 3, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
        >
          UI
        </motion.div>
        <motion.div
          className="absolute text-7xl font-bold text-brown-100 opacity-5 select-none"
          style={{ top: "50%", right: "5%" }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY }}
        >
          Design
        </motion.div>
        <motion.div
          className="absolute text-6xl font-bold text-brown-100 opacity-5 select-none"
          style={{ bottom: "40%", left: "8%" }}
          animate={{ rotate: [0, -4, 4, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY }}
        >
          Create
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-brown-100 text-brown-700 rounded-full text-sm font-medium">
            👋 Hello, I'm
          </span>
        </motion.div>

        {/* Name with Letter Animation */}
        <motion.h1 variants={nameVariants} className="text-5xl md:text-7xl font-bold text-brown-800 mb-6">
          {"Misha Gholami".split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
              style={{ marginRight: letter === " " ? "0.5em" : "0" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Dynamic Role with Typing Effect */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-2xl md:text-3xl text-brown-600 mb-4 h-12 flex items-center justify-center">
            <motion.span
              key={currentRoleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="font-semibold"
            >
              {roles[currentRoleIndex]}
            </motion.span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              className="ml-1 text-brown-400"
            >
              |
            </motion.span>
          </div>
        </motion.div>

        {/* Description with Word Animation */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="text-lg md:text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed space-y-2">
            <motion.p variants={wordVariants}>
              Passionate about creating meaningful digital experiences through
            </motion.p>
            <motion.div variants={wordVariants} className="flex items-center justify-center gap-2">
              <span>user-centered design and</span>
              <motion.span
                key={currentSkillIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="font-semibold text-brown-700 bg-brown-100 px-3 py-1 rounded-full"
              >
                {skills[currentSkillIndex]}
              </motion.span>
            </motion.div>
            <motion.p variants={wordVariants}>Currently studying Interactive Design at Capilano University</motion.p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brown-600 hover:bg-brown-700 text-white rounded-full font-semibold transition-all duration-300 shadow-lg"
            >
              <Sparkles className="w-5 h-5" />
              View My Work
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-brown-50 text-brown-700 border-2 border-brown-200 hover:border-brown-300 rounded-full font-semibold transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants}>
          <div className="flex justify-center space-x-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-brown-600 transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div variants={itemVariants} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-brown-300 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-1 h-3 bg-brown-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

// Named export for compatibility
export { HeroSection as default }
