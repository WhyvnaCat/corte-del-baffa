import type { SiteContent } from "./content.types";

export const de: SiteContent = {
  nav: {
    rustico: "Rustico",
    impressions: "Impressionen",
    details: "Details",
    location: "Lage",
    access: "Anreise",
    contact: "Kontakt",
  },
  hero: {
    kicker: "Monti di Lego · Ticino",
    title: "Corte del Baffa",
    subtitle: "Exklusives Liebhaber-Rustico",
    quote: "Ein Ort der Stille, fern von Stress und Hektik.",
    ctaPrimary: "Rustico entdecken",
    ctaSecondary: "Kontakt aufnehmen",
    scrollHint: "Scrollen",
  },
  intro: {
    eyebrow: "Willkommen",
    heading: "Hoch über dem Lago Maggiore",
    paragraphs: [
      "Wo der Wald sich lichtet und der Blick frei wird auf den See und die Berge, liegt Corte del Baffa – ein Rustico aus Stein und Holz, gebaut für ein einfaches, wahrhaftiges Leben.",
      "Kein Durchgangsverkehr, kein Lärm, kein Alltag, der sich aufdrängt. Nur der Wind in den Kastanien, das Licht auf dem Naturstein und die Weite eines Tals, das sich bis zum See hinunterzieht.",
      "Wer hierherkommt, kommt an. Corte del Baffa ist kein Feriendomizil unter vielen – es ist ein Ort, an den man zurückkehrt, weil er einen loslässt.",
    ],
  },
  keyFacts: {
    eyebrow: "Auf einen Blick",
    heading: "Das Wesentliche",
    facts: [
      { target: 80, suffix: " m²", label: "Wohnfläche" },
      { target: 800, suffix: " m²", label: "Grundstück" },
      { target: 1050, suffix: " m", label: "über Meer" },
      { target: 35, suffix: " Min.", label: "Waldweg" },
      { target: 400000, prefix: "CHF ", label: "Richtpreis" },
    ],
  },
  gallery: {
    eyebrow: "Impressionen",
    heading: "Ein Rustico, das man spürt",
    intro:
      "Fotos allein ersetzen keinen Besuch – aber sie zeigen, was Corte del Baffa besonders macht: Stein, Holz, Licht und eine Aussicht, die man nicht vergisst.",
    categories: [
      { id: "aussen", label: "Aussen" },
      { id: "innen", label: "Innen" },
      { id: "aussicht", label: "Aussicht" },
      { id: "garten", label: "Garten" },
      { id: "details", label: "Details" },
    ],
    emptyState: "Weitere Fotos zu dieser Kategorie folgen in Kürze.",
    lightboxClose: "Schliessen",
    lightboxPrev: "Vorheriges Bild",
    lightboxNext: "Nächstes Bild",
    imageAlt: {
      "exterior-main":
        "Steinfassade des Rustico Corte del Baffa mit Pergola und begrüntem Sitzplatz",
      "living-room": "Wohnbereich mit Blick durch grosse Fenster auf den Lago Maggiore",
      kitchen: "Praktische Forster-Küche in Rot mit Gasherd und Stauraum",
      "dining-stove": "Essbereich mit Schwedenofen und rustikalem Holztisch",
      bedroom: "Schlafzimmer mit Aussichtsfenster unter dem Dachgebälk",
      "kids-room": "Kinderzimmer mit Kajütenbett",
      panorama: "Panoramablick von der Terrasse über den Lago Maggiore und die Berge",
    },
    imageCounter: (current, total) => `Bild ${current} von ${total}`,
  },
  rustico: {
    eyebrow: "Das Rustico",
    heading: "Stein, Holz und ein warmer Kern",
    paragraphs: [
      "Corte del Baffa wurde behutsam renoviert – mit Respekt vor der ursprünglichen Bausubstanz. Die dicken Natursteinmauern speichern im Sommer die Kühle, im Winter sorgt der Schwedenofen für wohlige Wärme. Das Rustico ist wintertauglich und lässt sich damit das ganze Jahr über bewohnen.",
      "Im Erdgeschoss verbinden sich Wohnen, Kochen und Essen zu einem hellen, unaufgeregten Raum. Die praktische «Forster»-Küche ist zweckmässig ausgestattet: Herd, Backofen, Kühlschrank sowie ausreichend Stauraum für Vorräte und Geschirr. Photovoltaik in Kombination mit Gas sorgt für unkompliziertes, autarkes Wohnen.",
      "Eine Holztreppe führt in den ersten Stock zu einem Schlafzimmer mit Aussichtsfenster und einem Kinderzimmer mit Kajütenbett und eigenem Vorratsraum. Das neu renovierte WC mit Lavabo rundet die charmante, vollständig möblierte Ausstattung ab.",
    ],
    features: [
      "Charmant renoviert, mit Respekt vor der Bausubstanz",
      "Schwedenofen und wintertauglich",
      "Photovoltaik in Kombination mit Gas",
      "«Forster»-Küche mit Herd, Backofen, Kühlschrank",
      "Schlafzimmer mit Aussichtsfenster",
      "Kinderzimmer mit Kajütenbett und Vorratsraum",
      "Neu renoviertes WC mit Lavabo",
      "Vollständig möbliert",
    ],
  },
  outside: {
    eyebrow: "Draussen",
    heading: "Der Weg gehört zum Ort",
    paragraphs: [
      "Vor dem Haus öffnet sich eine grosse Terrasse mit Pergola – im Sommer beschattet vom Blätterdach der Reben, mit freiem Blick auf den Lago Maggiore und die Berge dahinter. Ein Blumengarten und ein kleiner Rasenplatz laden zum Verweilen ein, ganz ohne Eile.",
      "Ein separater Schopf mit eigenem Eingang (ca. 16 m²) bietet Platz für Rasenmäher, Werkzeuge und alles, was ein Grundstück dieser Grösse braucht. Sonnige Südlage, absolute Ruhe und ein Panorama, das sich mit jeder Jahreszeit verändert.",
    ],
  },
  amenities: {
    eyebrow: "Ausstattung",
    heading: "Alles, was ein Rückzugsort braucht",
    intro: "Reduziert auf das Wesentliche – und genau deshalb so stimmig.",
    items: [
      "Schwedenofen",
      "Photovoltaik",
      "Gasversorgung",
      "«Forster»-Küche",
      "Backofen",
      "Kühlschrank",
      "Schlafzimmer mit Aussicht",
      "Kinderzimmer mit Kajütenbett",
      "WC mit Lavabo (neu renoviert)",
      "Grosse Terrasse mit Pergola",
      "Blumengarten und Rasenplatz",
      "Schopf, ca. 16 m², mit Werkzeugen",
      "Vollständig möbliert",
      "Wintertauglich",
    ],
  },
  location: {
    eyebrow: "Lage",
    heading: "Monti di Lego, oberhalb Brione",
    paragraphs: [
      "Corte del Baffa liegt in den Monti di Lego, hoch über Brione TI im Verzascatal – auf rund 1'050 m ü. M., in sonniger Südlage mit freiem Blick auf den Lago Maggiore.",
      "Die Monti-Siedlungen des Tessins waren einst Sömmerungsplätze der Bauern aus dem Tal. Diese Geschichte spürt man bis heute: wenige Häuser, viel Wald, und eine Stille, die im Unterland längst selten geworden ist.",
    ],
    mapLinkLabel: "Auf Google Maps ansehen",
    mapCaption: "Ungefähre Lage der Monti di Lego oberhalb Brione (Verzasca), Tessin.",
  },
  access: {
    eyebrow: "Anreise",
    heading: "Der Weg gehört zum Ort",
    intro:
      "Corte del Baffa ist bewusst kein Objekt, zu dem man direkt vorfährt. Die Abgeschiedenheit ist Teil seines Charakters – und genau das macht diesen Ort so besonders.",
    steps: [
      { label: "Brione (Verzasca)" },
      { label: "Val Resa, oberhalb Brione" },
      { label: "Parkplatz" },
      { label: "ca. 35 Minuten Waldweg, ansteigend" },
      { label: "Corte del Baffa" },
    ],
    note:
      "Mit dem Auto oder Taxi geht es bis nach Val Resa oberhalb Brione. Von dort führt ein ansteigender Waldweg zu Fuss in rund 35 Minuten zum Rustico – vorbei an Kastanien, Farnen und der wachsenden Stille des Waldes.",
    quote: "Wer den Weg auf sich nimmt, kommt wirklich an.",
  },
  price: {
    eyebrow: "Preis",
    heading: "Richtpreis",
    price: "CHF 400'000",
    note: "Weitere Angaben und Besichtigungstermine auf Anfrage.",
  },
  contact: {
    eyebrow: "Kontakt",
    heading: "Interesse an Corte del Baffa?",
    paragraph:
      "Für Fragen, weitere Fotos oder einen Besichtigungstermin freue ich mich auf Ihre Nachricht.",
    person: "Markus Dätwyler",
    whatsappLabel: "WhatsApp schreiben",
    callLabel: "Anrufen",
    availability: "Besichtigung und weitere Informationen gerne auf Anfrage.",
  },
  footer: {
    tagline: "Ein Ort der Stille, fern von Stress und Hektik.",
    rights: "Alle Rechte vorbehalten.",
    backToTop: "Nach oben",
  },
};
