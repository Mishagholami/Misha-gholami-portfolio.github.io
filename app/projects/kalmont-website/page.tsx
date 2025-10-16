"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Code,
  Globe,
  Zap,
  Shield,
  BarChart,
  Smartphone,
  Target,
  Lightbulb,
  TrendingUp,
  Clock,
  User,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function KalmontWebsitePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Blurred Bubble Backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-md shadow-sm border-b sticky top-0 z-50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                Back to Portfolio
              </Link>
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 rounded-full text-sm font-medium">
                  Web Development
                </span>
                <span className="text-sm text-gray-500">6 months • 2023</span>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Hero Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">KALMONT x WorkSafeBC</h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl">
                A complete web design and development project for KALMONT, focusing on modern frontend technologies,
                user-centered design principles, and high-performance web standards.
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  <Clock className="w-4 h-4 text-gray-600" />
                  <span className="text-gray-700">6 months</span>
                </div>
              </div>

              {/* Project Image Placeholder */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-lg border-2 border-dashed border-gray-300">
                <p className="text-center text-gray-500 text-lg font-medium">Project Image Here</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Target className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
                <p className="text-gray-600">
                  KALMONT's existing website was outdated, not mobile-friendly, and didn't reflect their modern business
                  approach or partnership with WorkSafeBC.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Lightbulb className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600">
                  Complete redesign and development using React, Next.js, and Tailwind CSS with focus on performance,
                  SEO, and user experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <TrendingUp className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
                <p className="text-gray-600">
                  95+ Lighthouse Performance Score, 60% increase in user engagement, 40% improvement in conversion rate.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Technical Stack
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Frontend</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-center">
                  <li>React 18</li>
                  <li>Next.js 14</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Backend</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-center">
                  <li>Node.js</li>
                  <li>API Routes</li>
                  <li>Server Actions</li>
                  <li>Database Integration</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Performance</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-center">
                  <li>Image Optimization</li>
                  <li>Code Splitting</li>
                  <li>Lazy Loading</li>
                  <li>SEO Optimization</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2 text-gray-900">Security</h3>
                <ul className="text-sm text-gray-600 space-y-1 text-center">
                  <li>HTTPS Encryption</li>
                  <li>Form Validation</li>
                  <li>CSRF Protection</li>
                  <li>Data Sanitization</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Design & Development Process
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "1",
                  title: "Discovery & Research",
                  description:
                    "Analyzed existing site, competitor research, and stakeholder interviews to understand business goals.",
                },
                {
                  number: "2",
                  title: "Design & Prototyping",
                  description:
                    "Created wireframes, high-fidelity designs, and interactive prototypes for user testing.",
                },
                {
                  number: "3",
                  title: "Development",
                  description: "Built responsive, performant website using modern web technologies and best practices.",
                },
                {
                  number: "4",
                  title: "Testing & Launch",
                  description:
                    "Comprehensive testing, performance optimization, and successful deployment to production.",
                },
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Key Features
            </motion.h2>

            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-pink-600">User Experience</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Mobile-First Design</h4>
                      <p className="text-gray-600 text-sm">
                        Responsive design that works seamlessly across all devices and screen sizes.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Fast Loading</h4>
                      <p className="text-gray-600 text-sm">
                        Optimized for speed with lazy loading, image optimization, and efficient code splitting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">SEO Optimized</h4>
                      <p className="text-gray-600 text-sm">
                        Built with SEO best practices for improved search engine visibility and ranking.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold mb-6 text-blue-600">Business Features</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <BarChart className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Analytics Integration</h4>
                      <p className="text-gray-600 text-sm">
                        Comprehensive tracking and analytics to measure performance and user behavior.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Security Features</h4>
                      <p className="text-gray-600 text-sm">
                        Enterprise-grade security with SSL encryption and secure form handling.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Code className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-900">Content Management</h4>
                      <p className="text-gray-600 text-sm">
                        Easy-to-use content management system for updating information and resources.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Performance Results
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  value: "95+",
                  label: "Lighthouse Score",
                  description: "Performance, Accessibility, SEO",
                  color: "from-green-100 to-emerald-100",
                  textColor: "text-green-600",
                },
                {
                  value: "60%",
                  label: "Engagement Increase",
                  description: "Time on site and page views",
                  color: "from-blue-100 to-cyan-100",
                  textColor: "text-blue-600",
                },
                {
                  value: "40%",
                  label: "Conversion Improvement",
                  description: "Contact form submissions",
                  color: "from-purple-100 to-pink-100",
                  textColor: "text-purple-600",
                },
                {
                  value: "2.1s",
                  label: "Load Time",
                  description: "First Contentful Paint",
                  color: "from-pink-100 to-rose-100",
                  textColor: "text-pink-600",
                },
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${metric.color} rounded-xl p-6 shadow-lg text-center`}
                >
                  <div className={`text-4xl font-bold ${metric.textColor} mb-2`}>{metric.value}</div>
                  <p className="text-gray-700 font-medium">{metric.label}</p>
                  <p className="text-gray-600 text-sm mt-1">{metric.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Client Feedback</h2>
              <blockquote className="text-2xl text-gray-700 italic mb-8">
                "The new website exceeded our expectations. The performance improvements have significantly increased
                our online inquiries, and the modern design perfectly represents our partnership with WorkSafeBC. The
                development process was smooth and professional."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg text-gray-900">Sarah Johnson</p>
                  <p className="text-gray-600">Marketing Director, KALMONT</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Image Placeholder */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-12 shadow-lg border-2 border-dashed border-gray-300"
            >
              <p className="text-center text-gray-500 text-lg font-medium">
                Project Image Placeholder – KALMONT Website
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-12 text-center text-white shadow-xl"
            >
              <h2 className="text-3xl font-bold mb-6">Project Outcomes</h2>
              <p className="text-xl mb-8 text-pink-100">
                The KALMONT website project successfully modernized their digital presence, improved user experience,
                and delivered measurable business results.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg">
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                </button>
                <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors border border-white/20">
                  <Github className="w-5 h-5" />
                  View Code Repository
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
