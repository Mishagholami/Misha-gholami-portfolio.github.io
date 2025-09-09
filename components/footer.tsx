"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter, ArrowUp, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [showTooltip, setShowTooltip] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-brown-900 text-cream-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Misha Gholami</h3>
            <p className="text-cream-200 mb-6 max-w-md">
              UX Designer & Researcher passionate about creating meaningful digital experiences that solve real problems
              and delight users.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-cream-200 hover:text-cream-50 hover:bg-brown-800">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-cream-200 hover:text-cream-50 hover:bg-brown-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-cream-200 hover:text-cream-50 hover:bg-brown-800">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-cream-200 hover:text-cream-50 hover:bg-brown-800">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-cream-200 hover:text-cream-50 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-cream-200 hover:text-cream-50 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-cream-200 hover:text-cream-50 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-cream-200 hover:text-cream-50 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-cream-200">
              <li>Vancouver, BC</li>
              <li>hello@mishagholami.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brown-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream-200 text-sm">© 2024 Misha Gholami. All rights reserved.</p>

          {/* Back to Top */}
          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-cream-200 hover:text-cream-50 hover:bg-brown-800 mt-4 md:mt-0"
          >
            <ArrowUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* AI Credit Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-4 right-4"
      >
        <div className="relative" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-brown-800/80 backdrop-blur-sm border border-brown-700/50 rounded-full px-3 py-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-xs text-cream-200 font-medium">Built with AI</span>
          </motion.div>

          {/* Tooltip */}
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-full right-0 mb-2 w-64 bg-brown-800 border border-brown-700 rounded-lg p-3 shadow-lg"
            >
              <p className="text-xs text-cream-200 leading-relaxed">
                I designed this portfolio with creative and technical support from AI tools.
              </p>
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-brown-800"></div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </footer>
  )
}
