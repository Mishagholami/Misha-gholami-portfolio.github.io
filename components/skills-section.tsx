"use client"

import { useState, useEffect, useRef } from "react"

interface Skill {
  name: string
  level: number
}

const skills: Skill[] = [
  { name: "UI/UX Design", level: 95 },
  { name: "User Research", level: 90 },
  { name: "Prototyping", level: 88 },
  { name: "Visual Design", level: 85 },
  { name: "Figma", level: 95 },
  { name: "Adobe Creative Suite", level: 85 },
  { name: "HTML/CSS", level: 80 },
  { name: "JavaScript", level: 70 },
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-2xl animate-float-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/5 w-32 h-32 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Core competencies in design, research, and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`hover-lift animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-800 text-lg">{skill.name}</span>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary via-secondary to-accent h-3 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 px-8 py-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover-lift animate-fade-in-up stagger-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">8+</div>
                <div className="text-sm text-gray-500">Core Skills</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">3+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-gray-500">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
