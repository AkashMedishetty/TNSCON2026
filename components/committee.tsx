"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const committeeMembers = [
  { name: "Sri Puvvada Nageswara Rao Garu", role: "Chief Patron", photo: "/P Nageswara Rao Cheif Patron .jpeg" },
  { name: "Sri Puvvada Ajay Kumar Garu", role: "Chief Patron", photo: "/P Ajay Kumar Chief Patron .jpeg" },
  { name: "Smt. Puvvada Jayashree Garu", role: "Patron", photo: "/P Jayashree Patron.png" },
  { name: "Sri Dr Puvvada Naren Garu", role: "Patron", photo: "/P Naren Patron.jpeg" },
  { name: "Sri Dr. K Satyanarayana Garu", role: "Patron", photo: "/K Satyanarayana Patron.png" },
  { name: "Dr. P Rama Rao", role: "Founder, KNS", photo: null },
  { name: "Dr. P Asadharan", role: "President, KNS", photo: "/Dr. Asadharan sir President KNS.jpeg" },
  { name: "Dr. M Ramesh", role: "Vice President, KNS", photo: "/Dr. Ramesh sir Vice President KNS.jpeg" },
  { name: "Dr. G V Murali", role: "Organising Chairman - TNSCON", photo: "/Dr. Murali Organizing Chairman TNSCON.jpeg" },
  { name: "Dr. Rambabu", role: "Vice Organising Chairman - TNSCON", photo: "/Dr Rambabu Vice Organizing chairmen.jpeg" },
  { name: "Dr. G Suresh", role: "Treasurer - TNSCON 2025", photo: "/Dr. Suresh Treasurer.jpeg" },
  { name: "Dr. Jagadeesh Babu", role: "Organising Secretary - TNSCON", photo: null },
  { name: "Dr. Apparao", role: "Committee Member", photo: "/Dr. Apparao Committe Member.jpeg" },
  { name: "Dr. Maruthi Babu", role: "Committee Member", photo: "/Dr. Murthi Babu Committe Member.jpeg" },
  { name: "Dr. Bhaskar", role: "Committee Member", photo: "/Dr. Bhaskar Committe Member.jpeg" },
  { name: "Dr. Sarat Chandra", role: "Committee Member", photo: "/Dr. Sarat Chnadra Committe Member.jpeg" },
  { name: "Dr. Varun", role: "Committee Member", photo: "/Dr. Varun Committe Member.jpeg" },
]

export function Committee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  return (
    <section id="committee" ref={ref} className="py-12 sm:py-16 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.h2
          initial={isMobile ? {} : { opacity: 0, y: 50 }}
          animate={isMobile ? {} : isInView ? { opacity: 1, y: 0 } : {}}
          transition={isMobile ? {} : { duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16 text-primary"
        >
          Organising Committee
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={isMobile ? {} : { opacity: 0, y: 50, scale: 0.9 }}
              animate={isMobile ? {} : isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={isMobile ? {} : {
                duration: 0.8,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={isMobile ? {} : { scale: 1.05, y: -8 }}
              className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {member.photo ? (
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg mb-1 text-gray-900 break-words">{member.name}</h3>
                  <p className="text-gray-600 font-medium text-xs sm:text-sm break-words">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
