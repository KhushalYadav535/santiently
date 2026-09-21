"use client";

import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch desktop devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("cursor-pointer");

        setIsPointer(!!isClickable);
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden transition-opacity duration-300">
      {/* Outer fluid halo */}
      <div
        className="fixed rounded-full border border-purple-400/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isPointer ? "42px" : "24px",
          height: isPointer ? "42px" : "24px",
          backgroundColor: isPointer ? "rgba(168, 85, 247, 0.1)" : "transparent",
        }}
      />
      {/* Center glowing dot */}
      <div
        className="fixed rounded-full bg-cyan-400 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-sm shadow-cyan-400/80"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: isPointer ? "6px" : "4px",
          height: isPointer ? "6px" : "4px",
        }}
      />
    </div>
  );
}
