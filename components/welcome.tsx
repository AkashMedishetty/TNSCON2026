"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function Welcome() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="welcome" ref={ref} className="py-32 lg:py-40 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-serif text-5xl lg:text-7xl font-semibold text-center mb-16 text-balance"
          >
            Welcome to
            <br />
            <span className="text-primary">TNSCON 2026</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="bg-card/50 backdrop-blur-sm rounded-lg p-8 lg:p-12 border border-gray-200/50 space-y-6"
          >
            <p className="text-lg lg:text-xl leading-relaxed text-foreground/90">
              Dear Neuroscience Professionals, Clinicians, Researchers, and Innovators,
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80">
              It is with great pleasure that we welcome you to{" "}
              <strong className="text-primary font-semibold">TNSCON 2026</strong>, the 10th Annual Conference of the
              Telangana Neurosciences Society, to be held in the vibrant city of Khammam, Telangana. This landmark event
              celebrates a decade of advancing neuroscientific collaboration, innovation, and clinical excellence.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80">
              Over three inspiring days — from{" "}
              <strong className="text-primary font-semibold">6th to 8th March 2026</strong> — TNSCON 2026 will unite the
              leading minds in neurology, neurosurgery, and allied neurosciences. Together, we will explore the latest
              breakthroughs in neurological research, surgical advancements, neurocritical care, and emerging
              technologies that are transforming the landscape of neuroscience practice.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80">
              The scientific program will feature renowned national and international speakers, engaging panel
              discussions, hands-on workshops, and interactive sessions designed to foster collaboration, stimulate new
              ideas, and translate cutting-edge science into better patient outcomes.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80">
              Set against the backdrop of Khammam's cultural charm and natural beauty, this conference offers not only a
              rich academic experience but also an opportunity to connect, learn, and celebrate the spirit of our
              neuroscience community. The city's welcoming atmosphere and deep-rooted medical heritage make it an ideal
              setting for reflection, exchange, and growth.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80">
              Whether you are a seasoned specialist, a young researcher, or a passionate learner, TNSCON 2026 promises
              to be an enriching and memorable event — one that will shape the future of neurological care and
              strengthen our shared mission to improve lives through science and compassion.
            </p>

            <p className="text-lg lg:text-xl leading-relaxed text-foreground/80 mb-8">
              We look forward to welcoming you to Khammam for an unforgettable experience at TNSCON 2026.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-gray-200/50"
            >
              <p className="font-serif text-xl text-foreground mb-1 font-semibold">The Organizing Committee</p>
              <p className="text-base text-foreground/60">TNSCON 2026, Mamata Medical College, Khammam</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
