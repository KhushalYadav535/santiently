"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HeroCanvas from "@/components/hero/HeroCanvas";
import HeroSection from "@/components/hero/HeroSection";
import VocredShowcase from "@/components/products/VocredShowcase";
import ProductUniverse from "@/components/products/ProductUniverse";
import IntelligenceStack from "@/components/architecture/IntelligenceStack";
import PerceiveReasonAct from "@/components/architecture/PerceiveReasonAct";
import LabGallery from "@/components/lab/LabGallery";
import ProductEngine from "@/components/engine/ProductEngine";
import ContactSection from "@/components/common/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050507] text-[#f4f4f5] overflow-x-hidden selection:bg-purple-500/30 selection:text-white">
      {/* Dynamic Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Hero with Living Neural Canvas */}
      <div className="relative">
        <HeroCanvas />
        <HeroSection />
      </div>

      {/* Flagship VoCred Interactive Voice Playground */}
      <VocredShowcase />

      {/* Google Labs Inspired Product Universe */}
      <ProductUniverse />

      {/* AI-Native Architecture & Intelligence Stack */}
      <IntelligenceStack />

      {/* The 3-Pillars: Perceive -> Reason -> Act */}
      <PerceiveReasonAct />

      {/* The Sentiently Lab: Active Experiments & Prototypes */}
      <LabGallery />

      {/* The Sentiently Product Engine: Idea to Scale */}
      <ProductEngine />

      {/* Enterprise Consultation / Contact */}
      <ContactSection />

      {/* Futuristic 2026 Footer */}
      <Footer />
    </div>
  );
}
