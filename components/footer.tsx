"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gray-900 text-white py-12 overflow-hidden">
      {/* Smart Blurred Bubbles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-30"
            style={{
              background: `linear-gradient(45deg, 
                ${i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#d97706" : "#ea580c"}, 
                ${i % 3 === 0 ? "#d97706" : i % 3 === 1 ? "#ea580c" : "#dc2626"})`,
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 0.5 + 0.8, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8 mt-8"
          >
            <h3 className="text-2xl font-bold mb-4 mt-8">Misha Gholami</h3>
            <p className="text-gray-300 mb-6 mt-8">UX Designer & Frontend Developer based in Vancouver, BC</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8 mt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 flex items-center mb-4 md:mb-0 mt-8">
                Made with <Heart className="w-4 h-4 mx-2 text-red-500" /> in Vancouver
              </p>

              <div className="flex items-center space-x-6 mt-8">
                <p className="text-gray-400">© 2024 Misha Gholami. All rights reserved.</p>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-amber-500 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors"
                >
                  <ArrowUp className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
