"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import type { CaseStudyConfig, Section } from "@/types/case-study"
import { Card } from "@/components/ui/card"

interface DynamicCaseStudyProps {
  config: CaseStudyConfig
}

export default function DynamicCaseStudy({ config }: DynamicCaseStudyProps) {
  const theme = config.theme

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

  const getBackgroundStyle = () => {
    if (theme.background.type === "blurred-bubbles") {
      return "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
    }
    return "bg-white"
  }

  const getTextClasses = () => ({
    primary: "text-gray-900",
    secondary: "text-gray-600",
    accent: "text-purple-600",
  })

  const textClasses = getTextClasses()

  const renderSection = (section: Section, index: number) => {
    switch (section.type) {
      case "hero":
        return (
          <motion.section key={index} variants={itemVariants} className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 text-purple-700 rounded-full text-sm font-medium mb-4">
                {section.eyebrow}
              </span>
              <h1 className={`text-4xl md:text-5xl font-bold ${textClasses.primary} mb-4 text-balance`}>
                {section.title}
              </h1>
              <p className={`text-xl ${textClasses.secondary} max-w-3xl mx-auto leading-relaxed text-pretty`}>
                {section.subtitle}
              </p>
            </div>
          </motion.section>
        )

      case "richText":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6`}>{section.title}</h2>
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-sm">
              <p className={`text-lg ${textClasses.secondary} leading-relaxed`}>{section.body}</p>
            </Card>
          </motion.section>
        )

      case "keyValue":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6`}>{section.title}</h2>
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-sm">
              <div className="grid md:grid-cols-4 gap-6">
                {section.items.map((item, i) => (
                  <div key={i}>
                    <h3 className={`font-semibold ${textClasses.primary} mb-2`}>{item.key}</h3>
                    <p className={textClasses.secondary}>{item.value}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>
        )

      case "list":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6`}>{section.title}</h2>
            <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-sm">
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className={`flex items-start gap-3 ${textClasses.secondary}`}>
                    {section.style === "check" ? (
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    ) : (
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    )}
                    <span className="text-lg leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.section>
        )

      case "cards":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6 text-center`}>{section.title}</h2>
            <div className={`grid md:grid-cols-${section.columns} gap-6`}>
              {section.items.map((item, i) => (
                <Card
                  key={i}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className={`text-xl font-semibold ${textClasses.primary} mb-3`}>{item.title}</h3>
                  <p className={`${textClasses.secondary} leading-relaxed`}>{item.description}</p>
                </Card>
              ))}
            </div>
          </motion.section>
        )

      case "stats":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6 text-center`}>{section.title}</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {section.items.map((item, i) => (
                <Card key={i} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-sm text-center">
                  <div className="text-5xl font-bold text-purple-600 mb-2">{item.value}</div>
                  <p className={`text-sm ${textClasses.secondary}`}>{item.label}</p>
                </Card>
              ))}
            </div>
            {section.note && (
              <Card className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border-0 shadow-sm">
                <p className={`text-center ${textClasses.secondary} italic`}>{section.note}</p>
              </Card>
            )}
          </motion.section>
        )

      case "image":
        return (
          <motion.section key={index} variants={itemVariants}>
            <h2 className={`text-3xl font-bold ${textClasses.primary} mb-6 text-center`}>{section.title}</h2>
            <div
              className={`relative ${section.rounded ? "rounded-2xl" : ""} overflow-hidden ${section.elevation === "soft" ? "shadow-lg" : ""}`}
            >
              <Image
                src={section.src || "/placeholder.svg"}
                alt={section.alt}
                width={1200}
                height={675}
                className="w-full h-auto"
              />
            </div>
          </motion.section>
        )

      case "footerNav":
        return (
          <motion.section key={index} variants={itemVariants} className="pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              {section.previous ? (
                <Link
                  href={section.previous.href}
                  className={`flex items-center gap-2 ${textClasses.secondary} hover:${textClasses.primary} transition-colors`}
                >
                  <ArrowLeft className="w-5 h-5" />
                  {section.previous.label}
                </Link>
              ) : (
                <div />
              )}
              {section.next && (
                <Link
                  href={section.next.href}
                  className={`flex items-center gap-2 ${textClasses.secondary} hover:${textClasses.primary} transition-colors`}
                >
                  {section.next.label}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              )}
            </div>
          </motion.section>
        )

      default:
        return null
    }
  }

  return (
    <div className={`min-h-screen ${getBackgroundStyle()}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {config.sections.map((section, index) => renderSection(section, index))}
        </motion.div>
      </div>
    </div>
  )
}
