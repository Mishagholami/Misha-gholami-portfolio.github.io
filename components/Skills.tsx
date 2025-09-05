"use client"

import { motion } from "framer-motion"
import { Palette, Lightbulb, Code } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 90 },
        { name: "User Research", level: 80 },
        { name: "UX Design", level: 85 },
        { name: "Typography", level: 88 },
        { name: "Adobe Illustrator", level: 92 },
      ],
    },
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 95 },
        { name: "JavaScript", level: 88 },
        { name: "React", level: 85 },
        { name: "Responsive Design", level: 90 },
      ],
    },
    {
      icon: Lightbulb,
      title: "Creative Tech & Tools",
      skills: [
        { name: "AI Tools", level: 85 },
        { name: "Design Systems", level: 88 },
        { name: "Generative AI", level: 82 },
        { name: "Creative Workflows", level: 90 },
        { name: "Prototyping", level: 87 },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 bg-cream-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-brown-800 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-brown-600 max-w-2xl mx-auto">
            A unique blend of design expertise and technical skills, bridging creativity with code to deliver
            exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-cream-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-brown-200 rounded-xl flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-brown-700" />
                </div>
                <h3 className="text-2xl font-bold text-brown-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-brown-700">{skill.name}</span>
                      <span className="text-sm text-brown-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-brown-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3,
                          ease: "easeOut",
                        }}
                        className="bg-brown-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
