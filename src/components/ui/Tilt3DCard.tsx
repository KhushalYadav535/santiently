"use client";

import React, { useRef, useState, useCallback } from "react";

interface Tilt3DCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // max tilt rotation in degrees
  scale?: number; // hover scale
  glareOpacity?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export default function Tilt3DCard({
  children,
  className = "",
  maxTilt = 8,
  scale = 1.02,
  glareOpacity = 0.15,
  onClick,
  onMouseEnter,
}: Tilt3DCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState<string>("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
  const [glarePos, setGlarePos] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      const percentX = (clientX / rect.width) * 100;
      const percentY = (clientY / rect.height) * 100;

      // Calculate tilt angles (inverting X for natural tilt)
      const rotateX = ((rect.height / 2 - clientY) / (rect.height / 2)) * maxTilt;
      const rotateY = ((clientX - rect.width / 2) / (rect.width / 2)) * maxTilt;

      setTransform(
        `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
      );

      setGlarePos({
        x: percentX,
        y: percentY,
        opacity: glareOpacity,
      });
    },
    [maxTilt, scale, glareOpacity]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (onMouseEnter) onMouseEnter();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-transform ease-out will-change-transform ${className}`}
      style={{
        transform,
        transitionDuration: isHovered ? "120ms" : "500ms",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Specular Radial Glare Highlight */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 280px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, ${glarePos.opacity}), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}
