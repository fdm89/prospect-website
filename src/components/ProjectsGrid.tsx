"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";
import { unsplash } from "@/lib/images";
import { PROJECTS } from "@/lib/projects";

const CATEGORIES = ["Tutti", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function ProjectsGrid() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("Tutti");

  const filtered = useMemo(
    () => (active === "Tutti" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        opacity: 0,
        y: 26,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, rootRef);
    return () => ctx.revert();
  }, [active]);

  return (
    <div ref={rootRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-12 flex flex-wrap gap-3">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`eyebrow text-[11px] px-4 py-2 border transition-colors ${
              active === c
                ? "bg-ink text-paper border-ink"
                : "border-concrete-line text-ink-soft hover:border-ink hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <Link
            key={p.slug}
            href={`/progetti/${p.slug}`}
            className="project-card group block"
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-4">
              <Image
                src={unsplash(p.cover, 900, 700)}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 eyebrow text-[10px] bg-paper/90 backdrop-blur px-2.5 py-1 text-ink">
                {p.category}
              </span>
            </div>
            <h3 className="font-display text-lg font-medium mb-1 group-hover:text-brand transition-colors">
              {p.title}
            </h3>
            <p className="eyebrow text-[11px] text-ink-soft">
              {p.location} — {p.year}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
