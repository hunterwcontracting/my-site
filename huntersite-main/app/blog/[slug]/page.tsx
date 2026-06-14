"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FadeInUp } from "@/components/motion-wrappers"

const posts: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  "ai-receptionists-revolutionizing-trades": {
    title: "How AI Receptionists Are Revolutionising Trades Businesses",
    date: "February 10, 2026",
    readTime: "5 min read",
    category: "Industry",
    content: `
      <p>For trades businesses, every missed call is a missed job. When you are up a ladder or under a sink, answering the phone is not always possible. But the customer on the other end does not know that. They just know nobody picked up, and they move on to the next tradesperson on their list.</p>
      <h2>The Multi-Call Problem</h2>
      <p>During peak seasons, trades businesses can receive dozens of calls per hour. A single human receptionist can only handle one call at a time, leading to busy signals and voicemail. With an AI receptionist like Front Desk Agent, every call is answered simultaneously. Whether it is 5 calls or 50, each caller gets immediate, professional attention.</p>
      <h2>Smart Booking Reminders</h2>
      <p>No-shows cost trades businesses thousands of dollars each year. Front Desk Agent automatically sends SMS reminders when appointments are booked and again before they are due, dramatically reducing no-show rates and keeping your schedule full.</p>
      <h2>24/7 Availability</h2>
      <p>Emergencies do not wait for business hours. A burst pipe at 11 PM or a power outage at 3 AM means someone needs help now. With Front Desk Agent, your business is always reachable, always professional, and always ready to book the next job.</p>
      <h2>The Bottom Line</h2>
      <p>AI receptionists are not replacing your team. They are augmenting it. By handling the phones, booking appointments, and sending reminders, Front Desk Agent frees your team to focus on what they do best: delivering excellent service on the job.</p>
    `,
  },
  "never-miss-a-call-again": {
    title: "Why Missing Calls Costs More Than You Think",
    date: "February 5, 2026",
    readTime: "4 min read",
    category: "Business",
    content: `
      <p>Studies consistently show that 80% of callers who reach voicemail do not leave a message. That means for every 10 missed calls, 8 potential customers are lost forever. For small businesses, that can mean thousands in lost revenue each month.</p>
      <h2>The Real Cost</h2>
      <p>Consider a trades business where the average job is worth $500. If they miss just 5 calls per day and 80% of those callers never call back, that is 4 lost customers per day, or $2,000 in potential revenue. Over a month, that is $40,000 left on the table.</p>
      <h2>Why Voicemail Doesn't Work</h2>
      <p>Customers today expect instant responses. With so many options available, they will simply call the next business on the list rather than wait for a callback. Voicemail is no longer a safety net — it is a missed opportunity.</p>
      <h2>The Solution</h2>
      <p>An AI receptionist ensures every single call is answered, every time. No busy signals, no voicemail, no missed opportunities. Front Desk Agent handles it all so you can focus on your work while never losing another customer to a competitor.</p>
    `,
  },
  "multilingual-customer-support": {
    title: "Breaking Language Barriers with AI",
    date: "January 28, 2026",
    readTime: "3 min read",
    category: "Features",
    content: `
      <p>In today's globalised world, your customers speak many languages. With support for over 30 languages, Front Desk Agent ensures every caller feels understood and valued, no matter what language they speak.</p>
      <h2>Native-Level Fluency</h2>
      <p>Our AI does not just translate words. It understands idioms, cultural nuances, and conversation context in each language. Callers interact with a receptionist that truly speaks their language.</p>
      <h2>Automatic Detection</h2>
      <p>Front Desk Agent automatically detects the caller's language and switches seamlessly, without the caller having to press any buttons or make any selections. The experience is natural and effortless.</p>
      <h2>A Competitive Advantage</h2>
      <p>In diverse markets like New Zealand, being able to serve customers in their native language is a genuine differentiator. It builds trust, reduces miscommunication, and creates a better experience for every caller.</p>
    `,
  },
  "ai-receptionist-for-medical-practices": {
    title: "Why Medical Practices Are Switching to AI Reception",
    date: "January 20, 2026",
    readTime: "5 min read",
    category: "Industry",
    content: `
      <p>Medical practices face a unique challenge: high call volumes, sensitive conversations, and the constant pressure of appointment management. Front desk staff are often overwhelmed, leading to long hold times and frustrated patients.</p>
      <h2>The Appointment No-Show Problem</h2>
      <p>No-shows cost medical practices significant revenue and waste valuable appointment slots. Front Desk Agent sends automated reminders via SMS before every appointment, dramatically reducing no-show rates and keeping schedules full.</p>
      <h2>After-Hours Call Handling</h2>
      <p>Patient needs don't stop at 5pm. With AI reception, patients can call at any hour to book appointments, ask about services, or get directed to emergency services when needed — all without requiring staff to be on call.</p>
      <h2>Seamless Integration</h2>
      <p>Front Desk Agent integrates with your existing practice management software and calendar. Appointments are booked directly into your system, with full details captured and no double-handling required.</p>
      <h2>Privacy and Compliance</h2>
      <p>All call data is encrypted in transit and at rest. We never use your data to train our models. Your patient information remains completely private and secure at all times.</p>
    `,
  },
  "how-ai-handles-difficult-calls": {
    title: "How Front Desk Agent Handles Difficult Callers",
    date: "January 14, 2026",
    readTime: "4 min read",
    category: "Features",
    content: `
      <p>Not every caller is calm and cooperative. Frustrated customers, confused elderly callers, and people in distress all require a different kind of handling. Here is how Front Desk Agent manages even the most challenging interactions.</p>
      <h2>Real-Time Sentiment Analysis</h2>
      <p>Front Desk Agent analyses tone, pace, and language in real time to detect when a caller is frustrated, confused, or upset. It adjusts its responses accordingly — slowing down, using simpler language, or escalating to a human team member when needed.</p>
      <h2>Graceful Escalation</h2>
      <p>When a call needs a human touch, Front Desk Agent transfers the call seamlessly with full context already captured. The human team member knows exactly who is calling, why they called, and what has already been discussed — no frustrating repetition for the caller.</p>
      <h2>Consistent Professionalism</h2>
      <p>Unlike a human receptionist who might have a bad day, Front Desk Agent is consistently calm, professional, and helpful on every single call. Your business always makes a great first impression.</p>
    `,
  },
  "roi-of-ai-receptionist": {
    title: "The ROI of an AI Receptionist: A Real Numbers Breakdown",
    date: "January 7, 2026",
    readTime: "6 min read",
    category: "Business",
    content: `
      <p>When businesses consider hiring an AI receptionist, the first question is always: does it actually pay for itself? The short answer is yes — often within the first month. Here is a breakdown of the real numbers.</p>
      <h2>The Cost of Missed Calls</h2>
      <p>If your average job or sale is worth $300 and you miss 3 calls per day, that is potentially $900 in lost revenue daily. Over a month, that is $18,000 — far more than the cost of any subscription plan.</p>
      <h2>Comparing to a Human Receptionist</h2>
      <p>A full-time receptionist in New Zealand costs between $45,000 and $60,000 per year in salary alone, plus leave, training, and recruitment costs. Front Desk Agent starts at $199 per month — that is under $2,400 per year for 24/7 coverage.</p>
      <h2>The Hidden Savings</h2>
      <p>Beyond direct revenue, consider the time saved by your team not having to answer routine calls, the reduction in no-shows from automated reminders, and the ability to scale without adding headcount during busy periods.</p>
      <h2>The Verdict</h2>
      <p>For most businesses, an AI receptionist pays for itself many times over. The question is not whether you can afford it — it is whether you can afford not to have it.</p>
    `,
  },
}

const categoryColors: Record<string, { bg: string; text: string }> = {
  Industry: { bg: "rgba(107,33,168,0.3)", text: "#C084FC" },
  Business: { bg: "rgba(34,211,238,0.15)", text: "#67E8F9" },
  Features: { bg: "rgba(107,33,168,0.2)", text: "#A855F7" },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const post = posts[slug]

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
            <Link href="/blog" className="font-light transition-colors hover:text-white" style={{ color: "#A855F7" }}>
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#1A1A1F" }}>
      <Navbar />

      {/* Hero banner */}
      <div
        className="pt-32 pb-16 px-6 relative overflow-hidden"
        style={{ background: "linear-gradient(180deg, rgba(107,33,168,0.15) 0%, transparent 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <FadeInUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-light mb-8 transition-colors hover:text-white"
              style={{ color: "#A855F7" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ color: categoryColors[post.category].text, backgroundColor: categoryColors[post.category].bg }}
              >
                {post.category}
              </span>
              <span className="text-xs text-white/30 font-light">{post.date}</span>
              <span className="text-xs text-white/20">|</span>
              <span className="text-xs text-white/30 font-light">{post.readTime}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tighter leading-tight">
              {post.title}
            </h1>
          </FadeInUp>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-3xl mx-auto w-full px-6">
        <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, rgba(168,85,247,0.3), transparent)" }} />
      </div>

      {/* Content */}
      <article className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInUp delay={0.1}>
            <div
              className="
                [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:tracking-tight
                [&_h2]:border-l-2 [&_h2]:border-purple-500 [&_h2]:pl-4
                [&_p]:text-white/55 [&_p]:font-light [&_p]:leading-relaxed [&_p]:mb-6 [&_p]:text-lg
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </FadeInUp>

          {/* Bottom CTA */}
          <FadeInUp delay={0.2}>
            <div
              className="mt-16 rounded-2xl p-8 text-center"
              style={{
                backgroundColor: "rgba(107,33,168,0.12)",
                border: "1px solid rgba(168,85,247,0.2)",
              }}
            >
              <p className="text-white font-medium text-lg mb-2">Ready to never miss a call again?</p>
              <p className="text-white/40 font-light text-sm mb-6">Start your 14-day free trial. No credit card required.</p>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-3.5 text-sm font-medium text-white rounded-lg uppercase tracking-widest transition-all hover:brightness-110"
                  style={{ backgroundColor: "#6B21A8" }}
                >
                  Get Your Free Trial
                </Link>
              </motion.div>
            </div>
          </FadeInUp>
        </div>
      </article>

      <Footer />
    </div>
  )
}