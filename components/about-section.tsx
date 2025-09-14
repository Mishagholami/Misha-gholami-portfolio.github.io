"use client"

import { useState, useEffect } from "react"
import { Award, Users, Coffee, Heart, MapPin, Calendar } from "lucide-react"

const stats = [
  { icon: Award, label: "Projects Completed", value: "50+", color: "from-blue-500 to-blue-600" },
  { icon: Users, label: "Happy Clients", value: "25+", color: "from-green-500 to-green-600" },
  { icon: Coffee, label: "Years Experience", value: "3+", color: "from-purple-500 to-purple-600" },
  { icon: Heart, label: "Cups of Coffee", value: "∞", color: "from-orange-500 to-orange-600" },
]

const values = [
  {
    icon: Heart,
    title: "User-Centered",
    description: "Every design decision is made with the user's needs and experience at the forefront.",
  },
  {
    icon: Award,
    title: "Quality Focused",
    description: "I believe in delivering excellence through attention to detail and continuous refinement.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "The best results come from working closely with teams and embracing diverse perspectives.",
  },
  {
    icon: Coffee,
    title: "Always Learning",
    description: "I stay curious and continuously expand my skills to keep up with evolving design trends.",
  },
]

export function AboutSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-xl animate-float-slow"></div>
        <div
          className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-lg animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">About Me</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
              Passionate about creating meaningful digital experiences that connect with users on both functional and
              emotional levels.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Content */}
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4">Hi there! I'm Misha 👋</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I'm a UX Designer and Creative Illustrator with over 3 years of experience in creating user-centered
                    digital solutions. My journey began with a fascination for how design can solve real-world problems
                    and create meaningful connections between people and technology.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    I specialize in user research, interface design, and creative illustration. My approach combines
                    analytical thinking with creative problem-solving to deliver designs that are not only beautiful but
                    also highly functional and accessible.
                  </p>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    When I'm not designing, you can find me sketching in coffee shops, exploring new art techniques, or
                    collaborating with other creatives on passion projects. I believe that great design comes from
                    understanding people, and I'm always eager to learn and grow in this ever-evolving field.
                  </p>
                </div>

                {/* Location & Availability */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center space-x-3 text-gray-600 hover-lift">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Vancouver, BC</div>
                      <div className="text-sm text-gray-500">Based in Canada</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600 hover-lift">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-green-700">Available for Projects</div>
                      <div className="text-sm text-gray-500">Open to new opportunities</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image & Stats */}
            <div className="animate-slide-in-right">
              {/* Profile Image */}
              <div className="mb-8 hover-lift">
                <div className="relative">
                  <img
                    src="profile-image.jpeg?height=400&width=400&text=Misha+at+Work"
                    alt="Misha working on design"
                    className="w-full h-80 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl"></div>

                  {/* Floating decoration */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full opacity-20 animate-float"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full opacity-20 animate-float"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div
                      key={stat.label}
                      className={`card text-center hover-lift animate-scale-in`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center hover-scale`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary text-center mb-12 animate-fade-in-up">
              What Drives Me
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <div
                    key={value.title}
                    className={`card text-center hover-lift animate-fade-in-up`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center hover-scale">
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-semibold text-primary mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
