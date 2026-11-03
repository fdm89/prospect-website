"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const STEPS = [
  {
    n: "01",
    title: "Sopralluogo",
    time: "1–2 settimane",
    desc: "Rilievo dello stato di fatto, verifica impiantistica e strutturale, prima stima di massima.",
  },
  {
    n: "02",
    title: "Progetto",
    time: "2–4 settimane",
    desc: "Layout definitivo, computo metrico, capitolato materiali e cronoprogramma condiviso con te.",
  },
  {
    n: "03",
    title: "Cantiere",
    time: "6–16 settimane",
    desc: "Squadre coordinate, aggiornamenti settimanali e sopralluoghi fotografici a ogni fase chiave.",
  },
  {
    n: "04",
    title: "Consegna",
    time: "1 giornata",
    desc: "Collaudo impianti, verbale di fine lavori e garanzia scritta su opere e materiali.",
  },
];

export default function Process() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const line = rootRef.current?.querySelector(".process-line") as SVGLineElement | null;
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 70%",
            end: "bottom 60%",
            scrub: 0.6,
          },
        });
      }

      gsap.from(".step-card", {
        opacity: 0,
        y: 24,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 80%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="metodo" ref={rootRef} className="py-24 md:py-32 bg-charcoal text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint-dark opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-[12px] text-brand mb-4">Metodo — un percorso in 4 fasi</p>
        <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-2xl mb-6">
          Dal primo rilievo alla consegna delle chiavi.
        </h2>
        <p className="max-w-lg text-[15px] leading-relaxed text-[#B7B9BE] mb-16">
          La stessa sequenza, per ogni cantiere: è così che manteniamo tempi e
          costi dichiarati fin dal preventivo.
        </p>

        <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="hidden md:block w-full h-[2px] -mb-[1px] relative z-0">
          <line className="process-line" x1="0" y1="1" x2="1000" y2="1" stroke="var(--brand)" strokeWidth="1.5" />
        </svg>

        <div className="steps-grid grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
          {STEPS.map((s) => (
            <div key={s.n} className="step-card">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                <span className="eyebrow text-[12px] text-[#8a8c91]">{s.n}</span>
              </div>
              <h3 className="font-display text-xl font-medium mb-1.5">{s.title}</h3>
              <p className="eyebrow text-[10px] text-brand mb-4">{s.time}</p>
              <p className="text-[14px] leading-relaxed text-[#B7B9BE]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
