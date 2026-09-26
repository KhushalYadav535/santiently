"use client";

import React from "react";
import SplashScreen from "@/components/layout/SplashScreen";
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
    <div className="relative min-h-screen bg-[#f8f9fa] text-[#111827] overflow-x-hidden selection:bg-blue-500/20 selection:text-blue-900">
      {/* Splash Screen - Google Labs Intro */}
      <SplashScreen />

      {/* Dynamic Cursor */}
      <CustomCursor />

      {/* Floating Glassmorphism Navbar - Google Labs */}
      <Navbar />

      {/* Hero with Living Neural Canvas */}
      <div className="relative">
        <HeroCanvas />
        <HeroSection />
      </div>

      {/* Flagship VoCred Interactive Voice Spotlight */}
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

      {/* Google Labs Style Light Footer */}
      <Footer />
    </div>
  );
}
