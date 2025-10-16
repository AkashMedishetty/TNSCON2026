"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin } from "lucide-react"

const attractions = [
  {
    name: "Khammam Fort",
    description:
      "A historic hilltop fort built in the 10th century, offering panoramic views of the city. The fort showcases ancient architecture and has witnessed centuries of regional history.",
    image: "/khammam-fort-historic-architecture-panoramic-view.jpg",
  },
  {
    name: "Kinnerasani Wildlife Sanctuary",
    description:
      "A sprawling sanctuary home to diverse flora and fauna including tigers, leopards, and various bird species. Perfect for nature enthusiasts and wildlife photographers.",
    image: "/kinnerasani-wildlife-sanctuary-forest-nature.jpg",
  },
  {
    name: "Lakaram Lake",
    description:
      "A serene artificial lake surrounded by lush greenery, ideal for boating and picnics. The lake offers a peaceful retreat with beautiful sunset views.",
    image: "/lakaram-lake-scenic-water-body-sunset.jpg",
  },
  {
    name: "Kusumanchi Temples",
    description:
      "Ancient temple complex featuring intricate Kakatiya architecture. These temples are renowned for their detailed stone carvings and spiritual significance.",
    image: "/ancient-indian-temple-architecture-stone-carvings.jpg",
  },
  {
    name: "Parnasala",
    description:
      "A sacred site believed to be where Lord Rama, Sita, and Lakshmana stayed during their exile. The location features ancient caves and religious significance.",
    image: "/parnasala-ancient-caves-religious-site-forest.jpg",
  },
  {
    name: "Nelakondapalli",
    description:
      "An archaeological site with Buddhist stupas and ancient ruins dating back to the 2nd century BCE. A must-visit for history buffs and archaeology enthusiasts.",
    image: "/ancient-buddhist-stupa-archaeological-ruins.jpg",
  },
]

export function ExploreKhammam() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="explore" ref={ref} className="py-20 lg:py-32 bg-background/50">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-4 text-foreground">Explore Khammam</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Discover the rich heritage and natural beauty of Khammam while attending the conference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <motion.div
              key={attraction.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative bg-card border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
              </div>

              <div className="p-6">
                <div className="flex items-start gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {attraction.name}
                  </h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{attraction.description}</p>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
