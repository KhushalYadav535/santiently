"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Volume2, VolumeX, Menu, X, ArrowUpRight, FlaskConical } from "lucide-react";
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
    { name: "Experiments", href: "/#products" },
    { name: "Spotlight", href: "/#vocred" },
    { name: "Architecture", href: "/#architecture" },
    { name: "The Lab", href: "/lab" },
    { name: "Pipeline", href: "/#engine" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-reveal-1 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-gray-200/90 shadow-sm py-3"
          : "bg-white/60 backdrop-blur-md py-4 border-b border-gray-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - Google Labs Inspired */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            onMouseEnter={() => soundFX.playHover()}
            onClick={() => soundFX.playClick()}
          >
            <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 p-[1px] shadow-sm transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-white rounded-[11px] flex items-center justify-center">
                <FlaskConical className="w-4 h-4 text-blue-600 group-hover:text-purple-600 transition-colors" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-blue-500 ring-2 ring-white" />
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-base font-bold tracking-tight text-neutral-900 font-sans">
                Sentiently
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200/70 tracking-tight">
                <Sparkles className="w-2.5 h-2.5 text-blue-600" />
                Labs
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-gray-100/90 border border-gray-200/70 rounded-full px-2 py-1 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium tracking-tight rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-neutral-900 bg-white shadow-xs font-semibold"
                      : "text-neutral-600 hover:text-neutral-900 hover:bg-white/60"
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
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Audio Feedback Toggle */}
            <button
              onClick={toggleAudio}
              className={`px-2.5 py-1.5 rounded-full border transition-all text-xs flex items-center gap-1.5 ${
                audioActive
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-white border-gray-200 text-neutral-600 hover:bg-gray-50 hover:text-neutral-900"
              }`}
              title={audioActive ? "Mute interactive audio" : "Enable futuristic sound cues"}
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
                  <span className="text-[11px] font-mono font-medium">SFX ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[11px] font-mono">SFX</span>
                </>
              )}
            </button>

            {/* Google Labs Style Dark Pill CTA */}
            <Link
              href="/lab"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 hover:bg-black text-white shadow-xs transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              onMouseEnter={() => soundFX.playHover()}
              onClick={() => soundFX.playClick()}
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Explore Lab</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleAudio}
              className="p-2 text-neutral-600 hover:text-neutral-900"
              aria-label="Toggle SFX"
            >
              {audioActive ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-neutral-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-gray-200 px-6 py-6 space-y-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-neutral-900 py-2 border-b border-gray-100"
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
              className="w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-full bg-neutral-900 text-white text-xs font-semibold shadow-xs"
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(false);
              }}
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              Explore The Sentiently Lab
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
