"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export function Hero() {
  const ref = useRef(null)
  const brainRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = useIsMobile()
  
  const [isHovered, setIsHovered] = useState(false)
  const [isMoving, setIsMoving] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      if (brainRef.current && !isMobile) {
        const rect = brainRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        const deltaX = (e.clientX - centerX) / rect.width
        const deltaY = (e.clientY - centerY) / rect.height
        
        setIsMoving(true)
        setMousePosition({
          x: Math.max(-1, Math.min(1, deltaX)) * 35,
          y: Math.max(-1, Math.min(1, deltaY)) * 25
        })

        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => {
          setIsMoving(false)
          setMousePosition({ x: 0, y: 0 })
        }, 1500)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [isMobile])

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-background to-background z-0" />

      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-left">
            <motion.div
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg rotate-45 flex items-center justify-center">
                <div className="w-6 h-6 bg-yellow-300 rounded-sm rotate-45" />
              </div>
            </motion.div>

            <motion.h1
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.4 }}
              className="font-sans text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8"
            >
              TNSCON 2026
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Neuroscience
              </span>
              <br />
              Excellence
            </motion.h1>

            <motion.p
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-foreground/70 mb-6 sm:mb-8 font-light leading-relaxed max-w-xl"
            >
              Exploring the intricate architecture of the human brain through cutting-edge neuroscience research and
              innovation
            </motion.p>

            <motion.button
              initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={isMobile ? { duration: 0 } : { duration: 0.8, delay: 0.8 }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-foreground hover:border-primary transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 text-foreground group-hover:text-background transition-colors duration-300 font-semibold uppercase tracking-wider text-xs sm:text-sm flex items-center gap-2 sm:gap-3">
                Register for Conference
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={isMobile ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={isMobile ? { duration: 0 } : { duration: 1, delay: 0.6 }}
            className="relative h-[400px] sm:h-[500px] md:h-[700px] lg:h-[900px] flex items-center justify-center"
          >
            {/* Brain Image with Effects */}
            <div 
              ref={brainRef}
              className="relative w-full h-full flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Concentric Pulsing Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ marginTop: '-70px', marginLeft: '10px' }}>
                {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                  <div
                    key={index}
                    className="absolute rounded-full border transition-all duration-200 animate-pulse"
                    style={{
                      width: `${(180 + index * 45) * 1.15}px`,
                      height: `${(180 + index * 45) * 1.15}px`,
                      animationDelay: `${index * 0.4}s`,
                      animationDuration: '3s',
                      borderColor: isMoving 
                        ? `rgba(236, 72, 153, ${0.15 + index * 0.03})` 
                        : `rgba(236, 72, 153, ${0.06 + index * 0.015})`,
                      transform: `scale(${isMoving ? 1.03 : 1})`,
                    }}
                  />
                ))}
              </div>

              {/* Brain Image with 3D Transform */}
              <div 
                className="relative transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x : 0}deg) 
                    translateY(${isMoving ? -10 : 0}px)
                    scale(${isMoving ? 1.05 : 1})
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  src="/brain-anatomy-clean-side-view.png"
                  alt="Human Brain Anatomy"
                  className="w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[650px] md:h-[650px] lg:w-[900px] lg:h-[900px] object-contain relative z-10 drop-shadow-2xl transition-all duration-300"
                  style={{
                    filter: `
                      brightness(${isHovered ? 1.15 : 1.05}) 
                      contrast(${isHovered ? 1.2 : 1.05})
                      saturate(${isHovered ? 1.1 : 1})
                    `
                  }}
                />
                
                {/* Reflection Effect */}
                <div 
                  className="absolute bottom-0 left-1/2 w-full h-24 bg-gradient-to-b from-pink-500/6 to-transparent blur-xl transition-all duration-500 pointer-events-none"
                  style={{ 
                    transform: `translateX(-50%) translateY(-15px) scaleY(0.2) scale(${isHovered ? 1.05 : 1})`,
                  }}
                />
              </div>

              {/* SVG Neural Pathways */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
                    <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M50 200 Q150 150 250 200"
                  stroke="url(#gradient1)"
                  strokeWidth="1"
                  fill="none"
                  className="transition-opacity duration-500"
                  style={{ opacity: isHovered ? 0.5 : 0.3 }}
                />
                <path
                  d="M300 180 Q400 220 500 180"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                  className="transition-opacity duration-500"
                  style={{ opacity: isHovered ? 0.4 : 0.2 }}
                />
                <path
                  d="M150 100 Q150 200 150 300"
                  stroke="url(#gradient3)"
                  strokeWidth="1"
                  fill="none"
                  className="transition-opacity duration-500"
                  style={{ opacity: isHovered ? 0.3 : 0.15 }}
                />
              </svg>

              {/* Interactive Labels */}
              {/* Frontal Lobe - Top Left */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                className="hidden md:block absolute top-[25%] md:top-[30%] left-[5%] md:left-[15%] z-20 transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y * 0.8 : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x * 0.8 : 0}deg)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-pink-400/30 shadow-xl">
                    <p className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">Frontal Lobe</p>
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-pink-500/20">
                    <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-pink-400 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-2 md:h-3 bg-pink-400" />
                        <div className="w-2 md:w-3 h-0.5 bg-pink-400 absolute" />
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 right-4 md:right-6 w-12 md:w-20 h-1"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </motion.div>

              {/* Temporal Lobe - Middle Left */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                className="hidden md:block absolute top-[46%] left-[8%] md:left-[20%] z-20 transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y * 0.8 : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x * 0.8 : 0}deg)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-pink-400/30 shadow-xl">
                    <p className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">Temporal Lobe</p>
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-pink-500/20">
                    <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-pink-400 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-2 md:h-3 bg-pink-400" />
                        <div className="w-2 md:w-3 h-0.5 bg-pink-400 absolute" />
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 right-4 md:right-6 w-12 md:w-20 h-1"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </motion.div>

              {/* Parietal Lobe - Top Right */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                className="hidden md:block absolute top-[24%] md:top-[29%] right-[5%] md:right-[16%] z-20 transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y * 0.8 : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x * 0.8 : 0}deg)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-pink-500/20">
                    <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-pink-400 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-2 md:h-3 bg-pink-400" />
                        <div className="w-2 md:w-3 h-0.5 bg-pink-400 absolute" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-pink-400/30 shadow-xl">
                    <p className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">Parietal Lobe</p>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 left-4 md:left-6 w-10 md:w-16 h-1"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </motion.div>

              {/* Occipital Lobe - Middle Right */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                className="hidden md:block absolute top-[40%] right-[2%] md:right-[7%] z-20 transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y * 0.8 : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x * 0.8 : 0}deg)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-pink-500/20">
                    <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-pink-400 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-2 md:h-3 bg-pink-400" />
                        <div className="w-2 md:w-3 h-0.5 bg-pink-400 absolute" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-pink-400/30 shadow-xl">
                    <p className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">Occipital Lobe</p>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 left-4 md:left-6 w-10 md:w-16 h-1"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </motion.div>

              {/* Cerebellum - Bottom Right */}
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0 }}
                className="hidden md:block absolute bottom-[35%] md:bottom-[40%] right-[8%] md:right-[18%] z-20 transition-all duration-200 ease-out"
                style={{
                  transform: `
                    perspective(800px) 
                    rotateX(${isMoving ? mousePosition.y * 0.8 : 0}deg) 
                    rotateY(${isMoving ? mousePosition.x * 0.8 : 0}deg)
                  `,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-400 flex items-center justify-center backdrop-blur-sm shadow-lg shadow-pink-500/20">
                    <div className="w-4 h-4 md:w-6 md:h-6 border-2 border-pink-400 rounded-full relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-0.5 h-2 md:h-3 bg-pink-400" />
                        <div className="w-2 md:w-3 h-0.5 bg-pink-400 absolute" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2 rounded-lg border border-pink-400/30 shadow-xl">
                    <p className="text-white font-semibold text-xs md:text-sm whitespace-nowrap">Cerebellum</p>
                  </div>
                </div>
                <svg
                  className="absolute top-1/2 left-4 md:left-6 w-10 md:w-16 h-1"
                  style={{ transform: "translateY(-50%)" }}
                >
                  <line x1="0" y1="0" x2="100%" y2="0" stroke="#f472b6" strokeWidth="2" strokeDasharray="4 4" />
                </svg>
              </motion.div>

              {/* Decorative gradient orbs */}
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30" />
              <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Existing code here */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-30"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-light [writing-mode:vertical-lr] rotate-180">
          TNSCON 2026 • Khammam
        </p>
      </motion.div>

      {/* Existing code here */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="hidden lg:flex flex-col gap-6 absolute right-8 top-1/2 -translate-y-1/2 z-30"
      >
        <a
          href="#"
          className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground/50"
        >
          <span className="sr-only">Facebook</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground/50"
        >
          <span className="sr-only">Twitter</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a
          href="#"
          className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground/50"
        >
          <span className="sr-only">LinkedIn</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </motion.div>
    </section>
  )
}
