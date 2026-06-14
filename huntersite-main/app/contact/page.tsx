"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion-wrappers"

const contactDetails = [
  {
    label: "Email",
    value: "staff@frontdesk-agent.com",
    href: "mailto:staff@frontdesk-agent.com",
    color: "#A855F7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "020 4019 5202",
    href: "tel:02040195202",
    color: "#22D3EE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Christchurch, New Zealand",
    href: null,
    color: "#A855F7",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Business Hours",
    value: "Receptionist / in person support most days",
    sub: "AI receptionist available 24/7",
    href: null,
    color: "#22D3EE",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

function ContactCard({ detail, index }: { detail: typeof contactDetails[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [hovered, setHovered] = useState(false)

  const content = (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-px overflow-hidden"
      style={{
        background: hovered
          ? `linear-gradient(135deg, ${detail.color}50, transparent)`
          : "linear-gradient(135deg, rgba(255,255,255,0.06), transparent)",
        transition: "background 0.4s",
      }}
    >
      <motion.div
        animate={{ x: hovered ? 4 : 0 }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl p-5 flex items-start gap-4 relative overflow-hidden"
        style={{ backgroundColor: "#1E1E24" }}
      >
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 0% 50%, ${detail.color}12, transparent 70%)` }}
        />
        <motion.div
          animate={hovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
          className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${detail.color}18`, color: detail.color, border: `1px solid ${detail.color}30` }}
        >
          {detail.icon}
        </motion.div>
        <div>
          <p className="text-xs text-white/30 font-light mb-1 tracking-wider uppercase">{detail.label}</p>
          <p className="text-white font-light">{detail.value}</p>
          {detail.sub && <p className="text-white/40 font-light text-sm mt-0.5">{detail.sub}</p>}
        </div>
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left"
          style={{ background: `linear-gradient(90deg, ${detail.color}, transparent)` }}
        />
      </motion.div>
    </motion.div>
  )

  return detail.href ? (
    <a href={detail.href}>{content}</a>
  ) : (
    <div>{content}</div>
  )
}

function FormInput({
  label, id, type = "text", placeholder, value, onChange, required = true
}: {
  label: string; id: string; type?: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean
}) {
  const [focused, setFocused] = useState(false)

  return (
    <motion.div animate={{ y: focused ? -2 : 0 }} transition={{ duration: 0.2 }}>
      <label htmlFor={id} className="block text-xs font-medium tracking-widest uppercase mb-2"
        style={{ color: focused ? "#A855F7" : "rgba(255,255,255,0.3)", transition: "color 0.3s" }}>
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          id={id}
          required={required}
          value={value}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className="w-full px-4 py-3.5 rounded-xl text-white font-light text-sm focus:outline-none transition-all"
          style={{
            backgroundColor: "#13131A",
            border: `1px solid ${focused ? "rgba(168,85,247,0.5)" : "rgba(255,255,255,0.08)"}`,
            boxShadow: focused ? "0 0 20px rgba(107,33,168,0.15)" : "none",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        />
        <motion.div
          animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-4 right-4 h-px origin-left rounded-full"
          style={{ background: "linear-gradient(90deg, #A855F7, #22D3EE)" }}
        />
      </div>
    </motion.div>
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef(null)
  const formInView = useInView(formRef, { once: true, margin: "-60px" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert("Something went wrong. Please try again or email us directly.")
      }
    } catch {
      alert("Something went wrong. Please try again or email us directly.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: "#6B21A8" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-20 right-1/3 w-[300px] h-[300px] rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: "#22D3EE" }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl sm:text-7xl lg:text-9xl font-bold text-white tracking-tighter mb-6 leading-none"
          >
            {"Let's"}
            <span className="block" style={{ color: "#A855F7" }}>Talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/50 font-light text-xl max-w-xl mx-auto leading-relaxed"
          >
            Ready to transform your front desk? We will have you set up and running in 48 hours.
          </motion.p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto w-full px-6">
        <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }} />
      </div>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <FadeInUp>
                <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">Get in Touch</h2>
                <p className="text-white/40 font-light text-sm mb-8">We are based in Christchurch, NZ and respond within one business day.</p>
              </FadeInUp>
              <div className="space-y-3 mb-12">
                {contactDetails.map((detail, i) => (
                  <ContactCard key={detail.label} detail={detail} index={i} />
                ))}
              </div>
              <FadeInUp delay={0.4}>
                <div className="rounded-2xl p-6 relative overflow-hidden"
                  style={{ backgroundColor: "#1E1E24", border: "1px solid rgba(168,85,247,0.15)" }}>
                  <div className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.4), transparent)" }} />
                  <div className="flex items-center gap-3 mb-3">
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: "#22c55e" }}
                    />
                    <span className="text-white text-sm font-medium">{"We're online"}</span>
                  </div>
                  <p className="text-white/40 font-light text-sm leading-relaxed">
                    Average response time under 4 hours during business hours. For urgent enquiries, call us directly.
                  </p>
                </div>
              </FadeInUp>
            </div>

            {/* Right: form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 40 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-2xl p-px overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.3), rgba(34,211,238,0.15), transparent)" }}
            >
              <div className="rounded-2xl p-8 relative" style={{ backgroundColor: "#1E1E24" }}>
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.5), rgba(34,211,238,0.3), transparent)" }} />

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="flex flex-col items-center justify-center min-h-[400px] text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="h-20 w-20 rounded-full flex items-center justify-center mb-6 relative"
                      style={{ backgroundColor: "rgba(107,33,168,0.2)", border: "1px solid rgba(168,85,247,0.3)" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full"
                        style={{ border: "1px solid rgba(168,85,247,0.4)" }}
                      />
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Message Sent!</h3>
                    <p className="text-white/40 font-light">Thanks for reaching out. We will be in touch within one business day.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                      <FormInput label="Name" id="name" placeholder="Your name" value={formData.name} onChange={v => setFormData({ ...formData, name: v })} />
                      <FormInput label="Phone" id="phone" type="tel" placeholder="021 000 0000" value={formData.phone} onChange={v => setFormData({ ...formData, phone: v })} required={false} />
                    </div>
                    <FormInput label="Email" id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={v => setFormData({ ...formData, email: v })} />
                    <motion.div animate={{ y: 0 }}>
                      <label htmlFor="message" className="block text-xs font-medium tracking-widest uppercase mb-2 text-white/30">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your business and how we can help..."
                        className="w-full px-4 py-3.5 rounded-xl text-white font-light text-sm focus:outline-none resize-none transition-all"
                        style={{ backgroundColor: "#13131A", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={e => {
                          e.target.style.borderColor = "rgba(168,85,247,0.5)"
                          e.target.style.boxShadow = "0 0 20px rgba(107,33,168,0.15)"
                        }}
                        onBlur={e => {
                          e.target.style.borderColor = "rgba(255,255,255,0.08)"
                          e.target.style.boxShadow = "none"
                        }}
                      />
                    </motion.div>
                    <motion.button
                      type="submit"
                      disabled={submitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 rounded-xl text-sm font-medium text-white uppercase tracking-widest relative overflow-hidden"
                      style={{ backgroundColor: "#6B21A8" }}
                    >
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", skewX: "-20deg" }}
                      />
                      {submitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Sending...
                        </span>
                      ) : "Send Message"}
                    </motion.button>
                    <p className="text-center text-white/20 text-xs font-light">
                      No spam. No lock-ins. Just a friendly conversation.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}