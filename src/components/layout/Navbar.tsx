"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X, FlaskConical } from "lucide-react";
import Magnetic from "@/components/awwwards/Magnetic";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [time, setTime] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false })
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { name: "Index", href: "/#index" },
    { name: "Manifesto", href: "/#manifesto" },
    { name: "Sandbox", href: "/#playground" },
    { name: "Lab", href: "/lab" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] bg-gradient-to-b from-[#f4f2ed]/90 via-[#f4f2ed]/50 to-transparent pb-4">
        <div
          className={`mx-auto flex items-center justify-between px-5 sm:px-8 transition-all duration-500 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 group" data-cursor-label="HOME">
            <div className="w-9 h-9 rounded-xl bg-[#0b0b0f] flex items-center justify-center shadow-[0_8px_24px_rgba(11,11,15,0.25)] group-hover:rotate-12 transition-transform duration-300">
              <FlaskConical className="w-5 h-5 text-[#d8ff3e]" />
            </div>
            <div className="leading-none">
              <p className="font-display font-bold tracking-tight text-[15px] text-[#0b0b0f]">
                Santiently<sup className="text-[#4d7c0f] text-[10px] ml-0.5">®</sup>
              </p>
              <p className="font-jbmono text-[9px] tracking-[0.3em] uppercase text-black/40">
                AI-Native Lab
              </p>
            </div>
          </Link>

          {/* Center dock */}
          <nav
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-500 ${
              scrolled
                ? "bg-white/70 border border-black/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(11,11,15,0.12)]"
                : "bg-transparent border border-transparent"
            }`}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 text-[12px] font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[#d8ff3e] bg-[#0b0b0f]"
                      : "text-black/55 hover:text-black hover:bg-black/[0.06]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="hidden sm:flex items-center gap-4">
            <span className="font-jbmono text-[11px] text-black/35 tabular-nums hidden lg:block">
              IND — {time}
            </span>
            <Magnetic>
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-1.5 pl-5 pr-2 py-2 rounded-full text-[12px] font-bold bg-[#0b0b0f] text-[#f4f2ed] hover:bg-[#4d7c0f] hover:text-white transition-colors duration-300"
              >
                <span>Start a project</span>
                <span className="w-7 h-7 rounded-full bg-[#d8ff3e] text-black flex items-center justify-center">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </Magnetic>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-black/[0.05] border border-black/10 flex items-center justify-center text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Scroll spine — lime progress hairline */}
        <div className="mx-5 sm:mx-8 h-[2px] rounded-full bg-black/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#4d7c0f] via-[#4d7c0f] to-[#6d28d9] transition-[width] duration-100"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Mobile drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mx-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 p-6 space-y-1 shadow-2xl">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-3 border-b border-black/[0.07] font-display text-2xl font-bold tracking-tight text-black/90"
              >
                <span>{link.name}</span>
                <span className="font-jbmono text-[10px] text-[#4d7c0f]">0{i + 1}</span>
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-[#0b0b0f] text-[#d8ff3e] text-sm font-bold"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
