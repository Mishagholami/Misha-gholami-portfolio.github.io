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
    <footer className="bg-cream-100 border-t border-brown-200/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-12"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-brown-800 mb-3">Misha Gholami</h3>
              <p className="text-brown-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Creative Developer & Illustrator crafting interactive experiences that blend thoughtful design with
                robust development.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="text-lg font-semibold text-brown-800 mb-4">Quick Links</h4>
              <nav className="flex flex-wrap justify-center gap-4">
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
              <h4 className="text-lg font-semibold text-brown-800 mb-4">Connect</h4>
              <div className="flex justify-center md:justify-end space-x-4 mb-4">
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
          <motion.div variants={itemVariants} className="border-t border-brown-200/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center text-brown-600 text-sm">
                <span>© {new Date().getFullYear()} Misha Gholami. All rights reserved.</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  Made with <Heart className="w-4 h-4 mx-1 text-red-500" fill="currentColor" /> in Vancouver
                </span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-brown-600 hover:bg-brown-700 text-cream-50 rounded-full text-sm font-medium transition-colors duration-200 group"
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
