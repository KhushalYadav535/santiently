"use client"

import React, { useEffect, useRef } from "react"

export function VectrGeometry() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none -z-0">
      {/* Outer Elliptical Orbital Ring (Exact Vectr Dimensions: 1500x800) */}
      <svg
        className="absolute w-[1500px] max-w-[130vw] aspect-[1500/800] animate-dash opacity-60"
        viewBox="0 0 1500 800"
        fill="none"
      >
        <ellipse
          cx="750"
          cy="400"
          rx="748"
          ry="398"
          stroke="#585765"
          strokeWidth="1.2"
          strokeDasharray="3 6"
        />
      </svg>

      {/* Inner Elliptical Orbital Ring (Exact Vectr Dimensions: 800x800) */}
      <svg
        className="absolute w-[800px] max-w-[90vw] aspect-square animate-dash-reverse opacity-45"
        viewBox="0 0 800 800"
        fill="none"
      >
        <ellipse
          cx="400"
          cy="400"
          rx="398"
          ry="398"
          stroke="#585765"
          strokeWidth="1"
          strokeDasharray="2 5"
        />
      </svg>

      {/* Center 3D Floating Geometric Core (Vectr Signature Cube Ring & Arrow) */}
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center animate-pulse-glow">
        <svg
          width="120"
          height="120"
          viewBox="0 0 96 96"
          fill="none"
          className="w-24 h-24 sm:w-28 sm:h-28 text-[#0F32DC] transform hover:scale-110 transition-transform duration-700 animate-spin"
          style={{ animationDuration: "25s" }}
        >
          {/* 8 Geometric Cubes */}
          <g fill="#0F32DC">
            <path d="M40 0H56V16H40V0Z" fill="#0F32DC" />
            <path d="M76.3 8.4L87.6 19.7L76.3 31L65 19.7L76.3 8.4Z" fill="#0F32DC" />
            <path d="M80 56V40H96V56H80Z" fill="#0F32DC" />
            <path d="M76.3 87.6L65 76.3L76.3 65L87.6 76.3L76.3 87.6Z" fill="#0F32DC" />
            <path d="M40 96H56V80H40V96Z" fill="#0F32DC" />
            <path d="M19.7 87.6L31 76.3L19.7 65L8.4 76.3L19.7 87.6Z" fill="#0F32DC" />
            <path d="M16 56V40H0V56H16Z" fill="#0F32DC" />
            <path d="M19.7 8.4L8.4 19.7L19.7 31L31 19.7L19.7 8.4Z" fill="#0F32DC" />
          </g>
          {/* Central Directional Cognitive Arrow */}
          <path
            d="M53.7 53.7C56.8 50.5 56.8 45.5 53.7 42.3L19.7 8.4L13.7 14.4L8.4 19.7L28.7 40H0V56H28.7L19.7 65L8.4 76.3L19.7 87.6L53.7 53.7Z"
            fill="#0F32DC"
          />
        </svg>

        {/* Soft Radial Ambient Aura Behind Core */}
        <div className="absolute inset-0 bg-[#0F32DC]/15 blur-2xl rounded-full -z-10 pointer-events-none" />
      </div>
    </div>
  )
}
