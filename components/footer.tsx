"use client"

import { Heart, ArrowUp, Mail, Phone, MapPin } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-primary to-primary-dark text-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float-slow"></div>
        <div
          className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl animate-float-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold mb-4 animate-fade-in-up">Misha Gholami</h3>
              <p className="text-white/80 leading-relaxed mb-6 animate-fade-in-up stagger-1">
                A passionate UX/UI designer and creative illustrator dedicated to creating meaningful digital
                experiences through thoughtful design and user research.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 animate-fade-in-up stagger-2">
                <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hello@mishagholami.com</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 (604) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Vancouver, BC</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up stagger-3">
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-white/80 hover:text-white transition-all duration-300 text-sm hover:translate-x-1 block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div className="animate-fade-in-up stagger-4">
              <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
              <p className="text-white/80 mb-4 text-sm">Get notified about new projects and design insights.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all duration-300"
                />
                <button className="btn bg-white text-primary hover:bg-gray-100 hover-scale px-6 py-2 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-white/80 text-sm mb-4 md:mb-0 animate-fade-in-up">
              <span>© {currentYear} Misha Gholami. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" />
              <span>in Vancouver</span>
            </div>

            <div className="flex items-center space-x-6 animate-fade-in-up stagger-1">
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-secondary hover:bg-secondary-light text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover-scale z-50 group"
        title="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto transition-transform group-hover:-translate-y-1" />
      </button>
    </footer>
  )
}
