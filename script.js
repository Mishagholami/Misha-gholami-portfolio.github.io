// ========================================
// PROJECT DATA CUSTOMIZATION SECTION
// ========================================

// Global variables
const currentColorScheme = "deep-ocean-silver" // Set new default
const isNavOpen = false
const activeSection = "home"

// CHANGE: Replace this projects array with your own projects
// Each project should have the following structure:
const projects = [
  {
    id: 1,
    title: "🧘‍♀️ Headspace App Redesign", // CHANGE: Replace with your project title
    description: "Rethinking the meditation experience with a focus on accessibility and modern UI principles.", // CHANGE: Replace with your project description
    image: "project-headspace.jpg", // IMAGE PLACEHOLDER: Replace with your project image filename
    category: "design", // CHANGE: Options: "research", "design", "development", "concept"
    tags: ["UX/UI Design", "Accessibility", "Mobile App"], // CHANGE: Replace with your project tags
    role: "Lead Designer", // CHANGE: Replace with your role
    caseStudyUrl: "headspace-case-study.html", // CHANGE: Replace with your case study page filename
    caseStudyColor: "purple", // CHANGE: Options: "purple", "blue", "green", "teal"
    featured: true, // CHANGE: Set to true for featured projects
  },
  {
    id: 2,
    title: "💼 LinkedIn User Study", // CHANGE: Replace with your project title
    description:
      "An in-depth qualitative research project to uncover user pain points and opportunities on LinkedIn's platform.", // CHANGE: Replace with your project description
    image: "project-linkedin.jpg", // IMAGE PLACEHOLDER: Replace with your project image filename
    category: "research", // CHANGE: Options: "research", "design", "development", "concept"
    tags: ["User Research", "Qualitative Analysis", "UX Strategy"], // CHANGE: Replace with your project tags
    role: "UX Researcher", // CHANGE: Replace with your role
    caseStudyUrl: "linkedin-case-study.html", // CHANGE: Replace with your case study page filename
    caseStudyColor: "blue", // CHANGE: Options: "purple", "blue", "green", "teal"
    featured: true, // CHANGE: Set to true for featured projects
  },
  {
    id: 3,
    title: "🌱 Wellnest to Work", // CHANGE: Replace with your project title
    description: "Ideation and design of a mobile application connecting workplace wellness with productivity.", // CHANGE: Replace with your project description
    image: "project-wellnest.jpg", // IMAGE PLACEHOLDER: Replace with your project image filename
    category: "concept", // CHANGE: Options: "research", "design", "development", "concept"
    tags: ["App Concept", "Wellness", "Remote Work"], // CHANGE: Replace with your project tags
    role: "Product Designer", // CHANGE: Replace with your role
    caseStudyUrl: "wellnest-case-study.html", // CHANGE: Replace with your case study page filename
    caseStudyColor: "green", // CHANGE: Options: "purple", "blue", "green", "teal"
    featured: true, // CHANGE: Set to true for featured projects
  },
  {
    id: 4,
    title: "🏢 KALMONT Web Development", // CHANGE: Replace with your project title
    description: "Full-stack web design and development for a modern business website.", // CHANGE: Replace with your project description
    image: "project-kalmont.jpg", // IMAGE PLACEHOLDER: Replace with your project image filename
    category: "development", // CHANGE: Options: "research", "design", "development", "concept"
    tags: ["Web Development", "React", "Full-Stack"], // CHANGE: Replace with your project tags
    role: "Full-Stack Developer", // CHANGE: Replace with your role
    caseStudyUrl: "kalmont-case-study.html", // CHANGE: Replace with your case study page filename
    caseStudyColor: "blue", // CHANGE: Options: "purple", "blue", "green", "teal"
    featured: true, // CHANGE: Set to true for featured projects
  },
  {
    id: 5,
    title: "🌉 Granville Island Redesign", // CHANGE: Replace with your project title
    description: "A comprehensive UX research and redesign project for the Granville Island website.", // CHANGE: Replace with your project description
    image: "project-granville.jpg", // IMAGE PLACEHOLDER: Replace with your project image filename
    category: "research", // CHANGE: Options: "research", "design", "development", "concept"
    tags: ["UX Research", "Website Redesign", "User Testing"], // CHANGE: Replace with your project tags
    role: "UX Researcher", // CHANGE: Replace with your role
    caseStudyUrl: "granville-island-case-study.html", // CHANGE: Replace with your case study page filename
    caseStudyColor: "teal", // CHANGE: Options: "purple", "blue", "green", "teal"
    featured: true, // CHANGE: Set to true for featured projects
  },
]

// Global variables
let currentSection = "home"
let isScrolling = false

// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  initializePortfolio()
})

// Initialize Portfolio
function initializePortfolio() {
  setupNavigation()
  setupScrollEffects()
  setupSkillsAnimation()
  setupContactForm()
  setupProjectsGrid()
  setupModal()

  // Initialize scroll position
  updateActiveNavLink()
}

// Navigation Setup
function setupNavigation() {
  const navToggle = document.getElementById("navToggle")
  const navMenu = document.getElementById("navMenu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking on a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!navToggle.contains(event.target) && !navMenu.contains(event.target)) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })
}

// Scroll Effects Setup
function setupScrollEffects() {
  const navbar = document.getElementById("navbar")

  window.addEventListener("scroll", () => {
    if (!isScrolling) {
      requestAnimationFrame(() => {
        // Navbar scroll effect
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled")
        } else {
          navbar.classList.remove("scrolled")
        }

        // Update active navigation link
        updateActiveNavLink()

        isScrolling = false
      })
      isScrolling = true
    }
  })
}

// Update Active Navigation Link
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link[data-section]")

  let current = ""

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight

    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("data-section") === current) {
      link.classList.add("active")
    }
  })

  currentSection = current
}

// Smooth Scroll to Section
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 80 // Account for fixed navbar

    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

// Scroll to Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Skills Animation Setup
function setupSkillsAnimation() {
  const skillsSection = document.getElementById("skills")
  const skillBars = document.querySelectorAll(".skill-progress")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateSkillBars()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  if (skillsSection) {
    observer.observe(skillsSection)
  }
}

// Animate Skill Bars
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  skillBars.forEach((bar, index) => {
    const level = bar.getAttribute("data-level")

    setTimeout(() => {
      bar.style.width = level + "%"
    }, index * 100)
  })
}

// Contact Form Setup
function setupContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      handleContactFormSubmission(this)
    })
  }
}

// Handle Contact Form Submission
function handleContactFormSubmission(form) {
  const formData = new FormData(form)
  const submitButton = form.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent

  // Show loading state
  submitButton.textContent = "Sending..."
  submitButton.disabled = true

  // CHANGE: Replace this with your actual form submission logic
  // This is a placeholder that simulates form submission
  setTimeout(() => {
    // Simulate successful submission
    submitButton.textContent = "Message Sent!"
    submitButton.style.background = "#22c55e"

    // Reset form
    form.reset()

    // Reset button after 3 seconds
    setTimeout(() => {
      submitButton.textContent = originalText
      submitButton.disabled = false
      submitButton.style.background = ""
    }, 3000)

    // Show success message (you can customize this)
    showNotification("Thank you! Your message has been sent successfully.", "success")
  }, 1000)
}

// Show Notification
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Add styles
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    background: ${type === "success" ? "#22c55e" : "#3b82f6"};
    color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  `

  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}

// Projects Grid Setup
function setupProjectsGrid() {
  const projectsGrid = document.getElementById("projectsGrid")

  if (projectsGrid) {
    renderProjects()
  }
}

// Render Projects
function renderProjects() {
  const projectsGrid = document.getElementById("projectsGrid")

  if (!projectsGrid) return

  projectsGrid.innerHTML = ""

  projects.forEach((project, index) => {
    const projectCard = createProjectCard(project, index)
    projectsGrid.appendChild(projectCard)
  })
}

// Create Project Card
function createProjectCard(project, index) {
  const card = document.createElement("div")
  card.className = "project-card"
  card.style.animationDelay = `${index * 0.1}s`

  card.innerHTML = `
    <div class="project-image">
      <img src="${project.image}" alt="${project.title}" loading="lazy">
      <div class="project-overlay"></div>
      <div class="project-category ${project.category}">
        <i class="fas fa-${getCategoryIcon(project.category)}"></i>
        ${getCategoryName(project.category)}
      </div>
      ${project.featured ? `<div class="case-study-badge ${project.caseStudyColor}">Case Study</div>` : ""}
    </div>
    <div class="project-content">
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      <div class="project-footer">
        <span class="project-role">${project.role}</span>
        <div class="project-actions">
          ${
            project.caseStudyUrl
              ? `
            <button class="project-action case-study ${project.caseStudyColor}" onclick="window.location.href='${project.caseStudyUrl}'" title="View Case Study">
              <i class="fas fa-external-link-alt"></i>
            </button>
          `
              : ""
          }
          <button class="project-action details" onclick="openProjectModal(${project.id})" title="View Details">
            <i class="fas fa-info"></i>
          </button>
        </div>
      </div>
    </div>
  `

  return card
}

// Get Category Icon
function getCategoryIcon(category) {
  const icons = {
    research: "search",
    design: "paint-brush",
    development: "code",
    concept: "lightbulb",
  }
  return icons[category] || "folder"
}

// Get Category Name
function getCategoryName(category) {
  const names = {
    research: "Research",
    design: "Design",
    development: "Development",
    concept: "Concept",
  }
  return names[category] || "Project"
}

// Modal Setup
function setupModal() {
  const modal = document.getElementById("projectModal")

  if (modal) {
    // Close modal when clicking outside
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal()
      }
    })

    // Close modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) {
        closeModal()
      }
    })
  }
}

// Open Project Modal
function openProjectModal(projectId) {
  const project = projects.find((p) => p.id === projectId)
  const modal = document.getElementById("projectModal")
  const modalTitle = document.getElementById("modalTitle")
  const modalDescription = document.getElementById("modalDescription")
  const modalBody = document.getElementById("modalBody")

  if (!project || !modal) return

  modalTitle.textContent = project.title
  modalDescription.textContent = project.description

  modalBody.innerHTML = `
    <div class="modal-project-details">
      <div class="modal-project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="modal-project-info">
        <div class="modal-info-grid">
          <div class="modal-info-item">
            <h4>Role</h4>
            <p>${project.role}</p>
          </div>
          <div class="modal-info-item">
            <h4>Category</h4>
            <p>${getCategoryName(project.category)}</p>
          </div>
          <div class="modal-info-item">
            <h4>Skills</h4>
            <div class="modal-tags">
              ${project.tags.map((tag) => `<span class="modal-tag">${tag}</span>`).join("")}
            </div>
          </div>
        </div>
        ${
          project.caseStudyUrl
            ? `
          <div class="modal-actions">
            <a href="${project.caseStudyUrl}" class="btn btn-primary">
              <i class="fas fa-external-link-alt"></i>
              View Full Case Study
            </a>
          </div>
        `
            : ""
        }
      </div>
    </div>
  `

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

// Close Modal
function closeModal() {
  const modal = document.getElementById("projectModal")

  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""
  }
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Add smooth scrolling for all internal links
document.addEventListener("click", (e) => {
  if (e.target.matches('a[href^="#"]')) {
    e.preventDefault()
    const targetId = e.target.getAttribute("href").substring(1)
    scrollToSection(targetId)
  }
})

// Add loading animation for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[loading="lazy"]')

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    img.style.opacity = "0"
    img.style.transition = "opacity 0.3s ease"
  })
})

// Performance optimization: Throttle scroll events
const throttledScroll = debounce(() => {
  updateActiveNavLink()
}, 16) // ~60fps

window.addEventListener("scroll", throttledScroll)

// ========================================
// END OF JAVASCRIPT FILE
//
// SUMMARY OF CUSTOMIZATION AREAS:
// 1. Projects array (lines 10-200) - Replace with your own projects
// 2. Replace image filenames with your actual project images
// 3. Update project titles, descriptions, and details
// 4. Modify the contact form submission logic in handleContactFormSubmission()
// 5. Add any additional interactive features as needed
// ========================================
