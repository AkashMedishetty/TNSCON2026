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
      {/* Background matching hero section */}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto px-4 sm:px-8">
          {committeeMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : {
                duration: 0.8,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              {/* 3D Container */}
              <div className="relative h-[420px] sm:h-[460px] transition-all duration-500 group-hover:scale-105" style={{ perspective: "1500px", perspectiveOrigin: "center" }}>
                
                {/* Background Card (Tilted Wall) - Bigger and More Tilted */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl shadow-2xl transition-all duration-700 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                  style={{
                    transform: "rotateY(20deg)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Card Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <h3 className="font-bold text-base sm:text-lg text-gray-900 mb-2 leading-tight pr-2">
                      {member.name}
                    </h3>
                    <div className="flex items-start gap-2 mb-3">
                      <div className={`w-1 h-12 rounded-full bg-gradient-to-b ${getTierColor(member.tier)} flex-shrink-0`} />
                      <p className="text-gray-600 font-medium text-xs sm:text-sm leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                    
                    {/* Role Badge on Card */}
                    {(member.tier === "chief" || member.tier === "patron") && (
                      <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r ${getTierColor(member.tier)} shadow-lg`}>
                        {member.tier === "chief" && <Star className="w-3.5 h-3.5 text-white fill-white" />}
                        {member.tier === "patron" && <Award className="w-3.5 h-3.5 text-white" />}
                        <span className="text-xs font-bold text-white">
                          {member.tier === "chief" ? "Chief Patron" : "Patron"}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-24 h-24 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-br ${getTierColor(member.tier)} rounded-full`} />
                  </div>
                  <div className="absolute bottom-32 left-6 w-20 h-20 opacity-5">
                    <div className={`w-full h-full bg-gradient-to-tr ${getTierColor(member.tier)} rounded-full`} />
                  </div>
                </div>

                {/* Floating Image (Person in front of wall) - RIGHT SIDE */}
                <div 
                  className="absolute right-0 top-0 w-[65%] h-[240px] sm:h-[270px] transition-all duration-700 group-hover:-translate-y-2"
                  style={{
                    transform: "translateZ(60px)",
                    transformStyle: "preserve-3d",
                    zIndex: 10,
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] transition-shadow duration-700">
                    {member.photo ? (
                      <>
                        <img 
                          src={member.photo} 
                          alt={member.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      </>
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <User className="w-20 h-20 text-primary/30" />
                      </div>
                    )}
                  </div>

                  {/* Shadow underneath image */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/25 blur-xl rounded-full transition-all duration-500 group-hover:w-[95%] group-hover:bg-black/35" />
                </div>
              </div>

              {/* Ambient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getTierColor(member.tier)} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 -z-10 rounded-full`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
