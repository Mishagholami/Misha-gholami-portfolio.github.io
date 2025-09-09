"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Send, Calendar, Coffee } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-brown-900 mb-6">Let's Work Together</h2>
            <p className="text-xl text-brown-700 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to collaborate on meaningful projects. Whether you have a specific project in mind or
              just want to chat about design, I'd love to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="border-brown-200/50 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-brown-900 mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-brown-700 mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="border-brown-200 focus:border-brown-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-brown-700 mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-brown-200 focus:border-brown-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-brown-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-brown-200 focus:border-brown-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-brown-700 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-brown-200 focus:border-brown-400"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-brown-600 hover:bg-brown-700 text-white">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-brown-900 mb-6">Get in touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brown-600 mr-3" />
                    <span className="text-brown-700">hello@mishagholami.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brown-600 mr-3" />
                    <span className="text-brown-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-brown-600 mr-3" />
                    <span className="text-brown-700">Vancouver, BC, Canada</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-brown-900 mb-4">What I can help with</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    UX Research
                  </Badge>
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    UI Design
                  </Badge>
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    Prototyping
                  </Badge>
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    Design Systems
                  </Badge>
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    Usability Testing
                  </Badge>
                  <Badge variant="outline" className="text-brown-700 border-brown-300">
                    Design Strategy
                  </Badge>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-brown-900 mb-4">Let's connect</h4>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-brown-300 text-brown-700 bg-transparent"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a call
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-brown-300 text-brown-700 bg-transparent"
                  >
                    <Coffee className="w-4 h-4 mr-2" />
                    Grab coffee (if you're in Vancouver!)
                  </Button>
                </div>
              </div>

              <div className="bg-brown-100 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-brown-900 mb-3">Response time</h4>
                <p className="text-brown-700 text-sm leading-relaxed">
                  I typically respond to messages within 24 hours. For urgent inquiries, feel free to mention it in your
                  message and I'll prioritize accordingly.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
