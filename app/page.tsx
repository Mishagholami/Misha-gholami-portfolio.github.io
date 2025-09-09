"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import CustomCursor from "@/components/CustomCursor"

// Case Study Components - using default imports
import KalmontCaseStudy from "@/components/KalmontCaseStudy"
import LinkedInCaseStudy from "@/components/LinkedInCaseStudy"
import WellnestCaseStudy from "@/components/WellnestCaseStudy"
import GranvilleIslandCaseStudy from "@/components/GranvilleIslandCaseStudy"

export default function Home() {
  const [currentView, setCurrentView] = useState("home")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      if (hash === "case-studies/kalmont") {
        setCurrentView("kalmont")
      } else if (hash === "case-studies/linkedin") {
        setCurrentView("linkedin")
      } else if (hash === "case-studies/wellnest") {
        setCurrentView("wellnest")
      } else if (hash === "case-studies/granville-island") {
        setCurrentView("granville-island")
      } else if (hash === "case-studies/headspace") {
        setCurrentView("headspace")
      } else {
        setCurrentView("home")
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const handleBackToHome = () => {
    window.history.pushState(null, "", "/")
    setCurrentView("home")
  }

  if (currentView === "kalmont") {
    return <KalmontCaseStudy onBack={handleBackToHome} />
  }

  if (currentView === "linkedin") {
    return <LinkedInCaseStudy onBack={handleBackToHome} />
  }

  if (currentView === "wellnest") {
    return <WellnestCaseStudy onBack={handleBackToHome} />
  }

  if (currentView === "granville-island") {
    return <GranvilleIslandCaseStudy onBack={handleBackToHome} />
  }

  if (currentView === "headspace") {
    // For now, redirect to LinkedIn case study as placeholder
    // You can create a HeadspaceCaseStudy component later
    return <LinkedInCaseStudy onBack={handleBackToHome} />
  }

  return (
    <div className="min-h-screen bg-white">
      <CustomCursor />
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
