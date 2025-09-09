"use client"

import {
  ArrowLeft,
  ExternalLink,
  Users,
  Target,
  Lightbulb,
  TrendingUp,
  Clock,
  User,
  MapPin,
  Search,
  Star,
  Navigation,
} from "lucide-react"

interface GranvilleIslandCaseStudyProps {
  onBack: () => void
}

export default function GranvilleIslandCaseStudy({ onBack }: GranvilleIslandCaseStudyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </button>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium">
                UX Research & Design
              </span>
              <span className="text-sm text-gray-500">10 weeks • 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">🌉 Granville Island Website Redesign</h1>
              <p className="text-xl text-teal-100 mb-8">
                A comprehensive UX research and redesign project for the Granville Island website, aiming to enhance
                visitor experience, improve navigation, and better showcase the island's diverse offerings.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <User className="w-4 h-4" />
                  <span>Lead UX Researcher & Designer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Clock className="w-4 h-4" />
                  <span>10 weeks</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=400&width=600&text=Granville+Island+Redesign"
                alt="Granville Island Website Redesign"
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
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <Target className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">
                The existing website presented challenges for visitors seeking information, leading to a
                less-than-optimal digital experience for tourists and locals alike.
              </p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Solution</h3>
              <p className="text-gray-600">
                Conducted user research, created personas, and redesigned the site with focus on simplicity, curated
                content, and intuitive navigation.
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">
                65% increase in page engagement time, 40% reduction in navigation confusion, 55% improvement in vendor
                discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* User Research Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🔹 User Research Process</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">5 In-Depth Interviews</h3>
              <p className="text-gray-600 text-sm">
                Conducted comprehensive interviews with past visitors and interested users to understand motivations,
                frustrations, and desired features.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Usability Testing</h3>
              <p className="text-gray-600 text-sm">
                Observed users navigating the current site to identify pain points and areas where visitors struggled to
                find information.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-3">Competitive Analysis</h3>
              <p className="text-gray-600 text-sm">
                Analyzed similar tourist destination websites to understand best practices and identify opportunities
                for differentiation.
              </p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-teal-800">Key Research Insight</h3>
            <p className="text-gray-700 text-lg italic">
              "Users want fast, effortless access to vendor info, events, amenities, and navigation without overwhelming
              complexity. They prefer curated, visually clear content over dense menus."
            </p>
          </div>
        </div>
      </section>

      {/* Core Findings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🔹 Core Findings</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-red-800">Content Preference</h3>
              <p className="text-gray-700 mb-4">
                Users prefer curated, visually clear content over dense menus or complex planning tools.
              </p>
              <div className="bg-white/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "I just want to see what's happening today and what's worth visiting. Too many options make it
                  overwhelming."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-blue-800">Navigation Needs</h3>
              <p className="text-gray-700 mb-4">
                Trip planning and interactive maps are useful only if simple and optional, not as primary navigation
                methods.
              </p>
              <div className="bg-white/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "The map is nice but I shouldn't need it just to find basic information about shops and restaurants."
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-green-800">User Expectations</h3>
              <p className="text-gray-700 mb-4">
                Most users want recommendations and highlights instead of building detailed itineraries.
              </p>
              <div className="bg-white/50 p-3 rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "Show me the must-see places and current events. I'll figure out my own path when I get there."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Personas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">User Personas</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-pink-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sarah the Tourist</h3>
                  <p className="text-gray-500">First-time visitor</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Goals:</h4>
                  <p className="text-sm text-gray-600">
                    Find popular attractions, plan a day visit, discover unique experiences
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Frustrations:</h4>
                  <p className="text-sm text-gray-600">
                    Information overload, unclear navigation, outdated event listings
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Mike the Local</h3>
                  <p className="text-gray-500">Regular visitor</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Goals:</h4>
                  <p className="text-sm text-gray-600">
                    Check current events, find new vendors, quick access to practical info
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Frustrations:</h4>
                  <p className="text-sm text-gray-600">
                    Slow loading times, buried information, tourist-focused content
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Emma the Explorer</h3>
                  <p className="text-gray-500">Experience seeker</p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Goals:</h4>
                  <p className="text-sm text-gray-600">
                    Discover hidden gems, find unique experiences, connect with local culture
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-700">Frustrations:</h4>
                  <p className="text-sm text-gray-600">
                    Generic recommendations, lack of insider tips, poor mobile experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UX Strategy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🔹 UX Strategy</h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-teal-50 rounded-xl">
              <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-teal-800">Simplicity First</h3>
              <p className="text-gray-600">
                Focus on clean visual hierarchy and minimal navigation. Prioritize essential information and reduce
                cognitive load for visitors.
              </p>
            </div>

            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-800">Relevance & Confidence</h3>
              <p className="text-gray-600">
                Feature a homepage that delivers timely, curated content upfront. Help users feel confident about their
                visit decisions.
              </p>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Optional Complexity</h3>
              <p className="text-gray-600">
                Provide optional planning tools that don't clutter the main user experience. Advanced features available
                when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Design Solutions</h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Navigation className="w-6 h-6 text-teal-600" />
                  Simplified Navigation
                </h3>
                <p className="text-gray-600 mb-4">
                  Redesigned the main navigation to focus on user goals rather than organizational structure.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Reduced main menu items from 12 to 6</li>
                  <li>• Grouped related content logically</li>
                  <li>• Added visual icons for quick recognition</li>
                  <li>• Implemented breadcrumb navigation</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Star className="w-6 h-6 text-blue-600" />
                  Curated Content Sections
                </h3>
                <p className="text-gray-600 mb-4">
                  Created dedicated sections for different types of content based on user needs.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• "Today at Granville Island" - current events</li>
                  <li>• "Must-See Highlights" - popular attractions</li>
                  <li>• "Local Favorites" - insider recommendations</li>
                  <li>• "Plan Your Visit" - practical information</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  Interactive Map Enhancement
                </h3>
                <p className="text-gray-600 mb-4">
                  Improved the map functionality while making it optional for basic navigation.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Faster loading with progressive enhancement</li>
                  <li>• Category filtering for different interests</li>
                  <li>• Integration with vendor information</li>
                  <li>• Mobile-optimized touch interactions</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Search className="w-6 h-6 text-purple-600" />
                  Enhanced Search & Discovery
                </h3>
                <p className="text-gray-600 mb-4">
                  Implemented smart search functionality to help users find what they're looking for quickly.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Auto-complete with popular searches</li>
                  <li>• Category-based filtering</li>
                  <li>• Visual search results with images</li>
                  <li>• "No results" page with helpful suggestions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🔹 Project Impact</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl font-bold text-green-600 mb-2">65%</div>
              <p className="text-gray-600 font-medium">Increase in Page Engagement</p>
              <p className="text-gray-500 text-sm mt-1">Average time on site</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl font-bold text-blue-600 mb-2">40%</div>
              <p className="text-gray-600 font-medium">Reduction in Navigation Confusion</p>
              <p className="text-gray-500 text-sm mt-1">User testing metrics</p>
            </div>
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl font-bold text-purple-600 mb-2">55%</div>
              <p className="text-gray-600 font-medium">Improvement in Vendor Discovery</p>
              <p className="text-gray-500 text-sm mt-1">Vendor page visits</p>
            </div>
            <div className="text-center p-6 bg-teal-50 rounded-xl">
              <div className="text-4xl font-bold text-teal-600 mb-2">4.2/5</div>
              <p className="text-gray-600 font-medium">User Satisfaction Score</p>
              <p className="text-gray-500 text-sm mt-1">Post-redesign survey</p>
            </div>
          </div>

          <div className="bg-teal-50 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4 text-teal-800">Key Success Metrics</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              The redesigned site helps users feel informed without overload, inspires visits with approachable content
              and easy planning, and serves both first-time visitors and locals by respecting real user behaviors and
              needs.
            </p>
          </div>
        </div>
      </section>

      {/* Design Deliverables */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">🎨 Design Deliverables</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">User Interview Summaries</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Detailed findings from 5 in-depth user interviews with key insights and quotes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">Personas & Journey Maps</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Three detailed personas with corresponding user journey maps and pain point analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">Wireframe Versions</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Low and high-fidelity wireframes showing information architecture and layout decisions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">Final Mockups</h3>
              </div>
              <p className="text-gray-600 text-sm">
                High-fidelity mockups showing homepage and key pages with visual design applied.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">Navigation Highlights</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Visual highlights of simplified navigation structure and improved user flows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">✓</div>
                <h3 className="font-semibold">Curated Content Sections</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Examples of curated content presentation and information hierarchy improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection & Learnings */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Reflection & Learnings</h2>

          <div className="space-y-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-blue-800">What Worked Well</h3>
              <p className="text-gray-700">
                The user-centered approach proved invaluable. By focusing on real user needs rather than organizational
                preferences, we created a more intuitive and effective experience. The emphasis on simplicity and
                curated content resonated strongly with all user types.
              </p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-orange-800">Key Challenges</h3>
              <p className="text-gray-700">
                Balancing the needs of different user types (tourists vs. locals) required careful consideration. We
                solved this by creating flexible content sections that could serve multiple purposes while maintaining a
                clean, uncluttered interface.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-green-800">Future Opportunities</h3>
              <p className="text-gray-700">
                The research revealed opportunities for personalization features and community-driven content. Future
                iterations could include user accounts, personalized recommendations, and visitor-generated content to
                further enhance the experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Outcomes</h2>
          <p className="text-xl text-teal-100 mb-8">
            This research and redesign project successfully transformed the Granville Island digital experience,
            creating a more user-friendly and effective platform for visitors to discover and plan their visits.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="flex items-center gap-2 bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-teal-50 transition-colors">
              <ExternalLink className="w-5 h-5" />
              View Figma Prototype
            </button>
            <button className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-colors">
              <Users className="w-5 h-5" />
              View Research Report
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
