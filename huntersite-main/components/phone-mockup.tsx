"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const steps = [
  { id: 1, label: "Incoming Call", icon: "📞", x: 50, y: 10 },
  { id: 2, label: "AI Analysis", icon: "🧠", x: 50, y: 35 },
  { id: 3, label: "Intent Detected", icon: "⚡", x: 50, y: 58 },
]

const outcomes = [
  { id: 4, label: "Book Appointment", icon: "📅", x: 15, y: 82 },
  { id: 5, label: "Transfer to Human", icon: "👤", x: 50, y: 82 },
  { id: 6, label: "Take Message", icon: "✉️", x: 85, y: 82 },
]

const allNodes = [...steps, ...outcomes]

export function PhoneMockup() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeOutcome, setActiveOutcome] = useState<number | null>(null)

  useEffect(() => {
    const cycle = () => {
      setActiveStep(0)
      setActiveOutcome(null)

      setTimeout(() => setActiveStep(1), 600)
      setTimeout(() => setActiveStep(2), 1400)
      setTimeout(() => setActiveStep(3), 2200)
      setTimeout(() => {
        const outcome = Math.floor(Math.random() * 3)
        setActiveOutcome(outcome)
      }, 3200)
    }

    cycle()
    const interval = setInterval(cycle, 5000)
    return () => clearInterval(interval)
  }, [])

  const isNodeActive = (id: number) => {
    if (id <= 3) return activeStep >= id
    return activeOutcome !== null && outcomes[activeOutcome].id === id
  }

  return (
    <div className="relative w-full h-[420px]">
      {/* Glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-10 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(107,33,168,0.8) 0%, transparent 70%)" }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Lines from step 1->2->3 */}
        {[0, 1].map((i) => (
          <motion.line
            key={i}
            x1={steps[i].x} y1={steps[i].y + 6}
            x2={steps[i + 1].x} y2={steps[i + 1].y - 4}
            stroke="rgba(168,85,247,0.15)"
            strokeWidth="0.4"
          />
        ))}
        {/* Lines from step 3 -> outcomes */}
        {outcomes.map((outcome) => (
          <motion.line
            key={outcome.id}
            x1={steps[2].x} y1={steps[2].y + 6}
            x2={outcome.x} y2={outcome.y - 4}
            stroke="rgba(168,85,247,0.15)"
            strokeWidth="0.4"
          />
        ))}

        {/* Animated pulse step 1->2 */}
        {activeStep >= 2 && (
          <motion.circle r="0.8" fill="#A855F7"
            animate={{ offsetDistance: ["0%", "100%"] }}
            style={{ offsetPath: `path('M 50 16 L 50 31')` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        {/* Animated pulse step 2->3 */}
        {activeStep >= 3 && (
          <motion.circle r="0.8" fill="#A855F7"
            animate={{ offsetDistance: ["0%", "100%"] }}
            style={{ offsetPath: `path('M 50 39 L 50 54')` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
        {/* Animated pulse step 3 -> outcome */}
        {activeOutcome !== null && (
          <motion.circle r="0.8" fill="#22D3EE"
            animate={{ offsetDistance: ["0%", "100%"] }}
            style={{ offsetPath: `path('M 50 64 L ${outcomes[activeOutcome].x} 78')` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        )}
      </svg>

      {/* Step nodes */}
      {steps.map((node) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={isNodeActive(node.id) ? { scale: [1, 1.08, 1] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-medium whitespace-nowrap transition-all duration-500"
            style={{
              backgroundColor: isNodeActive(node.id) ? "rgba(107,33,168,0.4)" : "rgba(255,255,255,0.04)",
              borderColor: isNodeActive(node.id) ? "rgba(168,85,247,0.6)" : "rgba(255,255,255,0.1)",
              color: isNodeActive(node.id) ? "#E9D5FF" : "rgba(255,255,255,0.4)",
              boxShadow: isNodeActive(node.id) ? "0 0 16px rgba(168,85,247,0.3)" : "none",
            }}
          >
            <span>{node.icon}</span>
            <span>{node.label}</span>
            {isNodeActive(node.id) && (
              <motion.div
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#A855F7" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        </motion.div>
      ))}

      {/* Outcome nodes */}
      {outcomes.map((node, i) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          animate={activeOutcome === i ? { scale: [1, 1.1, 1] } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl border text-xs font-medium whitespace-nowrap transition-all duration-500"
            style={{
              backgroundColor: activeOutcome === i ? "rgba(34,211,238,0.15)" : "rgba(255,255,255,0.04)",
              borderColor: activeOutcome === i ? "rgba(34,211,238,0.5)" : "rgba(255,255,255,0.08)",
              color: activeOutcome === i ? "#67E8F9" : "rgba(255,255,255,0.3)",
              boxShadow: activeOutcome === i ? "0 0 16px rgba(34,211,238,0.2)" : "none",
            }}
          >
            <span>{node.icon}</span>
            <span>{node.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}