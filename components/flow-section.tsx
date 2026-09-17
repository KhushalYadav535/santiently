"use client"

import React, { useEffect, useState } from "react"

interface FlowStepData {
  num: string
  title: string
  description: string
  startProgress: number
  endProgress: number
}

const steps: FlowStepData[] = [
  {
    num: "01",
    title: "Operational Efficiency",
    description:
      "Automate repetitive workflows and eliminate manual bottlenecks. Scale operations seamlessly without proportional headcount increases.",
    startProgress: 0.0,
    endProgress: 0.25,
  },
  {
    num: "02",
    title: "Intelligent Communication",
    description:
      "Automate customer engagement across all voice and messaging channels. Reduce response times to sub-second latency and ensure absolute consistency.",
    startProgress: 0.25,
    endProgress: 0.5,
  },
  {
    num: "03",
    title: "Workforce Intelligence",
    description:
      "Gain real-time workforce visibility and identify operational patterns. Empower management with actionable predictive insights and data-driven HR decisions.",
    startProgress: 0.5,
    endProgress: 0.75,
  },
  {
    num: "04",
    title: "Data-Driven Decision Making",
    description:
      "Access actionable insights and track enterprise performance metrics in real time. Eliminate guesswork and make confident, high-value business decisions.",
    startProgress: 0.75,
    endProgress: 1.0,
  },
]

export function FlowSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0)
  const [fills, setFills] = useState<number[]>([0, 0, 0, 0])
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const flowEl = document.querySelector(".flow") as HTMLElement
      const wrapperEl = flowEl?.querySelector(".flow__wrapper") as HTMLElement
      const stickyDist =
        flowEl && wrapperEl
          ? Math.max(flowEl.offsetHeight - wrapperEl.offsetHeight, 1)
          : window.innerHeight * 2.4
      const scrollY = window.scrollY
      const progress = Math.min(Math.max(scrollY / stickyDist, 0), 1)

      setIsVisible(true)

      // Calculate active step evenly across 4 stages
      let currentIdx = 0
      if (progress >= 0.75) currentIdx = 3
      else if (progress >= 0.5) currentIdx = 2
      else if (progress >= 0.25) currentIdx = 1
      else currentIdx = 0

      setActiveStepIndex(currentIdx)

      // Calculate track fill for each step
      const newFills = steps.map((s, idx) => {
        if (idx < currentIdx) return 1
        if (idx > currentIdx) return 0
        const span = s.endProgress - s.startProgress
        const fill = Math.min(Math.max((progress - s.startProgress) / span, 0), 1)
        return fill
      })
      setFills(newFills)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToStep = (index: number) => {
    setActiveStepIndex(index)
    const flowEl = document.querySelector(".flow") as HTMLElement
    const wrapperEl = flowEl?.querySelector(".flow__wrapper") as HTMLElement
    const stickyDist =
      flowEl && wrapperEl
        ? Math.max(flowEl.offsetHeight - wrapperEl.offsetHeight, 1)
        : window.innerHeight * 2.4
    const targetScroll = steps[index].startProgress * stickyDist + 15
    window.scrollTo({ top: targetScroll, behavior: "smooth" })
  }

  return (
    <section id="process" className="flow w-full">
      <div className="flow__wrapper w-full">
        <div
          className="flow__steps transition-opacity duration-500"
          style={{ opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }}
        >
          {steps.map((step, idx) => {
            const isActive = activeStepIndex === idx
            return (
              <div
                key={step.num}
                className={`flow__step ${isActive ? "flow__step--active" : ""}`}
                data-step={idx + 1}
              >
                <div
                  className="flow__header"
                  onClick={() => scrollToStep(idx)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="flow__number">
                    <span>{step.num}</span>
                  </div>
                  <h3 className="flow__title">{step.title}</h3>
                </div>

                <div className="flow__body">
                  <div className="flow__body-inner">
                    <div className="flow__track">
                      <div className="flow__track-bar">
                        <div
                          className="flow__track-fill"
                          style={{
                            transform: `scaleY(${fills[idx]})`,
                            transition: "transform 0.1s linear",
                          }}
                        />
                      </div>
                    </div>
                    <p className="flow__description">{step.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
