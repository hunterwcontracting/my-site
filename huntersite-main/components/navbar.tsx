"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div
          className="mx-0 flex items-center justify-between px-8 py-4 border-b transition-all duration-500"
          style={{
            backgroundColor: scrolled ? "rgba(26,26,31,0.97)" : "rgba(26,26,31,0.7)",
            borderColor: scrolled ? "rgba(168,85,247,0.15)" : "rgba(255,255,255,0.06)",
            backdropFilter: "blur(20px)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -5 }}
              transition={{ duration: 0.3 }}
              className="h-10 w-10 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: "#1A1A1F" }}
            >
              <Image
                src="/iconsimple.png"
                alt="Front Desk Agent Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </motion.div>
            <span
              className="text-white text-lg tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              FRONT DESK
              <span style={{ color: "#A855F7" }}> AGENT</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="relative"
                >
                  <Link
                    href={link.href}
                    className="relative text-xs tracking-widest uppercase transition-colors"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 700,
                      color: isActive ? "#A855F7" : "rgba(255,255,255,0.6)",
                    }}
                    onMouseEnter={e => { if (!isActive) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.9)" }}
                    onMouseLeave={e => { if (!isActive) (e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)" }}
                  >
                    {link.label}
                    {/* Active underline */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-px"
                        style={{ background: "linear-gradient(90deg, #A855F7, #22D3EE)" }}
                      />
                    )}
                  </Link>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="relative px-6 py-2.5 text-xs text-white overflow-hidden group"
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  backgroundColor: "#6B21A8",
                  clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                }}
              >
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", skewX: "-20deg" }}
                />
                Free Trial
              </Link>
            </motion.div>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                className="block h-px bg-white"
                style={{ width: i === 1 ? "20px" : "28px" }}
                whileHover={{ width: "28px" }}
              />
            ))}
          </button>
        </div>

        {/* Animated bottom border line */}
        <motion.div
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="h-px origin-left"
          style={{ background: "linear-gradient(90deg, #6B21A8, #22D3EE, transparent)" }}
        />
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[99]"
              style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[100] w-80 flex flex-col"
              style={{ backgroundColor: "#13131A", borderLeft: "1px solid rgba(168,85,247,0.2)" }}
            >
              {/* Top accent */}
              <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #A855F7, #22D3EE)" }} />

              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <span className="text-white text-sm" style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, letterSpacing: "0.1em" }}>
                  MENU
                </span>
                <motion.button
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.06, ease: "easeOut" }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-4 border-b border-white/5 group"
                      >
                        <span
                          className="text-sm tracking-widest uppercase transition-colors"
                          style={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 700,
                            color: isActive ? "white" : "rgba(255,255,255,0.4)",
                          }}
                        >
                          {link.label}
                        </span>
                        <motion.svg
                          width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke={isActive ? "#A855F7" : "rgba(255,255,255,0.2)"}
                          strokeWidth="2"
                          animate={{ x: 0 }}
                          whileHover={{ x: 4 }}
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </motion.svg>
                      </Link>
                    </motion.div>
                  )
                })}
              </nav>

              <div className="p-6 border-t border-white/10">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3.5 text-xs text-white uppercase tracking-widest mb-4"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 700,
                    backgroundColor: "#6B21A8",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  Free Trial
                </Link>
                <p className="text-white/25 text-xs font-light text-center">020 4019 5202</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}