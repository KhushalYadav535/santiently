"use client"

import { useState, useEffect } from "react"
import { SantientlyLogo } from "./santiently-logo"
import { Menu, X, ArrowRight } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 20)

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false)
        setMobileMenuOpen(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full max-w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
        ${
          isScrolled
            ? "bg-[#D0E1EB]/90 backdrop-blur-xl border-b border-[#050419]/10 shadow-xs"
            : "bg-transparent"
        }
      `}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative box-border">
        {/* Left Navigation (Vectr Style) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-7 shrink-0">
          <a
            href="#platforms"
            className="text-[11.5px] xl:text-xs font-semibold uppercase tracking-[0.72px] text-[#050419] hover:text-[#0F32DC] transition-colors duration-200"
          >
            Platforms
          </a>
          <a
            href="#process"
            className="text-[11.5px] xl:text-xs font-semibold uppercase tracking-[0.72px] text-[#050419] hover:text-[#0F32DC] transition-colors duration-200"
          >
            Process
          </a>
          <a
            href="#architecture"
            className="text-[11.5px] xl:text-xs font-semibold uppercase tracking-[0.72px] text-[#050419] hover:text-[#0F32DC] transition-colors duration-200"
          >
            Architecture
          </a>
          <a
            href="#outcomes"
            className="text-[11.5px] xl:text-xs font-semibold uppercase tracking-[0.72px] text-[#050419] hover:text-[#0F32DC] transition-colors duration-200"
          >
            Outcomes
          </a>
          <a
            href="#faq"
            className="text-[11.5px] xl:text-xs font-semibold uppercase tracking-[0.72px] text-[#050419] hover:text-[#0F32DC] transition-colors duration-200"
          >
            FAQ
          </a>
        </nav>

        {/* Center Architectural Brand (Vectr Style) */}
        <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 shrink-0">
          <a href="#home" className="flex items-center gap-2 group">
            <SantientlyLogo />
          </a>
        </div>

        {/* Right Action CTAs (Vectr Signature Pill Buttons) */}
        <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 shrink-0">
          <a href="#platforms" className="pill-btn pill-btn--glass h-10 px-4 xl:px-5 text-[11px] xl:text-xs font-semibold">
            <span className="pill-btn-span">Explore</span>
          </a>
          <a href="#contact" className="pill-btn pill-btn--dark h-10 px-4 xl:px-5 text-[11px] xl:text-xs font-semibold">
            <span className="pill-btn-span">Request Demo</span>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#050419] hover:text-[#0F32DC] transition-colors shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#D0E1EB] border-b border-[#050419]/10 px-6 py-8 space-y-4 shadow-xl">
          <a
            href="#platforms"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#050419] hover:text-[#0F32DC] py-2 border-b border-[#050419]/5"
          >
            Platforms
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#050419] hover:text-[#0F32DC] py-2 border-b border-[#050419]/5"
          >
            Process
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#050419] hover:text-[#0F32DC] py-2 border-b border-[#050419]/5"
          >
            Architecture
          </a>
          <a
            href="#outcomes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#050419] hover:text-[#0F32DC] py-2 border-b border-[#050419]/5"
          >
            Outcomes
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#050419] hover:text-[#0F32DC] py-2 border-b border-[#050419]/5"
          >
            FAQ
          </a>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="pill-btn pill-btn--dark w-full text-center"
            >
              <span className="pill-btn-span">Request Demo</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
