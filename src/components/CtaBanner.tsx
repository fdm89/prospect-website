"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function CtaBanner() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-anim", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-24 md:py-32 bg-charcoal text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="cta-anim eyebrow text-[12px] text-brand mb-4">Iniziamo</p>
          <h2 className="cta-anim font-display font-medium text-4xl md:text-5xl tracking-tight max-w-lg">
            Parliamo del tuo progetto in un sopralluogo gratuito.
          </h2>
        </div>
        <Link
          href="/contatti"
          className="cta-anim inline-flex items-center gap-2 bg-paper text-ink px-8 py-4 eyebrow text-[12px] hover:bg-brand hover:text-paper transition-colors w-fit shrink-0"
        >
          Vai ai contatti →
        </Link>
      </div>
    </section>
  );
}
