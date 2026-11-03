"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import { gsap, Draggable } from "@/lib/gsap";
import DimensionLine from "./DimensionLine";

function RoomBefore() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" fill="none">
      <rect width="600" height="400" fill="#EAE6DC" />
      <rect x="40" y="40" width="520" height="320" stroke="#B8B2A4" strokeWidth="1.5" />
      {/* cracked wall */}
      <path d="M120 40 L140 130 L100 180 L150 260 L110 360" stroke="#B8907A" strokeWidth="1.4" />
      <path d="M300 40 L280 110 L330 170 L290 260" stroke="#B8907A" strokeWidth="1.2" />
      {/* old window */}
      <rect x="400" y="90" width="120" height="140" stroke="#8C877D" strokeWidth="1.5" />
      <line x1="460" y1="90" x2="460" y2="230" stroke="#8C877D" strokeWidth="1" />
      <line x1="400" y1="160" x2="520" y2="160" stroke="#8C877D" strokeWidth="1" />
      {/* peeling patches */}
      <circle cx="200" cy="220" r="26" stroke="#B8907A" strokeWidth="1" strokeDasharray="4 3" />
      <circle cx="360" cy="300" r="18" stroke="#B8907A" strokeWidth="1" strokeDasharray="4 3" />
      <text x="60" y="384" fontSize="11" letterSpacing="1.5" fill="#8C877D" fontFamily="var(--font-jetbrains), monospace">
        STATO DI FATTO
      </text>
    </svg>
  );
}

function RoomAfter() {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-full" fill="none">
      <rect width="600" height="400" fill="#FAF9F5" />
      <rect x="40" y="40" width="520" height="320" stroke="#15171A" strokeWidth="1.5" />
      {/* clean flooring */}
      {Array.from({ length: 11 }).map((_, i) => (
        <line key={i} x1={40 + i * 52} y1="220" x2={40 + i * 52} y2="360" stroke="#D9D5CB" strokeWidth="1" />
      ))}
      <line x1="40" y1="220" x2="560" y2="220" stroke="#15171A" strokeWidth="1.2" />
      {/* new large window */}
      <rect x="380" y="70" width="160" height="150" stroke="#0D0DFF" strokeWidth="1.6" />
      <line x1="460" y1="70" x2="460" y2="220" stroke="#0D0DFF" strokeWidth="1" />
      {/* furniture line-art */}
      <rect x="90" y="150" width="140" height="60" rx="4" stroke="#15171A" strokeWidth="1.3" />
      <rect x="90" y="240" width="70" height="26" stroke="#8C877D" strokeWidth="1" />
      <circle cx="260" cy="290" r="4" fill="#0D0DFF" />
      <text x="60" y="384" fontSize="11" letterSpacing="1.5" fill="#0D0DFF" fontFamily="var(--font-jetbrains), monospace">
        DOPO PROSPECT
      </text>
    </svg>
  );
}

export default function BeforeAfter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const afterMaskRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const handle = handleRef.current;
    const mask = afterMaskRef.current;
    if (!container || !handle || !mask) return;

    const ctx = gsap.context(() => {
      gsap.from(container, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: { trigger: container, start: "top 80%" },
      });

      const setClip = (xPercent: number) => {
        mask.style.clipPath = `inset(0 0 0 ${xPercent}%)`;
        handle.style.left = `${xPercent}%`;
      };

      setClip(50);

      Draggable.create(handle, {
        type: "x",
        bounds: container,
        cursor: "ew-resize",
        onDrag: function () {
          const rect = container.getBoundingClientRect();
          const x = gsap.getProperty(handle, "x") as number;
          const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
          setClip(pct);
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section id="progetti" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-[12px] text-brand mb-4">Progetti — trascina per confrontare</p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-xl">
              Stesso ambiente, due stati di fatto.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-ink-soft leading-relaxed">
            Soggiorno di un appartamento anni &apos;70 a Milano: 9 settimane di
            cantiere, stesso layout, nuova distribuzione della luce.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative aspect-[3/2] md:aspect-[16/9] border border-concrete-line overflow-hidden select-none touch-none"
        >
          <div className="absolute inset-0">
            <RoomBefore />
          </div>
          <div ref={afterMaskRef} className="absolute inset-0">
            <RoomAfter />
          </div>

          <div
            ref={handleRef}
            className="absolute top-0 bottom-0 -ml-px flex items-center justify-center"
            style={{ left: "50%" }}
          >
            <div className="absolute top-0 bottom-0 w-px bg-brand" />
            <div className="w-10 h-10 rounded-full bg-brand text-paper flex items-center justify-center eyebrow text-[10px] shadow-lg cursor-ew-resize">
              ↔
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/progetti"
            className="eyebrow text-[12px] text-ink-soft hover:text-brand transition-colors"
          >
            Vedi tutti i progetti →
          </Link>
        </div>

        <DimensionLine className="mt-10" />
      </div>
    </section>
  );
}
