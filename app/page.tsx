"use client"

import { useState } from "react"
import CaseStudyPage from "@/components/CaseStudyPage"
import type { Project } from "@/types/portfolio"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

const projects: Project[] = [
  {
    id: 1,
    title: "LinkedIn User Study",
    description: "In-depth qualitative research to uncover user pain points and opportunities on LinkedIn's platform.",
    image: "/placeholder.svg?height=300&width=400&text=LinkedIn+Study",
    category: "research",
    tags: ["User Research", "Data Analysis", "Usability Testing", "Thematic Analysis"],
    role: "Lead UX Researcher",
    duration: "2 months",
    challenge:
      "LinkedIn users were experiencing difficulties with content discovery and professional networking efficiency.",
    solution:
      "Conducted comprehensive user interviews and usability testing to identify key pain points and opportunities.",
    outcome:
      "Identified 5 key pain points affecting 80% of users, leading to actionable recommendations that could improve user engagement by an estimated 35%.",
    figmaLink: "https://figma.com/linkedin-study",
    pdfReport: "https://example.com/linkedin-report.pdf",
    caseStudyColor: "blue",
    featured: true,
  },
  {
    id: 2,
    title: "Headspace App Redesign",
    description: "Rethinking the meditation experience with a focus on accessibility and modern UI principles.",
    image: "/placeholder.svg?height=300&width=400&text=Headspace+Redesign",
    category: "design",
    tags: ["UX/UI Design", "Prototyping", "Accessibility", "User Flows"],
    role: "UX/UI Designer",
    duration: "3 months",
    challenge:
      "The existing Headspace app had accessibility issues and outdated visual design that didn't align with modern design principles.",
    solution: "Led a complete redesign process focusing on accessibility improvements and modern UI patterns.",
    outcome: "Created a more accessible and visually appealing interface that improved task completion rates by 40%.",
    figmaLink: "https://figma.com/headspace-redesign",
    liveDemo: "https://headspace-redesign.example.com",
    caseStudyColor: "purple",
    featured: true,
  },
  {
    id: 3,
    title: "Wellnest to Work App",
    description: "Ideation and design of a mobile application connecting workplace wellness with productivity.",
    image: "/placeholder.svg?height=300&width=400&text=Wellnest+App",
    category: "concept",
    tags: ["App Design", "User Stories", "Prototyping", "Concept Development"],
    role: "Product Designer",
    duration: "4 months",
    challenge: "Remote workers struggle to maintain work-life balance and wellness routines.",
    solution:
      "Designed an integrated solution that promotes wellness while enhancing productivity in remote work environments.",
    outcome: "Developed a comprehensive app concept with 15+ core features, validated through user feedback sessions.",
    figmaLink: "https://figma.com/wellnesstowork-concept",
    caseStudyColor: "green",
    featured: true,
  },
  {
    id: 4,
    title: "KALMONT Web Development",
    description: "Full-stack web design and development for a modern business website with focus on user experience.",
    image: "/placeholder.svg?height=300&width=400&text=KALMONT+Website",
    category: "development",
    tags: ["React", "Tailwind CSS", "Web Design", "Frontend Development"],
    role: "Full-Stack Developer",
    duration: "6 months",
    challenge: "KALMONT needed a modern, responsive website that would effectively communicate their brand values.",
    solution:
      "Handled complete project from initial design concepts to final deployment using modern web technologies.",
    outcome:
      "Delivered a high-performance website with 95+ Lighthouse scores, resulting in 60% increase in user engagement.",
    liveDemo: "https://kalmont.example.com",
    githubRepo: "https://github.com/mishagholami/kalmont-website",
    caseStudyColor: "blue",
    featured: true,
  },
  {
    id: 5,
    title: "Granville Island Research",
    description: "User research and interviewing study for reimagining Granville Island's public space experience.",
    image: "/placeholder.svg?height=300&width=400&text=Granville+Island",
    category: "research",
    tags: ["User Research", "Public Space Design", "Ethnographic Study", "Community Engagement"],
    role: "Lead Researcher",
    duration: "5 months",
    challenge:
      "Granville Island needed insights into how visitors and locals use the space to inform future development.",
    solution:
      "Designed and executed comprehensive research methodology, analyzed findings, and presented recommendations.",
    outcome: "Generated actionable insights from 50+ interviews and observations, leading to 8 key recommendations.",
    pdfReport: "https://example.com/granville-island-research.pdf",
    caseStudyColor: "teal",
    featured: true,
  },
]

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [showCaseStudy, setShowCaseStudy] = useState<number | null>(null)

  const handleCaseStudyClick = (projectId: number) => {
    setShowCaseStudy(projectId)
  }

  const handleBackFromCaseStudy = () => {
    setShowCaseStudy(null)
  }

  if (showCaseStudy === 2) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} />
  }

  if (showCaseStudy === 1) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} project={projects[0]} />
  }

  if (showCaseStudy === 3) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} project={projects[2]} />
  }

  if (showCaseStudy === 4) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} project={projects[3]} />
  }

  if (showCaseStudy === 5) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} project={projects[4]} />
  }

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} onCaseStudyClick={handleCaseStudyClick} />
      <GallerySection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
