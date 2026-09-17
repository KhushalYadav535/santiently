import { Header } from "@/components/header"
import { Vectr3DScene } from "@/components/vectr-3d-scene"
import { FlowSection } from "@/components/flow-section"
import { PlatformsSection } from "@/components/platforms-section"
import { OutcomesSection } from "@/components/outcomes-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { CompanyAboutSection } from "@/components/company-about-section"
import { VisionSection } from "@/components/vision-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#D0E1EB] text-[#050419] selection:bg-[#0F32DC] selection:text-white font-sans relative">
      {/* Vectr Full-Screen WebGL 3D Interactive Scene */}
      <Vectr3DScene />

      {/* Persistent Minimal Header */}
      <Header />

      <main className="relative z-10">
        {/* Unified Vectr Top Experience: Sticky 4-Step Flow Timeline */}
        <div className="vectr-top relative">
          <FlowSection />
        </div>

        {/* Enterprise Platforms */}
        <PlatformsSection />

        {/* Verified Enterprise Outcomes */}
        <OutcomesSection />

        {/* Technical Architecture */}
        <ArchitectureSection />

        {/* Company & Core Foundations */}
        <CompanyAboutSection />

        {/* Future Vision */}
        <VisionSection />

        {/* Dual-Column Split FAQ */}
        <FaqSection />

        {/* Interactive Platform Demo Console */}
        <DemoSection />
      </main>

      {/* Vectr 3-Card Navigation & Large Wordmark Footer */}
      <Footer />
    </div>
  )
}
