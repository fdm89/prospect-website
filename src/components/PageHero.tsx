"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".page-hero-anim", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative pt-36 md:pt-44 pb-14 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-blueprint opacity-[0.3] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="page-hero-anim eyebrow text-[12px] text-brand mb-5">{eyebrow}</p>
        <h1 className="page-hero-anim font-display font-medium text-5xl md:text-6xl tracking-tight max-w-3xl">
          {title}
        </h1>
        {description ? (
          <p className="page-hero-anim mt-6 max-w-xl text-[15px] md:text-base leading-relaxed text-ink-soft">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
