"use client"

import { ArrowLeft, ExternalLink, Users, Award, Target, Lightbulb, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function LinkedInUserStudyDetail() {
  const project = {
    title: "LinkedIn User Study",
    description: "Comprehensive user research study exploring job search behaviors and pain points",
    role: "UX Researcher",
    duration: "8 weeks",
    team: "4 researchers",
    year: 2024,
    category: "User Research",
    tags: ["User Research", "Interviews", "Survey Design", "Data Analysis", "Journey Mapping"],
    links: {
      figma: "#",
      prototype: "#",
    },
  }

  const placeholderImages = [
    {
      src: "/linkedin-interview-questions.png",
      alt: "Raw interview questions",
      caption: "Structured interview questions covering notifications, content relevance, and user experience",
    },
    {
      src: "/linkedin-findings-insights.png",
      alt: "Key findings and insights",
      caption: "Summary of research findings and key insights from user interviews and surveys",
    },
    {
      src: "/linkedin-journey-map.png",
      alt: "User journey map",
      caption: "Complete job search user journey mapping pain points and opportunities across three stages",
    },
    {
      src: "/linkedin-job-search-tools.png",
      alt: "Job search tools recommendations",
      caption: "Design recommendations for simplified job search and filtering tools",
    },
    {
      src: "/linkedin-assumptions.png",
      alt: "Re-examined assumptions",
      caption: "Critical examination of initial assumptions about user preferences and behaviors",
    },
    {
      src: "/linkedin-conclusion.png",
      alt: "Research conclusions",
      caption: "Final recommendations prioritizing user needs and platform improvements",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <Link href="/#projects">
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-blue-100 mb-8">{project.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-blue-200 text-sm mb-1">Role</div>
                <div className="font-semibold">{project.role}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Duration</div>
                <div className="font-semibold">{project.duration}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Team</div>
                <div className="font-semibold">{project.team}</div>
              </div>
              <div>
                <div className="text-blue-200 text-sm mb-1">Year</div>
                <div className="font-semibold">{project.year}</div>
              </div>
            </div>

            {(project.links.figma || project.links.prototype) && (
              <div className="flex gap-4 mt-8">
                {project.links.figma && (
                  <Button variant="secondary" asChild>
                    <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Research
                    </a>
                  </Button>
                )}
                {project.links.prototype && (
                  <Button
                    variant="outline"
                    className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                    asChild
                  >
                    <a href={project.links.prototype} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Findings
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Overview Section */}
          <Card className="animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Target className="h-6 w-6 text-blue-600" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Research Challenge</h3>
                <p className="text-gray-700">
                  Understanding how professionals navigate the job search process on LinkedIn and identifying key pain
                  points and opportunities for improvement in the platform's job search and application experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Research Approach</h3>
                <p className="text-gray-700">
                  Conducted mixed-methods research including user interviews, surveys, and behavioral analysis to gather
                  comprehensive insights into job seekers' needs, behaviors, and frustrations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">Key Outcomes</h3>
                <p className="text-gray-700">
                  Generated actionable insights that informed product improvements, identified 5 critical pain points in
                  the job search flow, and provided recommendations for enhancing user experience.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="animate-fade-in-up stagger-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-purple-600" />
                Research Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-lg">
                How might we better understand the job search journey on LinkedIn to improve the platform's
                effectiveness for job seekers?
              </p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Research Questions</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700">
                      What are the primary pain points users experience when searching for jobs on LinkedIn?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700">How do users currently navigate the job application process?</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700">
                      What features would make the job search experience more efficient and effective?
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span className="text-gray-700">
                      What motivates users to apply (or not apply) to positions they view?
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Research Methods */}
          <Card className="animate-fade-in-up stagger-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Users className="h-6 w-6 text-blue-600" />
                Research Methodology
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Methods Used</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-blue-600 mb-2">User Interviews</h4>
                    <p className="text-sm text-gray-700">15 in-depth interviews with active job seekers</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-purple-600 mb-2">Surveys</h4>
                    <p className="text-sm text-gray-700">200+ responses from LinkedIn users</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-pink-600 mb-2">Behavioral Analysis</h4>
                    <p className="text-sm text-gray-700">Analysis of user interaction patterns</p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-indigo-600 mb-2">Competitive Analysis</h4>
                    <p className="text-sm text-gray-700">Comparison with other job search platforms</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Insights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 font-bold">1.</span>
                    <span className="text-gray-700">
                      Users find the current job search filters insufficient for narrowing down relevant positions
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                    <span className="text-purple-600 font-bold">2.</span>
                    <span className="text-gray-700">
                      The application process feels disconnected from the job search experience
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                    <span className="text-pink-600 font-bold">3.</span>
                    <span className="text-gray-700">
                      Users want more transparency about application status and hiring timeline
                    </span>
                  </li>
                  <li className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                    <span className="text-indigo-600 font-bold">4.</span>
                    <span className="text-gray-700">
                      Job recommendations often miss the mark due to limited personalization
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Research Gallery */}
          <Card className="animate-fade-in-up stagger-3">
            <CardHeader>
              <CardTitle className="text-2xl">Research Artifacts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {placeholderImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-blue-50 to-purple-50">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-contain p-4"
                      />
                    </div>
                    {image.caption && (
                      <div className="p-4 border-t border-gray-100">
                        <p className="text-sm text-gray-700">{image.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Impact & Results */}
          <Card className="animate-fade-in-up stagger-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Research Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                  <div className="text-sm text-gray-700">In-depth Interviews</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-sm text-gray-700">Survey Responses</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                  <div className="text-3xl font-bold text-pink-600 mb-2">5</div>
                  <div className="text-sm text-gray-700">Critical Pain Points</div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Outcomes</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-blue-600 mt-0.5" />
                    <span className="text-gray-700">
                      Generated actionable insights that informed product roadmap decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-purple-600 mt-0.5" />
                    <span className="text-gray-700">
                      Identified opportunities for improving job search personalization
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-pink-600 mt-0.5" />
                    <span className="text-gray-700">Created comprehensive user journey maps for job seekers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-indigo-600 mt-0.5" />
                    <span className="text-gray-700">
                      Provided data-driven recommendations for feature prioritization
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Reflection */}
          <Card className="animate-fade-in-up stagger-5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-yellow-600" />
                Research Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Challenges</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Recruiting participants who were actively job searching during the study period
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Balancing quantitative survey data with qualitative interview insights
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span className="text-gray-700">
                      Managing stakeholder expectations around timelines and deliverables
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Key Learnings</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      The importance of mixed-methods research for comprehensive user understanding
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      How to effectively synthesize large amounts of qualitative data
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="text-gray-700">
                      The value of creating compelling research artifacts that drive action
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Next Steps</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">
                      Conduct follow-up studies to validate proposed design solutions
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Monitor metrics after implementing recommendations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">→</span>
                    <span className="text-gray-700">Expand research to include employer perspectives</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
