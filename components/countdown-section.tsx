"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Countdown } from "./countdown"

export function CountdownSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="countdown"
      ref={ref}
      className="py-24 lg:py-32 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl lg:text-6xl font-semibold text-foreground mb-4">
            Conference <span className="text-primary">Countdown</span>
          </h2>
          <p className="text-sm lg:text-base uppercase tracking-widest text-primary/80 font-medium">March 6-8, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <Countdown />
        </motion.div>
      </div>
    </section>
  )
}
