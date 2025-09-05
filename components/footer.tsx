"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Dribbble, Heart, ArrowUp } from "lucide-react"

function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
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
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Gallery", href: "#gallery" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Smart Blurred Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Primary Bubble */}
        <motion.div
          className="absolute top-20 right-32 w-96 h-96 rounded-full opacity-10"
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
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Medium Secondary Bubble */}
        <motion.div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-15"
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
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -3,
          }}
        />

        {/* Small Accent Bubble 1 */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full opacity-20"
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
            duration: 22,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -5,
          }}
        />

        {/* Small Accent Bubble 2 */}
        <motion.div
          className="absolute top-2/3 right-1/4 w-56 h-56 rounded-full opacity-12"
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
            duration: 28,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -8,
          }}
        />

        {/* Micro Bubble 1 */}
        <motion.div
          className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full opacity-25"
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
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        />

        {/* Micro Bubble 2 */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full opacity-18"
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
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -6,
          }}
        />

        {/* Additional Smart Bubble 1 */}
        <motion.div
          className="absolute top-1/2 left-1/6 w-40 h-40 rounded-full opacity-14"
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
            duration: 26,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />

        {/* Additional Smart Bubble 2 */}
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-36 h-36 rounded-full opacity-16"
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
            duration: 24,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -4,
          }}
        />

        {/* Floating Particles */}
        <motion.div
          className="absolute top-1/5 left-1/5 w-2 h-2 bg-white/20 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 10, -5, 0],
            y: [0, -15, 8, 0],
            opacity: [0.2, 0.4, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-3/5 right-1/5 w-3 h-3 bg-blue-300/20 rounded-full"
          style={{ filter: "blur(2px)" }}
          animate={{
            x: [0, -8, 12, 0],
            y: [0, 20, -10, 0],
            opacity: [0.15, 0.35, 0.05, 0.15],
          }}
          transition={{
            duration: 14,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-300/30 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 6, -4, 0],
            y: [0, -12, 16, 0],
            opacity: [0.3, 0.5, 0.15, 0.3],
          }}
          transition={{
            duration: 16,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute bottom-1/5 left-2/3 w-2 h-2 bg-pink-300/25 rounded-full"
          style={{ filter: "blur(1.5px)" }}
          animate={{
            x: [0, -12, 8, 0],
            y: [0, 14, -6, 0],
            opacity: [0.25, 0.4, 0.1, 0.25],
          }}
          transition={{
            duration: 13,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute top-1/6 right-2/5 w-1.5 h-1.5 bg-green-300/20 rounded-full"
          style={{ filter: "blur(1px)" }}
          animate={{
            x: [0, 9, -7, 0],
            y: [0, -18, 11, 0],
            opacity: [0.2, 0.4, 0.08, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-8">Misha Gholami</h3>
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md">
                Creating meaningful digital experiences through thoughtful design and innovative development. Let's
                build something amazing together.
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith("mailto:") ? "_self" : "_blank"}
                      rel={social.href.startsWith("mailto:") ? "" : "noopener noreferrer"}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-8">Quick Links</h4>
              <nav className="space-y-6">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 4 }}
                    className="block text-gray-300 hover:text-white transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </motion.button>
                ))}
              </nav>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-8">Get In Touch</h4>
              <div className="space-y-6">
                <motion.a
                  href="mailto:hello@mishagholami.com"
                  whileHover={{ x: 4 }}
                  className="block text-gray-300 hover:text-white transition-colors duration-300"
                >
                  hello@mishagholami.com
                </motion.a>
                <motion.p
                  whileHover={{ x: 4 }}
                  className="text-gray-300 cursor-default transition-transform duration-300"
                >
                  Vancouver, BC
                </motion.p>
                <motion.p
                  whileHover={{ x: 4 }}
                  className="text-gray-300 cursor-default transition-transform duration-300"
                >
                  Available for freelance
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm"
            >
              © {currentYear} Misha Gholami. All rights reserved.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-sm"
            >
              Made with <Heart className="w-4 h-4 mx-2 text-red-500" fill="currentColor" /> in Vancouver
            </motion.div>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full text-sm font-medium transition-colors duration-200 group"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

// Default export
export default Footer

// Named export for compatibility
export { Footer }
