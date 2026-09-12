export interface KeyFact {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface AccessStep {
  label: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface SiteContent {
  nav: {
    rustico: string;
    impressions: string;
    details: string;
    location: string;
    access: string;
    contact: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    quote: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scrollHint: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  keyFacts: {
    eyebrow: string;
    heading: string;
    facts: KeyFact[];
  };
  gallery: {
    eyebrow: string;
    heading: string;
    intro: string;
    categories: GalleryCategory[];
    emptyState: string;
    lightboxClose: string;
    lightboxPrev: string;
    lightboxNext: string;
    imageAlt: Record<string, string>;
    imageCounter: (current: number, total: number) => string;
  };
  rustico: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    features: string[];
  };
  outside: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
  };
  amenities: {
    eyebrow: string;
    heading: string;
    intro: string;
    items: string[];
  };
  location: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    mapLinkLabel: string;
    mapCaption: string;
  };
  access: {
    eyebrow: string;
    heading: string;
    intro: string;
    steps: AccessStep[];
    note: string;
    quote: string;
  };
  price: {
    eyebrow: string;
    heading: string;
    price: string;
    note: string;
  };
  contact: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    person: string;
    whatsappLabel: string;
    callLabel: string;
    availability: string;
  };
  footer: {
    tagline: string;
    rights: string;
    backToTop: string;
  };
}
