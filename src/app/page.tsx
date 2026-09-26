"use client";

import React, { useState } from "react";
import Preloader from "@/components/awwwards/Preloader";
import SmoothScroll from "@/components/awwwards/SmoothScroll";
import Marquee from "@/components/awwwards/Marquee";
import Manifesto from "@/components/awwwards/Manifesto";
import InventionIndex from "@/components/awwwards/InventionIndex";
import SectionHeading from "@/components/awwwards/SectionHeading";
import { FadeUp } from "@/components/awwwards/Reveal";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HeroCanvas from "@/components/hero/HeroCanvas";
import AwwwardsHero from "@/components/hero/AwwwardsHero";
import { InventionMode } from "@/types/hero";
import VocredShowcase from "@/components/products/VocredShowcase";
import LivePlayground from "@/components/playground/LivePlayground";
import ProductUniverse from "@/components/products/ProductUniverse";
import IntelligenceStack from "@/components/architecture/IntelligenceStack";
import PerceiveReasonAct from "@/components/architecture/PerceiveReasonAct";
import LabGallery from "@/components/lab/LabGallery";
import ProductEngine from "@/components/engine/ProductEngine";
import ContactSection from "@/components/common/ContactSection";

export default function Home() {
  const [heroMode, setHeroMode] = useState<InventionMode>("ACOUSTIC");
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#f4f2ed] text-[#0b0b0f] overflow-x-clip">
      <Preloader onDone={() => setBooted(true)} />

      <SmoothScroll>
        <div className="noise-overlay" />
        <CustomCursor />
        <Navbar />

        {/* ── HERO PAPER ── */}
        <div className="relative">
          <HeroCanvas activeMode={heroMode} />
          <AwwwardsHero activeMode={heroMode} onModeChange={setHeroMode} started={booted} />
        </div>

        {/* ── MARQUEE DIVIDER ── */}
        <div className="border-y border-black/10 py-5 bg-[#f4f2ed]">
          <Marquee
            items={["AI-Native", "Voice Kernels", "Spatial OCR", "Quant Engines", "Agent Swarms"]}
            outline
          />
        </div>

        {/* ── MANIFESTO + INDEX ── */}
        <Manifesto />
        <InventionIndex />

        {/* ── INTERACTIVE PROOF ── */}
        <section className="px-5 sm:px-10 max-w-[1600px] mx-auto pt-10 pb-6">
          <SectionHeading
            index="03"
            label="Live proof"
            title={
              <>
                <span>Don&apos;t believe.</span>
                <span className="text-stroke">Interrogate.</span>
              </>
            }
            accent="Every kernel below is runnable — speak to the voice engine, scan a ledger, shock the quant feed. No videos. No mocks."
          />
        </section>

        <main className="relative">
          <VocredShowcase />
          <LivePlayground />
          <ProductUniverse />
          <IntelligenceStack />
          <PerceiveReasonAct />
          <LabGallery />
          <ProductEngine />
          <ContactSection />
        </main>

        {/* ── OUTRO LINE ── */}
        <div className="px-5 sm:px-10 max-w-[1600px] mx-auto py-20">
          <FadeUp>
            <p className="font-jbmono text-[11px] tracking-[0.3em] uppercase text-black/35 text-center">
              End of transmission — <span className="text-[#4d7c0f] font-bold">begin your build</span>
            </p>
          </FadeUp>
        </div>

        <Footer />
      </SmoothScroll>
    </div>
  );
}
