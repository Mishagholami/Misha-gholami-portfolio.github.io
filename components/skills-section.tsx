"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Palette, Search, Code, BarChart, Lightbulb } from "lucide-react"

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const skills = [
    {
      category: "UX Research",
      icon: Search,
      skills: [
        { name: "User Interviews", level: 95 },
        { name: "Usability Testing", level: 90 },
        { name: "Survey Design", level: 85 },
        { name: "Data Analysis", level: 88 },
      ],
    },
    {
      category: "Design",
      icon: Palette,
      skills: [
        { name: "UI Design", level: 92 },
        { name: "Prototyping", level: 90 },
        { name: "Design Systems", level: 88 },
        { name: "Accessibility", level: 85 },
      ],
    },
    {
      category: "Development",
      icon: Code,
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "JavaScript", level: 78 },
        { name: "Responsive Design", level: 90 },
      ],
    },
  ]

  const tools = [
    "Figma",
    "Adobe Creative Suite",
    "Sketch",
    "Principle",
    "Framer",
    "Miro",
    "Notion",
    "Maze",
    "Hotjar",
    "Google Analytics",
    "Zoom",
    "Slack",
  ]

  return (
    <section id="skills" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">Skills & Expertise</h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit built through years of hands-on experience in user research, design, and
              development.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {skills.map((category, index) => (
              <motion.div key={category.category} variants={itemVariants}>
                <Card className="h-full border-brown-200/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <category.icon className="w-8 h-8 text-brown-600 mr-3" />
                      <h3 className="text-xl font-semibold text-brown-900">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.skills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-brown-700 font-medium">{skill.name}</span>
                            <span className="text-brown-600 text-sm">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Process */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-brown-900 text-center mb-12">My Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Search,
                  title: "Research",
                  description: "Understanding users, market, and constraints through comprehensive research methods.",
                },
                {
                  icon: Lightbulb,
                  title: "Ideate",
                  description: "Generating creative solutions through brainstorming and collaborative workshops.",
                },
                {
                  icon: Palette,
                  title: "Design",
                  description: "Creating intuitive interfaces with careful attention to usability and aesthetics.",
                },
                {
                  icon: BarChart,
                  title: "Validate",
                  description: "Testing designs with real users and iterating based on feedback and data.",
                },
              ].map((step, index) => (
                <Card key={step.title} className="border-brown-200/50 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-brown-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-brown-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-brown-900 mb-3">{step.title}</h4>
                    <p className="text-brown-700 text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-3xl font-bold text-brown-900 mb-8">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-brown-700 border-brown-300 px-4 py-2">
                  {tool}
                </Badge>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
