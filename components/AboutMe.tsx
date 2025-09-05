"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Palette, Users, Brain, Ruler, BookOpen } from "lucide-react"

export default function AboutMe() {
  const interests = [
    {
      emoji: "🎨",
      icon: Palette,
      label: "Creativity",
      description: "Bringing unique ideas to life through code and design",
    },
    {
      emoji: "♿",
      icon: Users,
      label: "Accessibility",
      description: "Creating inclusive experiences for everyone",
    },
    {
      emoji: "🧠",
      icon: Brain,
      label: "Human-centered design",
      description: "Putting people at the heart of every solution",
    },
    {
      emoji: "📐",
      icon: Ruler,
      label: "Design-first thinking",
      description: "Starting with user needs and aesthetic vision",
    },
    {
      emoji: "📖",
      icon: BookOpen,
      label: "Storytelling through interaction",
      description: "Crafting narratives that engage and inspire",
    },
  ]

  return (
    <section className="py-20 px-4 bg-cream-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brown-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-3xl overflow-hidden shadow-2xl bg-brown-200 relative">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Misha Gholami - Creative Developer and Illustrator"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown-900/20 to-transparent"></div>
              </div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.6 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-brown-300 rounded-full flex items-center justify-center shadow-xl border-4 border-cream-100"
              >
                <Palette className="w-12 h-12 text-brown-700" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-brown-700 leading-relaxed"
              >
                Hi, I'm <span className="font-semibold text-brown-800">Misha Gholami</span> — a creative developer,
                illustrator, and interaction design student at{" "}
                <span className="font-semibold text-brown-800">Capilano University</span>. I love combining code and
                design to craft immersive, interactive, and aesthetic web experiences that tell stories and feel
                personal. You can connect with me and see my professional journey on{" "}
                <a
                  href="https://linkedin.com/in/mishagholami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brown-600 hover:text-brown-800 underline decoration-brown-400 underline-offset-2 hover:decoration-brown-600 transition-colors duration-200"
                >
                  LinkedIn
                </a>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg text-brown-700 leading-relaxed"
              >
                My approach blends technical expertise with creative vision, always keeping the human experience at the
                center of everything I create. Whether it's a complex web application or a simple illustration, I
                believe in the power of thoughtful design to make technology more accessible and delightful.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="https://linkedin.com/in/mishagholami"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-brown-600 hover:bg-brown-700 text-cream-50 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </motion.a>

              <motion.a
                href="mailto:hello@mishagholami.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-cream-50 hover:bg-cream-100 text-brown-700 font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-brown-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Say Hello
              </motion.a>
            </motion.div>

            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl font-bold text-brown-800 mb-6"
              >
                What Drives Me
              </motion.h3>

              <div className="space-y-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    whileHover={{ x: 8, transition: { duration: 0.2 } }}
                    className="bg-cream-50 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-brown-100/50 group cursor-pointer"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-brown-200 rounded-xl flex items-center justify-center group-hover:bg-brown-300 transition-colors duration-300">
                          <span className="text-2xl" role="img" aria-label={interest.label}>
                            {interest.emoji}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-brown-800 mb-1 group-hover:text-brown-900 transition-colors">
                          {interest.label}
                        </h4>
                        <p className="text-brown-600 text-sm leading-relaxed group-hover:text-brown-700 transition-colors">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
