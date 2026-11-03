import { PHOTOS } from "./images";

export type Project = {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  surface: string;
  duration: string;
  cover: string;
  gallery: string[];
  excerpt: string;
  intro: string;
  obiettivo: string;
  intervento: string;
  risultato: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "loft-ex-magazzino-milano",
    title: "Loft in un ex magazzino",
    category: "Ristrutturazione completa",
    location: "Milano, zona Isola",
    year: "2025",
    surface: "132 m²",
    duration: "14 settimane",
    cover: PHOTOS.livingRoomFireplace,
    gallery: [PHOTOS.livingRoomFireplace, PHOTOS.blueprintArchive],
    excerpt:
      "Un ex magazzino tessile trasformato in loft abitativo su due livelli, mantenendo le altezze originali.",
    intro:
      "I proprietari hanno acquistato un magazzino dismesso degli anni '60 con l'obiettivo di ricavarne un'unica grande zona giorno e un soppalco notte, senza perdere l'altezza libera del capannone.",
    obiettivo:
      "Ricavare un loft luminoso su due livelli mantenendo intatta la struttura portante originale e le grandi vetrate a nastro.",
    intervento:
      "Rilievo laser dell'intero volume, consolidamento del solaio in acciaio esistente, nuovo soppalco in legno lamellare, impianti a vista con canalizzazioni disegnate su misura, pavimento in resina continua.",
    risultato:
      "Consegnato in 14 settimane, nel rispetto del preventivo iniziale. Il soppalco ha aggiunto 28 m² utili senza richiedere permessi strutturali aggiuntivi grazie al consolidamento preventivo.",
  },
  {
    slug: "restauro-cascina-brianza",
    title: "Restauro di una cascina di famiglia",
    category: "Restauro conservativo",
    location: "Brianza (MB)",
    year: "2024",
    surface: "210 m²",
    duration: "22 settimane",
    cover: PHOTOS.stoneVillage,
    gallery: [PHOTOS.stoneVillage, PHOTOS.blueprintArchive],
    excerpt:
      "Recupero conservativo di una cascina ottocentesca vincolata, con muri in pietra a vista e travature originali.",
    intro:
      "La cascina, appartenuta alla famiglia del committente da tre generazioni, versava in stato di abbandono da oltre vent'anni. L'intervento richiedeva l'autorizzazione della Sovrintendenza per ogni modifica alle facciate.",
    obiettivo:
      "Recuperare l'edificio come prima casa, conservando muri perimetrali in pietra, solai in legno e la corte interna originale.",
    intervento:
      "Consolidamento strutturale antisismico con tecniche reversibili, ripristino della muratura in pietra a vista con giunti a calce, restauro delle travature in castagno, nuovo impianto geotermico a bassa invasività.",
    risultato:
      "Nulla osta ottenuto senza rilievi in fase di collaudo. La cascina ha mantenuto la classificazione di bene di interesse storico pur raggiungendo una classe energetica B.",
  },
  {
    slug: "cucina-a-vista-torino",
    title: "Cucina a vista open space",
    category: "Bagno e cucina",
    location: "Torino, San Salvario",
    year: "2025",
    surface: "18 m² (cucina)",
    duration: "6 settimane",
    cover: PHOTOS.kitchenOak,
    gallery: [PHOTOS.kitchenOak, PHOTOS.livingRoomMinimal],
    excerpt:
      "Demolizione di un tramezzo per aprire la cucina sul soggiorno, con isola centrale in rovere naturale.",
    intro:
      "Un appartamento anni '80 con cucina chiusa e poco luminosa: la richiesta era un ambiente unico, luminoso, con isola per cucinare in compagnia.",
    obiettivo:
      "Trasformare cucina e soggiorno in un unico ambiente conviviale, senza intervenire su impianti già recenti.",
    intervento:
      "Demolizione tramezzo non portante, nuova cappa a scomparsa filo soffitto, isola su misura in rovere naturale con top in quarzo, illuminazione a binario orientabile.",
    risultato:
      "Cantiere chiuso in 6 settimane esatte come da cronoprogramma, con un solo giorno di fermo per l'allaccio della nuova cappa.",
  },
  {
    slug: "bagno-stile-spa-bergamo",
    title: "Bagno in stile spa",
    category: "Bagno e cucina",
    location: "Bergamo, città alta",
    year: "2024",
    surface: "11 m²",
    duration: "5 settimane",
    cover: PHOTOS.bathroomMarble,
    gallery: [PHOTOS.bathroomMarble],
    excerpt:
      "Trasformazione di un bagno cieco in una spa privata con doccia walk-in e rivestimenti in marmo e legno.",
    intro:
      "Il bagno padronale, privo di finestre e con impianti obsoleti, doveva diventare un piccolo spazio benessere quotidiano.",
    obiettivo:
      "Massimizzare la sensazione di ampiezza e luce artificiale in un ambiente cieco, con materiali naturali e caldi.",
    intervento:
      "Rifacimento completo di impianto idraulico ed elettrico, doccia walk-in senza piatto, rivestimenti in marmo book-matched, mobile lavabo sospeso in rovere, sistema di ventilazione meccanica controllata.",
    risultato:
      "Umidità interna sotto controllo tutto l'anno grazie alla VMC dedicata; zero interventi di manutenzione richiesti nei primi 18 mesi.",
  },
  {
    slug: "facciata-cappotto-brianza",
    title: "Facciata e cappotto termico",
    category: "Efficientamento energetico",
    location: "Brianza (MB)",
    year: "2025",
    surface: "680 m² (facciata)",
    duration: "10 settimane",
    cover: PHOTOS.facadeScaffold,
    gallery: [PHOTOS.facadeScaffold],
    excerpt:
      "Cappotto termico e ripristino della facciata su un condominio di 12 unità, con riqualificazione energetica in classe B.",
    intro:
      "L'assemblea condominiale ha approvato l'intervento dopo un audit energetico che classificava l'edificio in classe F, con dispersioni evidenti su tutti gli appartamenti perimetrali.",
    obiettivo:
      "Ridurre i consumi condominiali e ripristinare l'estetica della facciata, minimizzando il disagio per i residenti.",
    intervento:
      "Cappotto termico in EPS da 12 cm, sostituzione di tutti gli infissi comuni, ponteggio a fasi per mantenere l'accesso a ogni unità, tinteggiatura finale con colori concordati con il Comune.",
    risultato:
      "Salto di due classi energetiche (da F a B) e riduzione media stimata del 38% sui consumi di riscaldamento condominiale.",
  },
  {
    slug: "attico-minimale-torino",
    title: "Attico minimale con terrazzo",
    category: "Progettazione d'interni",
    location: "Torino, centro",
    year: "2025",
    surface: "96 m²",
    duration: "9 settimane",
    cover: PHOTOS.livingRoomMinimal,
    gallery: [PHOTOS.livingRoomMinimal, PHOTOS.kitchenOak],
    excerpt:
      "Progettazione d'interni per un attico con terrazzo panoramico: palette materica minimale e arredi su disegno.",
    intro:
      "La committente desiderava un progetto d'interni completo, dal layout distributivo al capitolato arredi, per un attico appena acquistato e ancora allo stato grezzo.",
    obiettivo:
      "Disegnare un layout fluido tra zona giorno e terrazzo, con una palette materica coerente in tutti gli ambienti.",
    intervento:
      "Progetto di layout e capitolato completo, pavimento in microcemento chiaro continuo interno-esterno, arredi su disegno per zona living e cucina, illuminazione scenografica a scomparsa.",
    risultato:
      "Progetto approvato al primo giro di revisioni; cantiere di arredo completato in 9 settimane, in parallelo alle finiture edili.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
