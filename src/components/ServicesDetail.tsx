"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { unsplash, PHOTOS } from "@/lib/images";
import DimensionLine from "./DimensionLine";

const SERVICES = [
  {
    n: "01",
    title: "Ristrutturazione completa",
    desc: "Interventi chiavi in mano su appartamenti e ville: demolizioni, impianti, finiture, fino al collaudo finale. Un unico project manager coordina imprese e fornitori per tutta la durata del cantiere.",
    bullets: [
      "Demolizioni e opere murarie",
      "Impianti elettrici, idraulici e riscaldamento",
      "Pavimenti, rivestimenti e serramenti",
      "Collaudo finale e verbale di consegna",
    ],
    photo: PHOTOS.livingRoomFireplace,
  },
  {
    n: "02",
    title: "Restauro conservativo",
    desc: "Recupero di edifici storici e di pregio nel rispetto di materiali, tecniche e vincoli della Sovrintendenza. Gestiamo pratiche e autorizzazioni insieme al cantiere, senza fermi imprevisti.",
    bullets: [
      "Pratiche con Sovrintendenza e Comune",
      "Consolidamento strutturale reversibile",
      "Recupero di murature, travature e infissi originali",
      "Tecniche e materiali tradizionali certificati",
    ],
    photo: PHOTOS.stoneVillage,
  },
  {
    n: "03",
    title: "Bagno e cucina",
    desc: "Progettazione e posa di ambienti tecnici: impianti idraulici, rivestimenti e arredi su misura, pensati per durare e per essere manutenuti facilmente nel tempo.",
    bullets: [
      "Progettazione layout e capitolato materiali",
      "Impianto idraulico ed elettrico a norma",
      "Arredi e top su misura",
      "Rivestimenti e sanitari selezionati con te",
    ],
    photo: PHOTOS.kitchenOak,
  },
  {
    n: "04",
    title: "Efficientamento energetico",
    desc: "Cappotto termico, infissi e impianti a basso consumo: comfort abitativo e classe energetica superiore, con pratiche per eventuali incentivi disponibili.",
    bullets: [
      "Diagnosi energetica e APE",
      "Cappotto termico e isolamento coperture",
      "Sostituzione infissi e serramenti",
      "Impianti a pompa di calore e ibridi",
    ],
    photo: PHOTOS.facadeScaffold,
  },
  {
    n: "05",
    title: "Progettazione d'interni",
    desc: "Layout funzionali, palette materica e capitolato completo prima dell'apertura del cantiere, per arrivare al preventivo senza sorprese in corso d'opera.",
    bullets: [
      "Rilievo e layout distributivo",
      "Moodboard e palette materica",
      "Rendering e capitolato arredi",
      "Coordinamento con il cantiere edile",
    ],
    photo: PHOTOS.livingRoomMinimal,
  },
  {
    n: "06",
    title: "Facciate ed esterni",
    desc: "Ripristino di facciate, coperture e spazi esterni: dal ponteggio alla tinteggiatura finale, con gestione diretta delle pratiche condominiali quando necessario.",
    bullets: [
      "Ponteggi e messa in sicurezza",
      "Ripristino intonaci e tinteggiatura",
      "Coperture, grondaie e lattonerie",
      "Gestione pratiche condominiali",
    ],
    photo: PHOTOS.stoneFacadeHouse,
  },
];

export default function ServicesDetail() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".service-row");
      rows.forEach((row) => {
        const img = row.querySelector(".service-row-img");
        const text = row.querySelectorAll(".service-row-text > *");
        gsap.from(img, {
          opacity: 0,
          scale: 0.96,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 78%" },
        });
        gsap.from(text, {
          opacity: 0,
          y: 16,
          duration: 0.6,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: { trigger: row, start: "top 78%" },
        });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="py-8 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-24 md:gap-32">
        {SERVICES.map((s, i) => (
          <div
            key={s.n}
            className={`service-row grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="service-row-img relative aspect-[4/3] overflow-hidden">
              <Image
                src={unsplash(s.photo, 1200, 900)}
                alt={s.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-5 left-5 eyebrow text-[11px] bg-paper/90 backdrop-blur px-3 py-1.5 text-ink">
                {s.n}
              </span>
            </div>
            <div className="service-row-text">
              <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-5">
                {s.title}
              </h2>
              <p className="text-[15px] leading-relaxed text-ink-soft mb-7">{s.desc}</p>
              <ul className="space-y-3">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[14px] text-ink">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <DimensionLine className="mt-24 md:mt-32" />
      </div>
    </div>
  );
}
