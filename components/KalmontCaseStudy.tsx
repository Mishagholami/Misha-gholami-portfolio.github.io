"use client"

import {
  ArrowLeft,
  ExternalLink,
  Code,
  Smartphone,
  Zap,
  Target,
  Lightbulb,
  TrendingUp,
  Clock,
  User,
  Globe,
  Shield,
  BarChart,
} from "lucide-react"

interface KalmontCaseStudyProps {
  onBack: () => void
}

export default function KalmontCaseStudy({ onBack }: KalmontCaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                Web Development
              </span>
              <span className="text-sm text-gray-500">12 weeks • 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">KALMONT x WorkSafeBC</h1>
              <p className="text-xl text-orange-100 mb-8">
                A complete web design and development project for KALMONT, focusing on modern frontend technologies,
                user-centered design principles, and high-performance web standards.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span>Full-Stack Designer & Developer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>12 weeks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=KALMONT+Website"
                alt="KALMONT Website Preview"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Target className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">
                KALMONT's existing website was outdated, not mobile-friendly, and didn't reflect their modern business
                approach or partnership with WorkSafeBC.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                Complete redesign and development using React, Next.js, and Tailwind CSS with focus on performance, SEO,
                and user experience.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                95+ Lighthouse Performance Score, 60% increase in user engagement, 40% improvement in conversion rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Stack</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Frontend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>React 18</li>
                <li>Next.js 14</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Backend</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Node.js</li>
                <li>API Routes</li>
                <li>Server Actions</li>
                <li>Database Integration</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Performance</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Image Optimization</li>
                <li>Code Splitting</li>
                <li>Lazy Loading</li>
                <li>SEO Optimization</li>
              </ul>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Security</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>HTTPS Encryption</li>
                <li>Form Validation</li>
                <li>CSRF Protection</li>
                <li>Data Sanitization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Design & Development Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery & Research</h3>
              <p className="text-gray-600 text-sm">
                Analyzed existing site, competitor research, and stakeholder interviews to understand business goals.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Design & Prototyping</h3>
              <p className="text-gray-600 text-sm">
                Created wireframes, high-fidelity designs, and interactive prototypes for user testing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600 text-sm">
                Built responsive, performant website using modern web technologies and best practices.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & Launch</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive testing, performance optimization, and successful deployment to production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-orange-600">User Experience</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Mobile-First Design</h4>
                    <p className="text-gray-600 text-sm">
                      Responsive design that works seamlessly across all devices and screen sizes.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Fast Loading</h4>
                    <p className="text-gray-600 text-sm">
                      Optimized for speed with lazy loading, image optimization, and efficient code splitting.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">SEO Optimized</h4>
                    <p className="text-gray-600 text-sm">
                      Built with SEO best practices for improved search engine visibility and ranking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Business Features</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Analytics Integration</h4>
                    <p className="text-gray-600 text-sm">
                      Comprehensive tracking and analytics to measure performance and user behavior.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Security Features</h4>
                    <p className="text-gray-600 text-sm">
                      Enterprise-grade security with SSL encryption and secure form handling.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Code className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Content Management</h4>
                    <p className="text-gray-600 text-sm">
                      Easy-to-use content management system for updating information and resources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Performance Results</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">95+</div>
              <p className="text-gray-600 font-medium">Lighthouse Score</p>
              <p className="text-gray-500 text-sm mt-1">Performance, Accessibility, SEO</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <p className="text-gray-600 font-medium">Engagement Increase</p>
              <p className="text-gray-500 text-sm mt-1">Time on site and page views</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">40%</div>
              <p className="text-gray-600 font-medium">Conversion Improvement</p>
              <p className="text-gray-500 text-sm mt-1">Contact form submissions</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl font-bold text-orange-600 mb-2">2.1s</div>
              <p className="text-gray-600 font-medium">Load Time</p>
              <p className="text-gray-500 text-sm mt-1">First Contentful Paint</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Client Feedback</h2>
          <blockquote className="text-2xl text-gray-700 italic mb-8">
            "The new website exceeded our expectations. The performance improvements have significantly increased our
            online inquiries, and the modern design perfectly represents our partnership with WorkSafeBC. The
            development process was smooth and professional."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-orange-600" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Sarah Johnson</p>
              <p className="text-gray-600">Marketing Director, KALMONT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Outcomes</h2>
          <p className="text-xl text-orange-100 mb-8">
            The KALMONT website project successfully modernized their digital presence, improved user experience, and
            delivered measurable business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors">
              <ExternalLink className="w-5 h-5" />
              Visit Live Site
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
              <Code className="w-5 h-5" />
              View Code Repository
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
