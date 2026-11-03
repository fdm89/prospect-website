import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHero from "@/components/PageHero";
import ContactInfo from "@/components/ContactInfo";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contatti — Prospect Restauri",
  description:
    "Richiedi un sopralluogo gratuito a Prospect Restauri. Sedi a Milano, Torino e in Brianza, risposta entro 24 ore lavorative.",
};

export default function ContattiPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PageHero
          eyebrow="Contatti"
          title="Raccontaci il tuo progetto."
          description="Compila il modulo o scrivici direttamente: rispondiamo entro 24 ore lavorative con una prima disponibilità per il sopralluogo."
        />
        <ContactInfo />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
