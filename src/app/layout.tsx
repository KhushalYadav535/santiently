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
  title: "Sentiently Labs | AI Experiments & Native Systems",
  description: "Where AI experiments take shape. Sentiently Innovations is an AI-native incubator and engineering company building intelligent systems across voice, multimodal documents, enterprise workflows, and finance.",
  keywords: ["AI Voice Agents", "VoCred", "TextMitra", "Document AI", "AI-Native HRMS", "Trading Intelligence", "Sentiently Labs", "Autonomous AI Agents", "Google Labs"],
  authors: [{ name: "Sentiently Innovations" }],
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      className={`${geistSans.variable} ${geistMono.variable} light h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f9fa] text-[#111827]">
        {children}
      </body>
    </html>
  );
}
