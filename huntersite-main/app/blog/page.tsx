"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion-wrappers"

const posts = [
  {
    slug: "ai-receptionists-revolutionizing-trades",
    title: "How AI Receptionists Are Revolutionising Trades Businesses",
    excerpt: "Plumbers, electricians, and builders are some of the busiest professionals around. Discover how AI receptionists handle multi-call scenarios, send booking reminders, and ensure no job inquiry is ever missed.",
    date: "February 10, 2026",
    readTime: "5 min read",
    category: "Industry",
    gradient: "from-purple-900/40 to-violet-950/20",
    accent: "#A855F7",
  },
  {
    slug: "never-miss-a-call-again",
    title: "Why Missing Calls Costs More Than You Think",
    excerpt: "Studies show that 80% of callers who reach voicemail do not leave a message. Learn why answering every call is critical and how an AI receptionist solves the problem once and for all.",
    date: "February 5, 2026",
    readTime: "4 min read",
    category: "Business",
    gradient: "from-cyan-900/30 to-slate-900/20",
    accent: "#22D3EE",
  },
  {
    slug: "multilingual-customer-support",
    title: "Breaking Language Barriers with AI",
    excerpt: "With support for over 30 languages, Front Desk Agent ensures every caller feels understood and valued, no matter what language they speak.",
    date: "January 28, 2026",
    readTime: "3 min read",
    category: "Features",
    gradient: "from-violet-900/30 to-purple-950/20",
    accent: "#A855F7",
  },
  {
    slug: "ai-receptionist-for-medical-practices",
    title: "Why Medical Practices Are Switching to AI Reception",
    excerpt: "Appointment no-shows, after-hours calls, and overwhelmed front desk staff are costing medical practices time and money. Here's how AI is changing that.",
    date: "January 20, 2026",
    readTime: "5 min read",
    category: "Industry",
    gradient: "from-purple-900/40 to-violet-950/20",
    accent: "#A855F7",
  },
  {
    slug: "how-ai-handles-difficult-calls",
    title: "How Front Desk Agent Handles Difficult Callers",
    excerpt: "Not every call is straightforward. Learn how our AI detects frustration, escalates when needed, and keeps every interaction professional — even the tough ones.",
    date: "January 14, 2026",
    readTime: "4 min read",
    category: "Features",
    gradient: "from-cyan-900/30 to-slate-900/20",
    accent: "#22D3EE",
  },
  {
    slug: "roi-of-ai-receptionist",
    title: "The ROI of an AI Receptionist: A Real Numbers Breakdown",
    excerpt: "What does it actually cost to miss calls vs. running an AI receptionist? We break down the numbers so you can make a clear business decision.",
    date: "January 7, 2026",
    readTime: "6 min read",
    category: "Business",
    gradient: "from-violet-900/30 to-purple-950/20",
    accent: "#A855F7",
  },
]

const categoryColors: Record<string, { bg: string; text: string }> = {
  Industry: { bg: "rgba(107,33,168,0.3)", text: "#C084FC" },
  Business: { bg: "rgba(34,211,238,0.15)", text: "#67E8F9" },
  Features: { bg: "rgba(107,33,168,0.2)", text: "#A855F7" },
}

export default function BlogPage() {
  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 50% 0%, rgba(107,33,168,0.5) 0%, transparent 60%)" }}
        />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInUp>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter mb-6 leading-none">
              Insights &
              <span className="block" style={{ color: "#A855F7" }}> Updates</span>
            </h1>
            <p className="text-white/50 font-light text-lg max-w-2xl mx-auto leading-relaxed">
              Tips, trends, and stories about how AI reception is transforming businesses across New Zealand.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <Link href={`/blog/${featured.slug}`}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/40 transition-all"
                style={{ backgroundColor: "#242429" }}
              >
                {/* Banner area */}
                <div
                  className="h-56 relative"
                  style={{ background: "linear-gradient(135deg, rgba(107,33,168,0.4) 0%, rgba(26,26,31,0.9) 100%)" }}
                >
                  <div className="absolute inset-0 flex items-center justify-center opacity-10">
                    <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" x2="12" y1="19" y2="22" />
                    </svg>
                  </div>
                  <div className="absolute top-6 left-6 flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium"
                      style={{ color: categoryColors[featured.category].text, backgroundColor: categoryColors[featured.category].bg }}
                    >
                      {featured.category}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{ color: "#A855F7", borderColor: "rgba(168,85,247,0.3)", backgroundColor: "rgba(107,33,168,0.15)" }}
                    >
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs text-white/30 font-light">{featured.date}</span>
                    <span className="text-xs text-white/20">|</span>
                    <span className="text-xs text-white/30 font-light">{featured.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-purple-400 transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-white/40 font-light leading-relaxed max-w-2xl mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-light group-hover:gap-3 transition-all" style={{ color: "#A855F7" }}>
                    Read Article
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          </FadeInUp>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <FadeInUp key={post.slug} delay={i * 0.08}>
                <Link href={`/blog/${post.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group rounded-2xl overflow-hidden border border-white/08 hover:border-purple-500/30 transition-all h-full flex flex-col"
                    style={{ backgroundColor: "#242429", borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    {/* Card image area */}
                    <div
                      className="h-36 relative"
                      style={{ background: "linear-gradient(135deg, rgba(107,33,168,0.25) 0%, rgba(26,26,31,0.95) 100%)" }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.8">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                          <line x1="12" x2="12" y1="19" y2="22" />
                        </svg>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{ color: categoryColors[post.category].text, backgroundColor: categoryColors[post.category].bg }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-white/25 font-light">{post.date}</span>
                        <span className="text-xs text-white/20">|</span>
                        <span className="text-xs text-white/25 font-light">{post.readTime}</span>
                      </div>
                      <h2 className="text-base font-semibold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors leading-snug flex-1">
                        {post.title}
                      </h2>
                      <p className="text-white/35 font-light text-sm leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs font-light group-hover:gap-3 transition-all" style={{ color: "#A855F7" }}>
                        Read More
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                </Link>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
