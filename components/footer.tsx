"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/mishagholami",
    icon: Linkedin,
    hoverColor: "hover:text-blue-600",
  },
  {
    name: "GitHub",
    href: "https://github.com/mishagholami",
    icon: Github,
    hoverColor: "hover:text-gray-800",
  },
  {
    name: "Email",
    href: "mailto:hello@mishagholami.com",
    icon: Mail,
    hoverColor: "hover:text-red-600",
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-cream-100 border-t border-brown-200/30 relative overflow-hidden">
      {/* Smart Blurred Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Primary Bubble */}
        <motion.div
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -80, 40, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-[40px]"
        />

        {/* Medium Secondary Bubble */}
        <motion.div
          animate={{
            x: [0, -120, 80, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.7, 1.3, 1],
            rotate: [0, -90, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-pink-400/25 to-red-400/25 rounded-full blur-[35px]"
        />

        {/* Small Accent Bubble 1 */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.4, 0.6, 1],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 10,
          }}
          className="absolute bottom-32 left-32 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[25px]"
        />

        {/* Small Accent Bubble 2 */}
        <motion.div
          animate={{
            x: [0, -40, 70, 0],
            y: [0, 50, -25, 0],
            scale: [1, 0.8, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 7,
          }}
          className="absolute bottom-20 right-40 w-14 h-14 bg-gradient-to-br from-yellow-400/15 to-orange-400/15 rounded-full blur-[30px]"
        />

        {/* Micro Bubble 1 */}
        <motion.div
          animate={{
            x: [0, 30, -15, 0],
            y: [0, -20, 10, 0],
            scale: [1, 1.5, 0.5, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 12,
          }}
          className="absolute top-40 left-1/4 w-6 h-6 bg-gradient-to-br from-teal-400/25 to-green-400/25 rounded-full blur-[20px]"
        />

        {/* Micro Bubble 2 */}
        <motion.div
          animate={{
            x: [0, -25, 35, 0],
            y: [0, 30, -15, 0],
            scale: [1, 0.6, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-60 right-1/3 w-8 h-8 bg-gradient-to-br from-orange-400/20 to-red-500/20 rounded-full blur-[25px]"
        />

        {/* Additional Smart Bubble 1 */}
        <motion.div
          animate={{
            x: [0, 80, -40, 0],
            y: [0, -60, 30, 0],
            scale: [1, 1.1, 0.9, 1],
            rotate: [0, 270, 180, 0],
          }}
          transition={{
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 8,
          }}
          className="absolute bottom-40 left-1/2 w-10 h-10 bg-gradient-to-br from-pink-300/20 to-purple-400/20 rounded-full blur-[30px]"
        />

        {/* Additional Smart Bubble 2 */}
        <motion.div
          animate={{
            x: [0, -50, 25, 0],
            y: [0, 40, -20, 0],
            scale: [1, 0.7, 1.2, 1],
          }}
          transition={{
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 15,
          }}
          className="absolute top-1/2 right-1/4 w-9 h-9 bg-gradient-to-br from-purple-400/15 to-indigo-500/15 rounded-full blur-[28px]"
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 2,
            }}
            className="absolute w-1 h-1 bg-white/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-brown-800 mb-8">Misha Gholami</h3>
              <p className="text-brown-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Creative Developer & Illustrator crafting interactive experiences that blend thoughtful design with
                robust development.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-lg font-semibold text-brown-800 mb-8">Quick Links</h4>
              <nav className="flex flex-wrap justify-center gap-6">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ y: -2 }}
                    className="text-brown-600 hover:text-brown-800 text-sm font-medium transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center md:text-right">
              <h4 className="text-lg font-semibold text-brown-800 mb-8">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-6 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-brown-200 hover:bg-brown-300 rounded-full flex items-center justify-center text-brown-700 ${social.hoverColor} transition-all duration-200 group`}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              <p className="text-brown-600 text-sm">
                <a href="mailto:hello@mishagholami.com" className="hover:text-brown-800 transition-colors duration-200">
                  hello@mishagholami.com
                </a>
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div variants={itemVariants} className="border-t border-brown-200/50 pt-12">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Copyright */}
              <div className="flex flex-col sm:flex-row items-center text-brown-600 text-sm space-y-2 sm:space-y-0">
                <span>© {new Date().getFullYear()} Misha Gholami. All rights reserved.</span>
                <span className="hidden sm:inline mx-2">•</span>
                <span className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> in Vancouver
                </span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full text-sm font-medium transition-colors duration-200 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-brown-400 rounded-full"></div>
        <div className="absolute top-8 right-12 w-1 h-1 bg-brown-300 rounded-full"></div>
        <div className="absolute bottom-6 left-8 w-1.5 h-1.5 bg-brown-400 rounded-full"></div>
        <div className="absolute bottom-4 right-6 w-2 h-2 bg-brown-300 rounded-full"></div>
      </div>
    </footer>
  )
}

// Export both default and named export for compatibility
export { Footer }
