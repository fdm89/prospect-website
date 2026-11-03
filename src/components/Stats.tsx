"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const STATS = [
  { value: 13, suffix: "", label: "Anni di attività" },
  { value: 124, suffix: "", label: "Cantieri consegnati" },
  { value: 9800, suffix: "", label: "M² ristrutturati" },
  { value: 98, suffix: "%", label: "Consegne nei tempi previsti" },
];

const VALUES = [
  {
    title: "Preventivo vincolante",
    desc: "Il prezzo concordato non cambia in corso d'opera, salvo varianti richieste da te.",
  },
  {
    title: "Un solo referente",
    desc: "Project manager dedicato, aggiornamenti settimanali, nessun rimpallo tra imprese.",
  },
  {
    title: "Garanzia scritta",
    desc: "24 mesi su opere murarie e impianti, con verbale di collaudo alla consegna.",
  },
];

export default function Stats() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLSpanElement>(".stat-value");
      counters.forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString("it-IT");
          },
        });
      });

      gsap.from(".value-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".values-grid", start: "top 85%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-24 md:py-32 border-t border-concrete-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-24">
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="font-display text-4xl md:text-5xl font-medium text-ink tabular-nums">
                <span className="stat-value" data-value={s.value}>
                  0
                </span>
                <span className="text-brand">{s.suffix}</span>
              </div>
              <p className="eyebrow text-[11px] text-ink-soft mt-3">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.4fr] gap-12 md:gap-16">
          <div>
            <p className="eyebrow text-[12px] text-brand mb-4">Perché Prospect</p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight">
              Precisione da cantiere, cura da studio d&apos;architettura.
            </h2>
          </div>
          <div className="values-grid grid sm:grid-cols-3 gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="value-card border-t border-ink pt-5">
                <h3 className="font-display text-lg font-medium mb-2">{v.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
