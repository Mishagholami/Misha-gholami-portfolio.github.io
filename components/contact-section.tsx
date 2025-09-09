"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Linkedin, Github, Dribbble, CheckCircle, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus("idle"), 5000)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/6 w-64 h-64 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-accent/5 to-primary/5 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4 animate-fade-in-up">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-up stagger-1">
            Ready to bring your ideas to life? Let's collaborate on your next project and create something amazing
            together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="animate-slide-in-left">
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-primary mb-6">Let's Connect</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, creative projects, or just chat about design and
                  technology. Feel free to reach out through any of the channels below.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@mishagholami.com",
                      href: "mailto:hello@mishagholami.com",
                      color: "from-primary to-secondary",
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      value: "+1 (234) 567-8900",
                      href: "tel:+1234567890",
                      color: "from-secondary to-accent",
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Vancouver, BC, Canada",
                      href: "#",
                      color: "from-accent to-primary",
                    },
                  ].map((contact, index) => {
                    const IconComponent = contact.icon
                    return (
                      <div
                        key={contact.label}
                        className={`flex items-center hover-lift animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div
                          className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-full flex items-center justify-center mr-4 hover-scale`}
                        >
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{contact.label}</div>
                          {contact.href.startsWith("mailto:") || contact.href.startsWith("tel:") ? (
                            <a
                              href={contact.href}
                              className="text-primary hover:text-secondary transition-colors duration-300"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <div className="text-gray-600">{contact.value}</div>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-12 animate-fade-in-up stagger-4">
                  <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
                  <div className="flex space-x-4">
                    {[
                      {
                        icon: Linkedin,
                        href: "https://linkedin.com/in/mishagholami",
                        label: "LinkedIn",
                        color: "hover:text-blue-600",
                      },
                      {
                        icon: Github,
                        href: "https://github.com/mishagholami",
                        label: "GitHub",
                        color: "hover:text-gray-800",
                      },
                      {
                        icon: Dribbble,
                        href: "https://dribbble.com/mishagholami",
                        label: "Dribbble",
                        color: "hover:text-pink-600",
                      },
                    ].map((social) => {
                      const IconComponent = social.icon
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-12 h-12 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 transition-all duration-300 hover-lift hover:shadow-xl ${social.color}`}
                        >
                          <IconComponent className="h-5 w-5" />
                        </a>
                      )
                    })}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="mt-8 animate-fade-in-up stagger-5">
                  <div className="inline-flex items-center px-4 py-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                    <div>
                      <div className="font-medium text-green-800">Available for Projects</div>
                      <div className="text-sm text-green-600">Currently accepting new client work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover-lift">
                <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="form-label">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="form-label">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="form-input resize-none"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed hover-scale"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center">
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </div>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 p-4 bg-green-50 text-green-700 border border-green-200 rounded-lg animate-fade-in">
                      <CheckCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Thank you! Your message has been sent successfully. I'll get back to you soon.
                      </span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center space-x-2 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg animate-fade-in">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">
                        Sorry, there was an error sending your message. Please try again or contact me directly.
                      </span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
