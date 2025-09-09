"use client"

import { ArrowLeft, Users, Baseline as ChartLine, UniversityIcon as UniversalAccess, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HeadspaceCaseStudy() {
  const handleBackClick = () => {
    window.close()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Hero Section */}
        <section className="mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700 hover:bg-purple-200">UX/UI Design Case Study</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">🧘‍♀️ Headspace App Redesign</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Rethinking the meditation experience with a focus on accessibility, modern UI principles, and enhanced user
            engagement through thoughtful design decisions.
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/placeholder.svg?height=400&width=800&text=Headspace+App+Redesign+Overview"
              alt="Headspace App Redesign Overview"
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </section>

        {/* Project Info */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Duration</h3>
                <p className="text-gray-600">8 weeks</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Role</h3>
                <p className="text-gray-600">UX/UI Designer</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Team</h3>
                <p className="text-gray-600">Solo Project</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Tools</h3>
                <p className="text-gray-600">Figma, Principle, Maze</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <h3 className="font-semibold text-gray-900 mb-1">Platform</h3>
                <p className="text-gray-600">iOS Mobile App</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Challenge</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-red-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility Issues</h3>
                <p className="text-gray-600">
                  The current app lacks proper accessibility features, making it difficult for users with disabilities
                  to navigate and use meditation content effectively.
                </p>
              </CardContent>
            </Card>
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Outdated Visual Design</h3>
                <p className="text-gray-600">
                  The interface feels dated and doesn't align with modern design principles, potentially affecting user
                  engagement and brand perception.
                </p>
              </CardContent>
            </Card>
            <Card className="border-yellow-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Complex Navigation</h3>
                <p className="text-gray-600">
                  Users report difficulty finding specific meditation content and customizing their experience according
                  to their preferences and needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Research & Insights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Insights</h2>
          <Card className="mb-8 bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-purple-600">"</div>
                <p className="text-lg text-gray-700 italic">
                  I love meditation apps, but I often struggle to find the right session for my current mood. The
                  navigation feels overwhelming sometimes.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">User Interviews (n=12)</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Conducted in-depth interviews with existing Headspace users to understand pain points and desired
                  features.
                </p>
                <blockquote className="border-l-4 border-purple-200 pl-4 text-sm text-gray-600 italic">
                  "The biggest insight was that users wanted more personalized recommendations based on their emotional
                  state and available time."
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ChartLine className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">Usability Testing</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Tested current app with 8 participants to identify specific usability issues and navigation problems.
                </p>
                <blockquote className="border-l-4 border-purple-200 pl-4 text-sm text-gray-600 italic">
                  "75% of users had difficulty finding specific meditation types within 3 taps from the home screen."
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <UniversalAccess className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-gray-900">Accessibility Audit</h4>
                </div>
                <p className="text-gray-600 mb-4">
                  Comprehensive accessibility review revealed multiple WCAG compliance issues affecting users with
                  disabilities.
                </p>
                <blockquote className="border-l-4 border-purple-200 pl-4 text-sm text-gray-600 italic">
                  "Screen reader compatibility was poor, and color contrast ratios fell below accessibility standards in
                  several areas."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Goals */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Goals</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <UniversalAccess className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Improve Accessibility</h3>
                <p className="text-gray-600 mb-4">
                  Create an inclusive experience that works for all users, regardless of their abilities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    WCAG 2.1 AA compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Screen reader optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    High contrast color schemes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Voice navigation support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Simplify Navigation</h3>
                <p className="text-gray-600 mb-4">
                  Streamline the user journey to help users find content quickly and intuitively.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Reduce cognitive load
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Clear information hierarchy
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Intuitive categorization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Smart search functionality
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <ExternalLink className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Modernize Visual Design</h3>
                <p className="text-gray-600 mb-4">
                  Update the visual language to feel contemporary while maintaining brand identity.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Clean, minimal interface
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Consistent design system
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Improved typography
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    Calming color palette
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Design Solutions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Redesigned+Home+Screen"
                  alt="Redesigned Headspace home screen"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Redesigned Home Screen</h3>
                  <p className="text-gray-600">
                    Simplified the home screen with clear visual hierarchy, personalized recommendations, and quick
                    access to frequently used features.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Improved+Navigation"
                  alt="Improved navigation design"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Improved Navigation</h3>
                  <p className="text-gray-600">
                    Restructured the navigation with intuitive categories, smart filtering, and a persistent search
                    function for better content discovery.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Accessibility+Features"
                  alt="Accessibility improvements"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Accessibility Features</h3>
                  <p className="text-gray-600">
                    Implemented high contrast modes, larger touch targets, voice commands, and comprehensive screen
                    reader support throughout the app.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Improvements */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Improvements Delivered</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">User Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    40% improvement in task completion rates
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Reduced navigation time by 60%
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Increased user satisfaction scores
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Better content discoverability
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Accessibility</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    WCAG 2.1 AA compliance achieved
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Screen reader compatibility improved
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    High contrast mode implemented
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Voice navigation support added
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Visual Design</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Modern, clean interface design
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Consistent design system created
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Improved color contrast ratios
                  </li>
                  <li className="flex items-center gap-3 text-gray-600">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    Enhanced typography hierarchy
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Results & Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <p className="text-gray-600">Improvement in task completion rates</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <p className="text-gray-600">Reduction in navigation time</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                <p className="text-gray-600">Accessibility compliance score</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">4.8/5</div>
                <p className="text-gray-600">User satisfaction rating</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-16">
          <Card className="bg-gray-50">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Reflection & Learnings</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  This project taught me the critical importance of accessibility in design. Initially, I focused
                  primarily on visual improvements, but user research revealed that accessibility barriers were
                  preventing many users from fully enjoying the app. This shifted my approach to prioritize inclusive
                  design from the start.
                </p>
                <p>
                  Working on this redesign also reinforced the value of iterative testing. Each round of usability
                  testing revealed new insights that shaped the final design. The most significant learning was that
                  accessibility improvements often benefit all users, not just those with disabilities – the clearer
                  navigation and improved contrast made the app easier for everyone to use.
                </p>
                <p>
                  If I were to continue this project, I would focus on implementing more advanced personalization
                  features and exploring how AI could help users discover content that matches their current emotional
                  state and available time.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <section className="mb-16">
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <a href="https://figma.com/headspace-redesign" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Figma Prototype
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://headspace-redesign.example.com" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
            <Button variant="outline" onClick={handleBackClick}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </div>
        </section>
      </main>
    </div>
  )
}
