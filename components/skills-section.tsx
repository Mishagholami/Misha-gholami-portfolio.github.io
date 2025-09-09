"use client"

import { motion } from "framer-motion"
import { Code, Palette, Search, Users } from "lucide-react"

const skillCategories = [
  {
    title: "UX Research",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
    skills: [
      { name: "User Interviews", level: 90 },
      { name: "Usability Testing", level: 85 },
      { name: "Survey Design", level: 80 },
      { name: "Data Analysis", level: 75 },
    ],
  },
  {
    title: "UI Design",
    icon: Palette,
    color: "bg-purple-100 text-purple-600",
    skills: [
      { name: "Figma", level: 95 },
      { name: "Adobe Creative Suite", level: 80 },
      { name: "Prototyping", level: 90 },
      { name: "Design Systems", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Code,
    color: "bg-green-100 text-green-600",
    skills: [
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    title: "Collaboration",
    icon: Users,
    color: "bg-orange-100 text-orange-600",
    skills: [
      { name: "Cross-functional Teams", level: 90 },
      { name: "Client Communication", level: 85 },
      { name: "Workshop Facilitation", level: 80 },
      { name: "Stakeholder Management", level: 75 },
    ],
  },
]

const tools = [
  { name: "Figma", category: "Design" },
  { name: "React", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "Tailwind CSS", category: "Development" },
  { name: "Adobe XD", category: "Design" },
  { name: "Miro", category: "Research" },
  { name: "Notion", category: "Productivity" },
  { name: "Git", category: "Development" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning user research, design, and development to create end-to-end digital
            experiences.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-gray-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all cursor-default"
              >
                <span className="text-gray-700 font-medium">{tool.name}</span>
                <span className="text-gray-400 text-sm ml-2">• {tool.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection
