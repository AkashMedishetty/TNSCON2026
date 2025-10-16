"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const attractions = [
  {
    name: "Khammam Fort",
    image: "/khammam-fort-historic-architecture.jpg",
  },
  {
    name: "Kinnerasani Dam",
    image: "/kinnerasani-dam-scenic-water-reservoir.jpg",
  },
  {
    name: "Lakaram Lake",
    image: "/lakaram-lake-peaceful-nature-scenery.jpg",
  },
  {
    name: "Wyra Reservoir",
    image: "/wyra-reservoir-beautiful-landscape.jpg",
  },
]

export function Attractions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="attractions" ref={ref} className="py-20 lg:py-32 bg-secondary/20 relative overflow-hidden">
      {/* Parallax background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16 text-primary"
        >
          Discover Khammam
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {attractions.map((attraction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">{attraction.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
