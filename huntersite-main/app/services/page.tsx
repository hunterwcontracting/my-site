"use client"

import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion-wrappers"

const services = [
  {
    title: "Calendar Integration",
    description: "We integrate with your existing calendar, whatever you use. Automatically books, reschedules, and confirms appointments while respecting your availability and buffer times.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" />
      </svg>
    ),
    stat: "48hr", statLabel: "Setup Time", color: "#A855F7",
  },
  {
    title: "Multi-Language Support",
    description: "Greet and assist callers in over 30 languages with native-level fluency. From English and Spanish to Mandarin and Arabic, your AI receptionist speaks your customers' language.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" />
      </svg>
    ),
    stat: "30+", statLabel: "Languages", color: "#22D3EE",
  },
  {
    title: "Human Takeover",
    description: "When a call requires a personal touch, Front Desk Agent seamlessly transfers the caller to your team with full context. Real-time sentiment analysis ensures no sensitive situation is missed.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    stat: "< 3s", statLabel: "Transfer Time", color: "#A855F7",
  },
  {
    title: "Simultaneous Call Handling",
    description: "Handle 100+ calls at once without a single busy signal. Every caller gets immediate, professional attention no matter how busy your phone lines get.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" /><path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    ),
    stat: "100+", statLabel: "Concurrent Calls", color: "#22D3EE",
  },
  {
    title: "Email & SMS Reminders",
    description: "Capture caller information and automatically follow up with booking confirmations, reminders, and nurture sequences. Reduce no-shows and keep your pipeline warm.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    stat: "80%", statLabel: "Fewer No-Shows", color: "#A855F7",
  },
  {
    title: "Smart Call Routing",
    description: "Intelligently route calls to the right department or team member based on caller intent, time of day, and your custom rules. Context is always passed along.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M16 12h-6.5a2.5 2.5 0 0 1 0-5H16" /><path d="M8 12h6.5a2.5 2.5 0 0 1 0 5H8" />
      </svg>
    ),
    stat: "99%", statLabel: "Uptime", color: "#22D3EE",
  },
  {
    title: "Flexible Customisation",
    description: "Whether you are a tradesperson, restaurant, medical practice, or something else entirely, Front Desk Agent adapts to your unique workflows, greetings, and escalation rules.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    stat: "Any", statLabel: "Business Type", color: "#A855F7",
  },
  {
    title: "CRM & Zapier Integrations",
    description: "Connect Front Desk Agent to your existing tools. Push call data, new leads, and bookings directly into your CRM or trigger Zapier workflows automatically.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" />
      </svg>
    ),
    stat: "1000+", statLabel: "App Integrations", color: "#22D3EE",
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-px overflow-hidden cursor-default"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${service.color}60, transparent 60%)`
          : "linear-gradient(135deg, rgba(255,255,255,0.06), transparent 60%)",
        transition: "background 0.4s ease",
      }}
    >
      {/* Inner card */}
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-2xl p-8 flex flex-col h-full overflow-hidden"
        style={{ backgroundColor: "#1E1E24" }}
      >
        {/* Animated background glow */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
          transition={{ duration: 0.4 }}
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: `${service.color}20` }}
        />

        {/* Top row: icon + stat */}
        <div className="flex items-start justify-between mb-6">
          <motion.div
            animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="h-14 w-14 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: `${service.color}18`, color: service.color, border: `1px solid ${service.color}30` }}
          >
            {service.icon}
          </motion.div>

          <motion.div
            animate={{ opacity: hovered ? 1 : 0.4, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
            className="text-right"
          >
            <div className="text-2xl font-bold tracking-tight" style={{ color: service.color }}>
              {service.stat}
            </div>
            <div className="text-xs text-white/30 font-light">{service.statLabel}</div>
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
        <p className="text-white/45 font-light text-sm leading-relaxed flex-1">{service.description}</p>

        {/* Bottom animated line */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: "#6B21A8" }} />
        <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-15 pointer-events-none" style={{ backgroundColor: "#22D3EE" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeInUp delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white tracking-tighter mb-6 leading-none">
              Everything Your
              <span className="block" style={{ color: "#A855F7" }}>Front Desk Needs</span>
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-white/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              From handling calls to booking appointments to sending reminders — Front Desk Agent does it all, 24/7, without breaking a sweat.
            </p>
          </FadeInUp>

          {/* Animated stats strip */}
          <FadeInUp delay={0.3}>
            <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
              {[
                { value: "100+", label: "Concurrent Calls" },
                { value: "30+", label: "Languages" },
                { value: "99%", label: "Uptime" },
                { value: "48hr", label: "Setup" },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/30 font-light tracking-wider uppercase">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }} />
      </div>

      {/* Service Cards */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works strip */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(107,33,168,0.5) 0%, transparent 60%)" }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInUp>
            <p className="text-center text-xs font-medium tracking-widest uppercase mb-12" style={{ color: "#A855F7" }}>
              How It Works
            </p>
          </FadeInUp>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(34,211,238,0.3), transparent)" }} />

            {[
              { step: "01", title: "We Set You Up", desc: "Full onboarding handled by our team within 48 hours." },
              { step: "02", title: "Calls Come In", desc: "Your AI receptionist answers every call instantly, 24/7." },
              { step: "03", title: "AI Takes Action", desc: "Books appointments, routes calls, sends reminders." },
              { step: "04", title: "You Stay Informed", desc: "Get summaries, alerts, and analytics in real time." },
            ].map((item, i) => (
              <FadeInUp key={item.step} delay={i * 0.1}>
                <div className="text-center relative">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold relative z-10"
                    style={{
                      backgroundColor: "#1A1A1F",
                      border: "1px solid rgba(168,85,247,0.3)",
                      color: i % 2 === 0 ? "#A855F7" : "#22D3EE",
                    }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-sm">{item.title}</h3>
                  <p className="text-white/40 font-light text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(107,33,168,0.25) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Need Something
              <span className="block" style={{ color: "#A855F7" }}>Custom?</span>
            </h2>
            <p className="text-white/50 font-light text-lg mb-10 leading-relaxed">
              Front Desk Agent adapts to virtually any business. Get in touch and we will tailor a solution just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                  style={{ backgroundColor: "#6B21A8" }}
                >
                  Contact Us
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/pricing"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-colors"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </div>
  )
}
