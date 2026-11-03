# Prospect Restauri — sito web

Sito multipagina per Prospect Restauri, realizzato con **Next.js 16 (App Router)**,
**Tailwind CSS v4** e animazioni **GSAP** (ScrollTrigger + Draggable).

## Avvio in locale

Richiede Node.js 18.18+ (consigliato 20 o superiore).

```bash
npm install
npm run dev
```

Apri http://localhost:3000

## Build di produzione

```bash
npm run build
npm run start
```

> Nota: al primo `npm run dev` / `npm run build` Next.js scarica i font
> Google (Space Grotesk, Inter, JetBrains Mono) da internet: serve una
> connessione attiva la prima volta.

## Pagine

| Pagina | Percorso | Descrizione |
|---|---|---|
| Home | `/` | Hero, servizi, metodo, prima/dopo, numeri, testimonianze |
| Chi siamo | `/chi-siamo` | Storia, timeline, valori, team |
| Servizi | `/servizi` | Le 6 discipline in dettaglio, con immagini e bullet |
| Progetti | `/progetti` | Galleria filtrabile per categoria |
| Dettaglio progetto | `/progetti/[slug]` | Obiettivo, intervento, risultato, gallery |
| Contatti | `/contatti` | Sedi, orari, form di richiesta preventivo |

## Struttura

```
src/
  app/
    layout.tsx            # font, metadata, wrapper HTML
    page.tsx                # home
    chi-siamo/page.tsx
    servizi/page.tsx
    progetti/page.tsx
    progetti/[slug]/page.tsx
    contatti/page.tsx
    globals.css              # design tokens (colori, tipografia)
  components/
    Header.tsx                 # nav fissa, routing verso le pagine
    Hero.tsx                     # headline animata + planimetria SVG
    Services.tsx                   # teaser 6 servizi (home)
    ServicesDetail.tsx               # servizi in dettaglio (pagina /servizi)
    Process.tsx                        # 4 fasi del metodo
    BeforeAfter.tsx                      # slider prima/dopo trascinabile
    ProjectsGrid.tsx                       # galleria progetti filtrabile
    ProjectDetail.tsx                        # dettaglio singolo progetto
    AboutSections.tsx                          # storia/timeline/valori/team
    ContactInfo.tsx                              # sedi e orari
    Contact.tsx                                    # form di contatto
    CtaBanner.tsx                                    # banner CTA riutilizzato
    Stats.tsx / Testimonials.tsx / Footer.tsx
    PageHero.tsx                                       # hero riutilizzabile pagine interne
    DimensionLine.tsx                                    # divisore "a quota tecnica"
  lib/
    gsap.ts                # registrazione plugin GSAP (client-side)
    images.ts                # URL builder immagini Unsplash
    projects.ts                # dati dei 6 progetti (contenuto demo)
public/
  logo.jpg                   # logo caricato dal cliente
```

## Immagini

Le foto di ambienti/cantieri usate nel sito provengono da **Unsplash**
(licenza gratuita, nessuna attribuzione obbligatoria) e sono referenziate
via URL in `src/lib/images.ts` — nessun file scaricato nel progetto.
Per sostituirle con foto reali dei vostri cantieri, basta aggiornare gli
ID in quel file o passare un URL diretto a `unsplash()`/`Image`.

## Personalizzazione rapida

- **Colori / font**: variabili in `src/app/globals.css` (`:root`) — il
  blu `--brand` è preso dal logo.
- **Progetti**: aggiungi/modifica voci in `src/lib/projects.ts` — la
  pagina `/progetti` e le pagine di dettaglio si generano automaticamente.
- **Testi**: ogni sezione ha i contenuti in cima al file component.
- **Contatti**: aggiorna telefono, email, indirizzi in `Contact.tsx` e
  `ContactInfo.tsx`.
- **Form**: attualmente mostra solo un messaggio di conferma lato client.
  Per riceverlo davvero, collega un endpoint (es. Resend, Formspree, o
  una API route in `src/app/api/`).
