"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" ref={ref} className="py-12 sm:py-16 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-10 sm:mb-12 lg:mb-16 text-foreground"
        >
          Contact <span className="text-primary">Us</span>
        </motion.h2>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground">Email</h3>
                <a
                  href="mailto:tnscon2026@gmail.com"
                  className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors break-all"
                >
                  tnscon2026@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground">Phone</h3>
                <a href="tel:+918374590275" className="text-sm sm:text-base text-foreground/70 hover:text-primary transition-colors">
                  +91 8374590275
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1 text-foreground">Venue</h3>
                <p className="text-sm sm:text-base text-foreground/70">
                  Mamata Medical College
                  <br />
                  Khammam, Telangana
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={handleSubmit}
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-200/50 space-y-4 sm:space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-input bg-background/50 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-input bg-background/50 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2 text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-input bg-background/50 text-sm sm:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold hover:bg-primary/90 transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
