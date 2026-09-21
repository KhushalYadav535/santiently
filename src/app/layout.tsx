import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sentiently Innovations | AI-Native Product Company",
  description: "We build products that think. Sentiently Innovations is an AI-native product company building intelligent systems across voice, enterprise software, automation, and finance.",
  keywords: ["AI Voice Agents", "VoCred", "TextMitra", "Document AI", "AI-Native HRMS", "Trading Intelligence", "Sentiently Innovations", "Autonomous AI Agents"],
  authors: [{ name: "Sentiently Innovations" }],
};

export const viewport: Viewport = {
  themeColor: "#050507",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#050507] text-[#f4f4f5]">
        {children}
      </body>
    </html>
  );
}
