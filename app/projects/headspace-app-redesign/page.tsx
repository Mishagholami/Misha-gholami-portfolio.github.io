"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Users, Target, Lightbulb, CheckCircle, Quote } from "lucide-react"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function HeadspaceRedesignPage() {
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

  const researchFindings = [
    {
      icon: "🔄",
      title: "Users forget to meditate",
      description: "Need streaks + reminders to build consistent habits",
      quote: "I always start strong but lose motivation after a few days",
    },
    {
      icon: "😴",
      title: "Sleep features feel too generic",
      description: "Want immersive tools beyond basic meditations",
      quote: "The sleep stories are nice but I need more variety",
    },
    {
      icon: "🤯",
      title: "UI feels overwhelming",
      description: "Desire simplicity + personalization in navigation",
      quote: "There's so much content, I don't know where to start",
    },
  ]

  const designGoals = [
    {
      icon: Target,
      title: "Habit Tracking Tools",
      description: "Streak tracker, smart reminders, and progress visualization to maintain consistency",
      features: ["Daily streak counter", "Personalized reminders", "Progress milestones", "Habit insights"],
    },
    {
      icon: Users,
      title: "Enhanced Sleep Section",
      description: "Immersive bedtime stories, customizable soundscapes, and wind-down routines",
      features: ["Bedtime story library", "Custom sound mixing", "Sleep routine builder", "Wind-down timer"],
    },
    {
      icon: Lightbulb,
      title: "Streamlined UI",
      description: "Personalized homepage with AI-based recommendations and intuitive navigation",
      features: ["AI content curation", "Simplified categories", "Personal dashboard", "Smart search"],
    },
  ]

  const impactMetrics = [
    { metric: "85%", description: "Increase in daily session completion" },
    { metric: "3.2x", description: "Longer average session duration" },
    { metric: "92%", description: "Users found sleep features more engaging" },
    { metric: "78%", description: "Improved onboarding completion rate" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Blurred bubble backgrounds */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        />
        <div
          className="absolute top-1/3 -right-20 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        />
        <div
          className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12">
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
              <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
                UX Case Study
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Headspace Redesign: Enhancing Mindfulness Through UX
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                A student project to improve engagement, habit-building, and sleep support for a leading meditation app.
                Led user research, prototyping, and testing to address real-world challenges in mindfulness technology.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-muted/50 backdrop-blur-sm border-2 border-dashed border flex items-center justify-center min-h-[450px]">
              <p className="text-2xl font-medium text-muted-foreground">{"{{Project Image Here}}"}</p>
            </div>
          </motion.section>

          {/* Project Overview */}
          <motion.section
            variants={itemVariants}
            className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border"
          >
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Role</h3>
                <p className="text-muted-foreground">UX Designer, Researcher</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                <p className="text-muted-foreground">6 weeks</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Team</h3>
                <p className="text-muted-foreground">Individual Project</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tools</h3>
                <p className="text-muted-foreground">Figma, Miro, Principle</p>
              </div>
            </div>
          </motion.section>

          {/* The Problem */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">The Problem</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border">
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Through initial research, I discovered that users were struggling with three main pain points that
                prevented them from building consistent mindfulness habits:
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😔</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Low Engagement</h3>
                  <p className="text-sm text-muted-foreground">
                    Users struggled to build habits due to lack of motivation and tracking
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">😴</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Limited Sleep Support</h3>
                  <p className="text-sm text-muted-foreground">Sleep section lacked depth beyond basic meditations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤯</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Complex Navigation</h3>
                  <p className="text-sm text-muted-foreground">
                    Overwhelming UI made onboarding and navigation difficult
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* User Research */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">User Research</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Research Methods</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Guerrilla interviews (5 participants)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Competitor analysis (Calm, Insight Timer, Balance)
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Affinity mapping and user journey analysis
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Usability testing of current interface
                  </li>
                </ul>
              </div>
              <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border">
                <h3 className="text-xl font-semibold text-foreground mb-4">Key Insights</h3>
                <div className="space-y-4">
                  {researchFindings.map((finding, index) => (
                    <div key={index} className="border-l-4 border-purple-400 pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{finding.icon}</span>
                        <h4 className="font-medium text-foreground">{finding.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{finding.description}</p>
                      <blockquote className="text-xs italic text-muted-foreground opacity-75">
                        "{finding.quote}"
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* UX Strategy */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">UX Strategy & Design Principles</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg border border">
              <div className="text-center mb-8">
                <Quote className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <p className="text-xl italic text-foreground leading-relaxed">
                  "My strategy focused on habit reinforcement, sleep experience expansion, and simplifying navigation to
                  make Headspace more engaging, personal, and effective for every user."
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {designGoals.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition-shadow border border"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <goal.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{goal.title}</h3>
                  <p className="text-muted-foreground mb-4">{goal.description}</p>
                  <ul className="space-y-2">
                    {goal.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Final Designs */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Final Designs</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Progress Tracker with Streak Animations</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted/50 backdrop-blur-sm border-2 border-dashed border flex items-center justify-center min-h-[400px]">
                  <p className="text-lg font-medium text-muted-foreground">{"{{Progress Tracker Image}}"}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Visual streak counter with milestone celebrations and personalized insights to maintain motivation.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Enhanced Sleep Section</h3>
                <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted/50 backdrop-blur-sm border-2 border-dashed border flex items-center justify-center min-h-[400px]">
                  <p className="text-lg font-medium text-muted-foreground">{"{{Sleep Section Image}}"}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Immersive sleep experience with customizable soundscapes, bedtime stories, and wind-down routines.
                </p>
              </div>
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Homepage with AI-based Recommendations</h3>
              <div className="relative rounded-xl overflow-hidden shadow-lg mb-4 bg-muted/50 backdrop-blur-sm border-2 border-dashed border flex items-center justify-center min-h-[500px]">
                <p className="text-lg font-medium text-muted-foreground">{"{{Homepage Redesign Image}}"}</p>
              </div>
              <p className="text-muted-foreground">
                Personalized dashboard that learns from user behavior to suggest relevant content, track progress, and
                provide gentle nudges toward mindfulness goals.
              </p>
            </div>
          </motion.section>

          {/* Results & Impact */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Results & Impact</h2>
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              {impactMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-card/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{metric.metric}</div>
                  <p className="text-sm text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Key Improvements</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Increased user engagement and consistency
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Richer, immersive sleep experience
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Better onboarding and content discovery
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Users feel more in control of their wellness journey
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Reflection */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Reflection</h2>
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                This project helped me explore how UX design directly affects user behavior and mental health. I learned
                how habit loops, personalization, and simplicity can support long-term wellness. The research phase was
                particularly enlightening, revealing the gap between what users say they want and what actually drives
                their behavior.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In future iterations, I'd love to test alternative reward systems and streamline the habit-tracking even
                further. I'm also curious about how social features might enhance accountability without compromising
                the personal nature of mindfulness practice.
              </p>
            </div>
          </motion.section>

          {/* Footer Navigation */}
          <motion.section
            variants={itemVariants}
            className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="https://figma.com/headspace-redesign"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-300 to-pink-300 hover:from-purple-400 hover:to-pink-400 text-gray-900 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                View Figma Prototype
              </Link>
              <Link
                href="/#projects"
                className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-full font-medium transition-colors"
              >
                Back to Projects
              </Link>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}
