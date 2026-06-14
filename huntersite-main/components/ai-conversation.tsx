"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const conversation = [
  {
    role: "caller" as const,
    text: "Hi, I need to book a plumber for a leaking tap — is anyone available this week?",
  },
  {
    role: "ai" as const,
    text: "Absolutely! I can see we have availability on Wednesday at 10 AM or Thursday at 2 PM. Which works best for you?",
  },
  {
    role: "caller" as const,
    text: "Thursday at 2 PM sounds perfect.",
  },
  {
    role: "ai" as const,
    text: "Great, I've booked you in for Thursday at 2 PM. Can I grab your name and address for the job?",
  },
  {
    role: "caller" as const,
    text: "It's Sarah Mitchell, 42 Riccarton Road, Christchurch.",
  },
  {
    role: "ai" as const,
    text: "All confirmed! Sarah, you're booked for Thursday 2 PM at 42 Riccarton Road. You'll get a text confirmation shortly. Is there anything else I can help with?",
  },
  {
    role: "caller" as const,
    text: "No, that's everything. Thanks!",
  },
  {
    role: "ai" as const,
    text: "You're welcome, Sarah! Have a great day.",
  },
]

function AudioWave({ active, color }: { active: boolean; color: string }) {
  const bars = 32

  return (
    <div className="flex items-center justify-center gap-[2px] h-16">
      {Array.from({ length: bars }).map((_, i) => (
        <motion.div
          key={i}
          className="rounded-full"
          style={{
            width: 3,
            backgroundColor: color,
            opacity: active ? 0.8 : 0.2,
          }}
          animate={{
            height: active
              ? [
                  4 + Math.random() * 8,
                  12 + Math.sin(i * 0.5) * 28 + Math.random() * 20,
                  4 + Math.random() * 8,
                ]
              : 4,
          }}
          transition={{
            duration: 0.4 + Math.random() * 0.4,
            repeat: active ? Infinity : 0,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: i * 0.02,
          }}
        />
      ))}
    </div>
  )
}

export function AIConversation() {
  const [visibleMessages, setVisibleMessages] = useState<number>(0)
  const [activeRole, setActiveRole] = useState<"caller" | "ai" | null>(null)
  const [hasStarted, setHasStarted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Intersection observer to trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [hasStarted])

  // Animate messages one at a time
  useEffect(() => {
    if (!hasStarted) return
    if (visibleMessages >= conversation.length) {
      setActiveRole(null)
      return
    }

    const currentMsg = conversation[visibleMessages]
    setActiveRole(currentMsg.role)

    // Simulate "speaking" duration based on text length
    const speakingDuration = 800 + currentMsg.text.length * 25
    const timer = setTimeout(() => {
      setVisibleMessages((prev) => prev + 1)
    }, speakingDuration)

    return () => clearTimeout(timer)
  }, [hasStarted, visibleMessages])

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [visibleMessages])

  return (
    <div ref={sectionRef} className="w-full">
      {/* Audio Waves */}
      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#A855F7" }}
          >
            Caller
          </p>
          <AudioWave active={activeRole === "caller"} color="#A855F7" />
        </div>
        <div className="text-center">
          <p
            className="text-xs font-medium uppercase tracking-widest mb-4"
            style={{ color: "#22D3EE" }}
          >
            Front Desk Agent
          </p>
          <AudioWave active={activeRole === "ai"} color="#22D3EE" />
        </div>
      </div>

      {/* Conversation Transcript */}
      <div
        ref={scrollRef}
        className="rounded-xl border border-white/10 p-6 max-h-[400px] overflow-y-auto space-y-4"
        style={{ backgroundColor: "rgba(26,26,31,0.8)" }}
      >
        <AnimatePresence>
          {conversation.slice(0, visibleMessages).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}
            >
              <div
                className="max-w-[80%] rounded-2xl px-5 py-3"
                style={{
                  backgroundColor:
                    msg.role === "ai"
                      ? "rgba(34, 211, 238, 0.1)"
                      : "rgba(168, 85, 247, 0.15)",
                  borderLeft:
                    msg.role === "ai" ? "3px solid #22D3EE" : "none",
                  borderRight:
                    msg.role === "caller" ? "3px solid #A855F7" : "none",
                }}
              >
                <p className="text-xs font-medium mb-1" style={{ color: msg.role === "ai" ? "#22D3EE" : "#A855F7" }}>
                  {msg.role === "ai" ? "Front Desk Agent" : "Caller"}
                </p>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  {msg.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        {activeRole && visibleMessages < conversation.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex ${activeRole === "ai" ? "justify-start" : "justify-end"}`}
          >
            <div
              className="rounded-2xl px-5 py-3 flex items-center gap-1.5"
              style={{
                backgroundColor:
                  activeRole === "ai"
                    ? "rgba(34, 211, 238, 0.1)"
                    : "rgba(168, 85, 247, 0.15)",
              }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: activeRole === "ai" ? "#22D3EE" : "#A855F7",
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}

        {/* Completion message */}
        {visibleMessages >= conversation.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center pt-4"
          >
            <p className="text-xs text-white/30 uppercase tracking-widest">
              Call completed -- appointment booked successfully
            </p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
