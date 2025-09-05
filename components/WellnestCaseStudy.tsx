"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Clock, Users, Brain, Heart, Shield, Coffee, Moon, Sun, MessageCircle, Calendar, Target, Globe, Quote, ExternalLink, CheckCircle } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

interface WellnestCaseStudyProps {
  onBack: () => void
}

export default function WellnestCaseStudy({ onBack }: WellnestCaseStudyProps) {
  const { getThemeClasses } = useTheme()
  const theme = getThemeClasses()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const problemPoints = [
    {
      icon: "🔥",
      title: "Burnout & Always-On Pressure",
      description: "Remote workers struggle to disconnect, leading to chronic stress and decreased productivity",
      quote: "I check Slack at 11 PM because I'm afraid I'll miss something important",
      color: "bg-red-50 border-red-200",
    },
    {
      icon: "💬",
      title: "Loss of Casual Team Bonding",
      description: "Missing spontaneous conversations that build relationships and spark creativity",
      quote: "I miss those random coffee conversations where the best ideas happened",
      color: "bg-blue-50 border-blue-200",
    },
    {
      icon: "🌍",
      title: "Communication Across Time Zones",
      description: "Asynchronous work creates delays and misunderstandings in global teams",
      quote: "By the time I respond, my teammates are already asleep",
      color: "bg-green-50 border-green-200",
    },
    {
      icon: "⚡",
      title: "Mismatched Energy Rhythms",
      description: "Traditional 9-5 schedules ignore individual productivity patterns and natural energy cycles",
      quote: "I'm most creative at 6 AM, but all meetings are scheduled for 2 PM",
      color: "bg-yellow-50 border-yellow-200",
    },
  ]

  const researchInsights = [
    {
      icon: Shield,
      title: "Boundary Struggles",
      insight: "Lack of clear boundaries = stress & poor time management",
      description: "78% of remote workers report difficulty separating work and personal life, leading to longer hours and decreased well-being.",
      stat: "78%",
      statLabel: "struggle with work-life boundaries",
    },
    {
      icon: Coffee,
      title: "Social Connection Gap",
      insight: "Users miss informal team interaction",
      description: "Remote workers feel 43% less connected to their colleagues compared to in-office workers, impacting collaboration and job satisfaction.",
      stat: "43%",
      statLabel: "feel less connected to colleagues",
    },
    {
      icon: Clock,
      title: "Productivity Mismatch",
      insight: "Most tools assume 9–5 productivity, ignoring biological rhythms",
      description: "Only 23% of people are most productive during traditional business hours, yet most tools are designed around this assumption.",
      stat: "23%",
      statLabel: "are most productive 9-5",
    },
  ]

  const designInterventions = [
    {
      number: "1",
      emoji: "🛡️",
      title: "Smart Work Boundaries",
      subtitle: "Digital wellness for work",
      problem: "Remote workers struggle to disconnect and maintain healthy work-life balance",
      description: "A system that encourages energy-based time management, clear work hours, intentional log-off, and better notification control.",
      features: [
        "Energy-based scheduling that adapts to your natural rhythms",
        "Gentle wind-down reminders and automatic log-off suggestions",
        "Smart notification filtering based on urgency and context",
        "Boundary visualization showing work/life balance over time",
      ],
      whyItMatters: "Respects human energy cycles and promotes sustainable productivity patterns",
      mockup: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "2",
      emoji: "☕",
      title: "Virtual Breakroom",
      subtitle: "Casual connection without disruption",
      problem: "Teams miss spontaneous interactions that build relationships and spark creativity",
      description: "A lightweight, opt-in chat space for casual interaction—replicating spontaneous office chats without disrupting deep work.",
      features: [
        "Ambient presence indicators showing who's available for casual chat",
        "Topic-based conversation starters and icebreakers",
        "Integration with existing tools (Slack, Teams) without notification overload",
        "Scheduled virtual coffee breaks and informal team activities",
      ],
      whyItMatters: "Maintains team culture and psychological safety in distributed environments",
      mockup: "/placeholder.svg?height=400&width=600",
    },
    {
      number: "3",
      emoji: "🌅",
      title: "Chronotype-Based Scheduling",
      subtitle: "Work with your natural rhythm",
      problem: "Traditional scheduling ignores individual productivity patterns and global team coordination",
      description: "Flexible scheduling based on users' peak productivity times, paired with collaborative tools to coordinate across time zones.",
      features: [
        "Personal chronotype assessment and productivity mapping",
        "Smart meeting scheduling that finds optimal overlap times",
        "Asynchronous collaboration tools for different time zones",
        "Energy-aware task assignment and deadline management",
      ],
      whyItMatters: "Maximizes individual performance while maintaining team cohesion",
      mockup: "/placeholder.svg?height=400&width=600",
    },
  ]

  const coreValues = [
    {
      icon: Target,
      title: "Autonomy",
      description: "Empowering individuals to work in ways that suit their unique needs and circumstances",
    },
    {
      icon: Globe,
      title: "Inclusivity",
      description: "Supporting diverse time zones, life situations, and work preferences",
    },
    {
      icon: MessageCircle,
      title: "Connection",
      description: "Fostering meaningful relationships without pressure or forced interaction",
    },
  ]

  const deliverables = [
    "Journey maps and interview quotes from 12 remote workers",
    "Wireframes and user flows for each intervention",
    "High-fidelity interactive prototypes",
    "Persona profiles and use-case scenarios",
    "Usability testing plan and early feedback synthesis",
    "Implementation roadmap for pilot testing",
  ]

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <motion.button
            onClick={onBack}
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </motion.button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Concept Design Study
              </span>
              <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
                Wellnest to Work: Designing Healthier Remote Workflows
              </h1>
              <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed mb-6`}>
                A human-centered approach to fixing the remote work rut.
              </p>
              <p className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                This UX case study explores how we can redesign the way we work remotely by building tools that support boundaries, well-being, and team connection—without sacrificing productivity.
              </p>
            </div>

            {/* Project Details */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <Brain className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">UX Research & Strategy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Empathetic Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Users className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Team-Based Concept</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Wellnest to Work Concept Mockup"
                width={800}
                height={600}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.section>

          {/* Project Overview */}
          <motion.section variants={itemVariants} className={`${theme.cardBg} rounded-2xl p-8`}>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Role</h3>
                <p className={theme.textSecondary}>UX Designer, Researcher</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Duration</h3>
                <p className={theme.textSecondary}>10 weeks</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Team</h3>
                <p className={theme.textSecondary}>Collaborative Concept</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Tools</h3>
                <p className={theme.textSecondary}>Figma, Miro, Interviews</p>
              </div>
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>The Human Challenge</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed text-center`}>
                In the age of remote work, employees are still stuck in outdated routines and tools that don't align with flexible, distributed teams. From burnout to scattered tools and social disconnection, the modern work-from-home experience needs to evolve.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {problemPoints.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 border-2 ${problem.color} hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
                      <span className="text-xl">{problem.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${theme.text} mb-2`}>{problem.title}</h3>
                      <p className={`text-sm ${theme.textSecondary} mb-3`}>{problem.description}</p>
                      <blockquote className={`text-xs italic ${theme.textSecondary} p-3 bg-white/50 rounded-lg`}>
                        "{problem.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Research & Insights */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Research & Insights</h2>
            
            {/* Research Methods */}
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <h3 className={`text-xl font-semibold ${theme.text} mb-6 text-center`}>Methods Used</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>1-on-1 Interviews</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>Remote workers from different industries</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>Journey Mapping</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>Typical remote workday analysis</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>Tool Analysis</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>Slack, Asana, Notion comparison</p>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="space-y-6">
              {researchInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="grid md:grid-cols-4 gap-6 items-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <insight.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className={`font-semibold ${theme.text}`}>{insight.title}</h4>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className={`font-medium ${theme.text}`}>{insight.insight}</span>
                      </div>
                      <p className={`text-sm ${theme.textSecondary}`}>{insight.description}</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold text-green-600 mb-1`}>{insight.stat}</div>
                      <p className={`text-sm ${theme.textSecondary}`}>{insight.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Design Interventions */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Design Interventions</h2>
            <div className="space-y-12">
              {designInterventions.map((intervention, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-8`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-start ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          {intervention.number}
                        </div>
                        <span className="text-2xl">{intervention.emoji}</span>
                        <div>
                          <h3 className={`text-xl font-bold ${theme.text}`}>{intervention.title}</h3>
                          <p className={`text-sm ${theme.textSecondary} italic`}>{intervention.subtitle}</p>
                        </div>
                      </div>

                      <div className="mb-4 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-medium text-red-800 mb-2">Problem it solves:</h4>
                        <p className="text-sm text-red-700">{intervention.problem}</p>
                      </div>

                      <p className={`${theme.textSecondary} mb-6`}>{intervention.description}</p>

                      <div className="mb-6">
                        <h4 className={`font-semibold ${theme.text} mb-3`}>Key Features:</h4>
                        <ul className="space-y-2">
                          {intervention.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className={`flex items-start gap-3 ${theme.textSecondary} text-sm`}>
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-medium text-green-800 mb-2">Why it matters:</h4>
                        <p className="text-sm text-green-700">{intervention.whyItMatters}</p>
                      </div>
                    </div>

                    <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={intervention.mockup || "/placeholder.svg"}
                          alt={`${intervention.title} mockup`}
                          width={600}
                          height={400}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why These Matter */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Why These Matter</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <p className={`text-xl italic ${theme.text} leading-relaxed`}>
                  "These tools respect human rhythms, support emotional well-being, and promote a healthier kind of productivity—one that values intention over always-on presence."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className={`text-lg font-semibold ${theme.text} mb-3`}>{value.title}</h3>
                  <p className={`text-sm ${theme.textSecondary}`}>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Next Steps & Prototyping */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Next Steps & Prototyping</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                We're now testing these ideas through interactive prototypes with real users. Our goal is to gather feedback, iterate, and refine each concept into a usable, scalable solution for remote teams.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className={`text-lg font-semibold ${theme.text} mb-4`}>Current Testing Phase</h3>
                  <ul className="space-y-2">
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Interactive prototype development
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      User feedback sessions (ongoing)
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      A/B testing different interaction patterns
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${theme.text} mb-4`}>Upcoming Milestones</h3>
                  <ul className="space-y-2">
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <Clock className="w-4 h-4 text-blue-500" />
                      Pilot testing with 3 remote teams
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <Clock className="w-4 h-4 text-blue-500" />
                      Integration feasibility study
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <Clock className="w-4 h-4 text-blue-500" />
                      Scalability and business model exploration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Early prototype screenshots"
                width={800}
                height={400}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Early-stage prototypes and user testing setup</p>
              </div>
            </div>
          </motion.section>

          {/* Reflection & Takeaways */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Reflection & Takeaways</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                This project helped me think critically about workplace mental health, behavioral design, and the emotional side of digital tools. Designing for work-life balance isn't just about features—it's about empathy, flexibility, and sustainability.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                The research phase revealed how deeply personal work habits are, and how one-size-fits-all solutions often fail to address individual needs. Moving forward, I'm excited to explore how technology can adapt to human rhythms rather than forcing humans to adapt to technology.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
                The most rewarding aspect was hearing from participants how these concepts made them feel "seen" and understood. It reinforced my belief that the best design solutions come from genuine empathy and deep listening to user experiences.
              </p>
            </div>
          </motion.section>

          {/* Deliverables Checklist */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Deliverables</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="grid md:grid-cols-2 gap-6">
                {deliverables.map((deliverable, index) => (
                  <div key={index} className={`flex items-start gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{deliverable}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Project Links */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://figma.com/wellnesstowork-concept"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-full font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Figma Prototype
              </motion.a>
              <motion.button
                onClick={onBack}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 ${theme.cardBg} ${theme.text} rounded-full font-medium transition-colors ${theme.hover}`}
              >
                Back to Projects
              </motion.button>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
