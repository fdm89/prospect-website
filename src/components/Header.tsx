"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "Chi siamo", href: "/chi-siamo" },
  { label: "Servizi", href: "/servizi" },
  { label: "Progetti", href: "/progetti" },
  { label: "Contatti", href: "/contatti" },
];

export default function Header() {
  const barRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const el = barRef.current;
    if (!el) return;

    gsap.set(el, { yPercent: 0 });

    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80 && y > last) {
        gsap.to(el, { yPercent: -100, duration: 0.35, ease: "power2.inOut" });
      } else {
        gsap.to(el, { yPercent: 0, duration: 0.35, ease: "power2.inOut" });
      }
      el.dataset.scrolled = y > 24 ? "true" : "false";
      last = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={barRef} className="fixed top-0 inset-x-0 z-50">
      <header
        data-scrolled="false"
        className="border-b border-concrete-line/70 bg-paper/85 backdrop-blur-md transition-[padding,box-shadow] duration-300
        [&[data-scrolled='true']]:shadow-[0_1px_0_0_var(--concrete-line)]"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.jpg"
              alt="Prospect Restauri"
              width={132}
              height={74}
              className="h-9 w-auto mix-blend-multiply"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-9">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="eyebrow text-[12px] text-ink-soft hover:text-brand transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/contatti"
            className="hidden md:inline-flex items-center gap-2 eyebrow text-[12px] border border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
          >
            Richiedi preventivo
          </Link>

          <button
            aria-label="Apri menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </button>
        </div>

        {open ? (
          <nav className="md:hidden border-t border-concrete-line/70 px-6 py-6 flex flex-col gap-5 bg-paper">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="eyebrow text-[13px] text-ink-soft"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="eyebrow text-[13px] border border-ink px-5 py-3 text-center"
            >
              Richiedi preventivo
            </Link>
          </nav>
        ) : null}
      </header>
    </div>
  );
}
