"use client";

import Link from "next/link";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import DimensionLine from "./DimensionLine";

const SERVICES = [
  {
    n: "01",
    title: "Ristrutturazione completa",
    desc: "Interventi chiavi in mano su appartamenti e ville: demolizioni, impianti, finiture, fino al collaudo finale.",
    icon: (
      <path d="M6 26V13l14-8 14 8v13M11 26V17h18v9M6 26h28" />
    ),
  },
  {
    n: "02",
    title: "Restauro conservativo",
    desc: "Recupero di edifici storici e di pregio nel rispetto di materiali, tecniche e vincoli della Sovrintendenza.",
    icon: (
      <path d="M8 28V12l12-6 12 6v16M13 28V19a3 3 0 0 1 6 0v9M8 28h24M13 12h.01M27 12h.01" />
    ),
  },
  {
    n: "03",
    title: "Bagno e cucina",
    desc: "Progettazione e posa di ambienti tecnici: impianti idraulici, rivestimenti e arredi su misura.",
    icon: <path d="M7 17h22v6a8 8 0 0 1-8 8h-6a8 8 0 0 1-8-8v-6ZM7 17V9a3 3 0 0 1 6 0v3" />,
  },
  {
    n: "04",
    title: "Efficientamento energetico",
    desc: "Cappotto termico, infissi e impianti a basso consumo: comfort abitativo e classe energetica superiore.",
    icon: <path d="M20 6v6M20 28v6M9 20h6M25 20h6M12 12l4 4M28 12l-4 4M12 28l4-4M28 28l-4-4M20 15a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />,
  },
  {
    n: "05",
    title: "Progettazione d'interni",
    desc: "Layout funzionali, palette materica e capitolato completo prima dell'apertura del cantiere.",
    icon: <path d="M6 8h28v18H6V8ZM6 26l8-8 6 5 8-9 6 7" />,
  },
  {
    n: "06",
    title: "Facciate ed esterni",
    desc: "Ripristino di facciate, coperture e spazi esterni: dal ponteggio alla tinteggiatura finale.",
    icon: <path d="M8 30V14l12-8 12 8v16M8 30h24M14 30v-8h4v8M22 30v-8h4v8" />,
  },
];

export default function Services() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        opacity: 0,
        y: 28,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.09,
        scrollTrigger: {
          trigger: ".service-grid",
          start: "top 82%",
        },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="servizi" ref={rootRef} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="eyebrow text-[12px] text-brand mb-4">Servizi</p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-xl">
              Sei discipline, un unico referente di cantiere.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-ink-soft leading-relaxed">
            Ogni intervento è seguito da un project manager dedicato: un solo
            interlocutore per progettisti, imprese e fornitori.
          </p>
        </div>

        <div className="service-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-line border border-concrete-line">
          {SERVICES.map((s) => (
            <div
              key={s.n}
              className="service-card group bg-paper p-8 md:p-9 flex flex-col justify-between min-h-[280px] hover:bg-paper-soft transition-colors"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                  <svg
                    viewBox="0 0 40 40"
                    className="w-10 h-10 text-ink-soft group-hover:text-brand transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                  <span className="eyebrow text-[11px] text-concrete">{s.n}</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-3">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
              <div className="mt-8 h-px bg-concrete-line relative overflow-hidden">
                <div className="absolute inset-0 bg-brand scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/servizi"
            className="eyebrow text-[12px] text-ink-soft hover:text-brand transition-colors"
          >
            Scopri tutti i servizi in dettaglio →
          </Link>
        </div>

        <DimensionLine className="mt-10" />
      </div>
    </section>
  );
}
