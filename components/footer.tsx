"use client"

import { useState, useEffect } from "react"
import { Heart, ArrowUp, Mail, Phone, MapPin, Linkedin, Github, Dribbble, Instagram } from "lucide-react"

export function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

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
        <div
          className="absolute top-20 right-32 w-96 h-96 rounded-full opacity-20 animate-float-complex-1"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(40px)",
          }}
        />

        {/* Medium Secondary Bubble */}
        <div
          className="absolute bottom-40 left-20 w-80 h-80 rounded-full opacity-25 animate-float-complex-2"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(35px)",
          }}
        />

        {/* Small Accent Bubble 1 */}
        <div
          className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full opacity-30 animate-float-complex-3"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(30px)",
          }}
        />

        {/* Small Accent Bubble 2 */}
        <div
          className="absolute top-2/3 right-1/4 w-56 h-56 rounded-full opacity-25 animate-float-complex-4"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            filter: "blur(25px)",
          }}
        />

        {/* Micro Bubble 1 */}
        <div
          className="absolute top-1/4 right-1/3 w-24 h-24 rounded-full opacity-35 animate-float-complex-5"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            filter: "blur(20px)",
          }}
        />

        {/* Micro Bubble 2 */}
        <div
          className="absolute bottom-1/3 left-1/3 w-32 h-32 rounded-full opacity-30 animate-float-complex-6"
          style={{
            background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
            filter: "blur(15px)",
          }}
        />

        {/* Floating Particles */}
        <div
          className="absolute top-1/5 left-1/5 w-2 h-2 bg-white/40 rounded-full animate-pulse"
          style={{ filter: "blur(1px)" }}
        />
        <div
          className="absolute top-3/5 right-1/5 w-3 h-3 bg-blue-300/30 rounded-full animate-pulse"
          style={{ filter: "blur(2px)", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-300/50 rounded-full animate-pulse"
          style={{ filter: "blur(1px)", animationDelay: "2s" }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 animate-fade-in-up">
            <div className="mb-6">
              <h3 className="text-3xl font-serif font-bold text-white mb-4 hover-lift">Misha Gholami</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Creating meaningful digital experiences through thoughtful design, creative illustration, and
                user-centered solutions.
              </p>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com/in/mishagholami",
                    label: "LinkedIn",
                    color: "hover:text-blue-400",
                  },
                  {
                    icon: Github,
                    href: "https://github.com/mishagholami",
                    label: "GitHub",
                    color: "hover:text-gray-300",
                  },
                  {
                    icon: Dribbble,
                    href: "https://dribbble.com/mishagholami",
                    label: "Dribbble",
                    color: "hover:text-pink-400",
                  },
                  {
                    icon: Instagram,
                    href: "https://instagram.com/mishagholami",
                    label: "Instagram",
                    color: "hover:text-purple-400",
                  },
                ].map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-gray-400 transition-all duration-300 hover-lift hover:scale-110 hover:shadow-lg ${social.color}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      aria-label={social.label}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up stagger-1">
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "Gallery", href: "#gallery" },
                { name: "Skills", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up stagger-2">
            <h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <Mail className="h-5 w-5 text-blue-400" />
                <span>hello@mishagholami.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+1 (604) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 hover-lift">
                <MapPin className="h-5 w-5 text-red-400" />
                <span>Vancouver, BC</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 animate-fade-in-up stagger-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>by Misha Gholami</span>
              <span>© {currentYear}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="group flex items-center space-x-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300 hover-lift hover:scale-105"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-gray-900/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gray-900/50 to-transparent" />
      </div>
    </footer>
  )
}
