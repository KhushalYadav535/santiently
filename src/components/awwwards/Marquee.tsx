"use client";

import React from "react";

/**
 * Infinite marquee strip — outlined + solid mix.
 */
export default function Marquee({
  items,
  fast = false,
  outline = false,
  className = "",
}: {
  items: string[];
  fast?: boolean;
  outline?: boolean;
  className?: string;
}) {
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className={`relative overflow-hidden whitespace-nowrap tick-fade ${className}`}>
      <div className={fast ? "animate-aww-marquee-fast" : "animate-aww-marquee"}>
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center">
                <span
                  className={`font-display font-bold tracking-[-0.02em] uppercase px-6 text-4xl sm:text-6xl text-[#0b0b0f] ${
                    outline && i % 2 === 1 ? "text-stroke" : ""
                  }`}
                >
                  {item}
                </span>
                <span className="h-2.5 w-2.5 rounded-full bg-[#4d7c0f] shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
