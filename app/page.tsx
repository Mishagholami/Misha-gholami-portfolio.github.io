import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import GallerySection from "@/components/gallery-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getFeaturedProjects } from "@/lib/projects-data"

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection projects={featuredProjects} />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  )
}
