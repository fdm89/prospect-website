import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Progetti — Prospect Restauri",
  description:
    "Tutti i cantieri consegnati da Prospect Restauri: ristrutturazioni complete, restauri conservativi, bagni, cucine, facciate ed efficientamento energetico.",
};

export default function ProgettiPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Progetti"
          title="Cantieri consegnati, non solo render."
          description="Una selezione dei progetti seguiti da Prospect Restauri tra Milano, Torino e la Brianza. Filtra per categoria o apri un progetto per vedere obiettivo, intervento e risultato."
        />
        <ProjectsGrid />
        <div className="py-24" />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
