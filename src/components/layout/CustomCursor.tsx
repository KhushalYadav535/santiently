"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      // Check for clickable / interactive elements and contextual labels
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer") ||
          target.classList.contains("cursor-grab");

        setIsPointer(!!isClickable);

        // Find nearest element with data-cursor-label
        const labeledElem = target.closest("[data-cursor-label]") as HTMLElement | null;
        if (labeledElem) {
          setCursorLabel(labeledElem.getAttribute("data-cursor-label"));
        } else {
          setCursorLabel(null);
        }
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    // Smooth Lerp Render Loop
    const render = () => {
      // 0.18 lerp interpolation for silky smooth trailing
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* 1. Smooth Spring Trailing Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/35 pointer-events-none transition-[width,height,background-color] duration-200 ease-out flex items-center justify-center"
        style={{
          width: cursorLabel ? "100px" : isPointer ? "48px" : "28px",
          height: cursorLabel ? "34px" : isPointer ? "48px" : "28px",
          borderRadius: cursorLabel ? "9999px" : "9999px",
          backgroundColor: cursorLabel
            ? "rgba(17, 24, 39, 0.85)"
            : isPointer
            ? "rgba(37, 99, 235, 0.08)"
            : "transparent",
          backdropFilter: cursorLabel ? "blur(8px)" : "none",
          borderColor: cursorLabel ? "rgba(255, 255, 255, 0.2)" : "rgba(37, 99, 235, 0.35)",
        }}
      >
        {cursorLabel && (
          <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase px-2 select-none">
            {cursorLabel}
          </span>
        )}
      </div>

      {/* 2. Precision Center Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 pointer-events-none shadow-xs shadow-blue-500/50 transition-[opacity] duration-150"
        style={{
          width: cursorLabel ? "0px" : isPointer ? "6px" : "4px",
          height: cursorLabel ? "0px" : isPointer ? "6px" : "4px",
          opacity: cursorLabel ? 0 : 1,
        }}
      />
    </div>
  );
}
