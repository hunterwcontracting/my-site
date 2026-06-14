"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particles"
import { AnimatedCounter } from "@/components/counter"
import { FadeInUp, FadeIn } from "@/components/motion-wrappers"
import { AIConversation } from "@/components/ai-conversation"
import { Video } from "lucide-react"
import { PhoneMockup } from "@/components/phone-mockup"

const faqs = [
  {
    question: "How quickly can I set up Front Desk Agent?",
    answer:
      "Front Desk Agent can be set up within 48 hours. We handle the onboarding, connect your phone system, configure your business hours and preferences, and your AI receptionist is live and ready.",
  },
  {
    question: "Can it handle multiple calls simultaneously?",
    answer:
      "Yes. Unlike a human receptionist, Front Desk Agent can manage 100+ concurrent calls without any degradation in quality or response time, ensuring no caller ever gets a busy signal.",
  },
  {
    question: "What types of businesses does it work for?",
    answer:
      "Front Desk Agent is designed to adapt to any type of business. Whether you run a trades company, restaurant, medical practice, law firm, salon, or anything in between, our AI service can be customised to match your specific workflows and needs.",
  },
  {
    question: "Does it integrate with my existing calendar?",
    answer:
      "Absolutely. We can integrate with your existing calendar, whatever you use. Appointments are booked, rescheduled, and confirmed automatically while respecting your availability rules.",
  },
  {
    question: "How does it handle complex or sensitive calls?",
    answer:
      "Front Desk Agent uses real-time sentiment analysis to detect when a caller needs human assistance. It seamlessly transfers the call to the appropriate team member with full context, ensuring a smooth handoff.",
  },
  {
    question: "What languages does it support?",
    answer:
      "We currently support over 30 languages with native-level fluency, including English, Spanish, French, German, Mandarin, Japanese, and Arabic. New languages are added regularly.",
  },
  {
    question: "Is caller data secure and private?",
    answer:
      "All call data is encrypted at rest and in transit. We never use your data to train our models. Your business and caller information remains completely private.",
  },
]

export default function Page() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
    
        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(26,26,31,0.6) 0%, rgba(26,26,31,0.85) 70%, #1A1A1F 100%)",
          }}
        />

        {/* Particle effect */}
        <ParticleField />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left: Text Content */}
            <div className="text-left">
             

              <FadeInUp delay={0.1}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tighter leading-none mb-6">
                  Your 24/7 AI Front Desk
                  <span className="block" style={{ color: "#A855F7" }}>
                    Never Miss a Call Again
                  </span>
                </h1>
              </FadeInUp>

              <FadeInUp delay={0.2}>
                <p className="text-lg sm:text-xl text-white/60 font-light max-w-xl mb-10 leading-relaxed">
                  Front Desk Agent is your intelligent virtual receptionist that handles calls, books appointments, and delights your callers around the clock.
                </p>
              </FadeInUp>

              <FadeInUp delay={0.3}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                      style={{ backgroundColor: "#6B21A8" }}
                    >
                      Get Your Free Trial
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/services"
                      className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-colors"
                    >
                      Explore Services
                    </Link>
                  </motion.div>
                </div>
              </FadeInUp>
            </div>

            {/* Right: Robot Hero Image */}
            <FadeIn delay={0.3}>
              <div className="relative hidden lg:flex items-center justify-center">
               
<div 
  className="relative w-full max-w-2xl aspect-[3/4] z-10"
  style={{ backgroundColor: '#1A1A1F' }}
>
  <video
    src="/AI-powered humanoid receptionist.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-full object-cover"
    style={{ mixBlendMode: 'lighten' }}
  />
</div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-12 w-20 flex items-center justify-center rounded-full border border-white/20 backdrop-blur-sm"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.6">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#1A1A1F" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: 100, suffix: "+", label: "Simultaneous Calls" },
              { value: 30, suffix: "+", label: "Languages Supported" },
              { value: 99, suffix: "%", label: "Uptime Guaranteed" },
              { value: 48, suffix: " hrs", label: "Setup" },
            ].map((stat, i) => (
              <FadeInUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2" style={{ color: "#A855F7" }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm sm:text-base text-white/50 font-light">{stat.label}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Live AI Conversation Demo */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, rgba(34,211,238,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(107,33,168,0.3) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-4xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-12">
             
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                See It in Action
              </h2>
              <p className="text-white/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
                Watch a real conversation between a caller and Front Desk Agent. Every call is handled naturally, professionally, and instantly.
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <AIConversation />
          </FadeInUp>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(107,33,168,0.4) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
                  Intelligent Voice AI
                  <span className="block" style={{ color: "#A855F7" }}>
                    That Learns Your Business
                  </span>
                </h2>
                <p className="text-white/60 font-light text-lg leading-relaxed mb-8">
                  Powered by advanced language models fine-tuned for receptionist workflows. Front Desk Agent understands context, handles multi-turn conversations, and responds with a natural, professional tone that callers trust.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Natural voice interactions with real-time sentiment analysis",
                    "Integrates with your existing calendar for smart appointment booking",
                    "Intelligent call routing with context-aware escalation",
                    "Human takeover option for sensitive or complex scenarios",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="mt-2 w-2 h-2 rounded-full shrink-0"
                        style={{ backgroundColor: "#6B21A8" }}
                      />
                      <span className="text-white/60 font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/services"
                    className="inline-block px-8 py-3.5 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                    style={{ backgroundColor: "#6B21A8" }}
                  >
                    View All Services
                  </Link>
                </motion.div>
              </div>
            </FadeInUp>
           <FadeIn delay={0.2}>
  <PhoneMockup />
</FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#1A1A1F" }}>
        <div className="max-w-3xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-white/50 font-light mb-12">
              Everything you need to know about Front Desk Agent.
            </p>
          </FadeInUp>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <FadeInUp key={index} delay={index * 0.05}>
                <div className="border-b border-white/10">
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <span className="text-base sm:text-lg font-normal text-white pr-4 group-hover:text-purple-400 transition-colors">
                      {faq.question}
                    </span>
                    <motion.svg
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      className="shrink-0 opacity-50"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: openFaqIndex === index ? "auto" : 0,
                      opacity: openFaqIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-white/60 font-light leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(107,33,168,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Ready to Transform Your Front Desk?
            </h2>
            <p className="text-white/50 font-light text-lg mb-10 leading-relaxed">
              Join hundreds of businesses already using Front Desk Agent to never miss a call again.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                style={{ backgroundColor: "#6B21A8" }}
              >
                Get Your Free Trial
              </Link>
            </motion.div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
