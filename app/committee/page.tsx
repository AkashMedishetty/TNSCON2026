import { Navigation } from "@/components/navigation"
import { Committee } from "@/components/committee"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function CommitteePage() {
  return (
    <main className="relative">
      {/* Background matching hero section */}
      <div className="fixed inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <Committee />
        <Footer />
        <BackToTop />
      </div>
    </main>
  )
}
