import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ServicesDetail from "@/components/ServicesDetail";
import Process from "@/components/Process";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servizi — Prospect Restauri",
  description:
    "Ristrutturazione completa, restauro conservativo, bagno e cucina, efficientamento energetico, progettazione d'interni, facciate ed esterni: tutti i servizi di Prospect Restauri.",
};

export default function ServiziPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Servizi"
          title="Sei discipline, un unico referente di cantiere."
          description="Dalla prima demolizione al collaudo finale, ogni servizio è seguito dallo stesso project manager: nessun rimpallo tra imprese diverse."
        />
        <ServicesDetail />
        <Process />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
