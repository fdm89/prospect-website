"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { unsplash, PHOTOS } from "@/lib/images";
import DimensionLine from "./DimensionLine";

const MILESTONES = [
  {
    year: "2011",
    title: "Fondazione",
    desc: "Prospect Restauri nasce a Milano come piccola squadra di tre persone specializzata in restauro conservativo.",
  },
  {
    year: "2015",
    title: "Prima sede a Torino",
    desc: "Apertura del secondo ufficio tecnico per seguire i cantieri in Piemonte senza trasferte a distanza.",
  },
  {
    year: "2019",
    title: "Divisione efficientamento",
    desc: "Nasce il team dedicato a cappotti termici e riqualificazione energetica di edifici condominiali.",
  },
  {
    year: "2025",
    title: "124 cantieri consegnati",
    desc: "Il traguardo di oltre cento cantieri consegnati nei tempi previsti, con lo stesso metodo del primo giorno.",
  },
];

const VALUES = [
  {
    title: "Trasparenza",
    desc: "Ogni voce di capitolato è leggibile e spiegata: nessuna voce generica in preventivo.",
  },
  {
    title: "Rispetto dei tempi",
    desc: "Il cronoprogramma è un impegno contrattuale, non un'indicazione di massima.",
  },
  {
    title: "Materiali verificati",
    desc: "Selezioniamo fornitori con cui lavoriamo da anni: niente sorprese sulla qualità in cantiere.",
  },
  {
    title: "Un solo referente",
    desc: "Il project manager che incontri al sopralluogo è la stessa persona che ti consegna le chiavi.",
  },
];

const TEAM = [
  { initials: "MP", name: "Marco Pellizzari", role: "Fondatore & Direttore tecnico" },
  { initials: "SC", name: "Sara Conti", role: "Responsabile progettazione" },
  { initials: "AB", name: "Andrea Bruno", role: "Direzione lavori" },
  { initials: "GL", name: "Giulia Lomazzi", role: "Restauro conservativo" },
  { initials: "FR", name: "Fabio Rinaldi", role: "Impianti ed efficientamento" },
  { initials: "EV", name: "Elisa Vitale", role: "Relazioni clienti" },
];

export default function AboutSections() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-story-text > *", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-story", start: "top 78%" },
      });
      gsap.from(".about-story-img", {
        opacity: 0,
        scale: 0.97,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: { trigger: ".about-story", start: "top 78%" },
      });

      const line = rootRef.current?.querySelector(".timeline-line") as SVGLineElement | null;
      if (line) {
        const len = line.getTotalLength();
        gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 75%",
            end: "bottom 70%",
            scrub: 0.6,
          },
        });
      }
      gsap.from(".milestone", {
        opacity: 0,
        y: 22,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".timeline", start: "top 78%" },
      });

      gsap.from(".value-item", {
        opacity: 0,
        y: 18,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".values-list", start: "top 82%" },
      });

      gsap.from(".team-card", {
        opacity: 0,
        y: 18,
        scale: 0.97,
        duration: 0.6,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: ".team-grid", start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {/* Storia */}
      <section className="about-story py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="about-story-img relative aspect-[4/3] overflow-hidden">
            <Image
              src={unsplash(PHOTOS.teamOffice, 1200, 900)}
              alt="Il team Prospect Restauri al lavoro"
              fill
              className="object-cover"
            />
          </div>
          <div className="about-story-text">
            <p className="eyebrow text-[12px] text-brand mb-4">La nostra storia</p>
            <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-6">
              Da piccolo studio tecnico a squadra di 24 persone.
            </h2>
            <p className="text-[15px] leading-relaxed text-ink-soft mb-4">
              Prospect Restauri nasce a Milano nel 2011 dall&apos;incontro tra un
              geometra e due restauratori: l&apos;idea era semplice, offrire lo
              stesso rigore del restauro vincolato anche alle ristrutturazioni
              residenziali comuni.
            </p>
            <p className="text-[15px] leading-relaxed text-ink-soft">
              Oggi seguiamo cantieri tra Milano, Torino e la Brianza con un
              team interno di progettisti, direttori lavori e capicantiere:
              nessun subappalto sulla gestione, solo sull&apos;esecuzione
              specialistica quando serve.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline py-24 md:py-32 border-t border-concrete-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-[12px] text-brand mb-4">Tappe principali</p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-xl mb-16">
            Quattordici anni, lo stesso metodo.
          </h2>

          <svg viewBox="0 0 1000 2" preserveAspectRatio="none" className="hidden md:block w-full h-[2px] mb-0 relative z-0">
            <line className="timeline-line" x1="0" y1="1" x2="1000" y2="1" stroke="var(--brand)" strokeWidth="1.5" />
          </svg>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 mt-6">
            {MILESTONES.map((m) => (
              <div key={m.year} className="milestone">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-2.5 h-2.5 rounded-full bg-brand shrink-0" />
                  <span className="font-display text-2xl font-medium">{m.year}</span>
                </div>
                <h3 className="text-lg font-medium mb-1.5">{m.title}</h3>
                <p className="text-[14px] leading-relaxed text-ink-soft">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-24 md:py-32 border-t border-concrete-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-[0.8fr_1.4fr] gap-12">
          <div>
            <p className="eyebrow text-[12px] text-brand mb-4">Come lavoriamo</p>
            <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight">
              Quattro principi non negoziabili.
            </h2>
          </div>
          <div className="values-list grid sm:grid-cols-2 gap-x-10 gap-y-8">
            {VALUES.map((v, i) => (
              <div key={v.title} className="value-item flex gap-4">
                <span className="eyebrow text-[11px] text-concrete pt-1">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-lg font-medium mb-1.5">{v.title}</h3>
                  <p className="text-[14px] leading-relaxed text-ink-soft">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <DimensionLine className="mt-16" />
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-[12px] text-brand mb-4">Il team</p>
          <h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight max-w-xl mb-14">
            Le persone che incontri in cantiere.
          </h2>

          <div className="team-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-concrete-line border border-concrete-line">
            {TEAM.map((t) => (
              <div key={t.name} className="team-card bg-paper p-8 flex flex-col gap-6">
                <div className="w-14 h-14 flex items-center justify-center bg-ink text-paper font-display text-lg">
                  {t.initials}
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium">{t.name}</h3>
                  <p className="eyebrow text-[11px] text-ink-soft mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
