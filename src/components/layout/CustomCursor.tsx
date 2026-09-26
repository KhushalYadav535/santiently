"use client";

import React, { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let scale = 1;
    let targetScale = 1;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button";

        setIsPointer(!!isClickable);

        const labeledElem = target.closest("[data-cursor-label]") as HTMLElement | null;
        setCursorLabel(labeledElem ? labeledElem.getAttribute("data-cursor-label") : null);
      }
    };

    const onDown = () => {
      targetScale = 0.8;
      setPressed(true);
    };
    const onUp = () => {
      targetScale = 1;
      setPressed(false);
    };
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onMouseLeave);

    const render = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      scale += (targetScale - scale) * 0.2;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%,-50%) scale(${scale})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%,-50%) scale(${scale})`;
      }
      animId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[150] hidden md:block">
      {/* trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none transition-[width,height,background-color,border-color] duration-200 ease-out"
        style={{
          width: cursorLabel ? 104 : isPointer ? 56 : 32,
          height: cursorLabel ? 36 : isPointer ? 56 : 32,
          backgroundColor: cursorLabel ? "#0b0b0f" : isPointer ? "rgba(11,11,15,0.06)" : "transparent",
          border: `1px solid ${cursorLabel ? "#0b0b0f" : "rgba(11,11,15,0.35)"}`,
        }}
      >
        {cursorLabel && (
          <span className="text-[10px] font-jbmono font-bold tracking-widest text-[#d8ff3e] uppercase px-2 select-none whitespace-nowrap">
            {cursorLabel}
          </span>
        )}
      </div>

      {/* center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 rounded-full pointer-events-none bg-[#0b0b0f]"
        style={{
          width: cursorLabel ? 0 : 5,
          height: cursorLabel ? 0 : 5,
          opacity: pressed ? 0.5 : 1,
          boxShadow: "0 0 12px rgba(11,11,15,0.35)",
        }}
      />
    </div>
  );
}
