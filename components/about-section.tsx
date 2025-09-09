"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Target, Heart } from "lucide-react"

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">About Me</h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate UX designer and researcher dedicated to creating meaningful digital experiences that
              solve real problems and delight users.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-brown-900 mb-4">My Journey</h3>
                <p className="text-brown-700 leading-relaxed mb-4">
                  With over 5 years of experience in UX design and research, I've had the privilege of working with
                  diverse teams to create digital solutions that truly make a difference. My background spans from
                  early-stage startups to established enterprises, giving me a unique perspective on design challenges
                  across different contexts.
                </p>
                <p className="text-brown-700 leading-relaxed">
                  I believe that great design starts with deep empathy for users and a thorough understanding of their
                  needs, goals, and pain points. This user-centered approach guides every project I work on, from
                  initial research to final implementation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-brown-900 mb-4">What Drives Me</h3>
                <p className="text-brown-700 leading-relaxed">
                  I'm passionate about the intersection of human psychology and technology. There's something magical
                  about creating interfaces that feel intuitive and delightful to use. When users can accomplish their
                  goals effortlessly, that's when I know I've done my job well.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual Content */}
            <motion.div variants={itemVariants} className="relative">
              <div className="aspect-square bg-gradient-to-br from-brown-100 to-cream-200 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <User className="w-24 h-24 text-brown-600 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-brown-900 mb-2">User-Centered Design</h4>
                  <p className="text-brown-700">
                    Every decision is guided by user needs and validated through research and testing.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-brown-200/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-brown-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brown-900 mb-3">Purpose-Driven</h3>
                <p className="text-brown-700 leading-relaxed">
                  I focus on creating solutions that have real impact and solve meaningful problems for users and
                  businesses alike.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brown-200/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-brown-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brown-900 mb-3">Empathy First</h3>
                <p className="text-brown-700 leading-relaxed">
                  Understanding users' emotions, motivations, and contexts is the foundation of every design decision I
                  make.
                </p>
              </CardContent>
            </Card>

            <Card className="border-brown-200/50 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 text-brown-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-brown-900 mb-3">Collaborative</h3>
                <p className="text-brown-700 leading-relaxed">
                  Great design happens when diverse perspectives come together. I thrive in collaborative environments.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills & Interests */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-brown-900 mb-6">Beyond Design</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge variant="outline" className="text-brown-700 border-brown-300">
                Photography
              </Badge>
              <Badge variant="outline" className="text-brown-700 border-brown-300">
                Hiking
              </Badge>
              <Badge variant="outline" className="text-brown-700 border-brown-300">
                Coffee Enthusiast
              </Badge>
              <Badge variant="outline" className="text-brown-700 border-brown-300">
                Sustainable Living
              </Badge>
              <Badge variant="outline" className="text-brown-700 border-brown-300">
                Mentoring
              </Badge>
            </div>
            <p className="text-brown-700 max-w-2xl mx-auto leading-relaxed">
              When I'm not designing, you'll find me exploring nature with my camera, experimenting with new coffee
              brewing methods, or mentoring aspiring designers. I believe that diverse experiences outside of work make
              me a better designer.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
