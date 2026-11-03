import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import AboutSections from "@/components/AboutSections";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Chi siamo — Prospect Restauri",
  description:
    "Prospect Restauri: studio tecnico e impresa di ristrutturazione a Milano dal 2011. Scopri il team, il metodo e i valori dietro ogni cantiere.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Chi siamo"
          title="Un team tecnico che segue ogni cantiere come fosse il proprio."
          description="Dal 2011 progettiamo e realizziamo ristrutturazioni e restauri tra Milano, Torino e la Brianza, con un unico metodo di lavoro dal primo sopralluogo alla consegna."
        />
        <AboutSections />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
