"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Building2, Sparkles } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const venueImages = [
  { src: "/venue/Mamata-Medical-College-Entrance.jpg", alt: "Mamata Medical College Entrance", featured: true },
  { src: "/venue/Cover_ROXUe0-Hv.webp", alt: "Venue Overview" },
  { src: "/venue/Campus_jYeuqht27.webp", alt: "Campus View 1" },
  { src: "/venue/Campus_tZSzzhL7P.webp", alt: "Campus View 2" },
  { src: "/venue/97d6e5e4ff494f45aadc6716c9a1560f.jpg", alt: "Venue Facilities" },
]

export function Venue() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const isMobile = useIsMobile()

  return (
    <section id="venue" ref={ref} className="py-12 sm:py-16 lg:py-24 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
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
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Conference Location</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 sm:mb-4">
            Venue
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-4 sm:mb-6 px-4">
            Mamata Medical College, Khammam
          </p>
          <div className="flex items-center justify-center gap-2 text-gray-700 px-4">
            <Building2 className="w-5 h-5 text-primary" />
            <p className="text-sm sm:text-base font-medium">
              A State-of-the-Art Medical Institution
            </p>
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 sm:mb-8 lg:mb-12"
        >
          <div className="relative group overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl max-w-5xl mx-auto">
            <img
              src={venueImages[0].src}
              alt={venueImages[0].alt}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-2 mb-1 sm:mb-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Mamata Medical College</h3>
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-200">World-class facilities for an exceptional conference experience</p>
            </div>
          </div>
        </motion.div>

        {/* Image Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 max-w-6xl mx-auto">
          {venueImages.slice(1).map((image, index) => (
            <motion.div
              key={index}
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : {
                duration: 0.6,
                delay: 0.4 + (index * 0.1),
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-end p-2 sm:p-3 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xs sm:text-sm font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Venue Info Card */}
        <motion.div
          initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 sm:mt-12 lg:mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 lg:p-8 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Mamata Medical College
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                  A premier medical institution equipped with modern facilities and infrastructure, 
                  providing the perfect setting for TNSCON 2026.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Modern Conference Halls</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Advanced Audio-Visual Systems</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-gray-700">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Comfortable Amenities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
