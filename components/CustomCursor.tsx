"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    if (!isMobile) {
      document.addEventListener("mousemove", updateMousePosition)

      // Add hover listeners to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select')
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })

      return () => {
        document.removeEventListener("mousemove", updateMousePosition)
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", handleMouseEnter)
          el.removeEventListener("mouseleave", handleMouseLeave)
        })
        window.removeEventListener("resize", checkMobile)
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-amber-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Trailing cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-amber-600 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2 : 1,
          opacity: isHovering ? 0.6 : 0.3,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />

      {/* Hover indicator */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-50"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 25,
          }}
        >
          <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
          </div>
        </motion.div>
      )}
    </>
  )
}
