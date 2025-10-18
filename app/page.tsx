import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { CountdownSection } from "@/components/countdown-section"
import { Welcome } from "@/components/welcome"
import { Committee } from "@/components/committee"
import { Registration } from "@/components/registration"
import { ExploreKhammam } from "@/components/explore-khammam"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <CountdownSection />
      <Welcome />
      <Committee />
      <Registration />
      <ExploreKhammam />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  )
}
