"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Bell, Users, Search, Target, Lightbulb, CheckCircle, Quote, ExternalLink, TrendingUp, TrendingDown, Zap } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

interface LinkedInCaseStudyProps {
  onBack: () => void
}

export default function LinkedInCaseStudy({ onBack }: LinkedInCaseStudyProps) {
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
      icon: "🔔",
      title: "Notification Overload",
      description: "Too many irrelevant updates",
      quote: "I get too many notifications, and most of them aren't useful.",
      color: "bg-red-100 border-red-200",
    },
    {
      icon: "📱",
      title: "Unfocused Feed",
      description: "Difficult to find meaningful content",
      quote: "My feed is cluttered with posts I don't care about.",
      color: "bg-orange-100 border-orange-200",
    },
    {
      icon: "🔍",
      title: "Poor Job Filtering",
      description: "Not beginner- or location-friendly",
      quote: "The job filter doesn't help me find junior roles.",
      color: "bg-yellow-100 border-yellow-200",
    },
  ]

  const researchInsights = [
    {
      icon: Bell,
      title: "Notification Fatigue",
      insight: "Need for custom controls + filtering",
      description: "Users receive 15-20 notifications daily, with only 3-4 being relevant to their goals.",
      stat: "73%",
      statLabel: "find notifications irrelevant",
    },
    {
      icon: Users,
      title: "Cluttered Feed",
      insight: "Desire for content segmentation + mute options",
      description: "Professional content mixed with personal updates creates cognitive overload.",
      stat: "68%",
      statLabel: "want feed customization",
    },
    {
      icon: Search,
      title: "Job Search Struggles",
      insight: "Call for entry-level filters + geo-based tools",
      description: "New graduates spend 40% more time filtering irrelevant job postings.",
      stat: "82%",
      statLabel: "struggle with job relevance",
    },
  ]

  const designPrinciples = [
    {
      number: "1",
      emoji: "🔔",
      title: "Smart Notifications",
      description: "Custom settings, DND mode",
      features: ["Priority-based alerts", "Custom notification types", "Do Not Disturb scheduling", "AI-powered relevance scoring"],
    },
    {
      number: "2",
      emoji: "📱",
      title: "Personalized Feed",
      description: "Segmented tabs, career-based suggestions",
      features: ["Tab navigation system", "Content type filtering", "Mute & unfollow options", "Goal-based recommendations"],
    },
    {
      number: "3",
      emoji: "🎯",
      title: "Simplified Job Search",
      description: "Entry-level filters, smart AI matching",
      features: ["Experience level filters", "Location-based search", "Salary transparency", "Smart job matching"],
    },
  ]

  const designSolutions = [
    {
      title: "Smart Notification System",
      description: "Intelligent notification management with user control",
      features: [
        "Custom alert types for different content categories",
        "AI-prioritized updates based on user behavior",
        "Do Not Disturb toggle with scheduling options",
        "Notification digest for non-urgent updates",
      ],
      mockup: "/placeholder.svg?height=500&width=400",
    },
    {
      title: "Personalized Feed Experience",
      description: "Organized content consumption with user preferences",
      features: [
        "Tab navigation: Jobs / Industry News / Network",
        "Advanced mute & unfollow options",
        "Feed tuning based on career goals",
        "Content type prioritization controls",
      ],
      mockup: "/placeholder.svg?height=500&width=400",
    },
    {
      title: "Enhanced Job Search",
      description: "Streamlined job discovery for all experience levels",
      features: [
        '"0 Years Experience" filter for new graduates',
        "Advanced location, salary, and remote options",
        "Job suggestions based on browsing history",
        "Company culture and values matching",
      ],
      mockup: "/placeholder.svg?height=500&width=400",
    },
  ]

  const impactMetrics = [
    {
      icon: TrendingDown,
      metric: "45%",
      description: "Reduction in notification fatigue",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: TrendingUp,
      metric: "60%",
      description: "Increase in feed engagement",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Zap,
      metric: "38%",
      description: "Faster job discovery time",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Target,
      metric: "72%",
      description: "Improved job relevance score",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
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
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                UX Case Study
              </span>
              <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
                LinkedIn Redesign: Streamlining the Professional Experience
              </h1>
              <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed mb-6`}>
                Reimagining LinkedIn to improve engagement, simplify job search, and personalize the user experience.
              </p>
              <p className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                As part of a UX design project, I explored how to make LinkedIn more intuitive and relevant—especially for early-career professionals. My focus was on reducing notification fatigue, improving feed relevance, and simplifying the job search process.
              </p>
            </div>

            {/* Role Summary */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                <Search className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">User Research</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full">
                <Target className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">UX Strategy</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full">
                <Lightbulb className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Wireframes & Prototyping</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                <CheckCircle className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-medium text-orange-700">Usability Testing</span>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="LinkedIn Redesign Mockup"
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

          {/* The Problem */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>The Problem</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {problemPoints.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 border-2 ${problem.color}`}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                      <span className="text-2xl">{problem.icon}</span>
                    </div>
                    <h3 className={`font-semibold ${theme.text} mb-2`}>{problem.title}</h3>
                    <p className={`text-sm ${theme.textSecondary} mb-4`}>{problem.description}</p>
                  </div>
                  <blockquote className={`text-sm italic ${theme.textSecondary} text-center p-3 bg-white/50 rounded-lg`}>
                    "{problem.quote}"
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Research & Key Insights */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Research & Key Insights</h2>
            
            {/* Research Methods */}
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <h3 className={`text-xl font-semibold ${theme.text} mb-6 text-center`}>Research Methods</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>User Interviews</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>5 users from different professional levels</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>Competitive Analysis</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>Indeed, Glassdoor, AngelList comparison</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Search className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className={`font-medium ${theme.text} mb-2`}>User Surveys</h4>
                  <p className={`text-sm ${theme.textSecondary}`}>LinkedIn user behavior analysis</p>
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
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <insight.icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className={`font-semibold ${theme.text}`}>{insight.title}</h4>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="w-4 h-4 text-yellow-500" />
                        <span className={`font-medium ${theme.text}`}>{insight.insight}</span>
                      </div>
                      <p className={`text-sm ${theme.textSecondary}`}>{insight.description}</p>
                    </div>
                    <div className="text-center">
                      <div className={`text-3xl font-bold text-blue-600 mb-1`}>{insight.stat}</div>
                      <p className={`text-sm ${theme.textSecondary}`}>{insight.statLabel}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Strategy & Design Principles */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Strategy & Design Principles</h2>
            
            <div className={`${theme.cardBg} rounded-2xl p-8 mb-8`}>
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <p className={`text-xl italic ${theme.text} leading-relaxed`}>
                  "LinkedIn should empower users with intuitive tools that enhance engagement, improve job search efficiency, and provide relevant, personalized content."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {principle.number}
                    </div>
                    <span className="text-2xl">{principle.emoji}</span>
                    <h3 className={`text-lg font-semibold ${theme.text}`}>{principle.title}</h3>
                  </div>
                  <p className={`${theme.textSecondary} mb-4`}>{principle.description}</p>
                  <ul className="space-y-2">
                    {principle.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`text-sm ${theme.textSecondary} flex items-center gap-2`}>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final Design Solutions */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Final Design Solutions</h2>
            <div className="space-y-12">
              {designSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-8`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <h3 className={`text-2xl font-bold ${theme.text} mb-4`}>{solution.title}</h3>
                      <p className={`${theme.textSecondary} mb-6`}>{solution.description}</p>
                      <ul className="space-y-3">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className={`flex items-start gap-3 ${theme.textSecondary}`}>
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={solution.mockup || "/placeholder.svg"}
                          alt={`${solution.title} mockup`}
                          width={400}
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

          {/* Results & Expected Impact */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Results & Expected Impact</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className={`w-16 h-16 ${metric.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <metric.icon className={`w-8 h-8 ${metric.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.metric}</div>
                  <p className={`text-sm ${theme.textSecondary}`}>{metric.description}</p>
                </motion.div>
              ))}
            </div>

            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <h3 className={`text-xl font-semibold ${theme.text} mb-6 text-center`}>Key Improvements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <TrendingDown className="w-5 h-5 text-green-500" />
                    Less notification fatigue = Better re-engagement
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    Improved feed = Higher time-on-site
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <Zap className="w-5 h-5 text-purple-500" />
                    Better job filtering = Faster job discovery
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <Target className="w-5 h-5 text-orange-500" />
                    Enhanced relevance = Improved user satisfaction
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Reflection & Lessons Learned */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Reflection & Lessons Learned</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                This project helped me understand how deeply interface design impacts professional tools. It reminded me how important balance between personalization and simplicity is. The research phase revealed that users often adapt to poor design rather than seeking alternatives, making it crucial to identify pain points through observation rather than just direct feedback.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
                Going forward, I'd expand testing on the feed logic and notification system to keep refining how users interact with the platform. I'm particularly interested in exploring how AI can better predict content relevance without creating filter bubbles that limit professional growth opportunities.
              </p>
            </div>
          </motion.section>

          {/* Visual & Deliverables Checklist */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Deliverables</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Annotated Wireframes (Notifications, Feed, Jobs)
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Before/After Feed Layout Comparison
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Interactive Prototypes (Figma)
                  </li>
                  <li className={`flex items-center gap-3 ${theme.textSecondary}`}>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    User Journey Maps & Personas
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Project Links */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://figma.com/linkedin-study"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                View Research Report
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
