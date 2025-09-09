"use client"

import { useState } from "react"
import CaseStudyPage from "@/components/CaseStudyPage"
import LinkedInCaseStudy from "@/components/LinkedInCaseStudy"
import WellnestCaseStudy from "@/components/WellnestCaseStudy"
import KalmontCaseStudy from "@/components/KalmontCaseStudy"
import GranvilleIslandCaseStudy from "@/components/GranvilleIslandCaseStudy"
import { projects } from "@/lib/projects-data"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import Footer from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [showCaseStudy, setShowCaseStudy] = useState<number | null>(null)

  const handleCaseStudyClick = (projectId: number) => {
    setShowCaseStudy(projectId)
  }

  const handleBackFromCaseStudy = () => {
    setShowCaseStudy(null)
  }

  // LinkedIn Case Study (Project ID: 1)
  if (showCaseStudy === 1) {
    return <LinkedInCaseStudy onBack={handleBackFromCaseStudy} />
  }

  // Headspace Case Study (Project ID: 2)
  if (showCaseStudy === 2) {
    return <CaseStudyPage onBack={handleBackFromCaseStudy} />
  }

  // Wellnest Case Study (Project ID: 3)
  if (showCaseStudy === 3) {
    return <WellnestCaseStudy onBack={handleBackFromCaseStudy} />
  }

  // KALMONT Case Study (Project ID: 4)
  if (showCaseStudy === 4) {
    return <KalmontCaseStudy onBack={handleBackFromCaseStudy} />
  }

  // Granville Island Case Study (Project ID: 5)
  if (showCaseStudy === 5) {
    return <GranvilleIslandCaseStudy onBack={handleBackFromCaseStudy} />
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={projects} onCaseStudyClick={handleCaseStudyClick} />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
