export interface Project {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  image?: string
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
    metrics: {
      label: string
      value: string
      description: string
    }[]
    outcomes: string[]
  }
  gallery: {
    src: string
    alt: string
    caption?: string
    credit?: string
  }[]
  skills: string[]
  tools: string[]
  reflection: {
    challenges: string[]
    learnings: string[]
    nextSteps?: string[]
  }
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  credit?: string
}

export interface ProjectMetric {
  label: string
  value: string
  description: string
}
