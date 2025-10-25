"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"
import { MapPin, Building2, Sparkles } from "lucide-react"

const venueImages = [
  { src: "/venue/Mamata-Medical-College-Entrance.jpg", alt: "Mamata Medical College Entrance", featured: true },
  { src: "/venue/Cover_ROXUe0-Hv.webp", alt: "Venue Overview" },
  { src: "/venue/Campus_jYeuqht27.webp", alt: "Campus View 1" },
  { src: "/venue/Campus_tZSzzhL7P.webp", alt: "Campus View 2" },
  { src: "/venue/97d6e5e4ff494f45aadc6716c9a1560f.jpg", alt: "Venue Facilities" },
]

export default function VenuePage() {
  return (
    <main className="relative">
      {/* Background matching hero section */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Venue Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary">Conference Location</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Venue
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-4">
                Mamata Medical College, Khammam
              </p>
              <div className="flex items-center justify-center gap-2 text-foreground/70">
                <Building2 className="w-5 h-5 text-primary" />
                <p className="text-base font-medium">
                  A State-of-the-Art Medical Institution
                </p>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl max-w-5xl mx-auto">
                <img
                  src={venueImages[0].src}
                  alt={venueImages[0].alt}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-5 h-5" />
                    <h3 className="text-2xl font-bold">Mamata Medical College</h3>
                  </div>
                  <p className="text-base text-gray-200">World-class facilities for an exceptional conference experience</p>
                </div>
              </div>
            </motion.div>

            {/* Image Gallery Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto mb-16">
              {venueImages.slice(1).map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + (index * 0.1),
                  }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
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
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm font-semibold">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Venue Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/10">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Mamata Medical College
                    </h3>
                    <p className="text-base text-foreground/70 mb-4">
                      A premier medical institution equipped with modern facilities and infrastructure, 
                      providing the perfect setting for TNSCON 2026.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Modern Conference Halls</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span>Advanced Audio-Visual Systems</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
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

        <Footer />
        <BackToTop />
      </div>
    </main>
  )
}
