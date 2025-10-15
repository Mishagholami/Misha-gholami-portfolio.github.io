import type { CaseStudyConfig } from "@/types/case-study"

export const linkedinCaseStudy: CaseStudyConfig = {
  page: {
    slug: "projects/linkedin-user-study",
    title: "LinkedIn User Study — Understanding Notifications & Engagement Patterns",
    meta: {
      description:
        "Exploring how users interact with LinkedIn notifications and engagement tools to improve clarity and reduce overload.",
      ogImage: "/linkedin-user-study.jpg",
    },
  },
  theme: {
    palette: "pastel-brown-cream",
    background: {
      type: "blurred-bubbles",
      intensity: "medium",
    },
    typography: {
      headline: "modern",
      body: "clean",
    },
    nav: {
      sticky: true,
      useMainSiteNav: true,
    },
    spacing: "comfortable",
    radius: "2xl",
    elevation: "soft",
  },
  layout: {
    maxWidth: "container",
    gutter: "lg",
  },
  sections: [
    {
      type: "hero",
      variant: "centered",
      eyebrow: "Individual UX Research Project",
      title: "LinkedIn User Study — Understanding Notifications & Engagement Patterns",
      subtitle:
        "Exploring how users interact with LinkedIn notifications and engagement tools to improve clarity and reduce overload.",
      actions: [],
      media: null,
    },
    {
      type: "image",
      title: null,
      src: "/linkedin-user-study.jpg",
      alt: "LinkedIn User Study project banner",
      aspectRatio: "16:9",
      rounded: true,
      elevation: "soft",
    },
    {
      type: "richText",
      title: "Overview",
      body: "This individual UX research project focused on how LinkedIn users manage and respond to notifications. The goal was to uncover pain points around cluttered alerts, poor prioritization, and disengagement, then propose design improvements for a cleaner, more intuitive experience.",
    },
    {
      type: "keyValue",
      title: "Project Type and Duration",
      items: [
        { key: "Type", value: "Individual UX Research Project" },
        { key: "Duration", value: "4 weeks" },
        {
          key: "Process",
          value: "User interviews, heuristic evaluation, usability testing",
        },
      ],
    },
    {
      type: "richText",
      title: "Problem Statement",
      body: "Many LinkedIn users feel overwhelmed by irrelevant or redundant notifications. This information overload makes it difficult to identify what truly matters, leading to missed professional opportunities and disengagement.",
    },
    {
      type: "list",
      style: "bulleted",
      title: "Research Approach",
      items: [
        "Conducted 5 user interviews (students, recruiters, and professionals).",
        "Evaluated LinkedIn using Nielsen's Heuristics: Visibility of System Status, Consistency, Recognition over Recall, and Minimalist Design.",
        "Created low-fidelity prototypes to test new notification hierarchies.",
      ],
    },
    {
      type: "list",
      style: "check",
      title: "Key Findings",
      items: [
        "Users primarily interact through notifications, not the main feed.",
        "Many alerts are repetitive or irrelevant.",
        'The "All" and "My Network" tabs lack visual clarity and hierarchy.',
        "Users want control over notification priorities.",
      ],
    },
    {
      type: "cards",
      title: "Proposed Solutions",
      columns: 2,
      items: [
        {
          title: "Smart Notification Filters",
          description: "AI-based sorting by category",
        },
        {
          title: "Visual cues for alert types",
          description: "Color-coded hierarchy",
        },
        {
          title: 'Personalized "Daily Recap" tab',
          description: "Top 3 relevant updates",
        },
        {
          title: "Sticky filter bar",
          description: "Easier navigation",
        },
      ],
    },
    {
      type: "richText",
      title: "Tools Used",
      body: "Figma · Notion · Google Forms · Miro",
    },
    {
      type: "richText",
      title: "Outcome",
      body: "Prototype testing showed improved satisfaction and focus. Users reported faster recognition of key updates and a clearer sense of professional activity.",
    },
    {
      type: "image",
      title: "Project Image Placeholder",
      src: "/linkedin-notifications-redesign-mockup-with-filter.jpg",
      alt: "LinkedIn User Study — Project Image Placeholder",
      aspectRatio: "16:9",
      rounded: true,
      elevation: "soft",
    },
    {
      type: "footerNav",
      previous: { href: "/", label: "Back to Home" },
      next: null,
    },
  ],
}
