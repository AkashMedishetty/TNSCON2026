"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink } from "lucide-react"

export function Registration() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="registration" ref={ref} className="py-12 sm:py-16 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-center mb-10 sm:mb-12 lg:mb-16 text-foreground"
        >
          Registration Details
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card border border-primary/10 rounded-2xl p-4 sm:p-6 lg:p-12 shadow-xl overflow-x-auto">
            <table className="w-full text-left min-w-[500px]">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="pb-3 sm:pb-4 pr-2 sm:pr-4 text-sm sm:text-base lg:text-lg font-semibold text-foreground">Category</th>
                  <th className="pb-3 sm:pb-4 px-2 sm:px-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                    Early Bird
                    <div className="text-xs sm:text-sm font-normal text-foreground/60">Till 15 Jan 2026</div>
                  </th>
                  <th className="pb-3 sm:pb-4 px-2 sm:px-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                    Regular
                    <div className="text-xs sm:text-sm font-normal text-foreground/60">Till 23 Feb 2026</div>
                  </th>
                  <th className="pb-3 sm:pb-4 pl-2 sm:pl-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                    Spot
                    <div className="text-xs sm:text-sm font-normal text-foreground/60">From 24 Feb 2026</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary/10">
                  <td className="py-3 sm:py-4 pr-2 sm:pr-4 font-medium text-sm sm:text-base text-foreground">Resident</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹4,000</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹5,000</td>
                  <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹6,000</td>
                </tr>
                <tr className="border-b border-primary/10">
                  <td className="py-3 sm:py-4 pr-2 sm:pr-4 font-medium text-sm sm:text-base text-foreground">Delegate</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹5,500</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹6,500</td>
                  <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹8,000</td>
                </tr>
                <tr>
                  <td className="py-3 sm:py-4 pr-2 sm:pr-4 font-medium text-sm sm:text-base text-foreground">Accompanying Person</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹3,500</td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹4,500</td>
                  <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹5,000</td>
                </tr>
              </tbody>
            </table>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-4 sm:mt-6 text-xs sm:text-sm text-foreground/60 italic"
            >
              * All registration fees exclude 18% GST
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mt-6 sm:mt-8 lg:mt-10"
          >
            <a
              href="https://forms.gle/Dvo4g58ZJ6F1bFHk6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
            >
              Register Now
              <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
