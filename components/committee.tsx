"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"

const committeeMembers = [
  { name: "Sri. Puvvada Nageswara Rao Garu", role: "Chief Patron" },
  { name: "Sri. Puvvada Ajay Kumar Garu", role: "Chief Patron" },
  { name: "Dr. P. Rama Rao", role: "Founder" },
  { name: "Dr. P. Asadharan", role: "President", designation: "MS, MCh" },
  { name: "Dr. M. Ramesh", role: "Vice President", designation: "MD, DM" },
  { name: "Dr. G. V. Murali", role: "Organising Chairman", designation: "MS, MCh" },
  { name: "Dr. Rambabu", role: "Vice Organising Chairman", designation: "MD, DM" },
  { name: "Dr. Jagadeesh Babu", role: "Organising Secretary", designation: "MS, MCh" },
  { name: "Dr. G. Suresh", role: "Treasurer", designation: "MS, MCh" },
]

export function Committee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="committee" ref={ref} className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary"
        >
          Organising Committee
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-1">{member.role}</p>
                  {member.designation && <p className="text-gray-600 text-sm">{member.designation}</p>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
