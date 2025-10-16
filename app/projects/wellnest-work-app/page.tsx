"use client"

import { motion } from "framer-motion"
import {
  ArrowLeft,
  Clock,
  User,
  Heart,
  Smartphone,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Zap,
  Shield,
  BarChart,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function WellnestWorkAppPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />

      {/* Blurred bubble backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        />
        <div
          className="absolute top-40 right-20 w-80 h-80 rounded-full opacity-30 blur-3xl"
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

      <div className="relative z-10">
        {/* Header with back button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-1.5 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 rounded-full text-sm font-medium">
                Mobile App
              </span>
              <span className="px-4 py-1.5 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200">
                Concept Design
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Wellnest to Work App</h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl leading-relaxed">
              A conceptual mobile application designed to help remote workers integrate wellness practices into their
              daily work routines, promoting better work-life balance and productivity.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <User className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Product Designer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">4 months</span>
              </div>
            </div>

            {/* Project Image Placeholder */}
            <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center mb-16">
              <Image src="/path/to/project-image.jpg" alt="Project Image" width={500} height={500} />
            </div>
          </motion.div>
        </section>

        {/* Overview Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Overview</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Challenge</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Remote workers struggle to maintain work-life balance and wellness routines, leading to burnout
                      and decreased productivity.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-blue-300 rounded-lg flex items-center justify-center">
                        <Lightbulb className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Approach</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Designed a comprehensive wellness app with smart break reminders, virtual wellness rooms, and
                      analytics to promote healthy work habits.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-300 to-teal-300 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-gray-900" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Outcome</h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      85% of interviewed remote workers expressed interest in using the app daily, with 92% believing it
                      would improve their work-life balance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Project Type and Duration */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Project Type</h3>
                    <p className="text-gray-700">Mobile App Concept Design</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Duration</h3>
                    <p className="text-gray-700">4 months (Concept Development & Validation)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Problem Statement */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem Statement</h2>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  The shift to remote work has blurred the boundaries between personal and professional life, leading to
                  increased stress, burnout, and decreased overall well-being among workers.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">76%</div>
                    <p className="text-gray-700 text-sm">of remote workers report burnout</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">68%</div>
                    <p className="text-gray-700 text-sm">struggle with work-life balance</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">54%</div>
                    <p className="text-gray-700 text-sm">skip regular breaks</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">42%</div>
                    <p className="text-gray-700 text-sm">work longer hours than in office</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Research Approach */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Research Approach</h2>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Key Pain Points</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Zap className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Constant Connectivity</h4>
                          <p className="text-gray-700 text-sm">
                            Workers feel pressure to be always available, leading to stress and anxiety.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Clock className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Poor Time Management</h4>
                          <p className="text-gray-700 text-sm">
                            Difficulty structuring the day and taking regular breaks without office environment cues.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Heart className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Neglected Self-Care</h4>
                          <p className="text-gray-700 text-sm">
                            Wellness activities like exercise, meditation, and proper meals are often skipped.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">User Needs</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-300 to-teal-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Shield className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Boundary Setting</h4>
                          <p className="text-gray-700 text-sm">
                            Tools to help establish clear work-life boundaries and stick to them.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <BarChart className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Progress Tracking</h4>
                          <p className="text-gray-700 text-sm">
                            Visibility into wellness habits and their impact on productivity and mood.
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-300 to-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                          <Users className="w-4 h-4 text-gray-900" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">Community Support</h4>
                          <p className="text-gray-700 text-sm">
                            Connection with other remote workers facing similar challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Key Findings */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Findings</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-gray-700">
                      Remote workers need personalized wellness guidance during their workday
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-orange-300 to-pink-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-gray-700">
                      Smart break reminders based on work patterns increase wellness activity adoption
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-gray-700">
                      Community features and team challenges motivate continued engagement
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-green-300 to-teal-300 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-gray-900">✓</span>
                    </div>
                    <p className="text-gray-700">
                      Progress tracking and analytics help users understand wellness impact on productivity
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Proposed Solutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Proposed Solutions</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-300 to-purple-300 rounded-lg flex items-center justify-center mb-4">
                      <Clock className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Break Reminders</h3>
                    <p className="text-gray-700 text-sm">
                      AI-powered break suggestions based on work patterns, stress levels, and personal preferences.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                      <Smartphone className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Virtual Wellness Rooms</h3>
                    <p className="text-gray-700 text-sm">
                      Immersive environments for meditation, stretching, and relaxation activities during breaks.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-300 rounded-lg flex items-center justify-center mb-4">
                      <BarChart className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Wellness Analytics</h3>
                    <p className="text-gray-700 text-sm">
                      Track wellness habits, mood, and productivity to understand what works best for you.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-300 to-teal-300 rounded-lg flex items-center justify-center mb-4">
                      <Users className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Team Challenges</h3>
                    <p className="text-gray-700 text-sm">
                      Collaborative wellness challenges to build healthy habits with colleagues.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-300 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                      <Shield className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Boundary Protection</h3>
                    <p className="text-gray-700 text-sm">
                      Tools to enforce work-life boundaries and prevent after-hours work creep.
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-orange-50 to-blue-50 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-blue-300 rounded-lg flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6 text-gray-900" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Personalized Coaching</h3>
                    <p className="text-gray-700 text-sm">
                      AI-driven wellness coaching tailored to individual work patterns and goals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Tools Used */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools Used</h2>
                <div className="flex flex-wrap gap-3">
                  {["Figma", "Principle", "Maze", "Miro", "Notion"].map((tool) => (
                    <span
                      key={tool}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-gray-900 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Outcome */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Outcome</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
                    <p className="text-gray-700 text-sm">Would use daily</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">92%</div>
                    <p className="text-gray-700 text-sm">Believe it would improve work-life balance</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">78%</div>
                    <p className="text-gray-700 text-sm">Would recommend to colleagues</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl">
                    <div className="text-4xl font-bold text-gray-900 mb-2">64%</div>
                    <p className="text-gray-700 text-sm">Willing to pay for premium features</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  This concept validation provides strong evidence for the need and market fit. The positive user
                  feedback and high interest rates demonstrate that remote workers are actively seeking solutions to
                  improve their work-life balance and wellness routines. The next phase would involve building an MVP
                  and conducting user testing with a working prototype.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Project Image Placeholder */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="bg-white/80 backdrop-blur-sm border-2 border-dashed border-gray-300 rounded-2xl p-16 text-center">
              <Image
                src="/path/to/project-image-placeholder.jpg"
                alt="Project Image Placeholder"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </section>

        {/* Footer Navigation */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="flex justify-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-900 rounded-full font-medium hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to All Projects
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
