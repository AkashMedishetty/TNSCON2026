"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const conferenceDate = new Date("2026-03-06T00:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = conferenceDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="bg-card/80 backdrop-blur-sm rounded-xl shadow-xl p-6 lg:p-8 text-center border border-primary/20 hover:border-primary/40 transition-all"
        >
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-2 font-serif">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-semibold text-foreground/70 uppercase tracking-wider">
            {unit.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
