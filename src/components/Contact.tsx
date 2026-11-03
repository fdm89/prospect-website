"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

export default function Contact() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: rootRef.current, start: "top 78%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contatti" ref={rootRef} className="py-24 md:py-32 bg-charcoal text-paper relative overflow-hidden">
      <div className="absolute inset-0 grid-blueprint-dark opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
        <div>
          <p className="contact-anim eyebrow text-[12px] text-brand mb-4">Contatti</p>
          <h2 className="contact-anim font-display font-medium text-4xl md:text-5xl tracking-tight max-w-lg mb-6">
            Parliamo del tuo progetto in un sopralluogo gratuito.
          </h2>
          <p className="contact-anim max-w-md text-[15px] leading-relaxed text-[#B7B9BE] mb-10">
            Rispondiamo entro 24 ore lavorative con una prima disponibilità di
            calendario per il rilievo in cantiere.
          </p>

          <div className="contact-anim space-y-4 eyebrow text-[13px]">
            <a href="tel:+390212345678" className="block hover:text-brand transition-colors">
              +39 02 1234 5678
            </a>
            <a href="mailto:info@prospectrestauri.it" className="block hover:text-brand transition-colors">
              info@prospectrestauri.it
            </a>
            <p className="text-[#8a8c91] normal-case tracking-normal">
              Via dei Cantieri 14, 20100 Milano (MI)
            </p>
          </div>
        </div>

        <form
          className="contact-anim bg-paper text-ink p-8 md:p-10 border border-charcoal-line"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="flex flex-col justify-center h-full min-h-[320px]">
              <p className="eyebrow text-[12px] text-brand mb-3">Richiesta inviata</p>
              <p className="font-display text-2xl font-medium leading-snug">
                Grazie. Ti ricontattiamo entro 24 ore lavorative per fissare il
                sopralluogo.
              </p>
            </div>
          ) : (
            <div className="space-y-5">
              <div>
                <label className="eyebrow text-[11px] text-ink-soft block mb-2">Nome e cognome</label>
                <input
                  required
                  type="text"
                  className="w-full bg-transparent border-b border-concrete-line py-2.5 outline-none focus:border-brand transition-colors"
                  placeholder="Mario Rossi"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="eyebrow text-[11px] text-ink-soft block mb-2">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b border-concrete-line py-2.5 outline-none focus:border-brand transition-colors"
                    placeholder="mario@email.it"
                  />
                </div>
                <div>
                  <label className="eyebrow text-[11px] text-ink-soft block mb-2">Telefono</label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-concrete-line py-2.5 outline-none focus:border-brand transition-colors"
                    placeholder="+39"
                  />
                </div>
              </div>
              <div>
                <label className="eyebrow text-[11px] text-ink-soft block mb-2">Tipo di intervento</label>
                <select className="w-full bg-transparent border-b border-concrete-line py-2.5 outline-none focus:border-brand transition-colors">
                  <option>Ristrutturazione completa</option>
                  <option>Restauro conservativo</option>
                  <option>Bagno e cucina</option>
                  <option>Efficientamento energetico</option>
                  <option>Altro</option>
                </select>
              </div>
              <div>
                <label className="eyebrow text-[11px] text-ink-soft block mb-2">Descrivi il progetto</label>
                <textarea
                  rows={3}
                  className="w-full bg-transparent border-b border-concrete-line py-2.5 outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Metratura, città, tempistiche indicative…"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-ink text-paper py-3.5 eyebrow text-[12px] hover:bg-brand transition-colors mt-2"
              >
                Invia richiesta
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
