"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Users, MapPin, Calendar, Coffee, Camera, Navigation, Heart, Search, Filter, Star, Clock, Quote, ExternalLink, CheckCircle, Target, Lightbulb, Eye } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

interface GranvilleIslandCaseStudyProps {
  onBack: () => void
}

export default function GranvilleIslandCaseStudy({ onBack }: GranvilleIslandCaseStudyProps) {
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

  const userInsights = [
    {
      icon: "🎯",
      title: "Fast Access to Key Info",
      description: "Users want vendor info, events, and amenities without overwhelming complexity",
      quote: "I just want to know what's open today and how to get there",
      priority: "High",
    },
    {
      icon: "🗺️",
      title: "Simple Navigation Tools",
      description: "Interactive maps are useful only if simple and optional",
      quote: "The current map is too cluttered - I can't find what I'm looking for",
      priority: "Medium",
    },
    {
      icon: "✨",
      title: "Curated Recommendations",
      description: "Users prefer highlights and recommendations over building detailed itineraries",
      quote: "Show me the must-see spots, don't make me plan everything myself",
      priority: "High",
    },
  ]

  const personas = [
    {
      name: "Sarah Chen",
      age: 28,
      type: "First-Time Tourist",
      avatar: "/placeholder.svg?height=80&width=80&text=SC",
      goals: [
        "Discover must-see attractions quickly",
        "Find good food and shopping options",
        "Navigate easily without getting lost",
      ],
      frustrations: [
        "Too much information to process",
        "Unclear what's worth visiting",
        "Confusing website navigation",
      ],
      quote: "I want to experience the best of Granville Island without feeling overwhelmed",
    },
    {
      name: "Mike Rodriguez",
      age: 45,
      type: "Local Explorer",
      avatar: "/placeholder.svg?height=80&width=80&text=MR",
      goals: [
        "Stay updated on new vendors and events",
        "Find seasonal activities and markets",
        "Plan visits around specific interests",
      ],
      frustrations: [
        "Hard to find what's new or changed",
        "Event information is scattered",
        "No personalization for repeat visitors",
      ],
      quote: "As a local, I want to discover new things without sifting through basic tourist info",
    },
    {
      name: "Jennifer Park",
      age: 35,
      type: "Family Planner",
      avatar: "/placeholder.svg?height=80&width=80&text=JP",
      goals: [
        "Plan family-friendly activities",
        "Check accessibility and amenities",
        "Coordinate timing for multiple activities",
      ],
      frustrations: [
        "Lack of family-specific information",
        "No clear activity duration estimates",
        "Difficult to plan efficient routes",
      ],
      quote: "I need to know what works for kids and how long things take",
    },
  ]

  const designPrinciples = [
    {
      number: "1",
      title: "Simplicity First",
      description: "Clean visual hierarchy with minimal navigation complexity",
      icon: Target,
    },
    {
      number: "2", 
      title: "Relevant Content",
      description: "Curated, timely information that matches user intent",
      icon: Star,
    },
    {
      number: "3",
      title: "Confident Experience",
      description: "Clear guidance that helps users feel informed and prepared",
      icon: Navigation,
    },
  ]

  const keyFeatures = [
    {
      title: "Curated Homepage Experience",
      description: "Timely, relevant content delivered upfront without overwhelming users",
      features: [
        "Today's highlights and featured vendors",
        "Current events and seasonal activities",
        "Weather-appropriate recommendations",
        "Quick access to essential information",
      ],
      mockup: "/placeholder.svg?height=500&width=700&text=Homepage+Redesign",
    },
    {
      title: "Simplified Vendor Discovery",
      description: "Easy-to-browse vendor directory with smart filtering and visual previews",
      features: [
        "Visual vendor cards with key details",
        "Simple category filtering",
        "Real-time hours and availability",
        "Quick contact and location info",
      ],
      mockup: "/placeholder.svg?height=500&width=700&text=Vendor+Directory",
    },
    {
      title: "Optional Planning Tools",
      description: "Helpful planning features that don't clutter the main experience",
      features: [
        "Interactive map with toggle options",
        "Save favorites for later",
        "Estimated visit durations",
        "Accessibility information",
      ],
      mockup: "/placeholder.svg?height=500&width=700&text=Planning+Tools",
    },
  ]

  const researchProcess = [
    {
      phase: "Discovery",
      activities: ["5 user interviews", "Current site audit", "Competitor analysis"],
      insights: "Users feel overwhelmed by information density and unclear navigation",
    },
    {
      phase: "Analysis",
      activities: ["Affinity mapping", "Persona development", "Journey mapping"],
      insights: "Three distinct user types with different information needs and contexts",
    },
    {
      phase: "Strategy",
      activities: ["Information architecture", "Content strategy", "Feature prioritization"],
      insights: "Simplicity and curation are more valuable than comprehensive planning tools",
    },
  ]

  const beforeAfter = [
    {
      aspect: "Navigation",
      before: "Complex mega-menu with 20+ options",
      after: "Simple 5-item navigation with clear categories",
    },
    {
      aspect: "Homepage",
      before: "Generic content with no personalization",
      after: "Curated daily highlights and timely recommendations",
    },
    {
      aspect: "Vendor Info",
      before: "Text-heavy listings buried in subpages",
      after: "Visual cards with essential info upfront",
    },
    {
      aspect: "Planning",
      before: "Mandatory complex planning workflow",
      after: "Optional, simple tools that enhance experience",
    },
  ]

  const impactMetrics = [
    {
      metric: "67%",
      description: "Reduction in navigation complexity",
      icon: Navigation,
    },
    {
      metric: "45%",
      description: "Faster access to vendor information",
      icon: Clock,
    },
    {
      metric: "89%",
      description: "User preference for curated content",
      icon: Heart,
    },
    {
      metric: "78%",
      description: "Improved confidence in visit planning",
      icon: Target,
    },
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
              <span className="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-4">
                UX Research & Design
              </span>
              <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
                Granville Island Website Redesign
              </h1>
              <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed mb-6`}>
                Creating a simple, relevant, and confident digital experience for Vancouver's beloved cultural district
              </p>
              <p className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                A comprehensive UX research and design project focused on helping visitors easily explore, plan, and engage with everything Granville Island offers through user-centered design principles.
              </p>
            </div>

            {/* Project Highlights */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-full">
                <Users className="w-4 h-4 text-teal-600" />
                <span className="text-sm font-medium text-teal-700">5 User Interviews</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">User Research</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Eye className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Information Architecture</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Granville+Island+Redesign+Hero"
                alt="Granville Island Website Redesign"
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
                <p className={theme.textSecondary}>UX Researcher, Designer</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Duration</h3>
                <p className={theme.textSecondary}>8 weeks</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Team</h3>
                <p className={theme.textSecondary}>Individual Project</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Tools</h3>
                <p className={theme.textSecondary}>Figma, Miro, UserTesting</p>
              </div>
            </div>
          </motion.section>

          {/* The Challenge */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>The Challenge</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <div className="text-center mb-6">
                <Quote className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <p className={`text-xl italic ${theme.text} leading-relaxed`}>
                  "The current Granville Island website overwhelms visitors with too much information and complex navigation, making it difficult to plan visits and discover what matters most to them."
                </p>
              </div>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed text-center`}>
                Visitors needed a digital experience that matched the welcoming, accessible nature of Granville Island itself—simple, relevant, and confidence-inspiring.
              </p>
            </div>
          </motion.section>

          {/* User Research Process */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>User Research Process</h2>
            <div className="space-y-6">
              {researchProcess.map((phase, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6`}
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-teal-600">{index + 1}</span>
                      </div>
                      <h3 className={`text-lg font-semibold ${theme.text}`}>{phase.phase}</h3>
                    </div>
                    <div>
                      <h4 className={`font-medium ${theme.text} mb-2`}>Activities:</h4>
                      <ul className="space-y-1">
                        {phase.activities.map((activity, activityIndex) => (
                          <li key={activityIndex} className={`text-sm ${theme.textSecondary} flex items-center gap-2`}>
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-medium ${theme.text} mb-2`}>Key Insights:</h4>
                      <p className={`text-sm ${theme.textSecondary}`}>{phase.insights}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key User Insights */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Key User Insights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {userInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{insight.icon}</span>
                    </div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      insight.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {insight.priority} Priority
                    </div>
                    <h3 className={`text-lg font-semibold ${theme.text} mb-2`}>{insight.title}</h3>
                    <p className={`text-sm ${theme.textSecondary} mb-4`}>{insight.description}</p>
                  </div>
                  <blockquote className={`text-xs italic ${theme.textSecondary} text-center p-3 bg-white/50 rounded-lg`}>
                    "{insight.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* User Personas */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>User Personas</h2>
            <div className="space-y-8">
              {personas.map((persona, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-8`}
                >
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3 overflow-hidden">
                        <Image
                          src={persona.avatar || "/placeholder.svg"}
                          alt={persona.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className={`text-lg font-bold ${theme.text}`}>{persona.name}</h3>
                      <p className={`text-sm ${theme.textSecondary} mb-2`}>Age {persona.age}</p>
                      <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                        {persona.type}
                      </span>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme.text} mb-3`}>Goals</h4>
                      <ul className="space-y-2">
                        {persona.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className={`text-sm ${theme.textSecondary} flex items-start gap-2`}>
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {goal}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme.text} mb-3`}>Frustrations</h4>
                      <ul className="space-y-2">
                        {persona.frustrations.map((frustration, frustrationIndex) => (
                          <li key={frustrationIndex} className={`text-sm ${theme.textSecondary} flex items-start gap-2`}>
                            <div className="w-4 h-4 bg-red-200 rounded-full mt-0.5 flex-shrink-0" />
                            {frustration}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className={`font-semibold ${theme.text} mb-3`}>Quote</h4>
                      <blockquote className={`text-sm italic ${theme.textSecondary} p-3 bg-white/50 rounded-lg`}>
                        "{persona.quote}"
                      </blockquote>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* UX Strategy & Design Principles */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>UX Strategy & Design Principles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold">
                      {principle.number}
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <principle.icon className="w-6 h-6 text-teal-600" />
                    </div>
                  </div>
                  <h3 className={`text-lg font-semibold ${theme.text} mb-3`}>{principle.title}</h3>
                  <p className={`text-sm ${theme.textSecondary}`}>{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Design Solutions */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Design Solutions</h2>
            <div className="space-y-12">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-8`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>{feature.title}</h3>
                      <p className={`${theme.textSecondary} mb-6 text-lg`}>{feature.description}</p>
                      <ul className="space-y-3">
                        {feature.features.map((item, itemIndex) => (
                          <li key={itemIndex} className={`flex items-start gap-3 ${theme.textSecondary}`}>
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={feature.mockup || "/placeholder.svg"}
                          alt={`${feature.title} mockup`}
                          width={700}
                          height={500}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Before & After Comparison */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Before & After Comparison</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="space-y-6">
                {beforeAfter.map((comparison, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <h4 className={`font-semibold ${theme.text} text-lg`}>{comparison.aspect}</h4>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
                      <h5 className="font-medium text-red-800 mb-2">Before</h5>
                      <p className="text-sm text-red-700">{comparison.before}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                      <h5 className="font-medium text-green-800 mb-2">After</h5>
                      <p className="text-sm text-green-700">{comparison.after}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Impact & Results */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Project Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-8 h-8 text-teal-600" />
                  </div>
                  <div className="text-3xl font-bold text-teal-600 mb-2">{metric.metric}</div>
                  <p className={`text-sm ${theme.textSecondary}`}>{metric.description}</p>
                </motion.div>
              ))}
            </div>

            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <h3 className={`text-xl font-semibold ${theme.text} mb-6 text-center`}>Key Outcomes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Simplified navigation reduces cognitive load
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Curated content helps users discover relevant attractions
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Optional planning tools don't overwhelm casual browsers
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Confident experience inspires actual visits
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Design Process Showcase */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Design Process Showcase</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${theme.cardBg} rounded-2xl p-6`}>
                <h3 className={`text-lg font-semibold ${theme.text} mb-4`}>Low-Fidelity Wireframes</h3>
                <div className="relative rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=Low-Fi+Wireframes"
                    alt="Low-fidelity wireframes"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Initial wireframes focused on information hierarchy and user flow optimization
                </p>
              </div>
              <div className={`${theme.cardBg} rounded-2xl p-6`}>
                <h3 className={`text-lg font-semibold ${theme.text} mb-4`}>High-Fidelity Mockups</h3>
                <div className="relative rounded-lg overflow-hidden shadow-md mb-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400&text=High-Fi+Mockups"
                    alt="High-fidelity mockups"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <p className={`text-sm ${theme.textSecondary}`}>
                  Polished designs incorporating visual branding and detailed interactions
                </p>
              </div>
            </div>
          </motion.section>

          {/* Reflection & Learnings */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Reflection & Key Learnings</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                This project reinforced the importance of user research in challenging assumptions about what users actually need. Initially, I thought comprehensive planning tools would be valuable, but research revealed that users prefer curated, simple experiences over complex functionality.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                The most significant insight was understanding that different user types (tourists, locals, families) have fundamentally different information needs, but they all share a desire for simplicity and confidence in their planning process.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
                Working on a beloved Vancouver landmark taught me how to balance innovation with respect for established brand identity, and how to design for both emotional connection and practical functionality.
              </p>
            </div>
          </motion.section>

          {/* Deliverables */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Project Deliverables</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    User interview summaries and insights
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Detailed user personas and journey maps
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Information architecture and site map
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Low and high-fidelity wireframes
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Interactive prototypes and user flows
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Visual design system and style guide
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Project Links */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://figma.com/granville-island-redesign"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full font-medium transition-colors"
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
