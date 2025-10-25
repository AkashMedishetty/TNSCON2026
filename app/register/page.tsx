"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { motion } from "framer-motion"
import { UserPlus } from "lucide-react"

export default function RegisterPage() {
  return (
    <main className="relative">
      {/* Background matching hero section */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Register Section */}
        <section className="py-24 sm:py-32 relative overflow-hidden min-h-screen flex items-center">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Register Now
              </h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Register for TNSCON 2026 - Khammam
              </p>
            </motion.div>

            {/* Coming Soon Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-12 shadow-lg border border-primary/10">
                <UserPlus className="w-20 h-20 text-primary mx-auto mb-6 opacity-50" />
                <h2 className="text-3xl font-bold mb-4 text-foreground/80">Coming Soon</h2>
                <p className="text-lg text-foreground/60">
                  Registration portal will be available soon. Stay tuned for early bird registration offers.
                </p>
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
