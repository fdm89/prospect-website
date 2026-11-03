import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-paper border-t border-charcoal-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="bg-paper px-3 py-2 inline-flex w-fit">
            <Image
              src="/logo.jpg"
              alt="Prospect Restauri"
              width={150}
              height={84}
              className="h-8 w-auto mix-blend-multiply"
            />
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 eyebrow text-[12px] text-[#B7B9BE]">
            <Link href="/chi-siamo" className="hover:text-brand transition-colors">Chi siamo</Link>
            <Link href="/servizi" className="hover:text-brand transition-colors">Servizi</Link>
            <Link href="/progetti" className="hover:text-brand transition-colors">Progetti</Link>
            <Link href="/contatti" className="hover:text-brand transition-colors">Contatti</Link>
          </nav>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal-line flex flex-col md:flex-row gap-4 md:items-center md:justify-between eyebrow text-[10px] text-[#8a8c91]">
          <p>© {new Date().getFullYear()} Prospect Restauri S.r.l. — P.IVA 00000000000</p>
          <p>Milano · Torino · Brianza</p>
        </div>
      </div>
    </footer>
  );
}
