export interface Project {
  id: number
  title: string
  description: string
  image?: string
  category: "research" | "design" | "development" | "concept"
  tags: string[]
  role: string
  duration?: string
  team?: string[]
  challenge?: string
  solution?: string
  outcome?: string
  figmaLink?: string
  githubRepo?: string
  liveDemo?: string
  pdfReport?: string
  caseStudyUrl?: string
  caseStudyColor?: "purple" | "blue" | "green" | "teal" | "orange" | "red"
  featured: boolean
  testimonial?: {
    quote: string
    author: string
    role: string
    company: string
  }
}

export interface GalleryItem {
  id: number
  title: string
  description: string
  image?: string
  category: "illustration" | "branding" | "ux-concept" | "animation" | "freelance" | "personal"
  tags: string[]
  tools?: string[]
  context?: string
  year: string
  client?: string
  featured: boolean
  behanceLink?: string
  dribbbleLink?: string
  figmaLink?: string
  projectLink?: string
}
