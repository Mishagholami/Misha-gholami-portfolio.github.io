"use client"

import {
  ArrowLeft,
  ExternalLink,
  Heart,
  Smartphone,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Clock,
  User,
  Zap,
  Shield,
  BarChart,
} from "lucide-react"

interface WellnestCaseStudyProps {
  onBack: () => void
}

export default function WellnestCaseStudy({ onBack }: WellnestCaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                App Concept
              </span>
              <span className="text-sm text-gray-500">10 weeks • 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Wellnest to Work</h1>
              <p className="text-xl text-green-100 mb-8">
                A conceptual mobile application designed to help remote workers integrate wellness practices into their
                daily work routines, promoting better work-life balance and productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span>Product Designer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>10 weeks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=300&text=Wellnest+App+Mockup"
                alt="Wellnest App Mockup"
                className="rounded-lg shadow-2xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">
                Remote workers struggle to maintain work-life balance and wellness routines, leading to burnout and
                decreased productivity.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                Designed a comprehensive wellness app with smart break reminders, virtual wellness rooms, and analytics
                to promote healthy work habits.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                85% of interviewed remote workers expressed interest in using the app daily, with 92% believing it would
                improve their work-life balance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">The Problem</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The shift to remote work has blurred the boundaries between personal and professional life, leading to
              increased stress, burnout, and decreased overall well-being among workers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-500 mb-2">76%</div>
              <p className="text-gray-600">of remote workers report burnout</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-500 mb-2">68%</div>
              <p className="text-gray-600">struggle with work-life balance</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-yellow-500 mb-2">54%</div>
              <p className="text-gray-600">skip regular breaks</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-blue-500 mb-2">42%</div>
              <p className="text-gray-600">work longer hours than in office</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">User Research Insights</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">Key Pain Points</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Constant Connectivity</h4>
                    <p className="text-gray-600 text-sm">
                      Workers feel pressure to be always available, leading to stress and anxiety.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Poor Time Management</h4>
                    <p className="text-gray-600 text-sm">
                      Difficulty structuring the day and taking regular breaks without office environment cues.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Neglected Self-Care</h4>
                    <p className="text-gray-600 text-sm">
                      Wellness activities like exercise, meditation, and proper meals are often skipped.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">User Needs</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Boundary Setting</h4>
                    <p className="text-gray-600 text-sm">
                      Tools to help establish clear work-life boundaries and stick to them.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Progress Tracking</h4>
                    <p className="text-gray-600 text-sm">
                      Visibility into wellness habits and their impact on productivity and mood.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Community Support</h4>
                    <p className="text-gray-600 text-sm">
                      Connection with other remote workers facing similar challenges.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Overview */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Solution Overview</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Break Reminders</h3>
              <p className="text-gray-600 text-sm">
                AI-powered break suggestions based on work patterns, stress levels, and personal preferences.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Virtual Wellness Rooms</h3>
              <p className="text-gray-600 text-sm">
                Immersive environments for meditation, stretching, and relaxation activities during breaks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Wellness Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track wellness habits, mood, and productivity to understand what works best for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Team Challenges</h3>
              <p className="text-gray-600 text-sm">
                Collaborative wellness challenges to build healthy habits with colleagues.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Boundary Protection</h3>
              <p className="text-gray-600 text-sm">
                Tools to enforce work-life boundaries and prevent after-hours work creep.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Personalized Coaching</h3>
              <p className="text-gray-600 text-sm">
                AI-driven wellness coaching tailored to individual work patterns and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">User Journey</h2>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Onboarding</h3>
              <p className="text-gray-600 text-sm">
                Set up work schedule, wellness goals, and preferences for personalized experience.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Integration</h3>
              <p className="text-gray-600 text-sm">
                Receive smart break reminders and wellness suggestions throughout the workday.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Wellness Activities</h3>
              <p className="text-gray-600 text-sm">
                Engage in guided wellness activities in virtual environments during breaks.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600 text-sm">
                Review wellness analytics and adjust habits based on insights and recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Results */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Concept Validation</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">User Feedback</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic mb-4">
                    "This would be a game-changer for my remote work routine. I love the idea of virtual wellness
                    rooms!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Alex Chen</p>
                      <p className="text-gray-500 text-xs">Software Developer</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-gray-600 italic mb-4">
                    "The analytics feature would help me understand how my wellness habits affect my productivity."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Sarah Kim</p>
                      <p className="text-gray-500 text-xs">Marketing Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Key Metrics</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Would use daily</span>
                  <span className="font-bold text-green-600">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Believe it would improve work-life balance</span>
                  <span className="font-bold text-green-600">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Would recommend to colleagues</span>
                  <span className="font-bold text-green-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Willing to pay for premium features</span>
                  <span className="font-bold text-green-600">64%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
          <p className="text-xl text-green-100 mb-8">
            This concept validation provides strong evidence for the need and market fit. The next phase would involve
            building an MVP and conducting user testing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-colors">
              <ExternalLink className="w-5 h-5" />
              View Figma Prototype
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
              <Smartphone className="w-5 h-5" />
              Interactive Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
