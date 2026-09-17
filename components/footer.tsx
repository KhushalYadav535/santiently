"use client"

import React from "react"
import { ArrowRight, Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#050419] text-[#FCFCFC] pt-16 pb-12 px-6 sm:px-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Vectr Signature 3-Nav Large Button Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <a
            href="#platforms"
            className="group relative flex items-center justify-between p-8 sm:p-10 rounded-3xl bg-[#0F132E] hover:bg-[#0F32DC] border border-white/10 transition-all duration-300"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 block mb-2">
                01 / Explore
              </span>
              <span className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Our Platforms
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>

          <a
            href="#architecture"
            className="group relative flex items-center justify-between p-8 sm:p-10 rounded-3xl bg-[#0F132E] hover:bg-[#0F32DC] border border-white/10 transition-all duration-300"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 block mb-2">
                02 / Technology
              </span>
              <span className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Our Architecture
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>

          <a
            href="#contact"
            className="group relative flex items-center justify-between p-8 sm:p-10 rounded-3xl bg-[#0F132E] hover:bg-[#0F32DC] border border-white/10 transition-all duration-300"
          >
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/50 block mb-2">
                03 / Deployment
              </span>
              <span className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Request Demo
              </span>
            </div>
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:translate-x-2 transition-transform duration-300">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* Vectr Signature Giant Brand Wordmark across the base */}
        <div className="py-12 border-t border-b border-white/10 my-8 text-center select-none overflow-hidden max-w-full">
          <h1 className="text-[clamp(40px,11vw,150px)] font-black tracking-[-0.05em] text-white/90 leading-none uppercase font-sans hover:text-[#0F32DC] transition-colors duration-500 max-w-full overflow-hidden">
            SANTIENTLY
          </h1>
        </div>

        {/* Minimal Meta Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50 pt-4">
          <p className="font-mono tracking-wide">
            © 2026 Santiently Innovations LLP. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#platforms" className="hover:text-white transition-colors">
              CredibilityCRM
            </a>
            <a href="#platforms" className="hover:text-white transition-colors">
              AI-Native HRMS
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
