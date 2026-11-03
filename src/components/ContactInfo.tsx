"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

const OFFICES = [
  {
    city: "Milano",
    address: "Via dei Cantieri 14, 20100 Milano (MI)",
    hours: "Lun–Ven, 9:00–18:30",
    note: "Sede legale e ufficio tecnico principale",
  },
  {
    city: "Torino",
    address: "Corso Restauro 8, 10100 Torino (TO)",
    hours: "Lun–Ven, 9:00–18:00",
    note: "Ufficio tecnico per i cantieri in Piemonte",
  },
  {
    city: "Brianza",
    address: "Via Artigiani 22, 20900 Monza (MB)",
    hours: "Su appuntamento",
    note: "Deposito materiali e squadre operative",
  },
];

export default function ContactInfo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".office-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow text-[12px] text-brand mb-4">Sedi</p>
        <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-12 max-w-xl">
          Tre sedi, un solo metodo di cantiere.
        </h2>
        <div className="grid sm:grid-cols-3 gap-px bg-concrete-line border border-concrete-line">
          {OFFICES.map((o) => (
            <div key={o.city} className="office-card bg-paper p-8">
              <h3 className="font-display text-xl font-medium mb-4">{o.city}</h3>
              <p className="text-[14px] text-ink-soft leading-relaxed mb-1">{o.address}</p>
              <p className="eyebrow text-[11px] text-brand mt-4 mb-1">{o.hours}</p>
              <p className="text-[13px] text-concrete">{o.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
