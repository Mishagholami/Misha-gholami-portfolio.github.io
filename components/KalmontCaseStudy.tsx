"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowLeft, Shield, Thermometer, Users, AlertTriangle, Phone, Download, CheckCircle, Heart, Eye, Layers, Smartphone, Monitor } from 'lucide-react'
import { useTheme } from "./ThemeProvider"

interface KalmontCaseStudyProps {
  onBack: () => void
}

export default function KalmontCaseStudy({ onBack }: KalmontCaseStudyProps) {
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

  const designGoals = [
    {
      icon: Eye,
      title: "Clear Visual Communication",
      description: "Use visual storytelling and infographics to make safety information easily digestible",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Accessibility",
      description: "Ensure responsive design works seamlessly across all devices and screen sizes",
    },
    {
      icon: Layers,
      title: "Consistent Design System",
      description: "Maintain unified grid, color palette, and typography throughout all pages",
    },
  ]

  const targetAudience = [
    {
      icon: "👷",
      title: "Outdoor Workers",
      description: "Construction, utility, cleaning, and fisheries workers exposed to cold environments",
    },
    {
      icon: "👔",
      title: "Employers & Safety Trainers",
      description: "Supervisors and trainers responsible for workplace safety education",
    },
    {
      icon: "🎓",
      title: "New Workers",
      description: "Young and inexperienced workers entering cold environment jobs",
    },
  ]

  const websiteStructure = [
    {
      page: "Page 1",
      title: "Home Page - WorkSafeBC Introduction",
      sections: [
        "Hero section: 'Protecting Workers Across BC'",
        "Introduction to WorkSafeBC services",
        "Workers' Compensation System overview",
        "Prevention Information Line with CTA",
      ],
      mockup: "/placeholder.svg?height=600&width=800&text=Homepage+Desktop",
    },
    {
      page: "Page 2", 
      title: "Cold Weather Awareness",
      sections: [
        "What Causes Hypothermia? (with diagrams)",
        "Who's at Risk? (worker types visualization)",
        "Signs & Stages of Hypothermia (infographic)",
      ],
      mockup: "/placeholder.svg?height=600&width=800&text=Cold+Weather+Page",
    },
    {
      page: "Page 3",
      title: "Prevention & Treatment",
      sections: [
        "Reducing Risks (gear checklist)",
        "First Aid & Emergency Response",
        "Handling Hypothermia Victims (step-by-step)",
      ],
      mockup: "/placeholder.svg?height=600&width=800&text=Prevention+Page",
    },
  ]

  const moodBoards = [
    {
      title: "Clean & Corporate",
      description: "Professional, trustworthy design with white space and muted tones",
      features: [
        "Sans-serif typography (Open Sans, Roboto)",
        "White backgrounds with subtle grays",
        "Minimal color palette: Blue, gray, white",
        "Clean icons and structured layouts",
      ],
      mockup: "/placeholder.svg?height=400&width=600&text=Clean+Corporate+Mockup",
      colors: ["#2563eb", "#64748b", "#f8fafc", "#1e293b"],
    },
    {
      title: "Bold & Youthful",
      description: "High contrast design with vibrant colors and engaging illustrations",
      features: [
        "Modern typography with personality",
        "High contrast color blocking",
        "Illustrated icons and graphics",
        "Interactive elements and animations",
      ],
      mockup: "/placeholder.svg?height=400&width=600&text=Bold+Youthful+Mockup",
      colors: ["#dc2626", "#f59e0b", "#10b981", "#3b82f6"],
    },
  ]

  const designProcess = [
    {
      step: "1",
      title: "Research & Content Strategy",
      description: "Analyzed WorkSafeBC guidelines and cold weather safety protocols to structure information hierarchy",
      deliverables: ["Content audit", "Information architecture", "User journey mapping"],
    },
    {
      step: "2", 
      title: "Visual Design Exploration",
      description: "Created two distinct mood boards exploring different visual approaches for the target audience",
      deliverables: ["Mood board concepts", "Color palette exploration", "Typography selection"],
    },
    {
      step: "3",
      title: "High-Fidelity Mockups",
      description: "Developed 6 comprehensive mockups showing desktop and mobile layouts for all pages",
      deliverables: ["Desktop mockups (1920px)", "Mobile mockups (640px)", "Interactive prototypes"],
    },
  ]

  const keyFeatures = [
    {
      icon: Shield,
      title: "Safety-First Information Architecture",
      description: "Organized content to prioritize critical safety information and emergency procedures",
    },
    {
      icon: Thermometer,
      title: "Visual Temperature Guidelines",
      description: "Clear infographics showing temperature ranges and hypothermia risk levels",
    },
    {
      icon: Users,
      title: "Worker-Centric Design",
      description: "Tailored content and visuals for different types of outdoor workers in BC",
    },
    {
      icon: Phone,
      title: "Emergency Contact Integration",
      description: "Prominent placement of WorkSafeBC Prevention Information Line and emergency resources",
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
                Web Design & Development
              </span>
              <h1 className={`text-4xl md:text-5xl font-bold ${theme.text} mb-4`}>
                KALMONT x WorkSafeBC: Cold Weather Safety Website
              </h1>
              <p className={`text-xl ${theme.textSecondary} max-w-3xl mx-auto leading-relaxed mb-6`}>
                Designing a public safety awareness website to educate BC workers about cold environment hazards and prevention strategies.
              </p>
              <p className={`text-lg ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
                A comprehensive 3-page informational website featuring clean design, accessible layouts, and engaging visual storytelling to enhance workplace safety education.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=KALMONT+WorkSafeBC+Website+Hero"
                alt="KALMONT WorkSafeBC Website Design"
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
                <p className={theme.textSecondary}>Web Designer, Developer</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Duration</h3>
                <p className={theme.textSecondary}>4 weeks</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Team</h3>
                <p className={theme.textSecondary}>Group Assignment</p>
              </div>
              <div>
                <h3 className={`font-semibold ${theme.text} mb-2`}>Tools</h3>
                <p className={theme.textSecondary}>Figma, HTML/CSS, React</p>
              </div>
            </div>
          </motion.section>

          {/* Design Goals */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Design Goals</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {designGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <goal.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className={`text-lg font-semibold ${theme.text} mb-3`}>{goal.title}</h3>
                  <p className={`text-sm ${theme.textSecondary}`}>{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Target Audience */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Target Audience</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">{audience.icon}</span>
                    </div>
                    <h3 className={`text-lg font-semibold ${theme.text} mb-2`}>{audience.title}</h3>
                    <p className={`text-sm ${theme.textSecondary}`}>{audience.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Website Structure */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Website Structure</h2>
            <div className="space-y-8">
              {websiteStructure.map((page, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-8`}
                >
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div>
                          <span className="text-sm text-blue-600 font-medium">{page.page}</span>
                          <h3 className={`text-xl font-bold ${theme.text}`}>{page.title}</h3>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {page.sections.map((section, sectionIndex) => (
                          <li key={sectionIndex} className={`flex items-start gap-3 ${theme.textSecondary} text-sm`}>
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{section}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={page.mockup || "/placeholder.svg"}
                          alt={`${page.title} mockup`}
                          width={800}
                          height={600}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Mood Board Exploration */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Visual Design Directions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {moodBoards.map((board, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <h3 className={`text-xl font-bold ${theme.text} mb-3`}>{board.title}</h3>
                  <p className={`${theme.textSecondary} mb-4`}>{board.description}</p>
                  
                  <div className="relative rounded-lg overflow-hidden shadow-md mb-4">
                    <Image
                      src={board.mockup || "/placeholder.svg"}
                      alt={`${board.title} mockup`}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>

                  <div className="mb-4">
                    <h4 className={`font-semibold ${theme.text} mb-2`}>Key Features:</h4>
                    <ul className="space-y-1">
                      {board.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`text-sm ${theme.textSecondary} flex items-center gap-2`}>
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className={`font-semibold ${theme.text} mb-2`}>Color Palette:</h4>
                    <div className="flex gap-2">
                      {board.colors.map((color, colorIndex) => (
                        <div
                          key={colorIndex}
                          className="w-8 h-8 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Design Process */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Design Process</h2>
            <div className="space-y-6">
              {designProcess.map((process, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {process.step}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold ${theme.text} mb-2`}>{process.title}</h3>
                      <p className={`${theme.textSecondary} mb-4`}>{process.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {process.deliverables.map((deliverable, deliverableIndex) => (
                          <span
                            key={deliverableIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {deliverable}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Key Features */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`${theme.cardBg} rounded-2xl p-6 hover:shadow-lg transition-shadow`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${theme.text} mb-2`}>{feature.title}</h3>
                      <p className={`text-sm ${theme.textSecondary}`}>{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Responsive Design Showcase */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Responsive Design</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Monitor className="w-6 h-6 text-blue-600" />
                    <h3 className={`text-lg font-semibold ${theme.text}`}>Desktop (1920px)</h3>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600&text=Desktop+Layout"
                      alt="Desktop layout"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className={`text-sm ${theme.textSecondary} mt-3`}>
                    Full-width layout with sidebar navigation and multi-column content grid
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Smartphone className="w-6 h-6 text-green-600" />
                    <h3 className={`text-lg font-semibold ${theme.text}`}>Mobile (640px)</h3>
                  </div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg mx-auto max-w-xs">
                    <Image
                      src="/placeholder.svg?height=500&width=300&text=Mobile+Layout"
                      alt="Mobile layout"
                      width={300}
                      height={500}
                      className="w-full h-auto"
                    />
                  </div>
                  <p className={`text-sm ${theme.textSecondary} mt-3`}>
                    Stacked layout with hamburger menu and touch-optimized interactions
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Results & Impact */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Project Outcomes</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <p className={`text-sm ${theme.textSecondary}`}>High-fidelity mockups delivered</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                  <p className={`text-sm ${theme.textSecondary}`}>Responsive page layouts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2</div>
                  <p className={`text-sm ${theme.textSecondary}`}>Visual design directions explored</p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className={`text-xl font-semibold ${theme.text} mb-4`}>Key Achievements</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Comprehensive information architecture for safety content
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Accessible design meeting WCAG guidelines
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Mobile-first responsive design approach
                    </li>
                  </ul>
                  <ul className="space-y-2">
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Clear visual hierarchy for emergency information
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Engaging infographics and visual storytelling
                    </li>
                    <li className={`flex items-center gap-3 ${theme.textSecondary} text-sm`}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Consistent design system across all pages
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${theme.text} mb-8 text-center`}>Reflection</h2>
            <div className={`${theme.cardBg} rounded-2xl p-8`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                This project challenged me to design for a critical use case where clear communication could literally save lives. Working with WorkSafeBC content required balancing comprehensive information with accessible design, ensuring that essential safety information was both findable and understandable.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed mb-6`}>
                The dual mood board approach helped explore how different visual treatments could appeal to various worker demographics while maintaining the serious, trustworthy tone required for safety information. The mobile-first approach was crucial, as many outdoor workers access information on their phones.
              </p>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
                This experience reinforced the importance of user-centered design in public safety communications and how thoughtful visual hierarchy can make critical information more accessible and actionable.
              </p>
            </div>
          </motion.section>

          {/* Project Links */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://mishagholami.github.io/fm.kalmont.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-colors"
              >
                <Eye className="w-5 h-5" />
                View Live Website
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
