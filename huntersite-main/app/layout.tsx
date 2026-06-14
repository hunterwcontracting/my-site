import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["700", "800"],
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "Front Desk Agent | Your 24/7 AI Receptionist",
    template: "%s | Front Desk Agent",
  },
  description: "Front Desk Agent is your AI-powered virtual receptionist. Handle calls, book appointments, send reminders, and delight callers 24/7. Never miss a call again.",
  keywords: [
    "AI receptionist",
    "virtual receptionist",
    "AI front desk",
    "automated call handling",
    "appointment booking",
    "business phone AI",
    "NZ AI receptionist",
    "New Zealand virtual receptionist",
    "24/7 call answering",
    "small business receptionist",
  ],
  authors: [{ name: "Front Desk Agent", url: "https://frontdesk-agent.com" }],
  creator: "Front Desk Agent",
  metadataBase: new URL("https://frontdesk-agent.com"),
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://frontdesk-agent.com",
    siteName: "Front Desk Agent",
    title: "Front Desk Agent | Your 24/7 AI Receptionist",
    description: "Never miss a call again. Front Desk Agent handles calls, books appointments, and delights your callers around the clock.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Front Desk Agent — Your 24/7 AI Receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Front Desk Agent | Your 24/7 AI Receptionist",
    description: "Never miss a call again. Front Desk Agent handles calls, books appointments, and delights your callers around the clock.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1A1A1F",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}