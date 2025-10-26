"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"
import { ExternalLink, IndianRupee } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="relative">
      {/* Background matching hero section */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Pricing Section */}
        <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <IndianRupee className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Registration Fees</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent px-4">
                Registration Pricing
              </h1>
              <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl mx-auto px-4">
                Choose the best registration option for TNSCON 2026
              </p>
            </motion.div>

            {/* Pricing Table */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              {/* Desktop/Tablet Table View */}
              <div className="hidden sm:block bg-white/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-primary/20">
                      <th className="pb-4 pr-4 text-sm sm:text-base lg:text-lg font-semibold text-foreground">Category</th>
                      <th className="pb-4 px-2 sm:px-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                        Early Bird
                        <div className="text-xs sm:text-sm font-normal text-foreground/60">Till 15 Jan 2026</div>
                      </th>
                      <th className="pb-4 px-2 sm:px-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                        Regular
                        <div className="text-xs sm:text-sm font-normal text-foreground/60">Till 23 Feb 2026</div>
                      </th>
                      <th className="pb-4 pl-2 sm:pl-4 text-sm sm:text-base lg:text-lg font-semibold text-primary">
                        Spot
                        <div className="text-xs sm:text-sm font-normal text-foreground/60">From 24 Feb 2026</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-primary/10">
                      <td className="py-3 sm:py-4 pr-4 font-medium text-sm sm:text-base text-foreground">Resident</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹4,000</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹5,000</td>
                      <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹6,000</td>
                    </tr>
                    <tr className="border-b border-primary/10">
                      <td className="py-3 sm:py-4 pr-4 font-medium text-sm sm:text-base text-foreground">Delegate</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹5,500</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹6,500</td>
                      <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹8,000</td>
                    </tr>
                    <tr>
                      <td className="py-3 sm:py-4 pr-4 font-medium text-sm sm:text-base text-foreground">Accompanying Person</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹3,500</td>
                      <td className="py-3 sm:py-4 px-2 sm:px-4 text-sm sm:text-base text-foreground/80">₹4,500</td>
                      <td className="py-3 sm:py-4 pl-2 sm:pl-4 text-sm sm:text-base text-foreground/80">₹5,000</td>
                    </tr>
                  </tbody>
                </table>

                <p className="mt-6 text-xs sm:text-sm text-foreground/60 italic">
                  * All registration fees exclude 18% GST
                </p>
              </div>

              {/* Mobile Card View */}
              <div className="sm:hidden space-y-4">
                {/* Resident Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl p-4 shadow-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">Resident</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Early Bird</div>
                        <div className="text-xs text-foreground/60">Till 15 Jan 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹4,000</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Regular</div>
                        <div className="text-xs text-foreground/60">Till 23 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹5,000</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-semibold text-primary text-sm">Spot</div>
                        <div className="text-xs text-foreground/60">From 24 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹6,000</div>
                    </div>
                  </div>
                </div>

                {/* Delegate Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl p-4 shadow-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">Delegate</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Early Bird</div>
                        <div className="text-xs text-foreground/60">Till 15 Jan 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹5,500</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Regular</div>
                        <div className="text-xs text-foreground/60">Till 23 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹6,500</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-semibold text-primary text-sm">Spot</div>
                        <div className="text-xs text-foreground/60">From 24 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹8,000</div>
                    </div>
                  </div>
                </div>

                {/* Accompanying Person Card */}
                <div className="bg-white/50 backdrop-blur-sm border border-primary/10 rounded-xl p-4 shadow-lg">
                  <h3 className="text-lg font-bold text-foreground mb-3">Accompanying Person</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Early Bird</div>
                        <div className="text-xs text-foreground/60">Till 15 Jan 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹3,500</div>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-primary/10">
                      <div>
                        <div className="font-semibold text-primary text-sm">Regular</div>
                        <div className="text-xs text-foreground/60">Till 23 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹4,500</div>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <div>
                        <div className="font-semibold text-primary text-sm">Spot</div>
                        <div className="text-xs text-foreground/60">From 24 Feb 2026</div>
                      </div>
                      <div className="text-lg font-bold text-foreground">₹5,000</div>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-xs text-foreground/60 italic px-1">
                  * All registration fees exclude 18% GST
                </p>
              </div>

              {/* Register Button */}
              <div className="text-center mt-8 sm:mt-10">
                <a
                  href="https://forms.gle/Dvo4g58ZJ6F1bFHk6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg"
                >
                  Register Now
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
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
