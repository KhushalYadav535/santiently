import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Santiently Innovations | Engineering Intelligent Enterprise Systems",
  description: "We build AI-native platforms that automate communication, optimize workforce operations, and transform enterprise workflows.",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`font-sans ${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} bg-[#D0E1EB] text-[#050419] antialiased selection:bg-[#0F32DC] selection:text-white relative`}>
        {children}
      </body>
    </html>
  )
}
