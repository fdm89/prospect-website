"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import DimensionLine from "./DimensionLine";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const planLines = gsap.utils.toArray<SVGGeometryElement>(".hero-plan-line");
      planLines.forEach((el) => {
        const len = el.getTotalLength();
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { opacity: 0, y: 12, duration: 0.5 })
        .from(
          ".hero-line",
          { yPercent: 130, opacity: 0, duration: 0.9, stagger: 0.1 },
          "-=0.15"
        )
        .from(".hero-sub", { opacity: 0, y: 14, duration: 0.6 }, "-=0.45")
        .from(".hero-cta > *", { opacity: 0, y: 10, duration: 0.5, stagger: 0.08 }, "-=0.35")
        .from(
          ".hero-plan",
          { opacity: 0, scale: 0.97, duration: 0.9, ease: "power2.out" },
          "-=0.7"
        )
        .to(
          planLines,
          { strokeDashoffset: 0, duration: 1.1, stagger: 0.06 },
          "-=0.5"
        )
        .from(".hero-tag", { opacity: 0, y: 10, duration: 0.5, stagger: 0.1 }, "-=0.6");

      // ambient float on the corner tag
      gsap.to(".hero-tag-float", {
        y: -8,
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden"
    >
      <div className="absolute inset-0 grid-blueprint opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-10 items-end">
          <div>
            <p className="hero-eyebrow eyebrow text-[12px] text-brand mb-6">
              Ristrutturazioni &amp; restauri — dal 2011
            </p>

            <h1 className="font-display font-medium text-[13vw] leading-[0.95] tracking-tight md:text-[5.4vw] lg:text-[4.4rem] text-ink">
              <span className="block overflow-hidden">
                <span className="hero-line block">Ogni parete</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block">racconta un</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line block text-brand">progetto preciso.</span>
              </span>
            </h1>

            <p className="hero-sub mt-8 max-w-md text-[15px] md:text-base leading-relaxed text-ink-soft">
              Prospect Restauri accompagna la tua casa dal rilievo alla consegna: rilievi
              millimetrici, progetto esecutivo e cantiere seguito passo per passo,
              senza sorprese di tempi o di budget.
            </p>

            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/contatti"
                className="inline-flex items-center gap-2 bg-ink text-paper px-7 py-3.5 eyebrow text-[12px] hover:bg-brand transition-colors"
              >
                Richiedi un sopralluogo
              </Link>
              <Link
                href="/progetti"
                className="inline-flex items-center gap-2 px-7 py-3.5 eyebrow text-[12px] text-ink-soft hover:text-brand transition-colors"
              >
                Guarda i progetti →
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="hero-plan relative border border-concrete-line bg-paper-soft aspect-[4/5]">
              <svg
                viewBox="0 0 320 400"
                className="w-full h-full"
                fill="none"
              >
                {/* floor plan line art */}
                <rect x="24" y="24" width="272" height="352" stroke="var(--ink)" strokeWidth="1.5" className="hero-plan-line" />
                <line x1="24" y1="180" x2="160" y2="180" stroke="var(--concrete)" strokeWidth="1" className="hero-plan-line" />
                <line x1="160" y1="24" x2="160" y2="180" stroke="var(--concrete)" strokeWidth="1" className="hero-plan-line" />
                <line x1="160" y1="260" x2="296" y2="260" stroke="var(--concrete)" strokeWidth="1" className="hero-plan-line" />
                {/* door swing arcs */}
                <path d="M160 180 A 44 44 0 0 1 204 224" stroke="var(--brand)" strokeWidth="1.3" className="hero-plan-line" />
                <path d="M96 180 A 36 36 0 0 1 96 244" stroke="var(--brand)" strokeWidth="1.3" className="hero-plan-line" />
                {/* dimension marks */}
                <line x1="24" y1="392" x2="296" y2="392" stroke="var(--concrete)" strokeWidth="1" className="hero-plan-line" />
                <line x1="24" y1="386" x2="24" y2="398" stroke="var(--concrete)" strokeWidth="1" />
                <line x1="296" y1="386" x2="296" y2="398" stroke="var(--concrete)" strokeWidth="1" />
              </svg>

              <span className="hero-tag hero-tag-float eyebrow absolute -left-4 top-10 bg-paper border border-concrete-line px-3 py-2 text-[10px] text-ink-soft shadow-sm">
                RILIEVO — 68,4 M²
              </span>
              <span className="hero-tag eyebrow absolute -right-3 bottom-16 bg-ink text-paper px-3 py-2 text-[10px]">
                +120 CANTIERI CONSEGNATI
              </span>
            </div>
          </div>
        </div>

        <DimensionLine label="Prospect Restauri" className="mt-20 md:mt-24" />
      </div>
    </section>
  );
}
