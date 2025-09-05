"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Download, Mail, Linkedin, Github, Dribbble, Sparkles } from "lucide-react"

const roles = ["UX/UI Designer", "Creative Illustrator", "User Researcher", "Digital Artist", "Brand Designer"]

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
        <div className="floating-element floating-element-3"></div>

        {/* Additional floating elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-2xl animate-float-slow"></div>
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-primary/15 to-secondary/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Welcome Badge */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 shadow-lg mb-8 hover-lift">
              <Sparkles className="w-5 h-5 text-secondary mr-3 animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Welcome to my creative world</span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="mb-8 animate-scale-in stagger-1">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 shadow-2xl hover-glow">
              <img
                src="/placeholder.svg?height=160&width=160&text=MG"
                alt="Misha Gholami"
                className="w-full h-full rounded-full object-cover bg-white transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="animate-fade-in-up stagger-2">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-primary mb-6 leading-tight">Misha Gholami</h1>
            <div className="text-2xl md:text-3xl mb-6 min-h-[3rem] flex items-center justify-center">
              <span className="text-gray-600 mr-3">I'm a</span>
              <span key={currentRole} className="text-gradient font-semibold animate-fade-in-up inline-block">
                {roles[currentRole]}
              </span>
            </div>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Crafting meaningful digital experiences through user-centered design, creative illustration, and
              thoughtful problem-solving. I bring ideas to life with passion, precision, and purpose.
            </p>
          </div>

          {/* CTA Buttons with Staggered Animation */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a href="#projects" className="btn btn-primary animate-fade-in-up stagger-3 hover-lift group">
              View My Work
              <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
            </a>
            <a href="#contact" className="btn btn-secondary animate-fade-in-up stagger-4 hover-lift group">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              className="btn btn-ghost animate-fade-in-up stagger-5 hover-lift group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              Download Resume
            </a>
          </div>

          {/* Social Links with Enhanced Hover Effects */}
          <div className="flex justify-center space-x-6 mb-16">
            {[
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/mishagholami",
                label: "LinkedIn",
                color: "hover:text-blue-600",
              },
              { icon: Github, href: "https://github.com/mishagholami", label: "GitHub", color: "hover:text-gray-800" },
              {
                icon: Dribbble,
                href: "https://dribbble.com/mishagholami",
                label: "Dribbble",
                color: "hover:text-pink-600",
              },
            ].map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`animate-bounce-in hover-lift group ${social.color}`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                  aria-label={social.label}
                >
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 group-hover:shadow-xl group-hover:scale-110">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </a>
              )
            })}
          </div>

          {/* Scroll Indicator with Enhanced Animation */}
          <div className="animate-fade-in-up stagger-8">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-gray-400 hover:text-primary transition-all duration-500 group"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="text-sm font-medium mb-3 group-hover:text-primary transition-colors duration-300">
                Scroll to explore
              </span>
              <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center group-hover:border-primary transition-colors duration-300">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce group-hover:bg-primary transition-colors duration-300"></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
