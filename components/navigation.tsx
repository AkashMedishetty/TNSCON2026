"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = ["hero", "welcome", "committee", "registration", "explore", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/committee", label: "Committee" },
    { href: "/program", label: "Program" },
    { href: "/abstracts", label: "Abstracts" },
    { href: "/pricing", label: "Pricing" },
    { href: "/venue", label: "Venue" },
    { href: "/contact", label: "Contact" },
  ]

  const handleBrochureDownload = () => {
    const link = document.createElement('a')
    link.href = '/TNSCON 2026_1st Announcemt Brochure_Khammam.pdf'
    link.download = 'TNSCON 2026_1st Announcemt Brochure_Khammam.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-primary/5"
          : "bg-background/10 backdrop-blur-md"
      } py-4`}
      style={{
        background: isScrolled
          ? "linear-gradient(to bottom, rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.5))"
          : "linear-gradient(to bottom, rgba(15, 23, 42, 0.4), rgba(15, 23, 42, 0.2))",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src="/TNSCON Stamp Logo.png" 
              alt="TNSCON 2026 Logo" 
              className="h-12 lg:h-14 w-auto object-contain"
            />
            <span className="text-xl lg:text-2xl font-serif font-bold text-primary tracking-wide drop-shadow-lg">
              TNSCON 2026
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light uppercase tracking-wider transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] ${
                  activeSection === link.href.slice(1)
                    ? "text-primary drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                    : "text-foreground/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={handleBrochureDownload}
              className="hidden md:inline-block px-6 py-2 text-sm uppercase tracking-wider bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full hover:bg-orange-500/30 hover:border-orange-500/50 transition-all duration-300 font-light text-orange-400 hover:shadow-lg hover:shadow-orange-500/20"
            >
              Brochure
            </button>
            <a
              href="https://forms.gle/Dvo4g58ZJ6F1bFHk6"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2 text-sm uppercase tracking-wider bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full hover:bg-primary/30 hover:border-primary/50 transition-all duration-300 font-light text-primary hover:shadow-lg hover:shadow-primary/20"
            >
              Register
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 bg-background/40 backdrop-blur-xl rounded-lg border border-white/10 p-4"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-light uppercase tracking-wider transition-colors hover:text-primary ${
                    activeSection === link.href.slice(1) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  handleBrochureDownload()
                  setIsMobileMenuOpen(false)
                }}
                className="text-sm uppercase tracking-wider text-orange-400 hover:text-orange-300 transition-colors font-light text-left"
              >
                Brochure
              </button>
              <a
                href="https://forms.gle/Dvo4g58ZJ6F1bFHk6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider text-primary hover:text-primary/80 transition-colors font-light"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
