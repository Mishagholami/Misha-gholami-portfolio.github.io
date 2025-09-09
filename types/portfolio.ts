export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  category: string
  tags: string[]
  role: string
  duration: string
  team?: string
  client?: string
  year: number
  featured: boolean
  links: {
    figma?: string
    github?: string
    live?: string
    prototype?: string
  }
  overview: {
    challenge: string
    approach: string
    outcome: string
  }
  problem: {
    title: string
    description: string
    painPoints: string[]
  }
  research: {
    methods: string[]
    insights: string[]
    userQuotes?: string[]
  }
  solution: {
    approach: string
    keyFeatures: string[]
    designDecisions: string[]
  }
  impact: {
    metrics: Array<{
      label: string
      value: string
      description: string
    }>
    outcomes: string[]
  }
  gallery: Array<{
    src: string
    alt: string
    caption?: string
  }>
  skills: string[]
  tools: string[]
  reflection: {
    challenges: string[]
    learnings: string[]
    nextSteps?: string[]
  }
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  tags: string[]
  featured: boolean
}

export interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
  description?: string
}

export interface ContactInfo {
  email: string
  phone?: string
  location: string
  social: {
    linkedin?: string
    github?: string
    dribbble?: string
    behance?: string
  }
}
