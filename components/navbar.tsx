"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"
  const isProjectPage = pathname.startsWith("/projects/")

  const navItems = [
    { name: "Home", href: "/", icon: Home, id: "home" },
    { name: "About", href: isHomePage ? "#about" : "/#about", icon: User, id: "about" },
    { name: "Projects", href: isHomePage ? "#projects" : "/#projects", icon: Briefcase, id: "projects" },
    { name: "Contact", href: isHomePage ? "#contact" : "/#contact", icon: Mail, id: "contact" },
  ]

  const handleNavClick = (href: string, id: string) => {
    setIsOpen(false)

    if (isHomePage && href.startsWith("#")) {
      // On homepage, smooth scroll to section
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
    // For project pages or external navigation, let Next.js handle the routing
  }

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || isProjectPage
            ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-brown-200/20"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-brown-600 to-brown-800 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-sm">MG</span>
              </div>
              <span className="font-bold text-brown-900 text-lg hidden sm:block group-hover:text-brown-700 transition-colors duration-200">
                Misha Gholami
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("#")) {
                      e.preventDefault()
                      handleNavClick(item.href, item.id)
                    }
                  }}
                  className={`text-brown-700 hover:text-brown-900 transition-colors duration-200 font-medium relative group ${
                    (isHomePage && pathname === "/" && item.href === "/") || (isProjectPage && item.id === "projects")
                      ? "text-brown-900"
                      : ""
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brown-600 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-brown-700 hover:text-brown-900 hover:bg-brown-100/50"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

            {/* Menu Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-white/95 backdrop-blur-md shadow-xl border-l border-brown-200/30"
            >
              <div className="flex flex-col h-full pt-20 px-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.startsWith("#")) {
                          e.preventDefault()
                          handleNavClick(item.href, item.id)
                        } else {
                          setIsOpen(false)
                        }
                      }}
                      className={`flex items-center space-x-3 py-4 text-brown-700 hover:text-brown-900 transition-colors duration-200 border-b border-brown-200/30 last:border-b-0 ${
                        (isHomePage && pathname === "/" && item.href === "/") ||
                        (isProjectPage && item.id === "projects")
                          ? "text-brown-900 font-medium"
                          : ""
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                {/* Mobile Menu Footer */}
                <div className="mt-auto pb-6">
                  <div className="text-center text-sm text-brown-600">
                    <p>© 2024 Misha Gholami</p>
                    <p className="mt-1">UX Designer & Developer</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
