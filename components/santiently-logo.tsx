import React from "react"

export function SantientlyLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#050419] text-[#FCFCFC]">
        {/* Architectural AI geometric emblem */}
        <svg
          className="w-4 h-4 text-[#0F32DC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-[#050419] leading-none">
          Santiently
        </span>
        <span className="text-[9px] uppercase font-mono font-bold tracking-[1.5px] text-[#0F32DC] leading-none mt-1">
          Innovations
        </span>
      </div>
    </div>
  )
}

// Keep LeLoLogo as an alias so any existing imports don't break
export const LeLoLogo = SantientlyLogo
