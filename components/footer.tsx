"use client"

import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Conference Secretariat */}
          <div>
            <h3 className="text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              CONFERENCE SECRETARIAT
            </h3>
            <div className="space-y-3">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wide">Corresponding Address</p>
              <p className="font-semibold text-base sm:text-lg">Dr. K Jagadeesh Babu (MS.Mch)</p>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Head, Department of Neurosurgery. Mamata Medical College<br />
                Organizing Secretary. TNSCON 2026 — Khammam
              </p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="tel:+918374590275" className="hover:text-primary transition-colors break-all">
                  +91 - 8374590275
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:tnscon2026@gmail.com" className="hover:text-primary transition-colors break-all">
                  tnscon2026@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Conference Manager */}
          <div>
            <h3 className="text-orange-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              CONFERENCE MANAGER
            </h3>
            <div className="space-y-3">
              {/* CMC Logo */}
              <div className="mb-3">
                <img 
                  src="/CMC Logo Footer.png" 
                  alt="CMC - Conference Management Company" 
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
              <p className="font-semibold text-base sm:text-lg">Mr. Kiran Kumar Lella</p>
              <p className="text-gray-400 text-xs sm:text-sm">Conference Manager</p>
              <p className="text-gray-300 text-xs sm:text-sm font-medium">CMC - Conference Management Company</p>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="tel:+919676541985" className="hover:text-primary transition-colors break-all">
                  Mobile: +91 – 9676541985
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                <a href="mailto:kiran@cmchyd.com" className="hover:text-primary transition-colors break-all">
                  Email: kiran@cmchyd.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary transition-colors">
                  Registration
                </a>
              </li>
              <li>
                <a href="#welcome" className="text-gray-300 hover:text-primary transition-colors">
                  Conference Program
                </a>
              </li>
              <li>
                <a href="#committee" className="text-gray-300 hover:text-primary transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#explore" className="text-gray-300 hover:text-primary transition-colors">
                  Venue Information
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Accommodation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Travel Information
                </a>
              </li>
            </ul>
          </div>

          {/* Conference Info */}
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Conference Info</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-primary transition-colors">
                  Call for Abstracts
                </a>
              </li>
              <li>
                <a href="#welcome" className="text-gray-300 hover:text-primary transition-colors">
                  CME Credits
                </a>
              </li>
              <li>
                <a href="#welcome" className="text-gray-300 hover:text-primary transition-colors">
                  Sponsorship Opportunities
                </a>
              </li>
              <li>
                <a href="#committee" className="text-gray-300 hover:text-primary transition-colors">
                  Media Partners
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Tech Partner */}
          <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-3 text-xs sm:text-sm mb-4 sm:mb-6">
              <div className="flex items-center gap-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:tnscon2026@gmail.com"
                  className="text-gray-300 hover:text-primary transition-colors break-all"
                >
                  tnscon2026@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <a href="tel:+918374590275" className="text-gray-300 hover:text-primary transition-colors">
                  +91 8374590275
                </a>
              </div>
            </div>

            {/* Tech Partner */}
            <div>
              <h3 className="text-white font-semibold text-sm sm:text-base mb-3">Tech Partner</h3>
              <a
                href="https://purplehatevents.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm"
              >
                PurpleHat Tech
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p className="text-center md:text-left">© 2025 TNSCON 2026 - Telangana Neurosciences Society. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
