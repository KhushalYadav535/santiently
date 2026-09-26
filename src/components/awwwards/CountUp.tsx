"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * Buttery count-up on scroll into view — instrument-grade numbers.
 */
export default function CountUp({
  to,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1.8,
  pad = 0,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  pad?: number;
}) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / (duration * 1000));
            const eased = 1 - Math.pow(1 - p, 4);
            setVal(to * eased);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  const raw = val.toFixed(decimals);
  const [int, frac] = raw.split(".");
  const shown = (pad > 0 ? int.padStart(pad, "0") : int) + (frac !== undefined ? `.${frac}` : "");

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}
