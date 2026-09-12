import type { SiteContent } from "./content.types";

export const it: SiteContent = {
  nav: {
    rustico: "Rustico",
    impressions: "Immagini",
    details: "Dettagli",
    location: "Posizione",
    access: "Accesso",
    contact: "Contatto",
  },
  hero: {
    kicker: "Monti di Lego · Ticino",
    title: "Corte del Baffa",
    subtitle: "Esclusivo rustico per intenditori",
    quote: "Un luogo di quiete, lontano dallo stress e dalla frenesia.",
    ctaPrimary: "Scopri il rustico",
    ctaSecondary: "Contattaci",
    scrollHint: "Scorri",
  },
  intro: {
    eyebrow: "Benvenuti",
    heading: "In alto sopra il Lago Maggiore",
    paragraphs: [
      "Dove il bosco si apre e lo sguardo spazia libero sul lago e sulle montagne, sorge Corte del Baffa – un rustico in pietra e legno, costruito per una vita semplice e autentica.",
      "Nessun traffico di passaggio, nessun rumore, nessuna quotidianità che si impone. Solo il vento tra i castagni, la luce sulla pietra naturale e l'ampiezza di una valle che scende fino al lago.",
      "Chi arriva qui, arriva davvero. Corte del Baffa non è una residenza di vacanza come tante – è un luogo a cui si ritorna, perché sa lasciar andare.",
    ],
  },
  keyFacts: {
    eyebrow: "In breve",
    heading: "L'essenziale",
    facts: [
      { target: 80, suffix: " m²", label: "Superficie abitativa" },
      { target: 800, suffix: " m²", label: "Terreno" },
      { target: 1050, suffix: " m", label: "sul livello del mare" },
      { target: 35, suffix: " min", label: "sentiero nel bosco" },
      { target: 400000, prefix: "CHF ", label: "Prezzo indicativo" },
    ],
  },
  gallery: {
    eyebrow: "Immagini",
    heading: "Un rustico che si percepisce",
    intro:
      "Le foto da sole non sostituiscono una visita – ma mostrano ciò che rende speciale Corte del Baffa: pietra, legno, luce e una vista che non si dimentica.",
    categories: [
      { id: "aussen", label: "Esterno" },
      { id: "innen", label: "Interno" },
      { id: "aussicht", label: "Vista" },
      { id: "garten", label: "Giardino" },
      { id: "details", label: "Dettagli" },
    ],
    emptyState: "Altre foto per questa categoria seguiranno a breve.",
    lightboxClose: "Chiudi",
    lightboxPrev: "Immagine precedente",
    lightboxNext: "Immagine successiva",
    imageAlt: {
      "exterior-main":
        "Facciata in pietra del rustico Corte del Baffa con pergola e area esterna verdeggiante",
      "living-room": "Soggiorno con vista attraverso ampie finestre sul Lago Maggiore",
      kitchen: "Pratica cucina «Forster» in rosso con piano cottura a gas e spazio contenitivo",
      "dining-stove": "Zona pranzo con stufa svedese e tavolo rustico in legno",
      bedroom: "Camera da letto con finestra panoramica sotto le travi del tetto",
      "kids-room": "Cameretta con letto a castello",
      panorama: "Vista panoramica dalla terrazza sul Lago Maggiore e sulle montagne",
    },
    imageCounter: (current, total) => `Immagine ${current} di ${total}`,
  },
  rustico: {
    eyebrow: "Il rustico",
    heading: "Pietra, legno e un cuore caldo",
    paragraphs: [
      "Corte del Baffa è stato ristrutturato con cura, nel rispetto della sostanza edilizia originale. I muri spessi in pietra naturale conservano il fresco d'estate, mentre d'inverno la stufa svedese garantisce un tepore avvolgente. Il rustico è adatto anche all'inverno e può quindi essere abitato tutto l'anno.",
      "Al piano terra, soggiorno, cucina e zona pranzo si fondono in uno spazio luminoso e sobrio. La pratica cucina «Forster» è dotata di tutto il necessario: piano cottura, forno, frigorifero e ampio spazio per provviste e stoviglie. Il fotovoltaico abbinato al gas garantisce una vita autonoma e senza complicazioni.",
      "Una scala in legno conduce al primo piano, a una camera da letto con finestra panoramica e a una cameretta con letto a castello e un proprio ripostiglio. Il WC con lavabo, di recente rinnovato, completa l'arredamento completo e pieno di fascino.",
    ],
    features: [
      "Ristrutturato con cura, nel rispetto della sostanza edilizia",
      "Stufa svedese e adatto all'inverno",
      "Fotovoltaico abbinato al gas",
      "Cucina «Forster» con piano cottura, forno, frigorifero",
      "Camera da letto con finestra panoramica",
      "Cameretta con letto a castello e ripostiglio",
      "WC con lavabo, di recente rinnovato",
      "Completamente arredato",
    ],
  },
  outside: {
    eyebrow: "All'aperto",
    heading: "Il sentiero fa parte del luogo",
    paragraphs: [
      "Davanti alla casa si apre una grande terrazza con pergola – ombreggiata d'estate dal fogliame della vite, con vista libera sul Lago Maggiore e sulle montagne circostanti. Un giardino fiorito e un piccolo prato invitano a fermarsi, senza fretta.",
      "Un capanno separato con ingresso proprio (ca. 16 m²) offre spazio per tosaerba, attrezzi e tutto ciò che serve per un terreno di queste dimensioni. Posizione soleggiata a sud, quiete assoluta e un panorama che cambia con ogni stagione.",
    ],
  },
  amenities: {
    eyebrow: "Dotazioni",
    heading: "Tutto ciò che serve a un rifugio",
    intro: "Ridotto all'essenziale – e proprio per questo così armonioso.",
    items: [
      "Stufa svedese",
      "Fotovoltaico",
      "Allacciamento al gas",
      "Cucina «Forster»",
      "Forno",
      "Frigorifero",
      "Camera da letto con vista",
      "Cameretta con letto a castello",
      "WC con lavabo (di recente rinnovato)",
      "Grande terrazza con pergola",
      "Giardino fiorito e prato",
      "Capanno, ca. 16 m², con attrezzi",
      "Completamente arredato",
      "Adatto all'inverno",
    ],
  },
  location: {
    eyebrow: "Posizione",
    heading: "Monti di Lego, sopra Brione",
    paragraphs: [
      "Corte del Baffa si trova nei Monti di Lego, in alto sopra Brione TI in Val Verzasca – a circa 1'050 m s.l.m., in soleggiata posizione a sud con vista libera sul Lago Maggiore.",
      "I monti ticinesi erano un tempo gli alpeggi estivi dei contadini della valle. Questa storia si percepisce ancora oggi: poche case, molto bosco e una quiete ormai rara nel Piano.",
    ],
    mapLinkLabel: "Visualizza su Google Maps",
    mapCaption: "Posizione approssimativa dei Monti di Lego, sopra Brione (Verzasca), Ticino.",
  },
  access: {
    eyebrow: "Accesso",
    heading: "Il sentiero fa parte del luogo",
    intro:
      "Corte del Baffa non è volutamente un immobile a cui si arriva direttamente in auto. L'isolamento fa parte del suo carattere – ed è proprio ciò che rende questo luogo così speciale.",
    steps: [
      { label: "Brione (Verzasca)" },
      { label: "Val Resa, sopra Brione" },
      { label: "Parcheggio" },
      { label: "ca. 35 minuti di sentiero nel bosco, in salita" },
      { label: "Corte del Baffa" },
    ],
    note:
      "In auto o in taxi si raggiunge Val Resa, sopra Brione. Da lì, un sentiero boschivo in salita conduce a piedi in circa 35 minuti al rustico – tra castagni, felci e la quiete crescente del bosco.",
    quote: "Chi affronta il cammino, arriva davvero.",
  },
  price: {
    eyebrow: "Prezzo",
    heading: "Prezzo indicativo",
    price: "CHF 400'000",
    note: "Ulteriori informazioni e appuntamenti per visite su richiesta.",
  },
  contact: {
    eyebrow: "Contatto",
    heading: "Interessati a Corte del Baffa?",
    paragraph:
      "Per domande, ulteriori fotografie o un appuntamento per una visita, sarò lieto di ricevere un vostro messaggio.",
    person: "Markus Dätwyler",
    whatsappLabel: "Scrivi su WhatsApp",
    callLabel: "Chiama",
    availability: "Visite e ulteriori informazioni volentieri su richiesta.",
  },
  footer: {
    tagline: "Un luogo di quiete, lontano dallo stress e dalla frenesia.",
    rights: "Tutti i diritti riservati.",
    backToTop: "Torna su",
  },
};
