import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: 1,
    slug: "linkedin-user-study",
    title: "LinkedIn User Study",
    description: "In-depth qualitative research to uncover user pain points and opportunities on LinkedIn's platform.",
    image: "/placeholder.svg?height=600&width=800&text=LinkedIn+Study",
    category: "research",
    tags: ["User Research", "Data Analysis", "Usability Testing", "Thematic Analysis"],
    role: "Lead UX Researcher",
    duration: "2 months",
    year: "2024",
    team: ["UX Researcher", "Data Analyst", "Product Manager"],
    challenge:
      "LinkedIn users were experiencing difficulties with content discovery and professional networking efficiency.",
    solution:
      "Conducted comprehensive user interviews and usability testing to identify key pain points and opportunities.",
    outcome:
      "Identified 5 key pain points affecting 80% of users, leading to actionable recommendations that could improve user engagement by an estimated 35%.",
    overview:
      "This comprehensive user research study aimed to understand how professionals interact with LinkedIn's platform, identifying friction points in their networking and content discovery journey. Through a mixed-methods approach, we uncovered critical insights that could reshape the user experience.",
    problem:
      "LinkedIn users reported frustration with content relevance, difficulty in meaningful networking, and overwhelming notification systems. Our preliminary data showed a 40% drop-off rate in daily active users over 6 months.",
    research: [
      "Conducted 25 in-depth user interviews with professionals across various industries",
      "Performed usability testing sessions with 15 participants using think-aloud protocol",
      "Analyzed user behavior data from 1,000+ anonymized user sessions",
      "Created user journey maps highlighting pain points and opportunities",
      "Conducted competitive analysis of professional networking platforms",
    ],
    solutionDetails:
      "Our research methodology combined qualitative and quantitative approaches to provide comprehensive insights. We used thematic analysis to identify patterns in user feedback and created actionable recommendations based on evidence-based findings.",
    impact: [
      "Identified 5 critical pain points affecting 80% of surveyed users",
      "Provided 12 actionable recommendations with priority rankings",
      "Estimated potential 35% increase in user engagement if recommendations implemented",
      "Created user personas and journey maps adopted by the product team",
      "Influenced product roadmap decisions for Q3-Q4 development cycles",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=User+Interview+Setup",
      "/placeholder.svg?height=400&width=600&text=Journey+Map",
      "/placeholder.svg?height=400&width=600&text=Pain+Points+Analysis",
      "/placeholder.svg?height=400&width=600&text=Recommendations+Framework",
    ],
    skills: ["User Research", "Data Analysis", "Usability Testing", "Thematic Analysis", "User Journey Mapping"],
    tools: ["Figma", "Miro", "Google Analytics", "Zoom", "Notion", "SPSS"],
    reflection:
      "This project reinforced the importance of combining qualitative insights with quantitative data. The biggest challenge was synthesizing diverse user feedback into actionable recommendations while maintaining objectivity.",
    lessonsLearned: [
      "Always validate assumptions with real user data",
      "Diverse user perspectives lead to more comprehensive insights",
      "Clear communication of findings is as important as the research itself",
      "Stakeholder buy-in requires evidence-based recommendations",
    ],
    figmaLink: "https://figma.com/linkedin-study",
    pdfReport: "https://example.com/linkedin-report.pdf",
    caseStudyColor: "blue",
    featured: true,
  },
  {
    id: 2,
    slug: "headspace-app-redesign",
    title: "Headspace App Redesign",
    description: "Rethinking the meditation experience with a focus on accessibility and modern UI principles.",
    image: "/placeholder.svg?height=600&width=800&text=Headspace+Redesign",
    category: "design",
    tags: ["UX/UI Design", "Prototyping", "Accessibility", "User Flows"],
    role: "UX/UI Designer",
    duration: "3 months",
    year: "2024",
    team: ["UX Designer", "UI Designer", "Accessibility Consultant"],
    challenge:
      "The existing Headspace app had accessibility issues and outdated visual design that didn't align with modern design principles.",
    solution: "Led a complete redesign process focusing on accessibility improvements and modern UI patterns.",
    outcome: "Created a more accessible and visually appealing interface that improved task completion rates by 40%.",
    overview:
      "A comprehensive redesign of the Headspace meditation app, focusing on creating an inclusive experience that serves users with diverse abilities while maintaining the calming, mindful aesthetic the brand is known for.",
    problem:
      "User feedback indicated that the current app design created barriers for users with visual impairments, motor difficulties, and cognitive differences. Additionally, the interface felt outdated compared to modern design standards.",
    research: [
      "Conducted accessibility audit using WCAG 2.1 guidelines",
      "Interviewed 20 users with diverse accessibility needs",
      "Analyzed competitor apps for accessibility best practices",
      "Tested current app with screen readers and assistive technologies",
      "Reviewed user support tickets for common usability issues",
    ],
    solutionDetails:
      "The redesign focused on improving color contrast, implementing proper focus states, adding alternative text for all images, and creating more intuitive navigation patterns. We also introduced customizable interface options for users with different needs.",
    impact: [
      "Improved WCAG compliance from Level A to Level AA",
      "Increased task completion rates by 40% across all user groups",
      "Reduced user support tickets related to navigation by 60%",
      "Achieved 4.8/5 accessibility rating in user testing",
      "Positive feedback from accessibility advocacy groups",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Before+After+Comparison",
      "/placeholder.svg?height=400&width=600&text=Accessibility+Features",
      "/placeholder.svg?height=400&width=600&text=Color+Contrast+Guide",
      "/placeholder.svg?height=400&width=600&text=User+Flow+Diagrams",
      "/placeholder.svg?height=400&width=600&text=Prototype+Screens",
    ],
    skills: ["UX Design", "UI Design", "Accessibility Design", "Prototyping", "User Testing"],
    tools: ["Figma", "Principle", "Stark", "Axe", "VoiceOver", "JAWS"],
    reflection:
      "This project opened my eyes to the importance of inclusive design. Working with users who have different abilities taught me that accessibility improvements often benefit all users, not just those with specific needs.",
    lessonsLearned: [
      "Accessibility should be considered from the beginning, not as an afterthought",
      "User testing with diverse groups reveals insights you can't get from guidelines alone",
      "Small design changes can have massive impacts on usability",
      "Inclusive design principles make products better for everyone",
    ],
    figmaLink: "https://figma.com/headspace-redesign",
    liveDemo: "https://headspace-redesign.example.com",
    caseStudyColor: "purple",
    featured: true,
  },
  {
    id: 3,
    slug: "wellnest-to-work-app",
    title: "Wellnest to Work App",
    description: "Ideation and design of a mobile application connecting workplace wellness with productivity.",
    image: "/placeholder.svg?height=600&width=800&text=Wellnest+App",
    category: "concept",
    tags: ["App Design", "User Stories", "Prototyping", "Concept Development"],
    role: "Product Designer",
    duration: "4 months",
    year: "2024",
    team: ["Product Designer", "UX Researcher", "Business Analyst"],
    challenge: "Remote workers struggle to maintain work-life balance and wellness routines.",
    solution:
      "Designed an integrated solution that promotes wellness while enhancing productivity in remote work environments.",
    outcome: "Developed a comprehensive app concept with 15+ core features, validated through user feedback sessions.",
    overview:
      "Wellnest to Work is a conceptual mobile application designed to bridge the gap between workplace productivity and personal wellness. The app recognizes that employee wellbeing directly impacts work performance and aims to create sustainable habits.",
    problem:
      "With the rise of remote work, employees reported increased stress, decreased physical activity, and blurred boundaries between work and personal life. Traditional wellness apps don't integrate with work schedules, making it difficult to maintain consistent healthy habits.",
    research: [
      "Surveyed 150 remote workers about their wellness challenges",
      "Conducted 30 interviews with HR professionals and wellness coordinators",
      "Analyzed existing wellness and productivity apps for feature gaps",
      "Studied workplace wellness research and best practices",
      "Created user personas based on different work-from-home scenarios",
    ],
    solutionDetails:
      "The app integrates with calendar systems to suggest wellness activities during breaks, tracks both productivity and wellness metrics, and provides personalized recommendations based on work patterns and stress levels.",
    impact: [
      "Validated concept with 85% positive feedback from target users",
      "Identified market opportunity worth $2.3B in corporate wellness",
      "Created detailed feature specifications for 15 core functionalities",
      "Developed go-to-market strategy with potential B2B partnerships",
      "Generated interest from 3 potential investors during concept presentations",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=App+Concept+Overview",
      "/placeholder.svg?height=400&width=600&text=User+Journey+Map",
      "/placeholder.svg?height=400&width=600&text=Feature+Wireframes",
      "/placeholder.svg?height=400&width=600&text=Visual+Design+System",
      "/placeholder.svg?height=400&width=600&text=Prototype+Demo",
    ],
    skills: ["Product Design", "Concept Development", "User Research", "Prototyping", "Business Strategy"],
    tools: ["Figma", "Miro", "Notion", "Principle", "Google Forms", "Zoom"],
    reflection:
      "This project taught me the importance of validating concepts early and often. The intersection of wellness and productivity revealed interesting insights about user motivation and behavior change.",
    lessonsLearned: [
      "Concept validation is crucial before investing in detailed design",
      "Understanding business models helps create more viable product concepts",
      "User motivation varies significantly across different demographics",
      "Integration capabilities can make or break a productivity app",
    ],
    figmaLink: "https://figma.com/wellnesstowork-concept",
    caseStudyColor: "green",
    featured: true,
  },
  {
    id: 4,
    slug: "kalmont-web-development",
    title: "KALMONT Web Development",
    description: "Full-stack web design and development for a modern business website with focus on user experience.",
    image: "/placeholder.svg?height=600&width=800&text=KALMONT+Website",
    category: "development",
    tags: ["React", "Tailwind CSS", "Web Design", "Frontend Development"],
    role: "Full-Stack Developer",
    duration: "6 months",
    year: "2024",
    client: "KALMONT Corporation",
    team: ["Full-Stack Developer", "UI Designer", "Content Strategist"],
    challenge: "KALMONT needed a modern, responsive website that would effectively communicate their brand values.",
    solution:
      "Handled complete project from initial design concepts to final deployment using modern web technologies.",
    outcome:
      "Delivered a high-performance website with 95+ Lighthouse scores, resulting in 60% increase in user engagement.",
    overview:
      "A complete web development project for KALMONT Corporation, involving everything from initial concept and design to full-stack development and deployment. The project focused on creating a modern, performant website that effectively communicates the company's values and services.",
    problem:
      "KALMONT's existing website was outdated, not mobile-responsive, and failed to convert visitors into leads. The site had poor performance scores and didn't reflect the company's innovative approach to their industry.",
    research: [
      "Analyzed competitor websites and industry best practices",
      "Conducted stakeholder interviews to understand business goals",
      "Performed technical audit of existing website infrastructure",
      "Researched target audience preferences and behaviors",
      "Studied conversion optimization techniques for B2B websites",
    ],
    solutionDetails:
      "Built a modern, responsive website using React and Next.js with a focus on performance, accessibility, and conversion optimization. Implemented a headless CMS for easy content management and integrated analytics for tracking user behavior.",
    impact: [
      "Achieved 95+ scores across all Lighthouse metrics",
      "Increased user engagement by 60% within first month",
      "Improved mobile traffic by 120% due to responsive design",
      "Reduced page load times from 8s to under 2s",
      "Generated 40% more qualified leads through improved UX",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Homepage+Design",
      "/placeholder.svg?height=400&width=600&text=Mobile+Responsive+Views",
      "/placeholder.svg?height=400&width=600&text=Performance+Metrics",
      "/placeholder.svg?height=400&width=600&text=Code+Architecture",
      "/placeholder.svg?height=400&width=600&text=Before+After+Comparison",
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Web Performance"],
    tools: ["VS Code", "Figma", "Vercel", "GitHub", "Lighthouse", "Google Analytics"],
    reflection:
      "This project reinforced the importance of performance optimization and user-centered design in web development. Balancing aesthetic appeal with technical performance was a key challenge that led to creative solutions.",
    lessonsLearned: [
      "Performance optimization should be considered from the beginning",
      "Regular client communication prevents scope creep and ensures alignment",
      "Modern web technologies can significantly improve user experience",
      "Data-driven decisions lead to better outcomes than assumptions",
    ],
    liveDemo: "https://kalmont.example.com",
    githubRepo: "https://github.com/mishagholami/kalmont-website",
    caseStudyColor: "blue",
    featured: true,
  },
  {
    id: 5,
    slug: "granville-island-research",
    title: "Granville Island Research",
    description: "User research and interviewing study for reimagining Granville Island's public space experience.",
    image: "/placeholder.svg?height=600&width=800&text=Granville+Island",
    category: "research",
    tags: ["User Research", "Public Space Design", "Ethnographic Study", "Community Engagement"],
    role: "Lead Researcher",
    duration: "5 months",
    year: "2024",
    client: "Vancouver Parks Board",
    team: ["Lead Researcher", "Urban Planner", "Community Liaison"],
    challenge:
      "Granville Island needed insights into how visitors and locals use the space to inform future development.",
    solution:
      "Designed and executed comprehensive research methodology, analyzed findings, and presented recommendations.",
    outcome: "Generated actionable insights from 50+ interviews and observations, leading to 8 key recommendations.",
    overview:
      "A comprehensive ethnographic study of Granville Island's public spaces, examining how different user groups interact with the environment and identifying opportunities for improving the visitor experience while preserving the area's unique character.",
    problem:
      "Granville Island faced challenges with overcrowding during peak times, underutilized spaces, and conflicting needs between tourists, locals, and vendors. The Parks Board needed evidence-based insights to guide future development decisions.",
    research: [
      "Conducted 50+ interviews with visitors, locals, vendors, and stakeholders",
      "Performed observational studies during different times and seasons",
      "Mapped user journeys and behavior patterns throughout the island",
      "Analyzed historical usage data and visitor demographics",
      "Facilitated community workshops to gather diverse perspectives",
    ],
    solutionDetails:
      "Used a mixed-methods approach combining ethnographic observation, structured interviews, and participatory design workshops. Created detailed user personas and journey maps to illustrate different ways people experience the space.",
    impact: [
      "Provided 8 evidence-based recommendations for space improvements",
      "Identified 3 underutilized areas with high potential for activation",
      "Created user personas adopted by the planning committee",
      "Influenced $2M budget allocation for public space improvements",
      "Generated community support for proposed changes through inclusive research process",
    ],
    gallery: [
      "/placeholder.svg?height=400&width=600&text=Interview+Sessions",
      "/placeholder.svg?height=400&width=600&text=Observation+Maps",
      "/placeholder.svg?height=400&width=600&text=User+Journey+Analysis",
      "/placeholder.svg?height=400&width=600&text=Community+Workshop",
      "/placeholder.svg?height=400&width=600&text=Final+Recommendations",
    ],
    skills: [
      "Ethnographic Research",
      "User Interviews",
      "Observational Studies",
      "Data Analysis",
      "Community Engagement",
    ],
    tools: ["Notion", "Miro", "Google Forms", "Camera Equipment", "Audio Recorders", "GIS Mapping"],
    reflection:
      "This project highlighted the complexity of public space design and the importance of including diverse voices in the research process. Working with a real community taught me about the responsibility researchers have to their participants.",
    lessonsLearned: [
      "Public space research requires sensitivity to diverse community needs",
      "Observational data provides context that interviews alone cannot capture",
      "Community buy-in is essential for successful implementation of recommendations",
      "Long-term studies reveal patterns that short-term research might miss",
    ],
    pdfReport: "https://example.com/granville-island-research.pdf",
    caseStudyColor: "teal",
    featured: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAdjacentProjects(currentSlug: string): { prev: Project | null; next: Project | null } {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug)

  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null,
  }
}
