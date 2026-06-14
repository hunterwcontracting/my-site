"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp, FadeIn } from "@/components/motion-wrappers"

interface PricingPlan {
  name: string
  price: string
  setup: string
  annual?: string
  period: string
  minutes: string
  overage: string
  description: string
  bestFor: string
  features: { label: string; value: string }[]
  highlighted: boolean
  cta: string
  tag?: string
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "$179.99",
    setup: "$1,500 setup",
    annual: "or $799/year (save 15%)",
    period: "/month",
    minutes: "300 min/month",
    overage: "$0.42/min overage",
    description: "Everything you need to stop missing calls and start converting them.",
    bestFor: "Solo professionals & very small businesses",
    highlighted: false,
    cta: "Start Free Trial",
    features: [
      { label: "24/7 AI Answering", value: "✓" },
      { label: "Appointment Booking", value: "Basic calendars" },
      { label: "Custom Voice", value: "Basic pre-set voices" },
      { label: "Integrations", value: "Google Calendar, Outlook" },
      { label: "Call Forwarding", value: "To 1 number" },
      { label: "Analytics", value: "Basic dashboard" },
      { label: "Languages", value: "English only" },
      { label: "Human Takeover", value: "Add-on $1.65/min" },
      { label: "Support", value: "Email only" },
    ],
  },
  {
    name: "Professional",
    price: "$349.99",
    setup: "$1,000 setup",
    annual: "or $2,529/year (save 15%)",
    period: "/month",
    minutes: "1,200 min/month",
    overage: "$0.30/min overage",
    description: "Full reception capabilities with smart integrations for growing teams.",
    bestFor: "Growing teams, 5–50 staff",
    highlighted: true,
    cta: "Start Free Trial",
    tag: "Most Popular",
    features: [
      { label: "24/7 AI Answering", value: "✓" },
      { label: "Appointment Booking", value: "Smart scheduling + reminders" },
      { label: "Custom Voice", value: "Advanced custom tone" },
      { label: "Integrations", value: "HubSpot, Salesforce, Zapier" },
      { label: "Call Forwarding", value: "Multiple numbers & teams" },
      { label: "Analytics", value: "Detailed + transcripts" },
      { label: "Languages", value: "English + 2 languages" },
      { label: "Human Takeover", value: "50 min/month included" },
      { label: "Support", value: "Email + live chat" },
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    setup: "Free setup",
    period: "",
    minutes: "Unlimited",
    overage: "Custom rates",
    description: "Unlimited everything, fully branded, with a dedicated account manager.",
    bestFor: "High-volume businesses & franchises",
    highlighted: false,
    cta: "Get Custom Quote",
    features: [
      { label: "24/7 AI Answering", value: "✓" },
      { label: "Appointment Booking", value: "Advanced conflict resolution" },
      { label: "Custom Voice", value: "Full voice cloning" },
      { label: "Integrations", value: "All + custom API access" },
      { label: "Call Forwarding", value: "Unlimited + rules-based" },
      { label: "Analytics", value: "Real-time + export" },
      { label: "Languages", value: "Unlimited" },
      { label: "Human Takeover", value: "Unlimited fallback" },
      { label: "Support", value: "Priority + dedicated manager" },
    ],
  },
]

const includedAll = [
  "Spam call screening",
  "Voicemail transcription",
  "After-hours messaging",
  "Basic CRM notes",
  "No long-term contracts",
  "Free 14-day trial",
]

const allAddons = [
  { label: "Extra minutes", value: "From $0.30/min" },
  { label: "Premium voices", value: "Available on all plans" },
  { label: "Free trial", value: "14 days, no credit card" },
]

function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [showFeatures, setShowFeatures] = useState(false)

  return (
    <FadeInUp delay={index * 0.12}>
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{ y: hovered ? -6 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative rounded-2xl flex flex-col h-full"
        style={{
          backgroundColor: plan.highlighted ? "rgba(107,33,168,0.15)" : "rgba(255,255,255,0.03)",
          border: plan.highlighted ? "1px solid rgba(168,85,247,0.5)" : "1px solid rgba(255,255,255,0.08)",
          boxShadow: plan.highlighted ? "0 0 40px rgba(107,33,168,0.2), inset 0 1px 0 rgba(168,85,247,0.2)" : "none",
        }}
      >
        {plan.highlighted && (
          <div className="absolute top-0 left-8 right-8 h-px rounded-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.8), transparent)" }} />
        )}

        {plan.tag && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1 text-xs font-medium text-white rounded-full tracking-widest uppercase"
              style={{ backgroundColor: "#7C3AED", border: "1px solid rgba(168,85,247,0.4)" }}>
              {plan.tag}
            </span>
          </div>
        )}

        <div className="p-8 flex flex-col flex-1">
          {/* Plan name */}
          <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: "#A855F7" }}>
            {plan.name}
          </p>

          {/* Price */}
          <div className="flex items-end gap-2 mb-1">
            <span className="text-5xl font-bold text-white tracking-tight">{plan.price}</span>
            {plan.period && <span className="text-white/40 font-light mb-2">{plan.period}</span>}
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mt-3 mb-4">
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: "rgba(107,33,168,0.25)", color: "#C084FC", border: "1px solid rgba(168,85,247,0.2)" }}>
              {plan.setup}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: "rgba(34,211,238,0.08)", color: "#67E8F9", border: "1px solid rgba(34,211,238,0.15)" }}>
              {plan.minutes}
            </span>
          </div>

          {/* Annual */}
          {plan.annual && (
            <p className="text-xs text-white/30 font-light mb-4">{plan.annual}</p>
          )}

          {/* Overage */}
          <p className="text-xs font-light mb-4" style={{ color: "#A855F7" }}>{plan.overage}</p>

          {/* Description */}
          <p className="text-white/50 font-light text-sm leading-relaxed mb-4">{plan.description}</p>

          {/* Best for */}
          <p className="text-xs text-white/30 font-light mb-6 italic">Best for: {plan.bestFor}</p>

          {/* Toggle features */}
          <button
            onClick={() => setShowFeatures(!showFeatures)}
            className="flex items-center gap-2 text-xs font-medium tracking-widest uppercase mb-4 transition-colors"
            style={{ color: showFeatures ? "#A855F7" : "rgba(255,255,255,0.3)" }}
          >
            <motion.svg
              animate={{ rotate: showFeatures ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            >
              <path d="M19 9l-7 7-7-7" />
            </motion.svg>
            {showFeatures ? "Hide features" : "View all features"}
          </button>

          {/* Features */}
          <motion.div
            initial={false}
            animate={{ height: showFeatures ? "auto" : 0, opacity: showFeatures ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mb-4"
          >
            <ul className="space-y-2.5 mb-4">
              {plan.features.map((feature, i) => (
                <motion.li
                  key={feature.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center justify-between gap-3 text-xs border-b border-white/5 pb-2.5"
                >
                  <span className="text-white/40 font-light">{feature.label}</span>
                  <span className="text-white/80 font-medium text-right">{feature.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <div className="mt-auto">
            <Link
              href="/contact"
              className="block w-full text-center py-4 rounded-xl text-sm font-medium uppercase tracking-widest transition-all"
              style={{
                backgroundColor: plan.highlighted ? "#7C3AED" : "transparent",
                color: "white",
                border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.15)",
              }}
              onMouseEnter={(e) => {
                if (!plan.highlighted) (e.target as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)"
                else (e.target as HTMLElement).style.filter = "brightness(1.15)"
              }}
              onMouseLeave={(e) => {
                if (!plan.highlighted) (e.target as HTMLElement).style.backgroundColor = "transparent"
                else (e.target as HTMLElement).style.filter = "brightness(1)"
              }}
            >
              {plan.cta}
            </Link>
          </div>
        </div>
      </motion.div>
    </FadeInUp>
  )
}

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(107,33,168,0.5) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              Simple, Transparent
              <span className="block" style={{ color: "#A855F7" }}>Pricing</span>
            </h1>
            <p className="text-white/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              No lock-ins, no hidden fees. Month-to-month with a one-time setup fee. NZ-based support on every plan. Prices in NZD, excl. 15% GST.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {plans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* All plans include */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="rounded-2xl p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "#A855F7" }}>
                All Plans Include
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {includedAll.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "rgba(107,33,168,0.3)", border: "1px solid rgba(168,85,247,0.3)" }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-white/60 font-light text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Add-ons strip */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp>
            <div className="rounded-2xl p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "#A855F7" }}>
                Add-ons & Sweeteners
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {allAddons.map((addon, i) => (
                  <motion.div
                    key={addon.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col gap-1"
                  >
                    <span className="text-white/40 text-xs font-light uppercase tracking-wider">{addon.label}</span>
                    <span className="text-white font-medium text-sm">{addon.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at center, rgba(107,33,168,0.25) 0%, transparent 70%)" }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
              Not sure which plan fits?
            </h2>
            <p className="text-white/50 font-light text-lg mb-8 leading-relaxed max-w-xl mx-auto">
              Every plan includes a 14-day free trial — no credit card required. For Enterprise, tell us your call volume and we'll build a custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                  style={{ backgroundColor: "#6B21A8" }}>
                  Start Free Trial
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link href="/contact"
                  className="inline-block px-10 py-4 text-sm font-medium text-white rounded-lg uppercase tracking-widest border border-white/20 hover:bg-white/5 transition-colors">
                  Talk to Sales
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