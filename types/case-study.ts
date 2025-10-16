export interface CaseStudyConfig {
  page: {
    slug: string
    title: string
    meta: {
      description: string
      ogImage: string
    }
  }
  theme: {
    palette: string
    background: {
      type: string
      intensity: string
    }
    typography: {
      headline: string
      body: string
    }
    nav: {
      sticky: boolean
      useMainSiteNav: boolean
    }
    spacing: string
    radius: string
    elevation: string
  }
  layout: {
    maxWidth: string
    gutter: string
  }
  sections: Section[]
}

export type Section =
  | HeroSection
  | RichTextSection
  | KeyValueSection
  | ListSection
  | CardsSection
  | StatsSection
  | ImageSection
  | FooterNavSection

export interface HeroSection {
  type: "hero"
  variant: string
  eyebrow: string
  title: string
  subtitle: string
  actions: any[]
  media: any
}

export interface RichTextSection {
  type: "richText"
  title: string
  body: string
}

export interface KeyValueSection {
  type: "keyValue"
  title: string
  items: Array<{ key: string; value: string }>
}

export interface ListSection {
  type: "list"
  style: "bulleted" | "check"
  title: string
  items: string[]
}

export interface CardsSection {
  type: "cards"
  title: string
  columns: number
  items: Array<{
    title: string
    description: string
  }>
}

export interface StatsSection {
  type: "stats"
  title: string
  items: Array<{
    label: string
    value: string
  }>
  note?: string
}

export interface ImageSection {
  type: "image"
  title: string
  src: string
  alt: string
  aspectRatio: string
  rounded: boolean
  elevation: string
}

export interface FooterNavSection {
  type: "footerNav"
  previous: { href: string; label: string } | null
  next: { href: string; label: string } | null
}
