"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    if (isMobile) return

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20)
      cursorY.set(e.clientY - 20)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"], .hover-cursor, .project-card, .nav-link, .btn, input, textarea, select',
      )

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true))
        el.addEventListener("mouseleave", () => setIsHovering(false))
      })

      return () => {
        interactiveElements.forEach((el) => {
          el.removeEventListener("mouseenter", () => setIsHovering(true))
          el.removeEventListener("mouseleave", () => setIsHovering(false))
        })
      }
    }

    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    const cleanup = addHoverListeners()

    // Re-add listeners when DOM changes (for dynamic content)
    const observer = new MutationObserver(addHoverListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", checkMobile)
      cleanup()
      observer.disconnect()
    }
  }, [cursorX, cursorY, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Hide default cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        a, button, [role="button"], .hover-cursor, .project-card, .nav-link, .btn, input, textarea, select {
          cursor: none !important;
        }
      `}</style>

      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-mode-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { duration: 0.3, ease: "easeOut" },
        }}
      >
        {/* Main cursor circle */}
        <motion.div
          className="relative"
          animate={{
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            rotate: { duration: 0.6, ease: "easeInOut" },
          }}
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              width: "40px",
              height: "40px",
              background:
                "radial-gradient(circle, rgba(139, 69, 19, 0.3) 0%, rgba(139, 69, 19, 0.1) 50%, transparent 70%)",
              filter: "blur(8px)",
            }}
            animate={{
              scale: isHovering ? 1.8 : 1,
              opacity: isHovering ? 0.8 : 0.4,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {/* Main cursor circle */}
          <motion.div
            className="relative rounded-full border-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundColor: "rgba(139, 69, 19, 0.2)",
              borderColor: "rgba(139, 69, 19, 0.6)",
              backdropFilter: "blur(10px)",
            }}
            animate={{
              backgroundColor: isHovering ? "rgba(139, 69, 19, 0.4)" : "rgba(139, 69, 19, 0.2)",
              borderColor: isHovering ? "rgba(139, 69, 19, 0.9)" : "rgba(139, 69, 19, 0.6)",
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {/* Inner dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                width: "6px",
                height: "6px",
                backgroundColor: "rgba(139, 69, 19, 0.8)",
              }}
              animate={{
                scale: isHovering ? 0 : 1,
                opacity: isHovering ? 0 : 1,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            />

            {/* Hover state plus icon */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{
                scale: isHovering ? 1 : 0,
                opacity: isHovering ? 1 : 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <div
                className="relative"
                style={{
                  width: "12px",
                  height: "2px",
                  backgroundColor: "rgba(139, 69, 19, 0.9)",
                }}
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: "2px",
                  height: "12px",
                  backgroundColor: "rgba(139, 69, 19, 0.9)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Trailing particles */}
          {isHovering && (
            <>
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: "4px",
                  height: "4px",
                  backgroundColor: "rgba(139, 69, 19, 0.6)",
                }}
                animate={{
                  x: [-20, -15, -10],
                  y: [-10, 5, -5],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  width: "3px",
                  height: "3px",
                  backgroundColor: "rgba(139, 69, 19, 0.4)",
                }}
                animate={{
                  x: [15, 20, 25],
                  y: [8, -3, 12],
                  opacity: [0, 0.6, 0],
                  scale: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              />
            </>
          )}
        </motion.div>
      </motion.div>
    </>
  )
}
