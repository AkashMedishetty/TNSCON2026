"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { User, Award, Star } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const committeeMembers = [
  { name: "Sri Puvvada Nageswara Rao Garu", role: "Chief Patron", photo: "/P Nageswara Rao Cheif Patron .jpeg", tier: "chief" },
  { name: "Sri Puvvada Ajay Kumar Garu", role: "Chief Patron", photo: "/P Ajay Kumar Chief Patron .jpeg", tier: "chief" },
  { name: "Smt. Puvvada Jayashree Garu", role: "Patron", photo: "/P Jayashree Patron.png", tier: "patron" },
  { name: "Sri Dr Puvvada Naren Garu", role: "Patron", photo: "/P Naren Patron.jpeg", tier: "patron" },
  { name: "Sri Dr. K Satyanarayana Garu", role: "Patron", photo: "/K Satyanarayana Patron.png", tier: "patron" },
  { name: "Dr. P Rama Rao", role: "Founder, KNS", photo: null, tier: "leadership" },
  { name: "Dr. P Asadharan", role: "President, KNS", photo: "/Dr. Asadharan sir President KNS.jpeg", tier: "leadership" },
  { name: "Dr. M Ramesh", role: "Vice President, KNS", photo: "/Dr. Ramesh sir Vice President KNS.jpeg", tier: "leadership" },
  { name: "Dr. G V Murali", role: "Organising Chairman - TNSCON", photo: "/Dr. Murali Organizing Chairman TNSCON.jpeg", tier: "organising" },
  { name: "Dr. Rambabu", role: "Vice Organising Chairman - TNSCON", photo: "/Dr Rambabu Vice Organizing chairmen.jpeg", tier: "organising" },
  { name: "Dr. G Suresh", role: "Treasurer - TNSCON 2025", photo: "/Dr. Suresh Treasurer.jpeg", tier: "organising" },
  { name: "Dr. Jagadeesh Babu", role: "Organising Secretary - TNSCON", photo: null, tier: "organising" },
  { name: "Dr. Chaitanya", role: "Organising Committee Member", photo: "/chaitanya.jpg", tier: "organising" },
  { name: "Dr. Apparao", role: "Committee Member", photo: "/Dr. Apparao Committe Member.jpeg", tier: "member" },
  { name: "Dr. Maruthi Babu", role: "Committee Member", photo: "/Dr. Murthi Babu Committe Member.jpeg", tier: "member" },
  { name: "Dr. Bhaskar", role: "Committee Member", photo: "/Dr. Bhaskar Committe Member.jpeg", tier: "member" },
  { name: "Dr. Sarat Chandra", role: "Committee Member", photo: "/Dr. Sarat Chnadra Committe Member.jpeg", tier: "member" },
  { name: "Dr. Varun", role: "Committee Member", photo: "/Dr. Varun Committe Member.jpeg", tier: "member" },
]

export function Committee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "chief": return "from-amber-500 to-orange-600"
      case "patron": return "from-blue-500 to-indigo-600"
      case "leadership": return "from-purple-500 to-pink-600"
      case "organising": return "from-emerald-500 to-teal-600"
      default: return "from-slate-500 to-gray-600"
    }
  }

  return (
    <section id="committee" ref={ref} className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Organising Committee
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Meet the distinguished leaders and members driving TNSCON 2025
          </p>
        </motion.div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={isMobile ? { duration: 0 } : {
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={isMobile ? undefined : { y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* Image Container */}
                <div className="relative h-56 sm:h-64 lg:h-72 xl:h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {member.photo ? (
                    <>
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${getTierColor(member.tier)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <User className="w-24 h-24 text-primary/30" />
                    </div>
                  )}
                  
                  {/* Role Badge */}
                  <div className={`absolute top-2 right-2 sm:top-3 sm:right-3 lg:top-4 lg:right-4 px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r ${getTierColor(member.tier)} backdrop-blur-sm shadow-lg`}>
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      {member.tier === "chief" && <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white fill-white" />}
                      {member.tier === "patron" && <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />}
                      <span className="text-[10px] sm:text-xs font-bold text-white">
                        {member.tier === "chief" ? "Chief" : member.tier === "patron" ? "Patron" : ""}
                      </span>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-tl ${getTierColor(member.tier)} rounded-tl-full`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-2 text-gray-900 leading-tight min-h-[2.5rem] sm:min-h-[3rem] flex items-center">
                    {member.name}
                  </h3>
                  <div className="flex items-start gap-2">
                    <div className={`w-1 h-10 sm:h-12 rounded-full bg-gradient-to-b ${getTierColor(member.tier)} flex-shrink-0`} />
                    <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r ${getTierColor(member.tier)} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </div>

              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${getTierColor(member.tier)} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
