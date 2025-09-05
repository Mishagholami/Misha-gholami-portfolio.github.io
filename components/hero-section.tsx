"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Mail, Linkedin, Github, Dribbble, Sparkles } from "lucide-react"

const roles = [
  "UX/UI Designer",
  "Creative Illustrator",
  "User Researcher",
  "Digital Artist",
  "Brand Designer",
  "Frontend Developer",
  "Visual Storyteller",
  "Design Systems Expert",
]

const skills = [
  "crafting intuitive interfaces",
  "creating stunning illustrations",
  "solving complex problems",
  "building seamless experiences",
  "designing with empathy",
  "bringing ideas to life",
  "telling visual stories",
  "innovating with purpose",
]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [currentSkill, setCurrentSkill] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [isTyping, setIsTyping] = useState(true)
  const [displayText, setDisplayText] = useState("")
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    setMounted(true)

    // Role rotation
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    // Skill rotation
    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length)
    }, 4000)

    return () => {
      clearInterval(roleInterval)
      clearInterval(skillInterval)
    }
  }, [])

  // Typing animation effect
  useEffect(() => {
    if (!mounted) return

    const currentText = roles[currentRole]

    if (isTyping && charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      }, 100)
      return () => clearTimeout(timeout)
    } else if (isTyping && charIndex === currentText.length) {
      const timeout = setTimeout(() => {
        setIsTyping(false)
      }, 2000)
      return () => clearTimeout(timeout)
    } else if (!isTyping && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      }, 50)
      return () => clearTimeout(timeout)
    } else if (!isTyping && charIndex === 0) {
      setIsTyping(true)
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }
  }, [charIndex, isTyping, currentRole, mounted])

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Smart Blurred Bubbles Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Large Primary Bubble */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 60, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -8,
          }}
          className="absolute top-20 right-32 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Medium Secondary Bubble */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 100, -60, 0],
            scale: [0.8, 1.4, 0.6, 0.8],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -5,
          }}
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(35px)",
          }}
        />

        {/* Small Accent Bubble 1 */}
        <motion.div
          animate={{
            x: [0, 60, -40, 100, -20, 0],
            y: [0, -40, 80, 20, -60, 0],
            scale: [1, 0.7, 1.3, 0.9, 1.1, 1],
            rotate: [0, 72, 144, 216, 288, 360],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(30px)",
          }}
        />

        {/* Small Accent Bubble 2 */}
        <motion.div
          animate={{
            x: [0, -80, 40, 0],
            y: [0, 60, -100, 0],
            scale: [0.9, 1.1, 0.7, 0.9],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -6,
          }}
          className="absolute top-2/3 right-1/4 w-56 h-56 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            filter: "blur(25px)",
          }}
        />

        {/* Micro Bubble 1 */}
        <motion.div
          animate={{
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
          className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full opacity-35"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Micro Bubble 2 */}
        <motion.div
          animate={{
            x: [0, -30, 50, 20, 0],
            y: [0, 40, -20, 60, 0],
            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
          className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full opacity-30"
          style={{
            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            filter: "blur(15px)",
          }}
        />

        {/* Additional Smart Bubbles */}
        <motion.div
          animate={{
            x: [0, 80, -40, 60, 0],
            y: [0, -60, 40, -20, 0],
            scale: [1, 0.8, 1.3, 0.9, 1],
            rotate: [0, -90, -180, -270, -360],
          }}
          transition={{
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -8,
          }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #667eea 20%, #764ba2 80%)",
            filter: "blur(35px)",
          }}
        />

        <motion.div
          animate={{
            x: [0, -60, 30, -40, 0],
            y: [0, 50, -80, 30, 0],
            scale: [0.9, 1.2, 0.7, 1.1, 0.9],
          }}
          transition={{
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -10,
          }}
          className="absolute bottom-10 right-10 w-36 h-36 rounded-full opacity-25"
          style={{
            background: "linear-gradient(135deg, #4facfe 10%, #00f2fe 90%)",
            filter: "blur(32px)",
          }}
        />

        {/* Floating Particles */}
        <motion.div
          animate={{
            y: [-10, 10, -10],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/5 left-1/5 w-2 h-2 bg-white/40 rounded-full"
          style={{ filter: "blur(1px)" }}
        />

        <motion.div
          animate={{
            y: [10, -10, 10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
          className="absolute top-3/5 right-1/5 w-3 h-3 bg-blue-300/30 rounded-full"
          style={{ filter: "blur(2px)" }}
        />

        <motion.div
          animate={{
            y: [-5, 15, -5],
            x: [0, 5, 0],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-300/50 rounded-full"
          style={{ filter: "blur(1px)" }}
        />

        <motion.div
          animate={{
            y: [8, -12, 8],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
          className="absolute top-1/6 right-1/3 w-2 h-2 bg-pink-300/40 rounded-full"
          style={{ filter: "blur(1px)" }}
        />

        <motion.div
          animate={{
            y: [-6, 14, -6],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 9,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
          className="absolute bottom-1/6 left-2/3 w-3 h-3 bg-cyan-300/35 rounded-full"
          style={{ filter: "blur(2px)" }}
        />
      </div>

      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-pink-400/15 to-orange-400/15 rounded-full blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-2xl"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg mb-8 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-blue-500 mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Welcome to my creative world</span>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 transition-all duration-500">
              <img
                src="/placeholder.svg?height=160&width=160&text=MG"
                alt="Misha Gholami"
                className="w-full h-full rounded-full object-cover bg-white transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Smart Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="inline-block"
              >
                Misha
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="inline-block"
              >
                Gholami
              </motion.span>
            </h1>

            {/* Smart Dynamic Role with Typing Effect */}
            <div className="text-2xl md:text-3xl mb-6 min-h-[3rem] flex items-center justify-center">
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-600 mr-3"
              >
                I'm a
              </motion.span>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold inline-block min-w-[300px] text-left">
                {displayText}
                <span className="animate-pulse text-blue-500">|</span>
              </span>
            </div>

            {/* Smart Dynamic Description */}
            <div className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
                Passionate about{" "}
              </motion.span>
              <span
                key={currentSkill}
                className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium"
              >
                {skills[currentSkill]}
              </span>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.4 }}>
                {" "}
                through user-centered design, creative illustration, and thoughtful problem-solving.
              </motion.span>
            </div>

            {/* Smart Stats Counter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="flex justify-center space-x-8 mb-10"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.8, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  50+
                </motion.div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.0, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  3+
                </motion.div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.2, type: "spring", stiffness: 200 }}
                  className="text-2xl font-bold text-blue-600"
                >
                  100%
                </motion.div>
                <div className="text-sm text-gray-600">Passion</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Buttons with Staggered Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#projects")}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="relative z-10">View My Work</span>
              <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1 relative z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("#contact")}
              className="group px-8 py-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Mail className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Get In Touch</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-full transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              <span>Download Resume</span>
            </motion.a>
          </motion.div>

          {/* Social Links with Enhanced Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.6 }}
            className="flex justify-center space-x-6 mb-16"
          >
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/mishagholami",
                label: "LinkedIn",
                color: "hover:text-blue-600",
                bgColor: "group-hover:bg-blue-50",
              },
              {
                icon: Github,
                href: "https://github.com/mishagholami",
                label: "GitHub",
                color: "hover:text-gray-800",
                bgColor: "group-hover:bg-gray-50",
              },
              {
                icon: Dribbble,
                href: "https://dribbble.com/mishagholami",
                label: "Dribbble",
                color: "hover:text-pink-600",
                bgColor: "group-hover:bg-pink-50",
              },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 2.8 + index * 0.1, type: "spring", stiffness: 200 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group ${social.color} transition-all duration-300`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:shadow-xl ${social.bgColor}`}
                  >
                    <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Smart Scroll Indicator with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.2 }}
          >
            <motion.button
              onClick={() => scrollToSection("#about")}
              className="inline-flex flex-col items-center text-gray-400 hover:text-blue-600 transition-all duration-500 group"
              whileHover={{ y: -5 }}
            >
              <span className="text-sm font-medium mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Scroll to explore my journey
              </span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-blue-600 transition-all duration-300 group-hover:shadow-lg">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="w-1 h-3 bg-gray-400 rounded-full mt-2 group-hover:bg-blue-600 transition-colors duration-300"
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Floating Text Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-5">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-6xl font-bold text-gray-100 opacity-5 select-none"
        >
          UX
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/4 right-10 text-6xl font-bold text-gray-100 opacity-5 select-none"
        >
          UI
        </motion.div>
        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/4 text-4xl font-bold text-gray-100 opacity-5 select-none"
        >
          Design
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/3 text-4xl font-bold text-gray-100 opacity-5 select-none"
        >
          Create
        </motion.div>
      </div>
    </section>
  )
}

// Default export for compatibility
export default HeroSection
