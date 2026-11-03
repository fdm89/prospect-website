"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function DimensionLine({
  label,
  className = "",
  tone = "light",
}: {
  label?: string;
  className?: string;
  tone?: "light" | "dark";
}) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = wrapRef.current?.querySelector("line.draw") as SVGLineElement | null;
    const ticks = wrapRef.current?.querySelectorAll(".tick");
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.set(line, { strokeDasharray: 1000, strokeDashoffset: 1000 });
      gsap.set(ticks ?? [], { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 88%",
        },
      });
      tl.to(line, { strokeDashoffset: 0, duration: 1, ease: "power2.out" }).to(
        ticks ?? [],
        { opacity: 1, duration: 0.3, stagger: 0.1 },
        "-=0.2"
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  const stroke = tone === "dark" ? "var(--charcoal-line)" : "var(--concrete-line)";
  const tickStroke = tone === "dark" ? "#5c5e63" : "var(--concrete)";

  return (
    <div ref={wrapRef} className={`w-full flex items-center gap-4 ${className}`}>
      {label ? (
        <span
          className={`eyebrow text-[11px] shrink-0 ${
            tone === "dark" ? "text-[#8a8c91]" : "text-concrete"
          }`}
        >
          {label}
        </span>
      ) : null}
      <svg
        viewBox="0 0 1000 24"
        preserveAspectRatio="none"
        className="w-full h-4"
      >
        <line className="tick" x1="0" y1="6" x2="0" y2="18" stroke={tickStroke} strokeWidth="1.5" />
        <line
          className="draw"
          x1="0"
          y1="12"
          x2="1000"
          y2="12"
          stroke={stroke}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line className="tick" x1="1000" y1="6" x2="1000" y2="18" stroke={tickStroke} strokeWidth="1.5" />
      </svg>
    </div>
  );
}
