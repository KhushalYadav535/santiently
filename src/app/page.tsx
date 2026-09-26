"use client";

import React, { useState } from "react";
import SplashScreen from "@/components/layout/SplashScreen";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HeroCanvas from "@/components/hero/HeroCanvas";
import HeroSection from "@/components/hero/HeroSection";
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

  return (
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#111827] overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900">
      {/* Splash Screen - Google Labs Intro */}
      <SplashScreen />

      {/* Dynamic Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar */}
      <Navbar />

      {/* Light-Theme Spline-Inspired 3D Architectural Hero */}
      <div className="relative bg-[#F8F9FA]">
        <HeroCanvas activeMode={heroMode} />
        <HeroSection activeMode={heroMode} onModeChange={setHeroMode} />
      </div>

      {/* Flagship VoCred Interactive Voice Spotlight */}
      <VocredShowcase />

      {/* Live Interactive Sandbox: VoCred, TextMitra, HRMS, Trading */}
      <LivePlayground />

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

      {/* Google Labs Style Light Footer */}
      <Footer />
    </div>
  );
}
