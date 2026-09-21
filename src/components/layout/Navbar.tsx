"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Volume2, VolumeX, Menu, X, ArrowUpRight, Cpu } from "lucide-react";
import { soundFX } from "@/utils/audio";

export default function Navbar() {
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = () => {
    const nextState = !audioActive;
    setAudioActive(nextState);
    soundFX.enabled = nextState;
    if (nextState) {
      soundFX.playPulse();
    }
  };

  const navLinks = [
    { name: "Products", href: "/#products" },
    { name: "Architecture", href: "/#architecture" },
    { name: "The Lab", href: "/lab" },
    { name: "Engine", href: "/#engine" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050507]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
          >
            <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 p-[1px] shadow-lg shadow-purple-500/25 transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-[#07080f] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-base font-bold tracking-wider text-white flex items-center gap-1.5 font-mono">
                SENTIENTLY
                <span className="text-xs px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 font-sans tracking-normal">
                  INNOVATIONS
                </span>
              </span>
              <span className="text-[10px] text-zinc-400 tracking-widest uppercase -mt-0.5">
                AI-Native Product Company
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-white/10 shadow-sm"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                  onMouseEnter={() => soundFX.playHover()}
                  onClick={() => soundFX.playClick()}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-lg border transition-all text-xs flex items-center gap-1.5 ${
                audioActive
                  ? "bg-purple-500/20 border-purple-500/40 text-purple-300"
                  : "bg-white/[0.02] border-white/10 text-zinc-400 hover:text-zinc-200"
              }`}
              title={audioActive ? "Mute interactive audio" : "Enable futuristic sound cues"}
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-purple-400 animate-pulse" />
                  <span className="text-[11px] font-mono">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="text-[11px] font-mono">SFX</span>
                </>
              )}
            </button>

            {/* Lab Quick CTA */}
            <Link
              href="/lab"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-lg shadow-purple-600/20 border border-purple-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Enter The Lab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleAudio}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Toggle SFX"
            >
              {audioActive ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b12]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-white py-1 border-b border-white/5"
                onClick={() => {
                  soundFX.playClick();
                  setMobileMenuOpen(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2">
            <Link
              href="/lab"
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 text-white text-xs font-semibold"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
            >
              <Sparkles className="w-4 h-4" />
              Enter The Sentiently Lab
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
