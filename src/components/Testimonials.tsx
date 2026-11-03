"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import DimensionLine from "./DimensionLine";

const QUOTES = [
  {
    quote:
      "Il cronoprogramma condiviso all'inizio è quello rispettato alla fine. Non è scontato, ma con Prospect è stato così.",
    name: "Elena Marchetti",
    role: "Appartamento, Milano — 78 m²",
  },
  {
    quote:
      "Restauro di una cascina di famiglia: hanno gestito vincoli e Sovrintendenza senza farci perdere un solo giorno di cantiere.",
    name: "Davide Colombo",
    role: "Restauro conservativo, Brianza",
  },
  {
    quote:
      "Aggiornamenti settimanali puntuali, foto del cantiere, un unico referente. Ho sempre saputo a che punto eravamo.",
    name: "Giulia Ferretti",
    role: "Bagno e cucina, Torino",
  },
];

export default function Testimonials() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".quote-card", {
        opacity: 0,
        x: 32,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".quotes-grid", start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-24 md:py-32 border-t border-concrete-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-[12px] text-brand mb-4">Testimonianze</p>
        <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-xl mb-14">
          Committenti che tornano al cantiere successivo.
        </h2>

        <div className="quotes-grid grid md:grid-cols-3 gap-8">
          {QUOTES.map((q) => (
            <figure key={q.name} className="quote-card bg-paper-soft border border-concrete-line p-8 flex flex-col justify-between min-h-[260px]">
              <blockquote className="font-display text-lg leading-snug text-ink">
                “{q.quote}”
              </blockquote>
              <figcaption className="mt-8 eyebrow text-[11px] text-ink-soft">
                {q.name}
                <span className="block text-concrete mt-1 normal-case tracking-normal font-normal">
                  {q.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <DimensionLine className="mt-16" />
      </div>
    </section>
  );
}
