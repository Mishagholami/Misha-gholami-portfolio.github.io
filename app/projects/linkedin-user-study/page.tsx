"use client"

import { motion } from "framer-motion"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import Image from "next/image"

export default function LinkedInUserStudyPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const researchApproach = [
    "Conducted 5 user interviews (students, recruiters, and professionals).",
    "Evaluated LinkedIn using Nielsen's Heuristics: Visibility of System Status, Consistency, Recognition over Recall, and Minimalist Design.",
    "Created low-fidelity prototypes to test new notification hierarchies.",
  ]

  const keyFindings = [
    "Users primarily interact through notifications, not the main feed.",
    "Many alerts are repetitive or irrelevant.",
    'The "All" and "My Network" tabs lack visual clarity and hierarchy.',
    "Users want control over notification priorities.",
  ]

  const proposedSolutions = [
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
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-32 w-80 h-80 rounded-full opacity-10"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            filter: "blur(20px)",
          }}
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-40 left-20 w-60 h-60 rounded-full opacity-15"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            filter: "blur(15px)",
          }}
          animate={{
            x: [0, -15, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -2,
          }}
        />

        <motion.div
          className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full opacity-20"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            filter: "blur(10px)",
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: -1,
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-24">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-16">
          {/* Back Button */}
          <motion.div variants={itemVariants}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Projects
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.section variants={itemVariants} className="text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-muted-foreground rounded-full text-sm font-medium mb-4">
                Individual UX Research Project
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                LinkedIn User Study — Understanding Notifications & Engagement Patterns
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Exploring how users interact with LinkedIn notifications and engagement tools to improve clarity and
                reduce overload.
              </p>
              <div className="mt-8">
                <a
                  href="https://drive.google.com/drive/folders/1ux0XBGQr1pV74pcv0NNJbOyshrhHBjPL?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
                >
                  View Full Case Study
                </a>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LinkedIn%20User%20Study-onTJAIuKpyV2Mb92UyGOY8YUu9LYPP.jpg"
                alt="LinkedIn User Study Project"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.section>

          {/* Overview */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Overview</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This individual UX research project focused on how LinkedIn users manage and respond to notifications.
                The goal was to uncover pain points around cluttered alerts, poor prioritization, and disengagement,
                then propose design improvements for a cleaner, more intuitive experience.
              </p>
            </div>
          </motion.section>

          {/* Project Type and Duration */}
          <motion.section variants={itemVariants} className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-foreground mb-6">Project Type and Duration</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Type</h3>
                <p className="text-muted-foreground">Individual UX Research Project</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">4 weeks</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Process</h3>
                <p className="text-muted-foreground">User interviews, heuristic evaluation, usability testing</p>
              </div>
            </div>
          </motion.section>

          {/* Problem Statement */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Problem Statement</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Many LinkedIn users feel overwhelmed by irrelevant or redundant notifications. This information overload
                makes it difficult to identify what truly matters, leading to missed professional opportunities and
                disengagement.
              </p>
            </div>
          </motion.section>

          {/* Research Approach */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Research Approach</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <ul className="space-y-3">
                {researchApproach.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Key Findings */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Key Findings</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <ul className="space-y-3">
                {keyFindings.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Proposed Solutions */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Proposed Solutions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {proposedSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-muted-foreground">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Tools Used */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Tools Used</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-muted-foreground">Figma · Notion · Google Forms · Miro</p>
            </div>
          </motion.section>

          {/* Outcome */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Outcome</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Prototype testing showed improved satisfaction and focus. Users reported faster recognition of key
                updates and a clearer sense of professional activity.
              </p>
            </div>
          </motion.section>

          {/* Project Image */}
          <motion.section variants={itemVariants}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted/50 backdrop-blur-sm border-2 border-dashed border flex items-center justify-center min-h-[450px]">
              <p className="text-2xl font-medium text-muted-foreground">
                {"{{Project Image Placeholder – LinkedIn User Study}}"}
              </p>
            </div>
          </motion.section>

          {/* Footer Navigation */}
          <motion.section variants={itemVariants} className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-xl"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
