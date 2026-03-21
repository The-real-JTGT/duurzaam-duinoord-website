export const designMaster = {
  siteName: "Duurzaam Duinoord",
  siteMark: "Een buurt in bloei",
  tagline:
    "Een bewonersinitiatief dat historische charme koppelt aan praktische stappen voor een groene toekomst in Den Haag.",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/energie", label: "Energie" },
    { href: "/circulair", label: "Circulaire economie" },
    { href: "/mobiliteit", label: "Mobiliteit" },
    { href: "/leefomgeving", label: "Leefomgeving" },
  ],
  joinLink: {
    href: "mailto:info@duurzaamduinoord.nl?subject=Doe%20mee%20met%20Duurzaam%20Duinoord",
    label: "Doe mee",
  },
  footerLinks: [
    { href: "/", label: "Over ons" },
    { href: "mailto:info@duurzaamduinoord.nl", label: "Contact" },
    { href: "/energie", label: "Projecten" },
    { href: "/edit/home", label: "Bewerken" },
  ],
  buttons: {
    primary: "dd-button dd-button--primary",
    secondary: "dd-button dd-button--secondary",
    ghost: "dd-button dd-button--ghost",
    quiet: "dd-button dd-button--quiet",
  },
  panels: {
    paper: "dd-panel dd-panel--paper",
    moss: "dd-panel dd-panel--moss",
    glass: "dd-panel dd-panel--glass",
    ink: "dd-panel dd-panel--ink",
  },
  notes: {
    terracotta: "dd-note dd-note--terracotta",
    moss: "dd-note dd-note--moss",
  },
  imageShapes: {
    organic: "dd-frame dd-frame--organic",
    arch: "dd-frame dd-frame--arch",
    rounded: "dd-frame dd-frame--rounded",
  },
  featureCardVariants: {
    terracotta: {
      label: "Terracotta",
      cardClassName: "dd-card dd-card--terracotta dd-card--shape-shell",
      iconClassName: "dd-card__icon dd-card__icon--terracotta",
    },
    moss: {
      label: "Moss",
      cardClassName: "dd-card dd-card--moss dd-card--shape-leaf",
      iconClassName: "dd-card__icon dd-card__icon--moss",
    },
    paper: {
      label: "Paper",
      cardClassName: "dd-card dd-card--paper dd-card--shape-soft",
      iconClassName: "dd-card__icon dd-card__icon--paper",
    },
    ink: {
      label: "Ink",
      cardClassName: "dd-card dd-card--ink dd-card--shape-ink",
      iconClassName: "dd-card__icon dd-card__icon--ink",
    },
  },
  listVariants: {
    paper: "dd-panel dd-panel--paper",
    moss: "dd-panel dd-panel--moss",
    ink: "dd-panel dd-panel--ink",
  },
  ctaVariants: {
    terracotta: "dd-panel dd-panel--paper dd-cta-shell",
    moss: "dd-panel dd-panel--glass dd-cta-shell",
    paper: "dd-panel dd-panel--paper dd-cta-shell",
  },
} as const;

export type FeatureCardTone = keyof typeof designMaster.featureCardVariants;
export type PanelTone = keyof typeof designMaster.panels;
export type NoteTone = keyof typeof designMaster.notes;
export type ListTone = keyof typeof designMaster.listVariants;
export type CtaTone = keyof typeof designMaster.ctaVariants;
export type ImageShape = keyof typeof designMaster.imageShapes;

export function getFeatureCardVariant(tone?: string) {
  return (
    designMaster.featureCardVariants[(tone as FeatureCardTone) || "paper"] ??
    designMaster.featureCardVariants.paper
  );
}

export function getPanelClass(tone?: string) {
  return (
    designMaster.panels[(tone as PanelTone) || "paper"] ??
    designMaster.panels.paper
  );
}

export function getNoteClass(tone?: string) {
  return (
    designMaster.notes[(tone as NoteTone) || "terracotta"] ??
    designMaster.notes.terracotta
  );
}

export function getListClass(tone?: string) {
  return (
    designMaster.listVariants[(tone as ListTone) || "paper"] ??
    designMaster.listVariants.paper
  );
}

export function getCtaClass(tone?: string) {
  return (
    designMaster.ctaVariants[(tone as CtaTone) || "terracotta"] ??
    designMaster.ctaVariants.terracotta
  );
}

export function getImageShapeClass(shape?: string) {
  return (
    designMaster.imageShapes[(shape as ImageShape) || "organic"] ??
    designMaster.imageShapes.organic
  );
}
