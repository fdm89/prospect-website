"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { unsplash } from "@/lib/images";
import type { Project } from "@/lib/projects";
import { PROJECTS } from "@/lib/projects";
import DimensionLine from "./DimensionLine";

const SECTIONS: { key: keyof Project; label: string; n: string }[] = [
  { key: "obiettivo", label: "Obiettivo", n: "01" },
  { key: "intervento", label: "Intervento", n: "02" },
  { key: "risultato", label: "Risultato", n: "03" },
];

export default function ProjectDetail({ project }: { project: Project }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const related = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".pd-eyebrow", { opacity: 0, y: 10, duration: 0.5 })
        .from(".pd-title", { opacity: 0, y: 20, duration: 0.7 }, "-=0.3")
        .from(".pd-specs > *", { opacity: 0, y: 10, duration: 0.5, stagger: 0.06 }, "-=0.4")
        .from(".pd-hero-img", { opacity: 0, scale: 0.97, duration: 0.9 }, "-=0.5");

      gsap.utils.toArray<HTMLElement>(".pd-section").forEach((el) => {
        gsap.from(el.querySelectorAll(".pd-section-anim"), {
          opacity: 0,
          y: 18,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 80%" },
        });
      });

      gsap.from(".pd-gallery-img", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".pd-gallery", start: "top 82%" },
      });

      gsap.from(".pd-related-card", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".pd-related", start: "top 82%" },
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      <section className="relative pt-36 md:pt-44 pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-blueprint opacity-[0.3] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/progetti"
            className="pd-eyebrow eyebrow text-[11px] text-ink-soft hover:text-brand transition-colors inline-block mb-8"
          >
            ← Tutti i progetti
          </Link>

          <p className="pd-eyebrow eyebrow text-[12px] text-brand mb-4">{project.category}</p>
          <h1 className="pd-title font-display font-medium text-4xl md:text-6xl tracking-tight max-w-3xl mb-10">
            {project.title}
          </h1>

          <div className="pd-specs grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl">
            <div>
              <p className="eyebrow text-[10px] text-concrete mb-1">Località</p>
              <p className="text-[14px]">{project.location}</p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-concrete mb-1">Anno</p>
              <p className="text-[14px]">{project.year}</p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-concrete mb-1">Superficie</p>
              <p className="text-[14px]">{project.surface}</p>
            </div>
            <div>
              <p className="eyebrow text-[10px] text-concrete mb-1">Durata cantiere</p>
              <p className="text-[14px]">{project.duration}</p>
            </div>
          </div>

          <div className="pd-hero-img relative aspect-[16/9] overflow-hidden">
            <Image
              src={unsplash(project.cover, 1800, 1000)}
              alt={project.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-[0.8fr_1.4fr] gap-14">
          <div>
            <p className="pd-section-anim eyebrow text-[12px] text-brand mb-4">Il progetto</p>
            <p className="pd-section-anim text-[15px] leading-relaxed text-ink-soft">
              {project.intro}
            </p>
          </div>
          <div className="pd-section flex flex-col gap-10">
            {SECTIONS.map((s) => (
              <div key={s.key} className="pd-section-anim border-t border-ink pt-5">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="eyebrow text-[11px] text-concrete">{s.n}</span>
                  <h2 className="font-display text-xl font-medium">{s.label}</h2>
                </div>
                <p className="text-[14px] leading-relaxed text-ink-soft">
                  {project[s.key] as string}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {project.gallery.length > 1 ? (
        <section className="pd-gallery py-16 md:py-24 border-t border-concrete-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-2 gap-6">
            {project.gallery.map((g, i) => (
              <div key={g + i} className="pd-gallery-img relative aspect-[4/3] overflow-hidden">
                <Image
                  src={unsplash(g, 1000, 800)}
                  alt={`${project.title} — dettaglio ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <DimensionLine className="mb-20" />
      </div>

      <section className="pd-related pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-[12px] text-brand mb-4">Altri progetti</p>
          <h2 className="font-display font-medium text-3xl md:text-4xl tracking-tight mb-12">
            Guarda altri cantieri consegnati.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/progetti/${p.slug}`}
                className="pd-related-card group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-4">
                  <Image
                    src={unsplash(p.cover, 800, 600)}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-base font-medium group-hover:text-brand transition-colors">
                  {p.title}
                </h3>
                <p className="eyebrow text-[11px] text-ink-soft mt-1">{p.location}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
