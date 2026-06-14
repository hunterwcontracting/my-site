"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion-wrappers"


const timeline = [
  {
    label: "The Problem",
    title: "Missed Calls = Missed Revenue",
    description: "Every business loses potential customers when calls go unanswered. Whether it is a trades company on the job site or a busy restaurant during service, missed calls mean missed opportunities.",
    color: "#A855F7",
    icon: "📞",
  },
  {
    label: "The Insight",
    title: "AI Can Do Better",
    description: "We realised that modern AI could handle reception duties with the warmth, professionalism, and intelligence of your best team member — but without ever needing a break.",
    color: "#22D3EE",
    icon: "🧠",
  },
  {
    label: "The Solution",
    title: "Front Desk Agent is Born",
    description: "We built an AI receptionist that handles calls, books appointments, sends reminders, routes intelligently, and hands off to humans when needed. All available 24/7.",
    color: "#A855F7",
    icon: "⚡",
  },
  {
    label: "Today",
    title: "Empowering Businesses Worldwide",
    description: "Empowering businesses with seamless AI reception. Built in New Zealand, serving businesses. Proven to boost efficiency and customer satisfaction. Secure, scalable, and easy to integrate with any phone system.",
    color: "#22D3EE",
    icon: "🌏",
  },
]

const values = [
  { title: "Reliability", description: "99.9% uptime. Your AI receptionist is always on duty, so your customers are never left waiting.", stat: "99.9%", color: "#A855F7" },
  { title: "User-Friendly", description: "Set up within 48 hours, not weeks. No technical expertise required. We handle everything.", stat: "Simple Setup", color: "#22D3EE" },
  { title: "Privacy First", description: "All data encrypted at rest and in transit. We never use your business or caller data to train our models.", stat: "256-bit", color: "#A855F7" },
  { title: "Flexible", description: "Adapts to any industry: trades, hospitality, healthcare, legal, and beyond. Your rules, your workflows.", stat: "Any", color: "#22D3EE" },
]

function TimelineItem({ item, index }: { item: typeof timeline[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`relative flex flex-col md:flex-row items-start gap-8 mb-20 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
      {/* Animated dot */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ boxShadow: [`0 0 0px ${item.color}00`, `0 0 30px ${item.color}80`, `0 0 0px ${item.color}00`] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 rounded-full flex items-center justify-center text-xl"
          style={{ backgroundColor: "#1A1A1F", border: `2px solid ${item.color}` }}
        >
          {item.icon}
        </motion.div>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`ml-20 md:ml-0 md:w-[calc(50%-56px)] relative ${isLeft ? "md:mr-auto" : "md:ml-auto"}`}
      >
        <motion.div
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl p-8 border relative overflow-hidden"
          style={{ backgroundColor: "#1E1E24", borderColor: `${item.color}30` }}
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
            style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}15, transparent 70%)` }} />

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-px rounded-full"
            style={{ background: `linear-gradient(90deg, transparent, ${item.color}60, transparent)` }} />

          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block" style={{ color: item.color }}>
            {item.label}
          </span>
          <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
          <p className="text-white/50 font-light text-sm leading-relaxed">{item.description}</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

function ValueCard({ val, index }: { val: typeof values[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-px overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${val.color}50, transparent)`
          : "linear-gradient(135deg, rgba(255,255,255,0.06), transparent)",
        transition: "background 0.4s",
      }}
    >
      <motion.div
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl p-6 h-full relative overflow-hidden"
        style={{ backgroundColor: "#1E1E24" }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(circle at 50% 0%, ${val.color}15, transparent 70%)` }}
        />
        <div className="text-3xl font-bold mb-1 tracking-tight" style={{ color: val.color }}>{val.stat}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{val.title}</h3>
        <p className="text-white/45 font-light text-sm leading-relaxed">{val.description}</p>
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${val.color}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function AboutPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-40 pb-32 px-6 overflow-hidden min-h-[70vh] flex items-center">
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Orbs */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ backgroundColor: "#6B21A8" }}
          />
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-40 right-1/4 w-[300px] h-[300px] rounded-full blur-[100px]"
            style={{ backgroundColor: "#22D3EE" }}
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-6 leading-none"
          >
            Built to Solve
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="block"
              style={{ color: "#A855F7" }}
            >
              a Real Problem
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/50 font-light text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Front Desk Agent was born from the frustration of missed calls and lost customers. We are on a mission to ensure no business ever misses an opportunity again.
          </motion.p>

          {/* Animated scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
              <div className="w-px h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 50%, rgba(107,33,168,0.6) 0%, transparent 60%)" }} />

        <div className="max-w-4xl mx-auto relative">
          <FadeInUp>
            <div className="text-center mb-20">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#A855F7" }}>Our Story</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-3 leading-tight">
                How We Got Here
              </h2>
            </div>
          </FadeInUp>

          {/* Animated vertical line */}
          <div className="relative">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px origin-top -translate-x-1/2"
              style={{ background: "linear-gradient(180deg, #6B21A8, #22D3EE, #6B21A8)" }}
            />
            {timeline.map((item, i) => (
              <TimelineItem key={item.label} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(107,33,168,0.5) 0%, transparent 55%), radial-gradient(circle at 30% 70%, rgba(34,211,238,0.3) 0%, transparent 55%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#A855F7" }}>Our Values</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-3">What We Stand For</h2>
            </div>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, i) => (
              <ValueCard key={val.title} val={val} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(107,33,168,0.5) 0%, transparent 60%)" }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <FadeInUp>
            <div className="text-center mb-16">
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: "#A855F7" }}>The Team</span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mt-3">Meet the Founder</h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeInUp>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(168,85,247,0.2)" }}
              >
                <Image src="/about-mission.png" alt="Hayden Beaven" fill className="object-cover" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(26,26,31,0.9) 0%, transparent 50%)" }} />

                {/* Animated corner accents */}
                {[
                  "top-0 left-0 border-t-2 border-l-2 rounded-tl-2xl",
                  "top-0 right-0 border-t-2 border-r-2 rounded-tr-2xl",
                  "bottom-0 left-0 border-b-2 border-l-2 rounded-bl-2xl",
                  "bottom-0 right-0 border-b-2 border-r-2 rounded-br-2xl",
                ].map((cls, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                    className={`absolute w-6 h-6 ${cls}`}
                    style={{ borderColor: "#A855F7" }}
                  />
                ))}

                <div className="absolute bottom-6 left-6 right-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    <h3 className="text-2xl font-bold text-white">Hayden Beaven</h3>
                    <p className="text-sm font-light" style={{ color: "#A855F7" }}>Founder & CEO</p>
                  </motion.div>
                </div>
              </motion.div>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div>
                {/* Animated quote mark */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl font-bold mb-4 leading-none"
                  style={{ color: "#6B21A8" }}
                >
                  "
                </motion.div>

                <p className="text-white/60 font-light text-lg leading-relaxed mb-6">
                  Born and raised in New Zealand, Hayden is passionate about leveraging AI to solve real-world business problems. With a background in tech innovation and a commitment to building reliable, user-friendly solutions, he founded Front Desk Agent to ensure no business ever loses a customer to a missed call.
                </p>
                <p className="text-white/60 font-light text-lg leading-relaxed mb-10">
                  Based in Christchurch, NZ, Hayden and the team are focused on making AI reception accessible, affordable, and effective for businesses of every size and industry.
                </p>

                {/* Contact links */}
                <div className="space-y-3">
                  {[
                    {
                      href: "mailto:staff@frontdesk-agent.com",
                      label: "staff@frontdesk-agent.com",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      ),
                    },
                    {
                      href: "tel:02040195202",
                      label: "020 4019 5202",
                      icon: (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      ),
                    },
                  ].map((contact, i) => (
                    <motion.a
                      key={contact.href}
                      href={contact.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 6 }}
                      className="flex items-center gap-4 group"
                    >
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="h-10 w-10 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                        style={{ backgroundColor: "rgba(107,33,168,0.2)", border: "1px solid rgba(168,85,247,0.2)" }}
                      >
                        {contact.icon}
                      </motion.div>
                      <span className="text-white/60 font-light group-hover:text-white transition-colors">
                        {contact.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(107,33,168,0.3) 0%, transparent 70%)" }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tighter mb-6 leading-none">
              Join the Future
              <span className="block" style={{ color: "#A855F7" }}>of Reception</span>
            </h2>
            <p className="text-white/50 font-light text-lg mb-10 leading-relaxed">
              See why businesses trust Front Desk Agent to be their 24/7 virtual receptionist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                  style={{ backgroundColor: "#6B21A8" }}
                >
                  Get Started Today
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/services"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-colors"
                >
                  View Services
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
