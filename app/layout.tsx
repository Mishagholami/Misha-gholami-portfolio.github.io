import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Misha Gholami - UX Designer & Researcher",
  description:
    "Creative UX Designer and Researcher crafting meaningful digital experiences through user-centered design and research.",
  keywords: "UX Designer, UI Designer, User Research, Product Design, Vancouver",
  authors: [{ name: "Misha Gholami" }],
  creator: "Misha Gholami",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mishagholami.com",
    title: "Misha Gholami - UX Designer & Researcher",
    description: "Creative UX Designer and Researcher crafting meaningful digital experiences",
    siteName: "Misha Gholami Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Misha Gholami - UX Designer & Researcher",
    description: "Creative UX Designer and Researcher crafting meaningful digital experiences",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
