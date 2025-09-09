"use client"

import { motion } from "framer-motion"
import { Award, Users, Coffee, Heart } from "lucide-react"

const stats = [
  { icon: Award, label: "Years Experience", value: "3+" },
  { icon: Users, label: "Projects Completed", value: "25+" },
  { icon: Coffee, label: "Cups of Coffee", value: "500+" },
  { icon: Heart, label: "Happy Clients", value: "15+" },
]

const journey = [
  {
    year: "2021",
    title: "Started UX Journey",
    description: "Began exploring user experience design through online courses and personal projects.",
  },
  {
    year: "2022",
    title: "First Design Role",
    description: "Joined a startup as a junior UX designer, working on mobile app interfaces.",
  },
  {
    year: "2023",
    title: "Frontend Development",
    description: "Expanded skills to include frontend development, bridging design and code.",
  },
  {
    year: "2024",
    title: "Full-Stack Designer",
    description: "Now working as a full-stack designer, handling projects from research to deployment.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate UX designer and frontend developer who believes in creating digital experiences that are
            both beautiful and functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                My journey into UX design began with a simple question: "Why is this so hard to use?" This curiosity led
                me to explore the intersection of psychology, technology, and design.
              </p>
              <p>
                I believe that great design is invisible – it solves problems so elegantly that users don't even notice
                the complexity behind it. My approach combines thorough user research with creative problem-solving to
                create experiences that truly serve people's needs.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring Vancouver's coffee shops, hiking local
                trails, or experimenting with new design tools and techniques.
              </p>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg?height=500&width=400&text=About+Me+Photo"
                alt="Misha Gholami working"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">My Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-amber-200 hidden md:block" />

            <div className="space-y-12">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} text-center md:text-left`}
                  >
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-amber-600 font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-amber-500 rounded-full border-4 border-white shadow-lg z-10 hidden md:block" />

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
