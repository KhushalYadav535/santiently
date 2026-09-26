import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Space_Grotesk, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono2 = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const serifIt = Instrument_Serif({
  variable: "--font-serifit",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Santiently Innovation — AI-Native Invention Lab",
  description: "We don't build apps. We birth intelligence. Santiently Innovation is an AI-native invention lab engineering voice, vision, quant and swarm systems into deterministic enterprise reality.",
  keywords: ["AI Native", "AI Invention Lab", "VoCred", "TextMitra", "Voice AI", "Document AI", "Autonomous Agents", "Santiently Innovation"],
  authors: [{ name: "Santiently Innovation" }],
  openGraph: {
    title: "Santiently Innovation — Machines That Think",
    description: "An AI-native invention lab. Voice. Vision. Quant. Swarms.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${mono2.variable} ${serifIt.variable} light h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f4f2ed] text-[#0b0b0f]">
        {children}
      </body>
    </html>
  );
}
