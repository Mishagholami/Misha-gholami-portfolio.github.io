"use client"

import { ArrowLeft, ExternalLink, Users, Target, Lightbulb, TrendingUp, FileText, Clock, User } from "lucide-react"

interface LinkedInCaseStudyProps {
  onBack: () => void
}

export default function LinkedInCaseStudy({ onBack }: LinkedInCaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                User Research
              </span>
              <span className="text-sm text-gray-500">6 weeks • 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">LinkedIn User Study</h1>
              <p className="text-xl text-blue-100 mb-8">
                An in-depth qualitative research study to uncover user pain points and opportunities on LinkedIn's
                platform, focusing on professional networking and content discovery.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span>Lead UX Researcher</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>6 weeks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=LinkedIn+Research"
                alt="LinkedIn Research Overview"
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
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">
                Understanding current pain points LinkedIn users face when networking professionally and discovering
                relevant content.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Lightbulb className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                Conducted comprehensive user interviews, usability testing, and competitive analysis to identify key
                improvement areas.
              </p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                Identified 5 key pain points affecting 80% of users and provided 12 actionable recommendations for
                improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Research Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning & Recruitment</h3>
              <p className="text-gray-600 text-sm">
                Defined research objectives and recruited 15 diverse LinkedIn users across different industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">User Interviews</h3>
              <p className="text-gray-600 text-sm">
                Conducted 60-minute semi-structured interviews to understand user behaviors and pain points.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Usability Testing</h3>
              <p className="text-gray-600 text-sm">
                Observed users completing key tasks to identify usability issues and friction points.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Analysis & Insights</h3>
              <p className="text-gray-600 text-sm">
                Synthesized findings using thematic analysis to identify patterns and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Findings</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">Pain Points Identified</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Content Discovery Challenges</h4>
                    <p className="text-gray-600 text-sm">
                      Users struggle to find relevant content in their feed, with 73% reporting information overload.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Networking Friction</h4>
                    <p className="text-gray-600 text-sm">
                      68% find it difficult to initiate meaningful professional connections.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Job Search Inefficiency</h4>
                    <p className="text-gray-600 text-sm">
                      Job recommendations often miss the mark, with only 34% finding them relevant.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">Opportunities</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Personalized Content Curation</h4>
                    <p className="text-gray-600 text-sm">
                      AI-powered content filtering based on user interests and engagement patterns.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Smart Connection Suggestions</h4>
                    <p className="text-gray-600 text-sm">
                      Context-aware networking recommendations with conversation starters.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Enhanced Job Matching</h4>
                    <p className="text-gray-600 text-sm">
                      Improved algorithm considering skills, career goals, and company culture fit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Quotes */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Users Said</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "I spend way too much time scrolling through irrelevant posts. I wish LinkedIn could better understand
                what I actually care about."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Sarah M.</p>
                  <p className="text-gray-500 text-xs">Marketing Manager</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "Reaching out to new connections feels awkward. I never know what to say that doesn't sound like spam."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">David L.</p>
                  <p className="text-gray-500 text-xs">Software Engineer</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <p className="text-gray-600 italic mb-4">
                "The job recommendations are hit or miss. Most of them don't match my skills or career goals at all."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Maria R.</p>
                  <p className="text-gray-500 text-xs">UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recommendations</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Short-term Improvements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Implement content filtering options</li>
                  <li>• Add connection request templates</li>
                  <li>• Improve job search filters</li>
                  <li>• Enhance mobile experience</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-6">
                <h3 className="text-xl font-bold mb-3">Long-term Vision</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AI-powered content curation</li>
                  <li>• Smart networking assistant</li>
                  <li>• Career path recommendations</li>
                  <li>• Industry trend insights</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Expected Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">User Engagement</span>
                  <span className="font-bold text-green-600">+35%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Connection Success Rate</span>
                  <span className="font-bold text-green-600">+28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Job Application Quality</span>
                  <span className="font-bold text-green-600">+42%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Time to Relevant Content</span>
                  <span className="font-bold text-green-600">-50%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Next Steps</h2>
          <p className="text-xl text-blue-100 mb-8">
            This research provides a foundation for improving LinkedIn's user experience. The next phase would involve
            prototyping and testing the proposed solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors">
              <FileText className="w-5 h-5" />
              View Full Report
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
              <ExternalLink className="w-5 h-5" />
              See Figma Prototype
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
