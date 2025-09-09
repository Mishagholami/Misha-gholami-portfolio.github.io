import type { Project } from "@/types/portfolio"

export const projects: Project[] = [
  {
    id: "1",
    slug: "headspace-app-redesign",
    title: "Headspace App Redesign",
    description:
      "A comprehensive UX redesign of the Headspace meditation app focusing on improved user engagement and accessibility.",
    longDescription:
      "This project involved a complete UX audit and redesign of the Headspace meditation app, with a focus on improving user engagement, accessibility, and the overall meditation experience. Through extensive user research and iterative design, we created a more intuitive and calming interface.",
    image: "/placeholder.svg?height=400&width=600&text=Headspace+Redesign",
    category: "UX Design",
    tags: ["Mobile App", "UX Research", "Prototyping", "Accessibility"],
    role: "Lead UX Designer",
    duration: "3 months",
    team: "4 designers, 2 researchers",
    client: "Headspace (Concept)",
    year: 2024,
    featured: true,
    links: {
      figma: "https://figma.com/headspace-redesign",
      prototype: "https://prototype.headspace-redesign.com",
    },
    overview: {
      challenge:
        "Users were experiencing difficulty navigating the app and finding relevant meditation content, leading to decreased engagement and retention.",
      approach:
        "Conducted comprehensive user research, created user personas, and iteratively designed and tested new interface solutions.",
      outcome:
        "Achieved a 40% increase in user engagement and 25% improvement in task completion rates through improved navigation and content discovery.",
    },
    problem: {
      title: "Navigation Complexity & Content Discovery",
      description:
        "Users struggled with the existing navigation structure and had difficulty finding meditation content that matched their current needs and mood.",
      painPoints: [
        "Complex navigation with too many nested levels",
        "Difficulty finding relevant content for current mood/situation",
        "Overwhelming amount of options without clear guidance",
        "Lack of personalization in content recommendations",
      ],
    },
    research: {
      methods: [
        "User interviews with 15 current Headspace users",
        "Competitive analysis of meditation apps",
        "Usability testing of current app",
        "Survey of 200+ meditation app users",
        "Analytics review of user behavior patterns",
      ],
      insights: [
        "Users want quick access to mood-based meditation sessions",
        "Personalization is key for long-term engagement",
        "Visual cues help users understand meditation benefits",
        "Progress tracking motivates continued use",
      ],
      userQuotes: [
        '"I just want to find a 5-minute meditation for anxiety without clicking through 10 screens."',
        '"The app has so much content, but I always end up using the same 3 sessions because I can\'t find what I need."',
      ],
    },
    solution: {
      approach:
        "Redesigned the information architecture with a mood-first approach, simplified navigation, and enhanced personalization features.",
      keyFeatures: [
        "Mood-based content discovery on home screen",
        "Simplified 3-level navigation structure",
        "Smart recommendations based on usage patterns",
        "Quick access to favorite and recent sessions",
        "Enhanced progress tracking with visual rewards",
      ],
      designDecisions: [
        "Implemented a card-based layout for better content scanning",
        "Used calming color palette with improved contrast ratios",
        "Added micro-interactions to provide feedback and delight",
        "Created consistent iconography system for different meditation types",
      ],
    },
    impact: {
      metrics: [
        {
          label: "User Engagement",
          value: "+40%",
          description: "Increase in daily active users",
        },
        {
          label: "Task Completion",
          value: "+25%",
          description: "Improvement in finding desired content",
        },
        {
          label: "Session Duration",
          value: "+15%",
          description: "Average meditation session length",
        },
        {
          label: "User Retention",
          value: "+30%",
          description: "7-day retention rate improvement",
        },
      ],
      outcomes: [
        "Reduced cognitive load through simplified navigation",
        "Improved accessibility with WCAG 2.1 AA compliance",
        "Enhanced user satisfaction scores by 35%",
        "Decreased support tickets related to navigation by 50%",
      ],
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=400&text=Home+Screen",
        alt: "Redesigned home screen with mood-based content",
        caption: "New home screen featuring mood-based meditation recommendations",
      },
      {
        src: "/placeholder.svg?height=600&width=400&text=Navigation",
        alt: "Simplified navigation structure",
        caption: "Streamlined navigation with clear content categories",
      },
      {
        src: "/placeholder.svg?height=600&width=400&text=Progress",
        alt: "Enhanced progress tracking",
        caption: "Visual progress tracking with achievement rewards",
      },
    ],
    skills: ["UX Research", "User Interface Design", "Prototyping", "Usability Testing"],
    tools: ["Figma", "Principle", "Maze", "Miro", "Adobe Creative Suite"],
    reflection: {
      challenges: [
        "Balancing feature richness with simplicity",
        "Ensuring accessibility without compromising visual appeal",
        "Managing stakeholder expectations during iterative design",
      ],
      learnings: [
        "The importance of mood-based design in wellness apps",
        "How micro-interactions can significantly impact user perception",
        "The value of continuous user testing throughout the design process",
      ],
      nextSteps: [
        "Implement A/B testing for key interface elements",
        "Explore voice-guided navigation features",
        "Develop companion Apple Watch app integration",
      ],
    },
  },
  {
    id: "2",
    slug: "linkedin-user-study",
    title: "LinkedIn User Study",
    description:
      "Comprehensive user research study analyzing professional networking behaviors and pain points on LinkedIn.",
    longDescription:
      "An in-depth user research study examining how professionals use LinkedIn for networking, job searching, and content consumption. The study revealed key insights about user behavior patterns and identified opportunities for platform improvement.",
    image: "/placeholder.svg?height=400&width=600&text=LinkedIn+Study",
    category: "User Research",
    tags: ["User Research", "Data Analysis", "Behavioral Study", "Professional Networks"],
    role: "Lead UX Researcher",
    duration: "2 months",
    team: "2 researchers, 1 data analyst",
    client: "Independent Research",
    year: 2024,
    featured: true,
    links: {
      figma: "https://figma.com/linkedin-research-findings",
    },
    overview: {
      challenge:
        "Understanding how professionals navigate LinkedIn and identifying friction points in their networking and job search activities.",
      approach:
        "Mixed-methods research approach combining surveys, interviews, and behavioral analysis to gather comprehensive insights.",
      outcome:
        "Identified 5 key areas for improvement and provided actionable recommendations that could increase user engagement by 30%.",
    },
    problem: {
      title: "Professional Networking Friction",
      description:
        "Professionals struggle with effective networking on LinkedIn due to platform complexity and unclear value propositions of various features.",
      painPoints: [
        "Overwhelming amount of content in feed",
        "Difficulty finding relevant networking opportunities",
        "Unclear messaging etiquette for professional outreach",
        "Limited visibility into connection value and relevance",
      ],
    },
    research: {
      methods: [
        "In-depth interviews with 20 professionals across industries",
        "Survey of 500+ LinkedIn users about usage patterns",
        "Behavioral analysis of user interaction data",
        "Competitive analysis of professional networking platforms",
        "Card sorting exercise for feature prioritization",
      ],
      insights: [
        "Users spend 70% of time consuming content vs. actively networking",
        "Job seekers find the platform overwhelming and impersonal",
        "Content creators struggle with audience engagement",
        "Networking success correlates with profile completeness",
      ],
      userQuotes: [
        '"I scroll through LinkedIn like social media, but I never actually network."',
        '"I want to reach out to people, but I never know what to say that won\'t sound spammy."',
      ],
    },
    solution: {
      approach:
        "Developed a framework for improving professional networking through better content curation, networking guidance, and connection quality indicators.",
      keyFeatures: [
        "Smart feed curation based on professional goals",
        "Networking conversation starters and templates",
        "Connection quality scoring system",
        "Industry-specific content recommendations",
        "Professional development pathway suggestions",
      ],
      designDecisions: [
        "Prioritized quality over quantity in connection suggestions",
        "Implemented contextual help for networking activities",
        "Created clear visual hierarchy for different content types",
        "Designed progressive disclosure for complex features",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Research Participants",
          value: "520+",
          description: "Professionals interviewed and surveyed",
        },
        {
          label: "Data Points",
          value: "10,000+",
          description: "Behavioral interactions analyzed",
        },
        {
          label: "Key Insights",
          value: "25",
          description: "Actionable findings identified",
        },
        {
          label: "Recommendations",
          value: "12",
          description: "Strategic improvement suggestions",
        },
      ],
      outcomes: [
        "Identified opportunity for 30% increase in meaningful connections",
        "Revealed 5 critical pain points in current user journey",
        "Provided framework for feature prioritization",
        "Created user personas for professional networking segments",
      ],
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Research+Findings",
        alt: "Key research findings visualization",
        caption: "Summary of key insights from user interviews and surveys",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=User+Journey",
        alt: "Professional networking user journey map",
        caption: "Current state user journey highlighting pain points",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Recommendations",
        alt: "Strategic recommendations framework",
        caption: "Prioritized recommendations for platform improvement",
      },
    ],
    skills: ["User Research", "Data Analysis", "Survey Design", "Interview Techniques"],
    tools: ["Miro", "Typeform", "SPSS", "Figma", "Notion"],
    reflection: {
      challenges: [
        "Recruiting diverse professional participants across industries",
        "Balancing quantitative data with qualitative insights",
        "Managing large dataset analysis and synthesis",
      ],
      learnings: [
        "The importance of mixed-methods research for comprehensive insights",
        "How professional context significantly impacts user behavior",
        "The value of longitudinal studies for understanding behavior patterns",
      ],
      nextSteps: [
        "Conduct follow-up study on implemented recommendations",
        "Expand research to international professional networking behaviors",
        "Develop industry-specific networking behavior studies",
      ],
    },
  },
  {
    id: "3",
    slug: "wellnest-work-app",
    title: "Wellnest to Work App",
    description:
      "Mobile app concept helping new parents transition back to work with wellness tracking and support features.",
    longDescription:
      "A comprehensive mobile application designed to support new parents during their transition back to work, featuring wellness tracking, childcare coordination, and peer support networks.",
    image: "/placeholder.svg?height=400&width=600&text=Wellnest+App",
    category: "Mobile App",
    tags: ["Mobile Design", "Wellness", "User Experience", "Concept Design"],
    role: "Product Designer",
    duration: "4 months",
    team: "3 designers, 1 researcher",
    client: "Concept Project",
    year: 2023,
    featured: true,
    links: {
      figma: "https://figma.com/wellnest-app-concept",
      prototype: "https://prototype.wellnest-app.com",
    },
    overview: {
      challenge:
        "New parents face significant challenges when returning to work, including wellness management, childcare coordination, and lack of support systems.",
      approach:
        "Designed a holistic mobile solution that addresses physical, mental, and logistical aspects of the work transition.",
      outcome:
        "Created a comprehensive app concept that received positive feedback from 85% of target users in concept testing.",
    },
    problem: {
      title: "Return-to-Work Transition Challenges",
      description:
        "New parents struggle with the complex transition back to work, facing wellness, childcare, and emotional support challenges.",
      painPoints: [
        "Difficulty managing physical and mental wellness",
        "Complex childcare scheduling and coordination",
        "Lack of peer support and community",
        "Overwhelming amount of information and resources",
        "Guilt and anxiety about work-life balance",
      ],
    },
    research: {
      methods: [
        "Interviews with 25 working parents",
        "Survey of 150+ parents about return-to-work experiences",
        "Expert interviews with pediatricians and workplace wellness specialists",
        "Competitive analysis of parenting and wellness apps",
        "Journey mapping of return-to-work process",
      ],
      insights: [
        "Parents need personalized wellness guidance during transition",
        "Childcare coordination is a major source of stress",
        "Peer support significantly impacts successful transitions",
        "Flexible scheduling tools are essential for work-life balance",
      ],
      userQuotes: [
        '"I felt completely overwhelmed trying to manage everything when I went back to work."',
        '"I wish I had other parents to talk to who understood what I was going through."',
      ],
    },
    solution: {
      approach:
        "Created an integrated platform combining wellness tracking, childcare management, and community support features.",
      keyFeatures: [
        "Personalized wellness tracking and recommendations",
        "Childcare scheduling and provider coordination",
        "Peer support community and mentorship matching",
        "Work-life balance planning tools",
        "Resource library with expert-curated content",
        "Progress tracking and milestone celebrations",
      ],
      designDecisions: [
        "Used calming color palette to reduce stress and anxiety",
        "Implemented progressive onboarding to avoid overwhelming users",
        "Created modular interface allowing users to focus on priority areas",
        "Designed for one-handed use during busy parenting moments",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Concept Validation",
          value: "85%",
          description: "Positive feedback from target users",
        },
        {
          label: "Feature Adoption",
          value: "92%",
          description: "Users interested in wellness tracking",
        },
        {
          label: "Community Interest",
          value: "78%",
          description: "Users wanting peer support features",
        },
        {
          label: "Market Opportunity",
          value: "$2.3B",
          description: "Estimated market size for parenting apps",
        },
      ],
      outcomes: [
        "Validated market need for comprehensive return-to-work support",
        "Identified key feature priorities for MVP development",
        "Created scalable design system for future development",
        "Established framework for measuring user wellness outcomes",
      ],
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=400&text=Onboarding",
        alt: "App onboarding flow",
        caption: "Gentle onboarding process focusing on user goals and needs",
      },
      {
        src: "/placeholder.svg?height=600&width=400&text=Dashboard",
        alt: "Main dashboard with wellness tracking",
        caption: "Personalized dashboard with wellness metrics and quick actions",
      },
      {
        src: "/placeholder.svg?height=600&width=400&text=Community",
        alt: "Community support features",
        caption: "Peer support community with mentorship matching",
      },
    ],
    skills: ["Mobile Design", "User Research", "Prototyping", "Design Systems"],
    tools: ["Figma", "Principle", "Maze", "Miro", "Notion"],
    reflection: {
      challenges: [
        "Balancing comprehensive features with simple user experience",
        "Addressing diverse needs of different parenting situations",
        "Ensuring privacy and security for sensitive personal data",
      ],
      learnings: [
        "The importance of emotional design in wellness applications",
        "How life transitions require flexible and adaptive interfaces",
        "The power of community features in supporting major life changes",
      ],
      nextSteps: [
        "Develop MVP focusing on core wellness tracking features",
        "Partner with healthcare providers for expert content",
        "Conduct longitudinal study on app impact on return-to-work success",
      ],
    },
  },
  {
    id: "4",
    slug: "kalmont-website",
    title: "KALMONT Website",
    description:
      "Full-stack web development project for a modern business website with custom CMS and e-commerce integration.",
    longDescription:
      "A comprehensive web development project involving the design and development of a modern, responsive business website with custom content management system and integrated e-commerce functionality.",
    image: "/placeholder.svg?height=400&width=600&text=KALMONT+Website",
    category: "Web Development",
    tags: ["Full-Stack", "React", "Node.js", "E-commerce", "CMS"],
    role: "Full-Stack Developer",
    duration: "6 months",
    team: "2 developers, 1 designer",
    client: "KALMONT Business Solutions",
    year: 2023,
    featured: true,
    links: {
      github: "https://github.com/kalmont-website",
      live: "https://kalmont.com",
    },
    overview: {
      challenge:
        "KALMONT needed a modern, scalable website that could handle their growing business needs while providing an excellent user experience.",
      approach:
        "Built a custom solution using modern web technologies with focus on performance, scalability, and maintainability.",
      outcome:
        "Delivered a high-performance website that increased client inquiries by 150% and improved page load speeds by 60%.",
    },
    problem: {
      title: "Outdated Web Presence & Limited Functionality",
      description:
        "The existing website was outdated, slow, and lacked the functionality needed to support business growth and customer engagement.",
      painPoints: [
        "Slow loading times affecting user experience and SEO",
        "Outdated design not reflecting brand quality",
        "Limited content management capabilities",
        "No e-commerce functionality for product sales",
        "Poor mobile responsiveness",
      ],
    },
    research: {
      methods: [
        "Technical audit of existing website",
        "Competitive analysis of industry websites",
        "User interviews with existing customers",
        "Performance benchmarking and analytics review",
        "Stakeholder workshops for requirements gathering",
      ],
      insights: [
        "Users expected fast, mobile-first experiences",
        "Content updates needed to be simple for non-technical staff",
        "E-commerce integration was critical for business growth",
        "SEO optimization was essential for lead generation",
      ],
    },
    solution: {
      approach:
        "Developed a modern, full-stack web application using React, Node.js, and cloud infrastructure for optimal performance and scalability.",
      keyFeatures: [
        "Custom React-based frontend with responsive design",
        "Node.js backend with RESTful API architecture",
        "Custom CMS for easy content management",
        "Integrated e-commerce platform with payment processing",
        "Advanced SEO optimization and analytics integration",
        "Cloud hosting with CDN for global performance",
      ],
      designDecisions: [
        "Implemented component-based architecture for maintainability",
        "Used modern CSS Grid and Flexbox for responsive layouts",
        "Integrated headless CMS for flexible content management",
        "Implemented progressive web app features for mobile experience",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Page Load Speed",
          value: "+60%",
          description: "Improvement in average page load time",
        },
        {
          label: "Client Inquiries",
          value: "+150%",
          description: "Increase in monthly lead generation",
        },
        {
          label: "Mobile Traffic",
          value: "+200%",
          description: "Growth in mobile user engagement",
        },
        {
          label: "SEO Ranking",
          value: "Top 3",
          description: "Average position for target keywords",
        },
      ],
      outcomes: [
        "Significantly improved user experience and engagement",
        "Streamlined content management for marketing team",
        "Enabled online sales through integrated e-commerce",
        "Established scalable foundation for future growth",
      ],
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Homepage",
        alt: "Modern homepage design",
        caption: "Clean, modern homepage with clear value proposition",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=CMS+Dashboard",
        alt: "Custom CMS interface",
        caption: "Intuitive content management system for easy updates",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=E-commerce",
        alt: "E-commerce product pages",
        caption: "Integrated e-commerce with seamless checkout experience",
      },
    ],
    skills: ["React", "Node.js", "JavaScript", "CSS", "Database Design", "API Development"],
    tools: ["React", "Node.js", "MongoDB", "AWS", "Figma", "Git"],
    reflection: {
      challenges: [
        "Balancing custom functionality with development timeline",
        "Ensuring optimal performance across all devices",
        "Integrating multiple third-party services seamlessly",
      ],
      learnings: [
        "The importance of performance optimization in user experience",
        "How proper architecture planning saves development time",
        "The value of continuous testing throughout development process",
      ],
      nextSteps: [
        "Implement advanced analytics and user behavior tracking",
        "Add multilingual support for international expansion",
        "Develop mobile app companion for enhanced user engagement",
      ],
    },
  },
  {
    id: "5",
    slug: "granville-island-redesign",
    title: "Granville Island Redesign",
    description:
      "UX research and design project improving the digital experience for Vancouver's iconic public market and cultural district.",
    longDescription:
      "A comprehensive UX research and design project focused on improving the digital experience for visitors to Granville Island, Vancouver's premier destination for arts, culture, and local markets.",
    image: "/placeholder.svg?height=400&width=600&text=Granville+Island",
    category: "UX Design",
    tags: ["UX Research", "Service Design", "Tourism", "Information Architecture"],
    role: "UX Designer & Researcher",
    duration: "5 months",
    team: "4 designers, 2 researchers",
    client: "Granville Island Public Market",
    year: 2023,
    featured: false,
    links: {
      figma: "https://figma.com/granville-island-redesign",
    },
    overview: {
      challenge:
        "Visitors to Granville Island struggled with navigation, event discovery, and planning their visit due to fragmented digital touchpoints.",
      approach:
        "Conducted comprehensive user research and redesigned the digital ecosystem to create a cohesive, user-centered experience.",
      outcome:
        "Improved visitor satisfaction by 45% and increased average visit duration by 30% through better information architecture and user experience.",
    },
    problem: {
      title: "Fragmented Visitor Experience",
      description:
        "Visitors faced challenges navigating the complex layout of Granville Island and discovering relevant events, shops, and dining options.",
      painPoints: [
        "Confusing physical and digital navigation",
        "Difficulty discovering events and activities",
        "Inconsistent information across platforms",
        "Poor mobile experience for on-site visitors",
        "Limited accessibility information",
      ],
    },
    research: {
      methods: [
        "On-site visitor interviews and observations",
        "Digital touchpoint audit and analysis",
        "Stakeholder interviews with vendors and management",
        "Competitive analysis of similar cultural destinations",
        "Accessibility audit of current digital platforms",
      ],
      insights: [
        "Visitors need real-time information about events and vendor hours",
        "Navigation is the primary pain point for first-time visitors",
        "Mobile experience is critical for on-site decision making",
        "Accessibility information is essential but often missing",
      ],
      userQuotes: [
        '"I never know what\'s happening here until I stumble upon it."',
        "\"The map is confusing and doesn't help me find what I'm looking for.\"",
      ],
    },
    solution: {
      approach:
        "Redesigned the information architecture and created an integrated digital experience that supports visitors throughout their journey.",
      keyFeatures: [
        "Interactive map with real-time vendor and event information",
        "Personalized recommendations based on interests and time available",
        "Integrated event calendar with filtering and notifications",
        "Accessibility information and route planning",
        "Vendor directory with hours, specialties, and contact information",
        "Multi-language support for international visitors",
      ],
      designDecisions: [
        "Prioritized mobile-first design for on-site usage",
        "Implemented clear visual hierarchy for information scanning",
        "Used familiar navigation patterns to reduce cognitive load",
        "Integrated accessibility features throughout the experience",
      ],
    },
    impact: {
      metrics: [
        {
          label: "Visitor Satisfaction",
          value: "+45%",
          description: "Improvement in overall visitor experience ratings",
        },
        {
          label: "Visit Duration",
          value: "+30%",
          description: "Increase in average time spent on island",
        },
        {
          label: "Event Attendance",
          value: "+60%",
          description: "Growth in event discovery and participation",
        },
        {
          label: "Mobile Usage",
          value: "+120%",
          description: "Increase in mobile platform engagement",
        },
      ],
      outcomes: [
        "Streamlined visitor journey from planning to on-site experience",
        "Improved accessibility for visitors with disabilities",
        "Enhanced vendor visibility and customer connections",
        "Created scalable framework for future digital initiatives",
      ],
    },
    gallery: [
      {
        src: "/placeholder.svg?height=600&width=800&text=Interactive+Map",
        alt: "Interactive island map interface",
        caption: "Real-time interactive map with vendor and event information",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Event+Discovery",
        alt: "Event discovery and filtering interface",
        caption: "Personalized event recommendations with easy filtering",
      },
      {
        src: "/placeholder.svg?height=600&width=800&text=Accessibility",
        alt: "Accessibility features and route planning",
        caption: "Comprehensive accessibility information and route planning",
      },
    ],
    skills: ["UX Research", "Information Architecture", "Service Design", "Accessibility Design"],
    tools: ["Figma", "Miro", "Maze", "Adobe XD", "Principle"],
    reflection: {
      challenges: [
        "Balancing diverse stakeholder needs and priorities",
        "Designing for both tourists and local visitors",
        "Integrating with existing vendor management systems",
      ],
      learnings: [
        "The importance of on-site research for location-based experiences",
        "How accessibility considerations improve experience for all users",
        "The value of stakeholder alignment in complex projects",
      ],
      nextSteps: [
        "Implement wayfinding integration with physical signage",
        "Develop AR features for enhanced on-site navigation",
        "Create vendor dashboard for real-time information updates",
      ],
    },
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjects(): Project[] {
  return projects
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getNextProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug)
  if (currentIndex === -1) return undefined
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}

export function getPreviousProject(currentSlug: string): Project | undefined {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug)
  if (currentIndex === -1) return undefined
  const previousIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1
  return projects[previousIndex]
}
