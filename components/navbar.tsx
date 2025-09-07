"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover-scale"
            >
              <img src="/placeholder-logo.svg" alt="Logo" className="w-8 h-8 object-contain" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`nav-link ${activeSection === item.href.substring(1) ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover-scale"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-lg shadow-lg">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`block w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300 hover-lift ${
                    activeSection === item.href.substring(1)
                      ? "text-primary bg-primary/10 border-r-2 border-primary"
                      : "text-gray-600 hover:text-primary hover:bg-gray-50"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
